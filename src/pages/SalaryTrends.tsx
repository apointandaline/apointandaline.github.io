import { NYCSalaryChart } from "@/components/NYCSalaryChart";

const SalaryTrends = () => {
  return (
    <div className="min-h-screen bg-[#F6F7F9]">
      <main className="container max-w-6xl py-16 md:py-24">
        <NYCSalaryChart />
      </main>
    </div>
  );
};

export default SalaryTrends;
