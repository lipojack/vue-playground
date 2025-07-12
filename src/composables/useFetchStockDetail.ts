import { ref } from 'vue'
import type { StockDetail } from '@/types/stocks'
import { fetchStockDetail } from '@/services/stocks'

const useFetchStockDetail = () => {
  const detail = ref<StockDetail | null>(null)
  const isLoading = ref(false)

  const fetchDetail = async (id: number) => {
    if (isLoading.value) return
    isLoading.value = true
    try {
      const res = await fetchStockDetail(id)
      detail.value = res;
    } catch (err) {
      console.error('Error fetching detail:', err)
    } finally {
      isLoading.value = false
    }
  }

  return { detail, isLoading, fetchDetail }
}
export default useFetchStockDetail