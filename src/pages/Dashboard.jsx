import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import ProfileCard from "../components/ProfileCard";
import FinanceChart from "../components/FinanceChart";
import AttendanceChart from "../components/AttendanceChart";
import TopStudents from "../components/TopStudents";

export default function Dashboard() {
  return (
    <div className="w-[1512px] h-[1070px] bg-white relative mx-auto">

      <Navbar />
      <Sidebar />

    
      <div className="absolute top-[20px] left-[588px] flex gap-2">
        <span className="font-bold">Hey Principal -</span>
        <span className="text-[#71717a]">
          here’s what’s happening today
        </span>
      </div>

      
      <StatCard title="Students" value="15760" change="+36%" position="top-[93px] left-[588px]" />
      <StatCard title="Teachers" value="408" change="+6%" position="top-[93px] left-[805px]" />

      
      <ProfileCard />
      <FinanceChart />
      <AttendanceChart />
      <TopStudents />
      <StatCard />

    </div>
  );
}