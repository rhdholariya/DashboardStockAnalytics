import React from "react";
import TopFiveGlobalStocks from "@/components/GlobalTop5Stocks/TopFiveGlobalStocks";

const GlobalStocks = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Global Top 5 Stocks
        </h4>
      </div>
      <div>
        <TopFiveGlobalStocks />
      </div>
    </div>
  );
};

export default GlobalStocks;
