// components/Card.jsx
import React from "react";
import { Icon } from "@iconify/react";

export default function Card({ things, value, desc, icon }) {
  return (
    <div className="flex w-[280px] shadow-custom-soft bg-white rounded-xl p-[18px] justify-between">
      <div className="flex flex-col gap-[24px]">
        <div className="font-light text-[16px]">{things}</div>
        <div>
          <div className="text-[32px]">{value}</div>
          <div className="font-light text-[12px] text-[#777777]">{desc}</div>
        </div>
      </div>

      {/* icon */}
      {icon && (
        <Icon icon={icon} width="24" height="24" />
      )}
    </div>
  );
}
