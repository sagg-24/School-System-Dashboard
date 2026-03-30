export default function ProfileCard() {
  return (
    <div className="w-[284px] h-[295px] bg-white rounded-[10px] border border-[#e4e4e7] absolute top-[93px] left-[1467px] shadow-[0_6px_9px_rgba(185,185,185,0.15)]">
      
      <div className="w-[105px] h-[105px] bg-[url('/images/Principal.png')] bg-cover mx-auto mt-[40px]" />

      <h3 className="text-center mt-[15px] text-[18px] font-medium text-[#0a0a0a]">
        Food Cade
      </h3>

      <p className="text-center text-[14px] text-[#b4b4b4] mt-[6px]">
        Principal
      </p>

      <button className="mt-[20px] mx-auto block px-6 py-2 bg-[#4f46e5] text-white text-[13px] font-semibold rounded-full">
        See Profile
      </button>
    </div>
  );
}