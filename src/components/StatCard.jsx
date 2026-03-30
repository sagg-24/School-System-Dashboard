export default function StatCard({ title, value, change, position }) {
  return (
    <div className={`w-[208px] h-[91px] bg-white rounded-[10px] border absolute ${position}`}>
      <span className="block mt-[15px] ml-[10px] text-[11px] uppercase text-[#71717a]">
        {title}
      </span>

      <div className="flex justify-between px-[10px] mt-[12px]">
        <span className="text-[21px] font-bold">{value}</span>
        {change && <span className="text-green-500">{change}</span>}
      </div>
    </div>
  );
}