export type Product = {
  id: string
  title: string
  description?: string
  price: number // VND
  servings: number // always = 1
  sku?: string
}

export const products: Product[] = [
  {
    id: 'pkg-3days-fresh-raw',
    title: 'Gói 3 ngày tươi mới - nguyên liệu tươi (1 người)',
    description: 'Nguyên liệu tươi, đóng gói cho 1 người mỗi bữa',
    price: 479000,
    servings: 1,
    sku: 'GM-3D-RAW-1'
  },
  {
    id: 'pkg-3days-fresh-ready',
    title: 'Gói 3 ngày tươi mới - chế biến sẵn (1 người)',
    description: 'Bữa ăn chế biến sẵn, đóng gói cho 1 người',
    price: 519000,
    servings: 1,
    sku: 'GM-3D-READY-1'
  },
  {
    id: 'pkg-7days-energy-raw',
    title: 'Gói 7 ngày sức sống - nguyên liệu tươi (1 người)',
    description: 'Nguyên liệu tươi cho 7 bữa, 1 người',
    price: 1049000,
    servings: 1,
    sku: 'GM-7D-RAW-1'
  },
  {
    id: 'pkg-7days-energy-ready',
    title: 'Gói 7 ngày sức sống - chế biến sẵn (1 người)',
    description: 'Bữa ăn chế biến sẵn cho 7 ngày, 1 người',
    price: 1120000,
    servings: 1,
    sku: 'GM-7D-READY-1'
  },
  {
    id: 'pkg-1day-trial-raw',
    title: 'Gói 1 ngày dùng thử - nguyên liệu tươi (1 người)',
    description: 'Gói dùng thử 1 ngày, nguyên liệu tươi cho 1 người',
    price: 169000,
    servings: 1,
    sku: 'GM-1D-RAW-1'
  },
  {
    id: 'pkg-1day-trial-ready',
    title: 'Gói 1 ngày dùng thử - chế biến sẵn (1 người)',
    description: 'Gói dùng thử 1 ngày, chế biến sẵn cho 1 người',
    price: 179000,
    servings: 1,
    sku: 'GM-1D-READY-1'
  }
]