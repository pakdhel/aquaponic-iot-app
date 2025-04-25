'use client'

import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function ForgotPassword() {

    const [email, setEmail] = useState('');
    const {forgotPassword} = useAuth();
    const router = useRouter();

    const handleForgotPassowrd = async (e) => {
        e.preventDefault();
        
        await forgotPassword(email);
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="w-[320px] sm:w-[500px] rounded-xl bg-white p-8 shadow-custom-soft text-black">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col items-center gap-1.5">
                        <Icon icon="fa6-solid:lock" width="32" color="gray" />
                        <div className="font-medium text-xl text-[#4E4E4E]">Forgot Password</div>
                    </div>
                    <div className="text-[14px] text-center">
                        Masukkan alamat email Anda dan kami akan mengirimkan petunjuk untuk mengatur ulang kata sandi Anda.
                    </div>
                </div>
                <div>
                    <form className="flex flex-col gap-3.5" onSubmit={handleForgotPassowrd}>
                        <div className="mt-1 text-sm">
                            <label htmlFor="email" className="block text-gray-400 mb-1">Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="text"
                                name="email"
                                id="email"
                                className="w-full rounded-md border  p-3 text-black outline-none focus:border-purple-300"
                            />

                        </div>

                        <Button className="cursor-pointer">Kirim Email Reset Password</Button>
                    </form>
                </div>
                <div className="flex items-center justify-center mt-4"> 
                    <Button className="cursor-pointer" variant="outline" onClick={() => {router.push('/')}}>
                        <ArrowLeft />
                        Back to Login
                    </Button>
                </div>
            </div>
        </div>
    );
}