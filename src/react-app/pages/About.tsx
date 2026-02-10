import { useEffect } from 'react';
import { Sparkles, Heart, Leaf, TrendingUp, Truck, Brain, Users, Target } from 'lucide-react';
import Header from '../components/Header';

export default function About() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const stats = [
    { value: '75.5%', label: 'Tỷ lệ béo phì ở bệnh nhân Tiểu đường Typ 2 (Việt Nam 2024-2025)', color: 'text-red-600' },
    { value: '40%', label: 'Giảm lãng phí thực phẩm thông qua logistics JIT được hỗ trợ AI', color: 'text-emerald-600' },
    { value: '2000+', label: 'Cuộc sống được chuyển đổi thông qua dinh dưỡng cá nhân hóa', color: 'text-orange-600' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Dinh Dưỡng Hỗ Trợ AI',
      description: 'Thuật toán tiên tiến phân tích hồ sơ chuyển hóa của bạn để tạo bữa ăn với khẩu phần hoàn hảo, tối ưu hóa kết quả sức khỏe của bạn',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Truck,
      title: 'Logistics Đúng Lúc',
      description: 'Hệ thống giao hàng không lãng phí của chúng tôi đảm bảo bữa ăn tươi ngon đến đúng lúc cần thiết, loại bỏ hư hỏng và tác động môi trường',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Heart,
      title: 'Tập Trung Sức Khỏe Chuyển Hóa',
      description: 'Kế hoạch bữa ăn chuyên biệt được thiết kế để giải quyết bệnh tiểu đường, béo phì và hội chứng chuyển hóa thông qua dinh dưỡng dựa trên bằng chứng',
      gradient: 'from-blue-500 to-blue-600'
    }
  ];

  const team = [
    {
      role: 'Đổi Mới',
      description: 'Kết nối xu hướng kỹ thuật số với khoa học sức khỏe cộng đồng'
    },
    {
      role: 'Công Nghệ',
      description: 'Xây dựng hệ thống AI hiểu nhu cầu sức khỏe của người Việt'
    },
    {
      role: 'Dinh Dưỡng',
      description: 'Tạo ra bữa ăn được hỗ trợ bởi nghiên cứu sức khỏe chuyển hóa'
    }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-emerald-50 via-white to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span className="text-sm font-semibold text-emerald-900">Sứ Mệnh Của Chúng Tôi</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Kết Nối Nội Dung Kỹ Thuật Số & 
            <span className="block mt-2 text-emerald-600">Sức Khỏe Cộng Đồng</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            VitaMeal ra đời từ một quan sát đơn giản: trong khi TikTok Shop đã cách mạng hóa cách Việt Nam khám phá sản phẩm, cuộc khủng hoảng sức khỏe chuyển hóa của chúng ta lại trở nên trầm trọng hơn. Chúng tôi thấy cơ hội sử dụng cùng mô hình tương tác lan truyền—nhưng vì điều tốt đẹp.
          </p>
        </div>
      </section>

      {/* The Crisis */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-6">
                <Target className="w-4 h-4 text-red-700" />
                <span className="text-sm font-semibold text-red-900">Vấn Đề</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Một Cuộc Khủng Hoảng Sức Khỏe Ẩn Giấu
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Tại Việt Nam (2024-2025), <span className="font-bold text-red-600">75,5% bệnh nhân Tiểu đường Typ 2</span> được phân loại là béo phì. Đây không chỉ là một con số thống kê—đó là hàng triệu người bị mắc kẹt trong vòng luẩn quẩn của dinh dưỡng kém, hạn chế tiếp cận thực phẩm lành mạnh và lời khuyên về chế độ ăn mâu thuẫn.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Trong khi mạng xã hội cung cấp cho chúng ta vô số nội dung về thực phẩm thịnh hành, nó hiếm khi giải quyết cuộc khủng hoảng sức khỏe chuyển hóa đang ảnh hưởng đến cộng đồng của chúng ta. Chúng tôi biết phải có một cách tốt hơn.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <div key={index} className="border-l-4 border-emerald-600 pl-6">
                    <p className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</p>
                    <p className="text-gray-700">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
              <Leaf className="w-4 h-4 text-emerald-700" />
              <span className="text-sm font-semibold text-emerald-900">Cách Tiếp Cận Của Chúng Tôi</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Công Nghệ Kết Hợp Khoa Học Dinh Dưỡng
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chúng tôi kết hợp mô hình tương tác của mạng xã hội với khoa học sức khỏe nghiêm ngặt, tạo ra một hệ thống làm cho ăn uống lành mạnh trở nên hấp dẫn như cuộn qua các video.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl">
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovation Details */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop" 
                alt="Nguyên liệu tươi ngon lành mạnh"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-orange-700" />
                <span className="text-sm font-semibold text-orange-900">Đổi Mới Không Lãng Phí</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Kiểm Soát Khẩu Phần Tối Ưu Bằng AI
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                AI độc quyền của chúng tôi phân tích hàng nghìn điểm dữ liệu—tỷ lệ chuyển hóa của bạn, mức độ hoạt động, mục tiêu sức khỏe, và thậm chí cả thời tiết—để xác định khẩu phần chính xác bạn cần. Không nhiều hơn, không ít hơn.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Kết hợp với logistics Đúng Lúc của chúng tôi, chúng tôi đã giảm 40% lãng phí thực phẩm so với các dịch vụ bữa ăn truyền thống, đồng thời đảm bảo mỗi bữa ăn đến tươi ngon và đúng thời điểm.
              </p>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-sm text-gray-600 mb-2">Chỉ Số Tác Động</p>
                <p className="text-3xl font-bold text-emerald-600 mb-1">2,5 tấn</p>
                <p className="text-gray-700">Lãng phí thực phẩm được ngăn chặn hàng tháng thông qua logistics thông minh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4 text-blue-700" />
              <span className="text-sm font-semibold text-blue-900">Đội Ngũ Của Chúng Tôi</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Được Xây Dựng Bởi Những Người Đổi Mới Cho Những Người Đổi Mới
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chúng tôi là một đội ngũ đa ngành được hợp nhất bởi một mục tiêu duy nhất: làm cho sức khỏe chuyển hóa trở nên dễ tiếp cận với mọi người Việt thông qua công nghệ và khoa học.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{member.role[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{member.role}</h3>
                <p className="text-gray-700 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Tham Gia Cuộc Cách Mạng Sức Khỏe
          </h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed">
            Hãy là một phần của giải pháp. Chuyển đổi sức khỏe của bạn đồng thời giúp chúng tôi chứng minh rằng công nghệ và khoa học dinh dưỡng có thể giải quyết cuộc khủng hoảng sức khỏe chuyển hóa của Việt Nam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/subscription"
              className="px-10 py-4 bg-white text-emerald-700 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              Bắt Đầu Hành Trình
            </a>
            <a 
              href="/menu"
              className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-emerald-700 transition-all duration-300"
            >
              Khám Phá Món Ăn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
