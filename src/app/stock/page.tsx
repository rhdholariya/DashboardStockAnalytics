import { StockChart } from '@/components/GlobalTop5Stocks/GlobalStockChart/StockChart';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import TopFiveGlobalStocks from '@/components/TopFiveStocks';
import React from 'react'

const Stock = () => {
  return (
    <DefaultLayout>
        <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
            <div className='col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8'>
                <TopFiveGlobalStocks />
            </div>
            <div className="col-span-12 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
           
                <div>
                    <StockChart />
                </div>
        </div>
        </div>
    </DefaultLayout>
  )
}

export default Stock;