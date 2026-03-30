export default function FinanceChart() {
  return (
    <div className="w-[859px] h-[328px] bg-white rounded-[10px] border border-[#e4e4e7] absolute top-[198px] left-[588px]">
      
      <div className="flex justify-between items-center px-6 pt-4">
        <h2 className="text-[16px] font-bold">Finance Report</h2>

        <button className="border px-3 py-1 text-[11px] font-bold rounded">
          Export PDF
        </button>
      </div>

      
      <div className="w-full h-[226px] mt-4 bg-[url('/images/teacher.png')] bg-cover" /> 
    </div>
  );
}