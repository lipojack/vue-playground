import type { Stock, StockDetail } from '@/types/stocks';

export const fetchStocks = async (page: number = 1, limit: number = 20): Promise<Stock[]> => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const response = await fetch(`http://localhost:3000/stocks?_page=${page}&_limit=${limit}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export const fetchStockDetail = async (id: number): Promise<StockDetail> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  const response = await fetch(`http://localhost:3000/details/${id}`);
  console.log('fetchStockDetail', id)
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}