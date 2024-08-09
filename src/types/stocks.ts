export interface Stock {
  No: number;
  Symbol: string;
  Name: string;
  category: string;
  current_price: number;
  daily_percentage: number;
  Image: string;
}

export interface Props {
  stocksLists: any;
  setStocksLists: any;
  filterStock: any;
}
export interface StockDataEntry {
  Date: string;
  Open: number;
  High: number;
  Low: number;
  Close: number;
  Volume: number;
};

export interface CompanyStock {
  Name: string;
  Symbol: string;
  StockData: StockDataEntry[];
};