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
