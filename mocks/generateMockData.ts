import fs from 'fs'
import { faker } from '@faker-js/faker'

// Generate an array of stock items
const generateStocks = (count: number) =>
  Array.from({ length: count }, (_, id) => ({
    id: id + 1,
    symbol: faker.finance.currencyCode(),
    name: faker.company.name(),
    price: parseFloat(faker.finance.amount()),
  }))

const data = {
  stocks: generateStocks(500)
}

fs.writeFileSync('mocks/db.json', JSON.stringify(data, null, 2))
console.log('✅ Mock data generated to mock/db.json')
