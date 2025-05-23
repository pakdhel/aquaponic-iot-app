'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const {login} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(email, password);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[320px] sm:w-[500px] rounded-xl bg-white p-6 sm:p-8 text-black">
      
        <p className="text-center text-2xl font-bold">Aquaponic Monitor</p>
        <form className="mt-6" onSubmit={handleLogin}>
          
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
          
          <div className="mt-4 text-sm">
            <label htmlFor="password" className="block text-gray-400 mb-1">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              name="password"
              id="password"
              className="w-full rounded-md border p-3 text-black outline-none focus:border-purple-300"
            />
            <div className="flex justify-end text-xs text-gray-400 mt-2 mb-3">
              <a href="/forgot-password" className="hover:underline hover:text-purple-300">Forgot Password ?</a>
            </div>
          </div>

          <button type="submit" className="w-full bg-black cursor-pointer hover:bg-gray-800  text-white py-3 rounded-md font-semibold">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
