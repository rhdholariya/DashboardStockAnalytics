"use client"
import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { CompanyStock, Stock, StockDataEntry } from "@/types/stocks";

  interface StockInfo {
    stocks: {
      StockData:StockDataEntry[]
    };
  }

const StockHistoryTable = ({ stocks }: StockInfo) => {
  
  console.log(stocks.StockData);
  
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px] p-4">No</TableHead>
          <TableHead className="w-[150px] p-4">Date</TableHead>
          <TableHead className="w-[300px] p-4">Open</TableHead>
          <TableHead className="p-4">High</TableHead>
          <TableHead className="p-4 text-right">Low</TableHead>
          <TableHead className="p-4 text-right">Close</TableHead>
          <TableHead className="p-4 text-right">Volume</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {(stocks.StockData || []).map((stock: any, index: number) => (
          <TableRow key={index}>
            <TableCell className="p-4 font-medium">{index + 1}</TableCell>
            <TableCell className="p-4 font-medium">
              {stock.Date}
            </TableCell>
            <TableCell>{stock.Open}</TableCell>
            <TableCell className="p-4 font-medium">
              {stock.High}
            </TableCell>
            <TableCell className="p-4 text-right font-bold text-rose-600">
              {stock.Low}
            </TableCell>
            <TableCell className="p-4 text-right font-bold text-green-600">
              {stock.Close}
            </TableCell>
            <TableCell className="p-4 text-right">
              {stock.Volume}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default StockHistoryTable