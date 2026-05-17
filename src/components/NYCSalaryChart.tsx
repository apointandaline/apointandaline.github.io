import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

type Row = {
  year: string;
  yearLabel: string;
  median: number;
  average: number;
};

const data: Row[] = [
  { year: "2023", yearLabel: "2023", median: 70_300, average: 108_500 },
  { year: "2024", yearLabel: "2024", median: 73_400, average: 114_200 },
  { year: "2025E", yearLabel: "2025E", median: 76_500, average: 120_400 },
  { year: "2026E", yearLabel: "2026E", median: 79_700, average: 126_700 },
];

const COLOR_MEDIAN = "#7CB1D9";
const COLOR_AVERAGE = "#0F2C5A";
const COLOR_GRID = "#E6E8EC";
const COLOR_AXIS = "#64748B";
const COLOR_LABEL = "#0F2C5A";

const formatDollars = (value: number) => `$${Math.round(value / 1000)}K`;

const medianGrowth =
  ((data[data.length - 1].median - data[0].median) / data[0].median) * 100;
const averageGrowth =
  ((data[data.length - 1].average - data[0].average) / data[0].average) * 100;

const renderYearTick = ({
  x,
  y,
  payload,
}: {
  x: number;
  y: number;
  payload: { value: string };
}) => {
  const row = data.find((d) => d.year === payload.value);
  const gap = row ? ((row.average - row.median) / row.median) * 100 : 0;
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        textAnchor="middle"
        y={18}
        fill="#1F2A44"
        fontSize={13}
        fontWeight={600}
        fontFamily="Inter, system-ui, sans-serif"
      >
        {payload.value}
      </text>
      <text
        textAnchor="middle"
        y={36}
        fill={COLOR_AXIS}
        fontSize={11}
        fontFamily="Inter, system-ui, sans-serif"
      >
        Avg +{gap.toFixed(0)}%
      </text>
    </g>
  );
};

export const NYCSalaryChart = () => {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-elegant p-6 md:p-10">
      <header className="mb-6 md:mb-8 max-w-3xl">
        <p className="text-[11px] tracking-[0.22em] uppercase text-slate-500 mb-3">
          Labor Markets · New York City
        </p>
        <h2
          className="font-serif text-3xl md:text-[40px] leading-[1.1] text-[#0F2C5A]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          NYC paychecks keep climbing — and the gap keeps widening
        </h2>
        <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
          Median and average annual wages for workers in New York City, 2023 –
          2026E
        </p>
      </header>

      <div className="flex flex-wrap items-center gap-x-7 gap-y-3 mb-6 text-sm">
        <div className="flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-sm"
            style={{ background: COLOR_MEDIAN }}
            aria-hidden
          />
          <span className="text-slate-700">Median wage</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-sm"
            style={{ background: COLOR_AVERAGE }}
            aria-hidden
          />
          <span className="text-slate-700">Average wage</span>
        </div>
        <div className="ml-auto text-xs text-slate-500">
          2023 → 2026E:&nbsp;
          <span className="text-[#0F2C5A] font-semibold">
            median +{medianGrowth.toFixed(1)}%
          </span>
          <span className="mx-2 text-slate-300">·</span>
          <span className="text-[#0F2C5A] font-semibold">
            average +{averageGrowth.toFixed(1)}%
          </span>
        </div>
      </div>

      <div className="h-[440px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 40, right: 16, left: 0, bottom: 36 }}
            barCategoryGap="24%"
            barGap={6}
          >
            <CartesianGrid
              strokeDasharray="2 4"
              stroke={COLOR_GRID}
              vertical={false}
            />
            <XAxis
              dataKey="year"
              axisLine={{ stroke: COLOR_GRID }}
              tickLine={false}
              tick={renderYearTick as unknown as undefined}
              interval={0}
              height={50}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={formatDollars}
              tick={{
                fill: COLOR_AXIS,
                fontSize: 12,
                fontFamily: "Inter, system-ui, sans-serif",
              }}
              domain={[0, 140000]}
              ticks={[0, 35000, 70000, 105000, 140000]}
              width={56}
            />
            <Bar
              dataKey="median"
              name="Median wage"
              fill={COLOR_MEDIAN}
              radius={[3, 3, 0, 0]}
              maxBarSize={64}
            >
              <LabelList
                dataKey="median"
                position="top"
                formatter={formatDollars}
                style={{
                  fill: COLOR_LABEL,
                  fontSize: 12,
                  fontWeight: 600,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              />
            </Bar>
            <Bar
              dataKey="average"
              name="Average wage"
              fill={COLOR_AVERAGE}
              radius={[3, 3, 0, 0]}
              maxBarSize={64}
            >
              <LabelList
                dataKey="average"
                position="top"
                formatter={formatDollars}
                style={{
                  fill: COLOR_LABEL,
                  fontSize: 12,
                  fontWeight: 600,
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-2 text-xs text-slate-500 text-center">
        Annotation below each year shows how much the average wage exceeds the
        median — a proxy for top-of-distribution skew.
      </p>

      <footer className="mt-8 pt-5 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
        <p>
          <span className="font-semibold text-slate-600">Sources:</span> U.S.
          Bureau of Labor Statistics, Quarterly Census of Employment and Wages
          (New York City, all industries); U.S. Census Bureau, American
          Community Survey 1-year estimates. 2025 and 2026 values are
          projections extrapolated from the 2021 – 2024 wage-growth trend.
          Figures are annual wages for individual workers, not household
          income.
        </p>
      </footer>
    </section>
  );
};

export default NYCSalaryChart;
