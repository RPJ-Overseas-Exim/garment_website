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
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#0095FF",
  },
  mobile: {
    label: "Mobile",
    color: "#00E096",
  },
} satisfies ChartConfig;

export default function BarChartMultiple() {
  return (
    <Card className="border-none text-[var(--text-dark)]">
      <CardHeader>
        <h2 className="dashboard-home__title">Target vs Reality</h2>
        <CardDescription className="text-xs">
          January - June 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
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
        <div className="flex items-center gap-2">
          <p
            className="text-sm p-2 rounded-md text-[#0095FF]"
            style={{ backgroundColor: "rgba(0, 149, 255, 0.2)" }}
          >
            <FaBagShopping />
          </p>
          <p className="font-semibold">Reality</p>
          <p
            className="text-base font-semibold ml-4"
            style={{ color: "rgb(0, 149, 255)" }}
          >
            {chartData[chartData.length - 1].desktop}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p
            className="text-sm p-2 rounded-md text-[#00cc89]"
            style={{ backgroundColor: "rgba(0, 224, 150, 0.2)" }}
          >
            <TbTargetArrow />
          </p>
          <p className="font-semibold">Target</p>
          <p
            className="text-base font-semibold ml-4"
            style={{ color: "rgb(0, 224, 150)" }}
          >
            {chartData[chartData.length - 1].mobile}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
