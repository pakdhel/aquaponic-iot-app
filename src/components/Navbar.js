"use client"
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const {user, logout} = useAuth();

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const router = useRouter();

  const handleLogout = async() => {
    await logout();
  }

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
        <div className="flex items-center gap-[18px]">
          <span className="text-[18px] sm:text-[20px] font-normal">Aquaponic Monitor</span>
        </div>

        <div
          className="flex items-center space-x-2  text-black  py-3 rounded-md cursor-pointer"
          onClick={toggleSidebar}
        >
          {user && 
            
            <span className="hidden sm:block text-[14px]">Halo, {user.email}</span>
          
          }
          
          <Icon color="gray" icon="carbon:user-avatar-filled" width="32" height="32" />
        </div>
      </nav>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-500/40 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-lg z-50 p-4 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">User Panel</h2>
          <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-800">
            &times;
          </button>
        </div>

        <ul className="space-y-4">
          <li><a href="#" className="hover:underline">Profil</a></li>
          <li><a href="#" className="hover:underline">Pengaturan</a></li>
          <button onClick={handleLogout} className="hover:underline text-left w-full">Logout</button>
        </ul>
      </div>
    </>
  );
}
