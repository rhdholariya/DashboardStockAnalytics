"use client";
import React, { useMemo } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import stocks from "@/fakeData/top5Stocks.json";

interface chartData {
  month: string;
  desktop: number;
  mobile: number;
}

const GlobalStockChart: React.FC = () => {
  const chartConfig = {
    desktop: {
      label: "Current Price :",
      color: "#3C50E0",
    },
    mobile: {
      label: "Daily Price increase :",
      color: "#80CAEE",
    },
  } satisfies ChartConfig;

  const percentage = (value = 0, percentage = 0) => {
    const increasedValue = value * (percentage / 100);
    return value + increasedValue;
  };

  const renderChartData = useMemo(() => {
    let lists: chartData[] = [];
    stocks.top5GlobalStocks.forEach((stock) => {
      lists.push({
        month: stock.Symbol,
        desktop: stock.current_price,
        mobile: percentage(stock.current_price, stock.daily_percentage),
      });
    });
    return lists;
  }, [stocks]);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
            Top 5 Global Stocks Chart Statistics
          </h4>
        </div>
      </div>

      <div id="chartTwo" className="">
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={renderChartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default GlobalStockChart;
