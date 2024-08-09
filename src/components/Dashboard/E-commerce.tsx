"use client";
import React from "react";
import CardDataStats from "../CardDataStats";
import Image from "next/image";
import GlobalTop5Stocks from "../GlobalTop5Stocks";
import StocksAccordingUsa from "@/components/GlobalTop5Stocks/StocksAccordingUsa";

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total views" total="$3.456K" rate="0.43%" levelUp>
          <span className="h-12 w-12 rounded-full">
            <Image
              width={112}
              height={112}
              src={"/images/user/user-02.png"}
              style={{
                width: "auto",
                height: "auto",
              }}
              alt="User"
            />
          </span>
        </CardDataStats>
        <CardDataStats title="Total Profit" total="$45,2K" rate="4.35%" levelUp>
          <Image
            width={112}
            height={112}
            src={"/images/user/user-02.png"}
            style={{
              width: "auto",
              height: "auto",
            }}
            alt="User"
          />
        </CardDataStats>
        <CardDataStats title="Total Product" total="2.450" rate="2.59%" levelUp>
          <Image
            width={112}
            height={112}
            src={"/images/user/user-02.png"}
            style={{
              width: "auto",
              height: "auto",
            }}
            alt="User"
          />
        </CardDataStats>
        <CardDataStats title="Total Users" total="3.456" rate="0.95%" levelDown>
          <Image
            width={112}
            height={112}
            src={"/images/user/user-02.png"}
            style={{
              width: "auto",
              height: "auto",
            }}
            alt="User"
          />
        </CardDataStats>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <StocksAccordingUsa />
      </div>
      <GlobalTop5Stocks />
    </>
  );
};

export default ECommerce;
