import React from "react";


const menuItems = [
  { label: "Students", icon: "Students.png" },
  { label: "Teachers", icon: "Teachers.png" },
  { label: "Other Staff", icon: "Other Staff.png" },
  { label: "Finance", icon: "Finance.png" },
  { label: "Events", icon: "Events.png" },
  { label: "Chat", icon: "Chat.png", badge: 15 },
  { label: "Reports", icon: "chart-square-bar.png" },
  { label: "Settings", icon: "cog.png" },
  { label: "Logout", icon: "Logout.png" },
];


const Icon = ({ src }) => (
  <div
    className="w-[18px] h-[18px] bg-contain bg-no-repeat"
    style={{
      backgroundColor: "#FAFAFA",
      backgroundImage: `url(${src})`,
    }}
  />
);




const MenuItem = ({ label, icon, badge }) => (
  <div className="flex items-center justify-between px-[41px] py-[10px]">
    <div className="flex items-center gap-[12px]">
      <Icon src={icon} />
      <span className="text-[13px] font-medium text-[#3f3f46]">
        {label}
      </span>
    </div>

    {badge && (
      <div className="bg-[#6b8aeb] text-white text-[11px] font-bold px-[6px] py-[2px] rounded-full">
        {badge}
      </div>
    )}
  </div>
);

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="w-[280px] h-full bg-[#fafafa] absolute top-0 left-[281px]">

        
        <div className="mt-[45px] ml-[41px] w-[212px] bg-[#4f46e5] text-white text-[13px] font-bold flex items-center justify-center gap-[10px] px-[16px] py-[10px] rounded-[10px]">
          <Icon src="ZPfiXB7B6R.png" />
          Connect New Account
        </div>

        
        <p className="mt-[18px] ml-[43px] text-[11px] text-[#a1a1aa] uppercase tracking-[1px]">
          Main Menu
        </p>

        
        <div className="mt-[10px]">
          {menuItems.map((item, i) => (
            <MenuItem key={i} {...item} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <p className="w-[233px] text-center text-[15px] text-[#71717a] absolute top-[813px] left-[307px]">
        © 2024 All rights reserved Design by Sagal Aly.
      </p>
    </div>
  );
}