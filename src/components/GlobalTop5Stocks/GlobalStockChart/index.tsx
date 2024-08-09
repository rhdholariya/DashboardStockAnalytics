"use client";
import React, { useMemo } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Props, Stock } from "@/types/stocks";

interface chartData {
  month: string;
  monthly: number;
  daily: number;
}

const GlobalStockChart = (props: Props) => {
  const chartConfig = {
    daily_percentage: {
      label: "daily_percentage",
    },
    TSM: {
      label: "TSM",
      color: "hsl(var(--chart-1))",
    },
    SAP: {
      label: "SAP",
      color: "hsl(var(--chart-2))",
    },
    RDSB: {
      label: "RDSB",
      color: "hsl(var(--chart-3))",
    },
    NOVOB: {
      label: "NOVOB",
      color: "hsl(var(--chart-4))",
    },
    HSBA: {
      label: "HSBA",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig;

  const percentage = (value = 0, percentage = 0) => {
    const increasedValue = value * (percentage / 100);
    return value + increasedValue;
  };

  const renderChartData = useMemo(() => {
    let lists: chartData[] = [];
    props.stocksLists.forEach((stock: Stock) => {
      lists.push({
        month: stock.Symbol,
        monthly: stock.current_price,
        daily: percentage(stock.current_price, stock.daily_percentage),
      });
    });
    return lists;
  }, [props.stocksLists]);

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
        <ChartContainer
          config={chartConfig}
          className="h-[310px] min-h-[200px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={renderChartData}
            layout="vertical"
            margin={{ left: 0 }}
          >
            <CartesianGrid vertical={false} />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <XAxis dataKey="monthly" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="monthly" fill="#3C50E0" radius={4} />
            <Bar dataKey="daily" fill="#80CAEE" radius={4} />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default GlobalStockChart;
