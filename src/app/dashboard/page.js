import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import PumpCard from "@/components/PumpsCard";

export default function Dashboard() {
    return (
        <>
            
            <Navbar />

            <div className="px-[84px] py-[42px]">

                <div className="flex gap-12 justify-between mb-8">

                    <Card things="Temperature" value="27.05°C" desc="Normal Range: 20-30°C" icon="fluent:temperature-16-filled" />
                    <Card things="Temperature" value="27.05°C" desc="Normal Range: 20-30°C" icon="fluent:temperature-16-filled" />
                    <Card things="Temperature" value="27.05°C" desc="Normal Range: 20-30°C" icon="fluent:temperature-16-filled" />
                    <Card things="Temperature" value="27.05°C" desc="Normal Range: 20-30°C" icon="fluent:temperature-16-filled" />
                </div>

                <div className="shadow-custom-soft p-4 rounded-xl space-y-5 flex flex-col justify-center items-center">
                    <div className="text-[20px]">Pumps Status</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <PumpCard namePumps="MainPump" time="12h 0m" label="Active"/>
                        <PumpCard namePumps="MainPump" time="12h 0m" label="Active"/>
                        <PumpCard namePumps="MainPump" time="12h 0m" label="Active"/>
                        <PumpCard namePumps="MainPump" time="12h 0m" label="Active"/>
                    </div>
                </div>

            </div>
        </>
    );
}