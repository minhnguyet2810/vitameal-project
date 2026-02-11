import { useState, useEffect } from 'react';
import { Check, Clock, Truck, Sparkles, Shield, Heart } from 'lucide-react';
import Header from '../components/Header';
import MealPicker from '../components/MealPicker';
import { products } from '../../data/products';
import {
  generate1DayMenu,
  generate3DayMenu,
  generate7DayMenu,
  type DayMenu
} from '../../data/menu';

interface CheckoutForm {
  name: string;
  phone: string;
  address: string;
  deliveryWindow: 'morning' | 'afternoon' | '';
  dietaryPreferences: string[];
  allergies: string;
  portionSize: 'small' | 'medium' | 'large' | '';
  healthGoals: string;
}

export default function Subscription() {
  const [step, setStep] = useState<'packages' | 'meals' | 'checkout'>('packages');
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);
  const [menuData, setMenuData] = useState<DayMenu[]>([]);
  const [formData, setFormData] = useState<CheckoutForm>({
    name: '',
    phone: '',
    address: '',
    deliveryWindow: '',
    dietaryPreferences: [],
    allergies: '',
    portionSize: '',
    healthGoals: ''
  });

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleSelectPackage = (product: (typeof products)[0]) => {
    setSelectedProduct(product);
    const days = product.id.includes('1day') ? 1 : product.id.includes('3day') ? 3 : 7;
    const menu = days === 1 ? generate1DayMenu() : days === 3 ? generate3DayMenu() : generate7DayMenu();
    setMenuData(menu);
    setStep('meals');
  };

  const handleConfirmMeals = () => {
    setStep('checkout');
    setTimeout(() => document.getElementById('checkout-form')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const handleCancelMeals = () => {
    setSelectedProduct(null);
    setMenuData([]);
    setStep('packages');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Đơn hàng đã được gửi!\n\n` +
      `Gói: ${selectedProduct?.title}\n` +
      `Giá: ${selectedProduct?.price.toLocaleString('vi-VN')} ₫\n\n` +
      `Chúng tôi sẽ liên hệ với bạn sớm.`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-900" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              Ưu Đãi Có Hạn
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
            Chọn Gói Của Bạn
            <span className="block mt-2 bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text text-transparent">
              Hành Trình Sức Khỏe
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
            Chọn gói, chọn món ăn theo ý bạn — nguyên liệu tươi hoặc chế biến sẵn
          </p>
        </div>
      </section>

      {/* Step 1: 6 gói (nguyên liệu tươi / chế biến sẵn) */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        {step === 'packages' && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              Chọn Loại Gói & Cách Chế Biến
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => {
                const isRaw = product.title.includes('nguyên liệu tươi');
                const badge = isRaw ? 'Nguyên Liệu Tươi' : 'Chế Biến Sẵn';
                const gradient = isRaw ? 'from-[#2D958E] to-emerald-700' : 'from-[#FF8A5C] to-orange-700';
                return (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-emerald-300 transition-all"
                  >
                    <div className={`bg-gradient-to-r ${gradient} p-6 text-white`}>
                      <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold mb-3">
                        {badge}
                      </span>
                      <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                        {product.title}
                      </h3>
                      {product.description && (
                        <p className="text-white/90 text-sm mb-4">{product.description}</p>
                      )}
                      <p className="text-3xl font-bold">₫{product.price.toLocaleString('vi-VN')}</p>
                    </div>
                    <div className="p-4">
                      <button
                        type="button"
                        onClick={() => handleSelectPackage(product)}
                        className={`w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${gradient} hover:opacity-90 transition-opacity`}
                        style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
                      >
                        Chọn Gói & Chọn Món
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Step 2: Chọn món ăn */}
        {step === 'meals' && selectedProduct && (
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 p-4 bg-white rounded-xl shadow flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Đang chọn món cho</p>
                <p className="font-bold text-gray-900" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                  {selectedProduct.title}
                </p>
                <p className="text-emerald-600 font-semibold">
                  ₫{selectedProduct.price.toLocaleString('vi-VN')}
                </p>
              </div>
            </div>
            <MealPicker
              menu={menuData}
              onMenuChange={setMenuData}
              onConfirm={handleConfirmMeals}
              onCancel={handleCancelMeals}
            />
          </div>
        )}

        {/* Step 3: Checkout */}
        {step === 'checkout' && selectedProduct && (
          <div id="checkout-form" className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                Hoàn Tất Đơn Hàng
              </h2>
              <p className="text-gray-600 mb-8" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                Bạn đã chọn: <span className="font-semibold text-[#2D958E]">{selectedProduct.title}</span>
                <br />
                <span className="text-lg font-bold text-emerald-600">
                  ₫{selectedProduct.price.toLocaleString('vi-VN')}
                </span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Họ và Tên *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2D958E] focus:outline-none"
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Số Điện Thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2D958E] focus:outline-none"
                    placeholder="0912345678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Địa Chỉ Giao Hàng *
                  </label>
                  <textarea
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2D958E] focus:outline-none resize-none"
                    placeholder="123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Sở Thích Ăn Uống
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Ít Carb', 'Nhiều Protein', 'Chay', 'Không Gluten', 'Ít Đường', 'Ít Muối'].map((pref) => (
                      <button
                        key={pref}
                        type="button"
                        onClick={() => {
                          const newPrefs = formData.dietaryPreferences.includes(pref)
                            ? formData.dietaryPreferences.filter((p) => p !== pref)
                            : [...formData.dietaryPreferences, pref];
                          setFormData({ ...formData, dietaryPreferences: newPrefs });
                        }}
                        className={`px-4 py-2 rounded-lg border-2 text-sm font-semibold transition-all ${
                          formData.dietaryPreferences.includes(pref)
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                            : 'border-gray-200 hover:border-emerald-300'
                        }`}
                      >
                        {pref}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Dị Ứng Thực Phẩm
                  </label>
                  <input
                    type="text"
                    value={formData.allergies}
                    onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2D958E] focus:outline-none"
                    placeholder="VD: Tôm, cua, sữa..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Kích Thước Khẩu Phần *
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: 'small', label: 'Nhỏ', desc: '~400g' },
                      { value: 'medium', label: 'Trung Bình', desc: '~500g' },
                      { value: 'large', label: 'Lớn', desc: '~600g' }
                    ].map((size) => (
                      <button
                        key={size.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, portionSize: size.value as 'small' | 'medium' | 'large' })}
                        className={`p-4 border-2 rounded-xl transition-all ${
                          formData.portionSize === size.value ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 hover:border-emerald-300'
                        }`}
                      >
                        <p className={`font-semibold ${formData.portionSize === size.value ? 'text-emerald-700' : 'text-gray-900'}`}>
                          {size.label}
                        </p>
                        <p className="text-sm text-gray-600">{size.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Mục Tiêu Sức Khỏe
                  </label>
                  <textarea
                    value={formData.healthGoals}
                    onChange={(e) => setFormData({ ...formData, healthGoals: e.target.value })}
                    rows={2}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2D958E] focus:outline-none resize-none"
                    placeholder="VD: Giảm cân, kiểm soát đường huyết..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Khung Giờ Giao Hàng *
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, deliveryWindow: 'morning' })}
                      className={`p-4 border-2 rounded-xl flex items-center gap-3 ${
                        formData.deliveryWindow === 'morning' ? 'border-[#2D958E] bg-emerald-50' : 'border-gray-200'
                      }`}
                    >
                      <Clock className="w-5 h-5" />
                      <div className="text-left">
                        <p className="font-semibold">Buổi Sáng (6–8h)</p>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, deliveryWindow: 'afternoon' })}
                      className={`p-4 border-2 rounded-xl flex items-center gap-3 ${
                        formData.deliveryWindow === 'afternoon' ? 'border-[#FF8A5C] bg-orange-50' : 'border-gray-200'
                      }`}
                    >
                      <Clock className="w-5 h-5" />
                      <div className="text-left">
                        <p className="font-semibold">Buổi Chiều (16–18h)</p>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 justify-center py-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#2D958E]" />
                    <span className="text-sm font-semibold">Thanh Toán An Toàn</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-[#2D958E]" />
                    <span className="text-sm font-semibold">Giao Hàng Miễn Phí</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-[#2D958E]" />
                    <span className="text-sm font-semibold">Đảm Bảo Sức Khỏe</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!formData.deliveryWindow || !formData.portionSize}
                  className="w-full py-4 bg-gradient-to-r from-[#2D958E] to-[#FF8A5C] text-white rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
                >
                  Hoàn Tất Đơn Hàng
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
