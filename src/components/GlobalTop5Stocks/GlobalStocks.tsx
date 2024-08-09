import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import stocks from "@/fakeData/top5Stocks.json";
import { Stock } from "@/types/stocks";
import TopFiveStock from "@/components/TopFiveStocks";

const GlobalStocks = () => {
  const [stocksLists, setStocksLists] = React.useState(
    stocks.top5GlobalStocks
      .sort((a: Stock, b: Stock) => b.daily_percentage - a.daily_percentage)
      .slice(0, 5),
  );

  const filterStock = (value: string) => {
    const lists = stocks.top5Stocks.filter(
      (item: Stock) => item.category === value,
    );
    setStocksLists(lists.slice(0, 5));
  };
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Global Top 5 Stocks
        </h4>
        <div className="">
          <Select onValueChange={(value) => filterStock(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Sector" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Technology">Technology</SelectItem>
                <SelectItem value="Finance">Finance</SelectItem>
                <SelectItem value="Healthcare">Healthcare</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <TopFiveStock stocks={stocksLists} />
      </div>
    </div>
  );
};

export default GlobalStocks;
