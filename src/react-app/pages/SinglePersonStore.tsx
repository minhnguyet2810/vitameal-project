import React, { useState, useMemo } from 'react'

/**
 * Single-file page: lists only single-person packages,
 * forces qty = 1 per product, applies discount rules:
 *  - subtotal > 2,000,000 => 10%
 *  - subtotal > 1,000,000 => 5%
 *  - otherwise 0%
 *
 * Replace the page that currently shows "Gói Gia Đình" with this file,
 * or add route to render it.
 */

/* ----------------------------- Types & Data ----------------------------- */
type Product = {
  id: string
  title: string
  description?: string
  price: number // VND
  servings: number // should be 1 for all items here
  sku?: string
}

const products: Product[] = [
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

/* ------------------------------ Discount utils ------------------------------ */
function getDiscountPercent(subtotal: number): number {
  if (subtotal > 2_000_000) return 0.1
  if (subtotal > 1_000_000) return 0.05
  return 0
}

function applyDiscount(subtotal: number) {
  const percent = getDiscountPercent(subtotal)
  const discount = Math.round(subtotal * percent)
  const total = subtotal - discount
  return { subtotal, percent, discount, total }
}

/* ------------------------------ UI Components ------------------------------ */
function ProductCard({
  product,
  onAdd
}: {
  product: Product
  onAdd: (product: Product) => void
}) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
      {product.description && <p className="text-sm text-gray-600 mb-2">{product.description}</p>}
      <p className="text-md font-bold mb-2">{product.price.toLocaleString('vi-VN')} ₫</p>
      <p className="text-sm text-gray-500 mb-4">Dành cho 1 người</p>
      <button
        type="button"
        onClick={() => onAdd(product)}
        className="w-full bg-emerald-600 text-white py-2 rounded-md font-medium"
      >
        Chọn gói
      </button>
    </div>
  )
}

type CartItem = { product: Product; qty: number }

function Checkout({
  items,
  onPlaceOrder
}: {
  items: CartItem[]
  onPlaceOrder: (payload: { items: CartItem[]; subtotal: number; discount: number; total: number }) => void
}) {
  const subtotal = items.reduce((s, it) => s + it.product.price * it.qty, 0)
  const { percent, discount, total } = applyDiscount(subtotal)

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Thanh toán</h2>

      <div className="space-y-3 mb-4">
        {items.length === 0 ? (
          <p className="text-sm text-gray-600">Giỏ hàng trống</p>
        ) : (
          items.map((it) => (
            <div key={it.product.id} className="flex justify-between">
              <div>
                <div className="font-medium">{it.product.title}</div>
                <div className="text-sm text-gray-500">Số lượng: {it.qty} (không thể thay đổi)</div>
              </div>
              <div className="font-medium">{(it.product.price * it.qty).toLocaleString('vi-VN')} ₫</div>
            </div>
          ))
        )}
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between mb-2">
          <div className="text-sm text-gray-600">Tạm tính</div>
          <div className="font-medium">{subtotal.toLocaleString('vi-VN')} ₫</div>
        </div>

        <div className="flex justify-between mb-2">
          <div className="text-sm text-gray-600">Giảm giá {percent > 0 ? `(${Math.round(percent * 100)}%)` : ''}</div>
          <div className="font-medium text-rose-600">-{discount.toLocaleString('vi-VN')} ₫</div>
        </div>

        <div className="flex justify-between text-lg font-semibold mt-4">
          <div>Tổng cộng</div>
          <div>{total.toLocaleString('vi-VN')} ₫</div>
        </div>

        <button
          type="button"
          onClick={() => onPlaceOrder({ items, subtotal, discount, total })}
          className="mt-4 w-full bg-emerald-600 text-white py-2 rounded-md"
        >
          Đặt hàng
        </button>
      </div>
    </div>
  )
}

/* ------------------------------ Page ------------------------------ */
export default function SinglePersonStorePage(): JSX.Element {
  // only show products with servings === 1
  const onePersonProducts = useMemo(() => products.filter((p) => p.servings === 1), [])

  const [cart, setCart] = useState<CartItem[]>([])

  const handleAdd = (product: Product) => {
    // if product already in cart do nothing (we sell per-package, qty fixed = 1)
    setCart((prev) => {
      if (prev.find((it) => it.product.id === product.id)) return prev
      return [...prev, { product, qty: 1 }]
    })
  }

  const handleRemove = (productId: string) => {
    setCart((prev) => prev.filter((it) => it.product.id !== productId))
  }

  const handlePlaceOrder = (payload: { items: CartItem[]; subtotal: number; discount: number; total: number }) => {
    // simple placeholder: log and clear cart
    // wire to real order API as needed
    // eslint-disable-next-line no-console
    console.log('Order placed', payload)
    setCart([])
    alert(`Đặt hàng thành công — Tổng: ${payload.total.toLocaleString('vi-VN')} ₫`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50 p-6">
      <header className="max-w-7xl mx-auto mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">VitaMeal — Đăng ký gói (1 người)</h1>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Gói cho 1 người</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {onePersonProducts.map((p) => (
              <div key={p.id}>
                <ProductCard product={p} onAdd={handleAdd} />
              </div>
            ))}
          </div>
        </section>

        <aside>
          <Checkout items={cart} onPlaceOrder={handlePlaceOrder} />
          {cart.length > 0 && (
            <div className="mt-4 bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Quản lý giỏ</h3>
              {cart.map((it) => (
                <div key={it.product.id} className="flex items-center justify-between mb-2">
                  <div className="text-sm">{it.product.title}</div>
                  <div className="flex items-center gap-2">
                    <div className="font-medium">{it.product.price.toLocaleString('vi-VN')} ₫</div>
                    <button
                      type="button"
                      onClick={() => handleRemove(it.product.id)}
                      className="text-sm text-rose-600"
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </aside>
      </main>
    </div>
  )
}