"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { FaBagShopping } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#00E096",
  },
  mobile: {
    label: "Mobile",
    color: "#884DFF",
  },
} satisfies ChartConfig;

export default function RevenueChart() {
  return (
    <Card className="border-none text-[var(--text-dark)]">
      <CardHeader>
        <h2 className="dashboard-home__title">Revenue Income</h2>
        <CardDescription className="text-xs">
          January - June 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="w-[100%] h-[200px]" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="desktop" fill="#0095FF" radius={4} />
            <Bar dataKey="mobile" fill="#00E096" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-xs">
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-[10px] w-[10px] bg-[#00E096]"></div> Desktop
          </div>
          <div className="flex items-center gap-2">
            <div className="h-[10px] w-[10px] bg-[#884DFF]"></div> Mobile
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
