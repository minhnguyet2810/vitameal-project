export type MenuItem = {
  id: string
  label: string
  path: string
  icon?: string
  note?: string
}

const menu: MenuItem[] = [
  { id: 'home', label: 'Trang chủ', path: '/' },
  { id: 'products', label: 'Sản phẩm', path: '/san-pham' },
  { id: 'cart', label: 'Giỏ hàng', path: '/gio-hang' },
  { id: 'about', label: 'Giới thiệu', path: '/gioi-thieu' },
  { id: 'contact', label: 'Liên hệ', path: '/lien-he' }
]

// Ghi chú chung: toàn bộ gói bán cho 1 người
export const SITE_NOTE = 'Tất cả gói bán cho 1 người. Không bán theo nhóm.'

export default menu