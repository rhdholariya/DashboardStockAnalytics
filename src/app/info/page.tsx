import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import StockHistoryTable from "@/components/StockHistoryTable";
import { StockChart } from "@/components/GlobalTop5Stocks/GlobalStockChart/StockChart";
import historyData from "@/fakeData/sevenDay.json";

const Page = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-12">
          <StockChart />
        </div>
        <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-12">
          <StockHistoryTable stocks={historyData} />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Page;
