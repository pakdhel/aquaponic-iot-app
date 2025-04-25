'use client'

import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import PumpCard from "@/components/PumpsCard";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, rtdb } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { onValue, ref } from "firebase/database";

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const router = useRouter();
    const [sensors, setSensors] = useState({});
    const [pumps, setPumps] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) setUser(user);
            else router.push('/');
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const dataRef = ref(rtdb);
        const unsubscribe = onValue(dataRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setSensors(data.sensors || {});
                setPumps(data.pumps || {});
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const activePumpCount = Object.values(pumps).filter(pump => pump.isActive).length;


    return (
        <>
            
            <Navbar />

            <div className="px-[84px] py-[42px]">

                <div className="flex gap-12 justify-between mb-8">

                    <Card loading={loading} things="Temperature" value={`${sensors.temperature}°C`} desc="Normal Range: 20-30°C" icon="fluent:temperature-16-filled" />
                    <Card loading={loading} things="PPM Level" value={sensors.tds} desc="Optimal Range: 1000-1200" icon="ion:water" />
                    <Card loading={loading} things="pH" value={sensors.pH} desc="Optimal Range: 6.8-7.1" icon="lets-icons:flask-alt" />
                    <Card loading={loading} things="Active Pumps" value={`${activePumpCount}/${Object.keys(pumps).length}`}  desc="Running normally" icon="material-symbols:water-pump-outline-rounded" />
                </div>

                <div className="shadow-custom-soft p-4 rounded-xl space-y-5 flex flex-col justify-center items-center">
                    <div className="text-[20px]">Pumps Status</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        

                        {
                            loading ? Array.from({ length: 4}).map((_, idx) => (
                                <PumpCard key={idx} loading={true} />
                            )) :
                        
                        
                            Object.entries(pumps).map(([key, pump]) => {
                                const now = Date.now() / 1000; // detik
                                const start = pump.startTime || 0;
                                const duration = start > 0 ? now - start : 0;
                                const hours = Math.floor(duration / 3600);
                                const minutes = Math.floor((duration % 3600) / 60);
                                const timeLabel = start > 0 ? `${hours}h ${minutes}m` : '—';

                                return (
                                    <PumpCard
                                        key={key}
                                        namePumps={key}
                                        time={timeLabel}
                                        label={pump.isActive ? 'Active' : 'Inactive'}
                                    />
                                );
                            })
                        }
                    </div>
                </div>

            </div>
        </>
    );
}