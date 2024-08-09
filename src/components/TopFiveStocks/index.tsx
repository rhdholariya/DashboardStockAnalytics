"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Stock } from "@/types/stocks";
import { useRouter } from "next/navigation";

interface StockInfo {
  stocks: Stock[];
}

const TopFiveGlobalStocks = ({ stocks }: StockInfo) => {
  const router = useRouter();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px] p-4">No</TableHead>
          <TableHead className="w-[150px] p-4">Symbol</TableHead>
          <TableHead className="w-[300px] p-4">Name</TableHead>
          <TableHead className="p-4">Current Price</TableHead>
          <TableHead className="p-4 text-right">Daily percentage</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stocks.map((invoice: Stock, index: number) => (
          <TableRow
            key={invoice.No}
            onClick={() => router.push("/info/1")}
            className="cursor-pointer"
          >
            <TableCell className="p-4 font-medium">{index + 1}</TableCell>
            <TableCell className="p-4 font-medium">
              <img
                src={invoice.Image}
                className="h-5"
                alt={String(invoice.No)}
              />
            </TableCell>
            <TableCell>{invoice.Name}</TableCell>
            <TableCell className="p-4 font-medium">
              ${invoice.current_price}
            </TableCell>
            <TableCell className="p-4 text-right font-bold text-green-600">
              <div className="flex justify-end gap-2">
                {invoice.daily_percentage}%
                <img src="/images/icon/growth.svg" alt="growth.svg" />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TopFiveGlobalStocks;
