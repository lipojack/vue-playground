import fs from 'fs'
import { faker } from '@faker-js/faker'

// Generate an array of stock items

type Stock = {
  id: number
  symbol: string
  name: string
  price: number
}
type StockDetail = Stock & {
  extra1: string
  extra2: string
  extra3: string
  extra4: string
  extra5: string
}
type StockDetailsMap = Record<number, StockDetail>

const generateStocks = (
  count: number
): { stocks: Stock[]; details: StockDetailsMap[] } => {
  const stocks: Stock[] = Array.from({ length: count }, (_, id) => ({
    id: id + 1,
    symbol: faker.finance.currencyCode(),
    name: faker.company.name(),
    price: parseFloat(faker.finance.amount()),
  }))

  const details: StockDetailsMap[]= stocks.map(stock => ({
    ...stock,
    extra1: faker.lorem.sentence(),
    extra2: faker.lorem.sentence(),
    extra3: faker.lorem.sentence(),
    extra4: faker.lorem.sentence(),
    extra5: faker.lorem.sentence(),
  }))


  return { stocks, details }
}



fs.writeFileSync('mocks/db.json', JSON.stringify(generateStocks(500), null, 2))
console.log('✅ Mock data generated to mock/db.json')
