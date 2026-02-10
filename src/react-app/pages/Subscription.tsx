import { useState, useEffect } from 'react';
import { Check, Calendar, Clock, Truck, Sparkles, Shield, Heart, Users } from 'lucide-react';
import Header from '../components/Header';
import MenuPreview from '../components/MenuPreview';
import { generate3DayMenu, generate7DayMenu, DayMenu } from '../../data/menu';

interface CheckoutForm {
  name: string;
  phone: string;
  address: string;
  deliveryWindow: 'morning' | 'afternoon' | '';
  selectedPlan: `${string}-day-${number}` | '';
  dietaryPreferences: string[];
  allergies: string;
  portionSize: 'small' | 'medium' | 'large' | '';
  healthGoals: string;
}

export default function Subscription() {
  const [showMenuPreview, setShowMenuPreview] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [menuData, setMenuData] = useState<DayMenu[]>([]);
  const [formData, setFormData] = useState<CheckoutForm>({
    name: '',
    phone: '',
    address: '',
    deliveryWindow: '',
    selectedPlan: '',
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

  const handleSelectPlan = (plan: CheckoutForm['selectedPlan']) => {
    setFormData({ ...formData, selectedPlan: plan });
    
    // Generate menu based on plan
    if (plan.startsWith('3-day')) {
      setMenuData(generate3DayMenu());
    } else if (plan.startsWith('7-day')) {
      setMenuData(generate7DayMenu());
    }
    
    setShowMenuPreview(true);
    setTimeout(() => {
      document.getElementById('menu-preview')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleConfirmMenu = () => {
    setShowMenuPreview(false);
    setShowCheckout(true);
    setTimeout(() => {
      document.getElementById('checkout-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleCancelMenu = () => {
    setShowMenuPreview(false);
    setFormData({ ...formData, selectedPlan: '' });
  };

  // Chỉ bán gói cho đúng 1 người, không còn lựa chọn số người trong gia đình
  const selectedPeople: 1 = 1;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Đơn hàng đã được gửi! Chúng tôi sẽ liên hệ với bạn sớm.');
  };

  const getPlans = (people: number) => {
    // Gói cho 1 người: dùng đúng bảng giá mới
    if (people === 1) {
      const price3Day = 479000;
      const pricePerDay3 = 160000;

      const price7Day = 1049000;
      const pricePerDay7 = 150000;
      const price7DayFull = pricePerDay3 * 7; // giá tham chiếu nếu tính theo 160k/ngày
      const savings7Day = price7DayFull - price7Day;

      return [
        {
          id: '3-day-1' as const,
          name: '3 Ngày Tươi Mới',
          tagline: 'Dùng Thử Hoàn Hảo',
          price: price3Day,
          pricePerDay: pricePerDay3,
          people,
          features: [
            'Phù hợp để dùng thử dịch vụ',
            'Lựa chọn món ăn linh hoạt',
            '3 bữa AI tối ưu mỗi ngày',
            'Theo dõi dinh dưỡng đầy đủ',
            'Giao hàng miễn phí',
            'Hủy bất cứ lúc nào'
          ],
          gradient: 'from-[#2D958E] to-emerald-700',
          icon: Calendar,
          badge: 'Linh Hoạt Nhất'
        },
        {
          id: '7-day-1' as const,
          name: '7 Ngày Sức Sống',
          tagline: 'Chuyển Đổi Sức Khỏe',
          price: price7Day,
          pricePerDay: pricePerDay7,
          originalPricePerDay: pricePerDay3,
          savings: savings7Day,
          savingsPercent: Math.round((savings7Day / price7DayFull) * 100),
          people,
          features: [
            'Giá trị tốt nhất cho cam kết',
            'Cả tuần ăn uống lành mạnh',
            '3 bữa AI tối ưu mỗi ngày',
            'Phân tích sức khỏe nâng cao',
            'Khung giờ giao hàng ưu tiên',
            'Hỗ trợ dinh dưỡng chuyên biệt'
          ],
          gradient: 'from-[#FF8A5C] to-orange-700',
          icon: Heart,
          badge: 'Giá Trị Nhất',
          popular: true
        }
      ];
    }

    // Các trường hợp khác (nếu sau này mở lại gói gia đình) vẫn dùng công thức cũ
    const basePricePerDay = 140000;
    const discount7Day = 0.07;
    
    // Family discounts
    const familyDiscounts = {
      3: 0.15, // 15% off for 3 people
      4: 0.20, // 20% off for 4 people
      5: 0.25  // 25% off for 5 people
    };

    const familyDiscount = people > 1 ? familyDiscounts[people as 3 | 4 | 5] : 0;
    const adjustedPricePerDay = basePricePerDay * people * (1 - familyDiscount);

    const price3Day = adjustedPricePerDay * 3;
    const price7DayFull = basePricePerDay * people * 7;
    const price7Day = price7DayFull * (1 - discount7Day) * (1 - familyDiscount);
    const savings7Day = price7DayFull - price7Day;

    return [
      {
        id: `3-day-${people}` as const,
        name: '3 Ngày Tươi Mới',
        tagline: 'Dùng Thử Hoàn Hảo',
        price: price3Day,
        pricePerDay: adjustedPricePerDay,
        people,
        features: [
          'Phù hợp để dùng thử dịch vụ',
          'Lựa chọn món ăn linh hoạt',
          '3 bữa AI tối ưu mỗi ngày',
          'Theo dõi dinh dưỡng đầy đủ',
          'Giao hàng miễn phí',
          'Hủy bất cứ lúc nào'
        ],
        gradient: 'from-[#2D958E] to-emerald-700',
        icon: Calendar,
        badge: 'Linh Hoạt Nhất'
      },
      {
        id: `7-day-${people}` as const,
        name: '7 Ngày Sức Sống',
        tagline: 'Chuyển Đổi Sức Khỏe',
        price: price7Day,
        pricePerDay: price7Day / 7,
        originalPricePerDay: basePricePerDay * people,
        savings: savings7Day,
        savingsPercent: Math.round((savings7Day / price7DayFull) * 100),
        people,
        features: [
          'Giá trị tốt nhất cho cam kết',
          'Cả tuần ăn uống lành mạnh',
          '3 bữa AI tối ưu mỗi ngày',
          'Phân tích sức khỏe nâng cao',
          'Khung giờ giao hàng ưu tiên',
          'Hỗ trợ dinh dưỡng chuyên biệt'
        ],
        gradient: 'from-[#FF8A5C] to-orange-700',
        icon: Heart,
        badge: 'Giá Trị Nhất',
        popular: true
      }
    ];
  };

  const plans = getPlans(selectedPeople);

  const getPlanName = (planId: string) => {
    if (planId.startsWith('3-day')) return '3 Ngày Tươi Mới';
    if (planId.startsWith('7-day')) return '7 Ngày Sức Sống';
    return '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
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
            Bắt đầu chuyển đổi với dinh dưỡng AI phù hợp với sức khỏe chuyển hóa của bạn
          </p>
        </div>
      </section>

      {/* Đã bỏ phần chọn số người trong gia đình – gói mặc định cho 1 người */}

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'ring-4 ring-orange-400' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-bl-2xl font-semibold text-sm">
                    {plan.badge}
                  </div>
                )}

                <div className={`bg-gradient-to-r ${plan.gradient} p-8 text-white`}>
                  <Icon className="w-12 h-12 mb-4" />
                  <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    {plan.name}
                  </h3>
                  <p className="text-white/90 mb-6" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    {plan.tagline}
                  </p>

                  <div className="flex items-end gap-3">
                    <span className="text-5xl font-bold">
                      ₫{Math.round(plan.price / 1000)}K
                    </span>
                  </div>
                  <p className="text-white/90 mt-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    ₫{Math.round(plan.pricePerDay).toLocaleString()}/ngày
                    {'savingsPercent' in plan && ` · Tiết kiệm ${plan.savingsPercent}%`}
                  </p>
                  {plan.people > 1 && (
                    <p className="text-white/80 text-sm mt-1" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Cho {plan.people} người
                    </p>
                  )}
                </div>

                <div className="p-8">
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`bg-gradient-to-r ${plan.gradient} rounded-full p-1 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleSelectPlan(plan.id)}
                    className={`w-full py-4 bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-105`}
                    style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
                  >
                    Chọn {plan.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Menu Preview */}
        {showMenuPreview && (
          <div id="menu-preview" className="max-w-4xl mx-auto mt-16">
            <MenuPreview
              menu={menuData}
              planName={getPlanName(formData.selectedPlan)}
              onConfirm={handleConfirmMenu}
              onCancel={handleCancelMenu}
            />
          </div>
        )}

        {/* Checkout Form */}
        {showCheckout && (
          <div id="checkout-form" className="max-w-2xl mx-auto mt-16">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                Hoàn Tất Đơn Hàng
              </h2>
              <p className="text-gray-600 mb-8" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                Bạn đã chọn: <span className="font-semibold text-[#2D958E]">
                  {getPlanName(formData.selectedPlan)} ({selectedPeople} người)
                </span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Họ và Tên *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2D958E] focus:outline-none text-gray-900"
                    style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Số Điện Thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2D958E] focus:outline-none text-gray-900"
                    style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
                    placeholder="0912345678"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Địa Chỉ Giao Hàng *
                  </label>
                  <textarea
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2D958E] focus:outline-none text-gray-900 resize-none"
                    style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
                    placeholder="123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh"
                  />
                </div>

                {/* Dietary Preferences */}
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
                            ? formData.dietaryPreferences.filter(p => p !== pref)
                            : [...formData.dietaryPreferences, pref];
                          setFormData({ ...formData, dietaryPreferences: newPrefs });
                        }}
                        className={`px-4 py-2 rounded-lg border-2 transition-all text-sm font-semibold ${
                          formData.dietaryPreferences.includes(pref)
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                            : 'border-gray-200 text-gray-700 hover:border-emerald-300'
                        }`}
                        style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
                      >
                        {pref}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Allergies */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Dị Ứng Thực Phẩm
                  </label>
                  <input
                    type="text"
                    value={formData.allergies}
                    onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2D958E] focus:outline-none text-gray-900"
                    style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
                    placeholder="VD: Tôm, cua, sữa..."
                  />
                </div>

                {/* Portion Size */}
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
                        className={`p-4 border-2 rounded-xl transition-all duration-200 ${
                          formData.portionSize === size.value
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-gray-200 hover:border-emerald-300'
                        }`}
                      >
                        <p className={`font-semibold ${
                          formData.portionSize === size.value ? 'text-emerald-700' : 'text-gray-900'
                        }`} style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                          {size.label}
                        </p>
                        <p className="text-sm text-gray-600">{size.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Health Goals */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Mục Tiêu Sức Khỏe
                  </label>
                  <textarea
                    value={formData.healthGoals}
                    onChange={(e) => setFormData({ ...formData, healthGoals: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#2D958E] focus:outline-none text-gray-900 resize-none"
                    style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
                    placeholder="VD: Giảm cân 5kg, kiểm soát đường huyết, tăng cơ bắp..."
                  />
                </div>

                {/* Delivery Window */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Khung Giờ Giao Hàng * (Logistics Không Lãng Phí)
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, deliveryWindow: 'morning' })}
                      className={`p-4 border-2 rounded-xl transition-all duration-200 ${
                        formData.deliveryWindow === 'morning'
                          ? 'border-[#2D958E] bg-emerald-50'
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Clock className={`w-5 h-5 ${formData.deliveryWindow === 'morning' ? 'text-[#2D958E]' : 'text-gray-400'}`} />
                        <div className="text-left">
                          <p className="font-semibold text-gray-900" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                            Buổi Sáng
                          </p>
                          <p className="text-sm text-gray-600">6:00 - 8:00</p>
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, deliveryWindow: 'afternoon' })}
                      className={`p-4 border-2 rounded-xl transition-all duration-200 ${
                        formData.deliveryWindow === 'afternoon'
                          ? 'border-[#FF8A5C] bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Clock className={`w-5 h-5 ${formData.deliveryWindow === 'afternoon' ? 'text-[#FF8A5C]' : 'text-gray-400'}`} />
                        <div className="text-left">
                          <p className="font-semibold text-gray-900" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                            Buổi Chiều
                          </p>
                          <p className="text-sm text-gray-600">16:00 - 18:00</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-gradient-to-r from-emerald-50 to-orange-50 rounded-xl p-4 flex flex-wrap gap-4 justify-center">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#2D958E]" />
                    <span className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Thanh Toán An Toàn
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-[#2D958E]" />
                    <span className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Giao Hàng Miễn Phí
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-[#2D958E]" />
                    <span className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Đảm Bảo Sức Khỏe
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!formData.deliveryWindow || !formData.portionSize}
                  className="w-full py-4 bg-gradient-to-r from-[#2D958E] to-[#FF8A5C] hover:from-emerald-700 hover:to-orange-700 text-white rounded-xl font-semibold text-lg shadow-lg shadow-emerald-600/20 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
