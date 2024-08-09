import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import stocks from "@/fakeData/top5Stocks.json";

const TopFiveGlobalStocks = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px] p-4">No</TableHead>
          <TableHead className="w-[150px] p-4">Symbol</TableHead>
          <TableHead className="p-4">Name</TableHead>
          <TableHead className="p-4">Current Price</TableHead>
          <TableHead className="p-4 text-right">Daily percentage</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stocks.top5GlobalStocks.map((invoice) => (
          <TableRow key={invoice.No}>
            <TableCell className="p-4 font-medium">{invoice.No}</TableCell>
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
