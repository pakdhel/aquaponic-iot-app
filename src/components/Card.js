// components/Card.jsx
import React from "react";
import { Icon } from "@iconify/react";
import { Skeleton } from "./ui/skeleton";

export default function Card({ things, value, desc, icon, loading = false }) {
  return (
    <div className="flex lg:w-[280px] w-full shadow-custom-soft bg-white rounded-xl p-[18px] justify-between">
      <div className="flex flex-col gap-[24px]">
        <div className="font-light text-[12px] sm:text-[16px]">{ loading ? <Skeleton className="w-[100px] h-[20px] bg-gray-200" /> : things}</div>
        <div>
          <div className="text-[24px] sm:text-[32px]">{loading ? <Skeleton className="w-[80px] h-[40px] bg-gray-200 mb-2" /> : value}</div>
          <div className="font-light text-[8px] sm:text-[12px] text-[#777777]">{loading ? <Skeleton className="w-[120px] h-[12px] bg-gray-100" /> : desc}</div>
        </div>
      </div>

      {loading ? (<Skeleton className="w-[24px] h-[24px] rounded-full bg-gray-200"/>) : (<Icon icon={icon} className="w-4 sm:w-5 md:w-7 md:h-7" />)}      
    </div>
  );
}
