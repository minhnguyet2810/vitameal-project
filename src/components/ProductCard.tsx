import React from 'react'
import { Product } from '../data/products'

type Props = {
  product: Product
  onAdd?: (productId: string, qty?: number) => void
}

export default function ProductCard({ product, onAdd }: Props) {
  const handleAdd = () => {
    if (onAdd) onAdd(product.id, 1)
    else console.log('Thêm vào giỏ:', product.id, 'số lượng=1')
  }

  return (
    <div className="product-card bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
      {product.description && <p className="text-sm text-gray-600 mb-2">{product.description}</p>}
      <p className="text-md font-bold mb-2">{product.price.toLocaleString('vi-VN')} ₫</p>

      <p className="text-sm text-gray-500 mb-4">Dành cho 1 người</p>

      <button
        onClick={handleAdd}
        className="w-full bg-emerald-600 text-white py-2 rounded-md font-medium"
        type="button"
      >
        Thêm vào giỏ
      </button>
    </div>
  )
}