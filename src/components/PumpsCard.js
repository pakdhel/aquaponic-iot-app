// components/PumpCard.jsx
import React from 'react';
import { Skeleton } from './ui/skeleton';

export default function PumpCard({ namePumps, time, label, loading = false }) {
  return (
    <div className="shadow-custom-soft flex justify-between items-center w-[600px] px-[24px] py-[18px] rounded-xl">
      <div className="flex flex-col">
        <div className="text-[20px]">{loading ? <Skeleton className="h-[24px] w-[120px] bg-gray-200 mb-2" /> : namePumps}</div>
        <div className="font-light text-[#777777]"> {loading ? <Skeleton className="h-[16px] w-[180px] bg-gray-100" /> : `Running for ${time}`} </div>
      </div>
      
      {/* status */}
      {/* <div
        className={`font-semibold text-[20px] ${
          label === 'Active' ? 'text-[#40ff99]' : 'text-[#cfcfcf]'
        }`}
      >
        {label}
      </div> */}

      {/* Right side - Status */}
      <div className="text-[20px] font-semibold min-w-[100px] text-right">
        {loading ? (
          <Skeleton className="h-[24px] w-[80px] bg-gray-100" />
        ) : (
          <span className={label === 'Active' ? 'text-[#40ff99]' : 'text-[#cfcfcf]'}>
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
