import { useState } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';

export default function NutritionCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [result, setResult] = useState<{
    dailyCalories: number;
    recommendedPlan: string;
  } | null>(null);

  const calculateCalories = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (!w || !h || !a || w <= 0 || h <= 0 || a <= 0) {
      alert('Vui lòng nhập giá trị hợp lệ cho tất cả các trường');
      return;
    }

    // Mifflin-St Jeor Formula
    let bmr: number;
    if (gender === 'male') {
      bmr = (10 * w) + (6.25 * h) - (5 * a) + 5;
    } else {
      bmr = (10 * w) + (6.25 * h) - (5 * a) - 161;
    }

    // Activity multipliers
    const activityMultipliers: { [key: string]: number } = {
      sedentary: 1.2,
      moderate: 1.55,
      active: 1.725,
    };

    const dailyCalories = Math.round(bmr * activityMultipliers[activityLevel]);

    // Recommend plan based on calories
    const recommendedPlan = dailyCalories < 1750 ? 'Gói 1500 kcal' : 'Gói 2000 kcal';

    setResult({ dailyCalories, recommendedPlan });
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-orange-50/30 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
            <Calculator className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-900" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              Máy Tính AI
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
            Máy Tính Dinh Dưỡng
          </h2>
          <p className="text-xl text-gray-600" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
            Khám phá nhu cầu calo hàng ngày lý tưởng và nhận đề xuất gói bữa ăn cá nhân hóa
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-8 text-white">
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              Tính Toán Nhu Cầu Hàng Ngày
            </h3>
            <p className="text-emerald-100" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              Sử dụng Công Thức Mifflin-St Jeor được chứng minh khoa học
            </p>
          </div>

          <div className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Weight Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                  Cân Nặng (kg)
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="VD: 70"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                  style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
                />
              </div>

              {/* Height Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                  Chiều Cao (cm)
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="VD: 170"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                  style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
                />
              </div>

              {/* Age Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                  Tuổi
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="VD: 30"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-gray-900"
                  style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
                />
              </div>

              {/* Gender Select */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                  Giới Tính
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-gray-900 bg-white"
                  style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
                >
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                </select>
              </div>
            </div>

            {/* Activity Level */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                Mức Độ Hoạt Động
              </label>
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-gray-900 bg-white"
                style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
              >
                <option value="sedentary">Ít Vận Động (Ít hoặc không tập thể dục)</option>
                <option value="moderate">Trung Bình (Tập 3-5 ngày/tuần)</option>
                <option value="active">Năng Động (Tập 6-7 ngày/tuần)</option>
              </select>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateCalories}
              className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-xl font-semibold text-lg shadow-lg shadow-emerald-600/30 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3"
              style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
            >
              <Calculator className="w-5 h-5" />
              Tính Nhu Cầu Dinh Dưỡng
            </button>

            {/* Results */}
            {result && (
              <div className="mt-8 p-8 bg-gradient-to-br from-emerald-50 to-orange-50 rounded-2xl border-2 border-emerald-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Kết Quả Của Bạn
                  </h4>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-sm font-semibold text-gray-600 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Nhu Cầu Calo Hàng Ngày
                    </p>
                    <p className="text-4xl font-bold text-emerald-700">{result.dailyCalories}</p>
                    <p className="text-sm text-gray-500 mt-1" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      kcal mỗi ngày
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-sm font-semibold text-gray-600 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Gói VitaMeal Được Đề Xuất
                    </p>
                    <p className="text-4xl font-bold text-orange-600">{result.recommendedPlan}</p>
                    <p className="text-sm text-gray-500 mt-1" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Hoàn hảo cho lối sống của bạn
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/60 backdrop-blur-sm rounded-xl">
                  <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    <span className="font-semibold">💡 Đề Xuất:</span> Dựa trên nhu cầu calo hàng ngày của bạn, 
                    <span className="font-semibold text-emerald-700"> {result.recommendedPlan}</span> của chúng tôi 
                    được điều chỉnh hoàn hảo để hỗ trợ mục tiêu sức khỏe của bạn. Mỗi bữa ăn được chia sẵn phần với 
                    macros tính toán bằng AI để ngăn ngừa bệnh chuyển hóa đồng thời giữ cho bạn tràn đầy năng lượng suốt cả ngày.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
