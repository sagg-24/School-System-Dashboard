import React from "react";

const Icon = ({ src, width, height, className = "" }) => (
  <div
    className={`bg-no-repeat bg-cover ${className}`}
    style={{ width, height, backgroundImage: `url(${src})` }}
  />
);

export default function Navbar() {
  return (
    <div className="w-full h-[72px] bg-white shadow-sm flex items-center justify-between px-10">
      <div className="flex items-center gap-4">
        <Icon src="/images/LOGO.svg" width="18px" height="18px" />
        <span className="text-[#a1a1aa] text-[12px] font-medium">
          Type to search
        </span>
      </div>

      <div className="flex items-center gap-4 relative">
        <Icon src="/Icons/Mail.png" width="43px" height="39.692px" />
        <span className="absolute top-1 left-[-10px] text-white text-[11px] font-bold">2</span>
        <Icon src="/Icons/Bell(1).png" width="16px" height="16px" />
        <Icon src="/Icons/Profile.png" width="23px" height="23px" />
      </div>


      <div className="flex items-center gap-2">
        <span className="text-[#4f46e5] font-bold text-[20px]">OTT</span>
        <span className="text-[#161717] font-bold text-[20px]">SCHOOL</span>
      </div>
    </div>
  );
}