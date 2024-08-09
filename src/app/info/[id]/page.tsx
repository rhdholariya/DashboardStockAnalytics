import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import StockHistoryTable from "@/components/StockHistoryTable";
import stocks from "@/fakeData/top5Stocks.json";
import { StockChart } from "@/components/GlobalTop5Stocks/GlobalStockChart/StockChart";

const Page = ({ params }: { params: { slug: string } }) => {
  console.log(params);
  return (
    <DefaultLayout>
      <h4 className="mb-5 text-xl font-bold text-black dark:text-white">
        Top 5 Stocks In USA
      </h4>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
          <StockHistoryTable stocks={stocks.top5Stocks} />
        </div>
        <div className="col-span-12 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
          <div>
            <StockChart />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Page;
