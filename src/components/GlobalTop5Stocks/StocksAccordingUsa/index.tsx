import React from "react";
import ChartOne from "@/components/Charts/ChartOne";
import ChartTwo from "@/components/Charts/ChartTwo";
import stocks from "@/fakeData/top5Stocks.json";
import { Stock } from "@/types/stocks";

const StocksAccordingUsa = () => {
  const [stocksLists, setStocksLists] = React.useState(
    stocks.top5Stocks
      .sort((a: Stock, b: Stock) => b.daily_percentage - a.daily_percentage)
      .slice(0, 5),
  );

  const filterStock = (value: string) => {
    const lists = stocks.top5Stocks.filter(
      (item: Stock) => item.category === value,
    );
    setStocksLists(lists.slice(0, 5));
  };

  const props = { stocksLists, setStocksLists, filterStock };
  return (
    <>
      <ChartOne {...props} />
      <ChartTwo {...props} />
    </>
  );
};

export default StocksAccordingUsa;
