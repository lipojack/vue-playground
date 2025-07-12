export interface Stock {
  id: number;
  symbol: string;
  name: string;
  price: number;
}

export interface StockDetail extends Stock {
  extra1: string;
  extra2: string;
  extra3: string;
  extra4: string;
  extra5: string;
}