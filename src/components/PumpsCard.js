// components/PumpCard.jsx
import React from 'react';

export default function PumpCard({ namePumps, time, label }) {
  return (
    <div className="shadow-custom-soft flex justify-between items-center w-[600px] px-[24px] py-[18px] rounded-xl">
      <div className="flex flex-col">
        <div className="text-[20px]">{namePumps}</div>
        <div className="font-light text-[#777777]">Running for {time}</div>
      </div>
      
      {/* status */}
      <div
        className={`font-semibold text-[20px] ${
          label === 'Active' ? 'text-[#40ff99]' : 'text-[#cfcfcf]'
        }`}
      >
        {label}
      </div>
    </div>
  );
}
