import { useEffect } from 'react';
import { Link } from 'react-router';
import { Play, Sparkles, Leaf, Calendar, Check, ArrowRight } from 'lucide-react';
import NutritionCalculator from '../components/NutritionCalculator';
import VideoFeed from '../components/VideoFeed';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard'
import { products } from '../../data/products'

export default function Home() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden mt-16">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-600">
          <div className="absolute inset-0 bg-black/20" />
          {/* Animated overlay to simulate video */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-400/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse delay-150" />
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Play className="w-4 h-4 text-orange-300" />
            <span className="text-sm text-white font-medium" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              Công Nghệ Video-to-Menu
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
            VitaMeal
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl font-light" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
            Bộ bữa ăn tươi, lành mạnh lấy cảm hứng từ nội dung ẩm thực tốt nhất thế giới
          </p>
          
          <Link to="/subscription" className="group px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full font-semibold text-lg shadow-2xl shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-3" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
            Đăng Ký Ngay
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
            <div className="w-1.5 h-2 bg-white/60 rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </section>

      {/* Video Feed Section */}
      <VideoFeed />

      {/* Nutrition Calculator */}
      <NutritionCalculator />

      {/* Product Plans Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              Chọn Gói Của Bạn
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              Nguyên liệu tươi giao đến tận nhà
            </p>
          </div>

          {/* Individual Plans */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              Gói Cá Nhân
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* 3-Day Pack */}
              <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-emerald-200">
                <div className="absolute top-0 right-8 -translate-y-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-semibold rounded-full shadow-lg" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Phổ Biến
                  </span>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    3 Ngày Tươi Mới
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Hoàn hảo để dùng thử VitaMeal
                  </p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-emerald-600">₫479K</span>
                    <span className="text-gray-500" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>/gói</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    ~₫160,000 mỗi ngày
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      3 bữa ăn tươi mỗi ngày
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Dinh dưỡng tối ưu bằng AI
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Giao hàng miễn phí ở TP.HCM
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Hủy bất cứ lúc nào
                    </span>
                  </li>
                </ul>
                
                <Link to="/subscription" className="block w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-colors duration-200 shadow-lg shadow-emerald-600/20 text-center" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                  Bắt Đầu
                </Link>
              </div>

              {/* 7-Day Pack */}
              <div className="group relative bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                <div className="absolute top-0 right-8 -translate-y-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-full shadow-lg" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Giá Trị Nhất
                  </span>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    7 Ngày Sức Sống
                  </h3>
                  <p className="text-emerald-100 leading-relaxed" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Tạm biệt căng thẳng lên kế hoạch bữa ăn và chào đón dinh dưỡng dễ dàng. Mỗi sáng, thức dậy với nguyên liệu đã chia sẵn phần, AI tính toán với không lãng phí thực phẩm. Không cần đoán calories hay macros—chỉ cần lấy, nấu và cung cấp năng lượng cho thành công.
                  </p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">₫1.049K</span>
                    <span className="text-emerald-100" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>/gói</span>
                  </div>
                  <p className="text-sm text-emerald-100 mt-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    ~₫150,000 mỗi ngày · Tiết kiệm 7%
                  </p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                    <span className="text-white" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Giao hàng tươi mỗi sáng trước 8 giờ
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                    <span className="text-white" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Nguyên liệu chia sẵn—không lãng phí thực phẩm
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                    <span className="text-white" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Dinh dưỡng AI tính toán (calories & macros)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                    <span className="text-white" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Cân bằng hoàn hảo cho dân văn phòng bận rộn
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                    <span className="text-white" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Hỗ trợ ưu tiên & kế hoạch bữa ăn cá nhân hóa
                    </span>
                  </li>
                </ul>
                
                <Link to="/subscription" className="block w-full py-4 bg-white hover:bg-orange-50 text-emerald-700 rounded-xl font-semibold transition-colors duration-200 shadow-lg text-center" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                  Bắt Đầu
                </Link>
              </div>
            </div>
          </div>

          {/* === REMOVE family-package block and replace with single-person list === */}
          <div className="pt-12 pb-12">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-2xl font-semibold mb-4">Gói cho 1 người</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter(p => p.servings === 1)
                  .map(product => (
                    <ProductCard key={product.id} product={product} onAdd={() => {/* handle add */}} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Feature Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                Công Nghệ AI
              </span>
            </div>
            
            <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              Từ Video Đến Bàn Ăn
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              AI độc quyền của chúng tôi phân tích video ẩm thực thịnh hành để trích xuất dữ liệu dinh dưỡng, công thức và kỹ thuật chế biến—mang đến cho bạn những bữa ăn tốt nhất từ khắp nơi trên thế giới.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Play className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                Phân Tích Video
              </h3>
              <p className="text-gray-300" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                Chúng tôi quét hàng nghìn video nấu ăn mỗi ngày, xác định các công thức phổ biến và bổ dưỡng nhất.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                Trích Xuất Dinh Dưỡng
              </h3>
              <p className="text-gray-300" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                AI tiên tiến tính toán chính xác khẩu phần, calories và chất dinh dưỡng lớn từ mỗi video.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                Giao Hàng Tươi
              </h3>
              <p className="text-gray-300" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                Nguyên liệu đã chia sẵn phần đến tận cửa nhà, sẵn sàng để tái tạo công thức viral tại nhà.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              Về VitaMeal
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-orange-500 mx-auto mb-8" />
          </div>

          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-emerald-100/50">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                VitaMeal là một <span className="font-semibold text-emerald-700">startup Công nghệ Đổi mới</span> tiên phong ở giao điểm giữa nội dung kỹ thuật số và sức khỏe cộng đồng. Chúng tôi có sứ mệnh thu hẹp khoảng cách giữa những video ẩm thực truyền cảm hứng bạn xem mỗi ngày và những bữa ăn bổ dưỡng mà cơ thể bạn thực sự cần.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                Trong bối cảnh đô thị nhịp độ nhanh của Việt Nam, chúng tôi nhận ra rằng <span className="font-semibold text-emerald-700">những chuyên gia bận rộn</span> thường hy sinh dinh dưỡng đúng đắn vì sự tiện lợi. Khoảng cách lối sống này góp phần làm tăng tỷ lệ bệnh chuyển hóa—béo phì, tiểu đường và các biến chứng sức khỏe liên quan có thể được ngăn ngừa bằng dinh dưỡng cân bằng, nhất quán.
              </p>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                Giải pháp của chúng tôi đơn giản nhưng mang tính cách mạng: <span className="font-semibold text-emerald-700">Bữa Ăn Tươi Hàng Ngày</span> được giao đến tận cửa nhà bạn mỗi sáng. Sử dụng công nghệ AI độc quyền, chúng tôi chuyển đổi nội dung ẩm thực thịnh hành thành bộ bữa ăn được chia phần chính xác, tối ưu hóa dinh dưỡng. Mỗi bữa ăn được thiết kế để cung cấp năng lượng cho tham vọng của bạn đồng thời bảo vệ sức khỏe lâu dài—không cần lập kế hoạch, không lãng phí, không thỏa hiệp.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl">
                  <div className="text-3xl font-bold text-emerald-700 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Đáng Tin Cậy
                  </div>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Được hỗ trợ bởi khoa học dinh dưỡng và tiêu chuẩn an toàn thực phẩm
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl">
                  <div className="text-3xl font-bold text-orange-600 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Đổi Mới
                  </div>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Dinh dưỡng hỗ trợ AI từ mạng xã hội đến bếp của bạn
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl">
                  <div className="text-3xl font-bold text-emerald-700 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Quan Tâm Sức Khỏe
                  </div>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Ngăn ngừa bệnh tật thông qua xuất sắc dinh dưỡng hàng ngày
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              Danh Mục Thực Đơn
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              Được tuyển chọn cho mọi lối sống
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-3xl aspect-square cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-700" />
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=800&fit=crop" 
                alt="Bữa ăn lành mạnh"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                  Lành Mạnh
                </h3>
                <p className="text-white/90" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                  Dinh dưỡng cân bằng cho sức khỏe hàng ngày
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl aspect-square cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700" />
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop" 
                alt="Bữa ăn Keto"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                  Keto
                </h3>
                <p className="text-white/90" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                  Kế hoạch bữa ăn ít carb, nhiều chất béo
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl aspect-square cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 to-emerald-900" />
              <img 
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=800&fit=crop" 
                alt="Chế độ ăn cá nhân hóa"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                  Cá Nhân Hóa
                </h3>
                <p className="text-white/90" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                  Kế hoạch tùy chỉnh dựa trên mục tiêu của bạn
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Schedule */}
      <section className="py-24 px-6 bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              Hệ Thống Giao Hàng 2 Đợt
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              Đảm bảo độ tươi tối đa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Đợt Sáng
                    </h3>
                    <p className="text-emerald-100">6:00 - 8:00</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                    <span style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Bữa sáng & bữa trưa
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                    <span style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Chuẩn bị cùng buổi sáng
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
                    <span style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Giao hàng kiểm soát nhiệt độ
                    </span>
                  </li>
                </ul>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-emerald-600 rotate-90" />
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white shadow-xl md:mt-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Đợt Chiều
                    </h3>
                    <p className="text-orange-100">16:00 - 18:00</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-200 mt-0.5 flex-shrink-0" />
                    <span style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Bữa tối & bữa ăn ngày hôm sau
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-200 mt-0.5 flex-shrink-0" />
                    <span style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Tươi từ bếp của chúng tôi
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-200 mt-0.5 flex-shrink-0" />
                    <span style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Bao bì cách nhiệt
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-100 rounded-full">
              <div className="w-3 h-3 bg-emerald-600 rounded-full animate-pulse" />
              <span className="text-emerald-900 font-semibold" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                Có sẵn tại TP.HCM, Hà Nội & Đà Nẵng
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
            Bắt Đầu Hành Trình Sức Khỏe
          </h2>
          <p className="text-xl text-emerald-100 mb-10" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
            Tham gia hàng nghìn chuyên gia đô thị đang chuyển đổi sức khỏe, từng bữa ăn một
          </p>
          
          <Link to="/subscription" className="group px-12 py-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full font-semibold text-lg shadow-2xl shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
            Đăng Ký Ngay
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-emerald-200 text-sm" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
            <span>🌱 100% Nguyên Liệu Tươi</span>
            <span>🚀 Giao Hàng Nhanh</span>
            <span>❌ Hủy Bất Cứ Lúc Nào</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
            © 2024 VitaMeal. Nuôi dưỡng những chuyên gia đô thị Việt Nam.
          </p>
        </div>
      </footer>
    </div>
  );
}
