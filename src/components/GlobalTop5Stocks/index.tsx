import React from "react";
import GlobalStocks from "@/components/GlobalTop5Stocks/GlobalStocks";
import GlobalStockChart from "@/components/GlobalTop5Stocks/GlobalStockChart";

const GlobalTop5Stocks = () => {
  return (
    <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
      <GlobalStocks />
      <GlobalStockChart />
    </div>
  );
};

export default GlobalTop5Stocks;
