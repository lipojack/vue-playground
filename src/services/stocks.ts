import type { Stock } from '@/types/stocks';

export const fetchStocks = async (page: number = 1, limit: number = 20): Promise<Stock[]> => {
  const response = await fetch(`http://localhost:3000/stocks?_page=${page}&_limit=${limit}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}