import { useState } from 'react';
import { Coffee, Sun, Moon, Flame, Check, ChevronRight } from 'lucide-react';
import { DayMenu } from '../../data/menu';

interface MenuPreviewProps {
  menu: DayMenu[];
  planName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function MenuPreview({ menu, planName, onConfirm, onCancel }: MenuPreviewProps) {
  const [selectedDay, setSelectedDay] = useState(0);

  const totalCalories = menu.reduce((total, day) => 
    total + day.breakfast.calories + day.lunch.calories + day.dinner.calories, 0
  );
  const avgCaloriesPerDay = Math.round(totalCalories / menu.length);

  const currentDay = menu[selectedDay];

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-8 text-white">
        <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
          Thực Đơn {planName}
        </h2>
        <p className="text-emerald-100 mb-4" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
          Xem trước thực đơn của bạn - {menu.length} ngày dinh dưỡng cân bằng
        </p>
        <div className="flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-300" />
            <div>
              <p className="text-xs text-emerald-100">Trung bình mỗi ngày</p>
              <p className="text-xl font-bold">{avgCaloriesPerDay} kcal</p>
            </div>
          </div>
          <div className="h-10 w-px bg-white/30" />
          <div>
            <p className="text-xs text-emerald-100">Tổng calo</p>
            <p className="text-xl font-bold">{totalCalories.toLocaleString()} kcal</p>
          </div>
        </div>
      </div>

      {/* Day Selector */}
      <div className="border-b border-gray-200 bg-gray-50 px-6 py-4 overflow-x-auto">
        <div className="flex gap-3 min-w-max">
          {menu.map((day, index) => (
            <button
              key={day.day}
              onClick={() => setSelectedDay(index)}
              className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                selectedDay === index
                  ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
            >
              Ngày {day.day}
            </button>
          ))}
        </div>
      </div>

      {/* Current Day Info */}
      <div className="px-6 py-4 bg-emerald-50 border-b border-emerald-100">
        <p className="text-emerald-800 font-semibold text-lg" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
          {currentDay.date}
        </p>
      </div>

      {/* Meals */}
      <div className="p-6 space-y-6 max-h-[500px] overflow-y-auto">
        {/* Breakfast */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-6 border border-orange-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <Coffee className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                Bữa Sáng
              </h3>
              <p className="text-sm text-gray-600">7:00 - 9:00</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              src={currentDay.breakfast.imageUrl}
              alt={currentDay.breakfast.name}
              className="w-24 h-24 rounded-xl object-cover"
            />
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                {currentDay.breakfast.name}
              </h4>
              <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                {currentDay.breakfast.description}
              </p>
              <div className="flex gap-3 text-xs">
                <span className="px-2 py-1 bg-orange-200 text-orange-800 rounded-full font-semibold">
                  {currentDay.breakfast.calories} kcal
                </span>
                <span className="px-2 py-1 bg-white/80 text-gray-700 rounded-full font-semibold">
                  {currentDay.breakfast.protein}g đạm
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Lunch */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-6 border border-amber-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                Bữa Trưa
              </h3>
              <p className="text-sm text-gray-600">12:00 - 13:00</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              src={currentDay.lunch.imageUrl}
              alt={currentDay.lunch.name}
              className="w-24 h-24 rounded-xl object-cover"
            />
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                {currentDay.lunch.name}
              </h4>
              <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                {currentDay.lunch.description}
              </p>
              <div className="flex gap-3 text-xs">
                <span className="px-2 py-1 bg-amber-200 text-amber-800 rounded-full font-semibold">
                  {currentDay.lunch.calories} kcal
                </span>
                <span className="px-2 py-1 bg-white/80 text-gray-700 rounded-full font-semibold">
                  {currentDay.lunch.protein}g đạm
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dinner */}
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-2xl p-6 border border-indigo-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <Moon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                Bữa Tối
              </h3>
              <p className="text-sm text-gray-600">18:00 - 20:00</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              src={currentDay.dinner.imageUrl}
              alt={currentDay.dinner.name}
              className="w-24 h-24 rounded-xl object-cover"
            />
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                {currentDay.dinner.name}
              </h4>
              <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                {currentDay.dinner.description}
              </p>
              <div className="flex gap-3 text-xs">
                <span className="px-2 py-1 bg-indigo-200 text-indigo-800 rounded-full font-semibold">
                  {currentDay.dinner.calories} kcal
                </span>
                <span className="px-2 py-1 bg-white/80 text-gray-700 rounded-full font-semibold">
                  {currentDay.dinner.protein}g đạm
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Total */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-emerald-100 text-sm mb-1" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                Tổng calo ngày {currentDay.day}
              </p>
              <p className="text-3xl font-bold">
                {currentDay.breakfast.calories + currentDay.lunch.calories + currentDay.dinner.calories} kcal
              </p>
            </div>
            <div className="text-right">
              <p className="text-emerald-100 text-sm mb-1" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                Tổng protein
              </p>
              <p className="text-3xl font-bold">
                {currentDay.breakfast.protein + currentDay.lunch.protein + currentDay.dinner.protein}g
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Hint */}
      {menu.length > 1 && (
        <div className="px-6 py-3 bg-emerald-50 border-t border-emerald-100">
          <p className="text-center text-sm text-emerald-700 flex items-center justify-center gap-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
            Chọn ngày bên trên để xem thực đơn chi tiết <ChevronRight className="w-4 h-4" />
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="p-6 bg-gray-50 border-t border-gray-200 flex gap-4">
        <button
          onClick={onCancel}
          className="flex-1 px-6 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
        >
          Chọn Gói Khác
        </button>
        <button
          onClick={onConfirm}
          className="flex-1 px-6 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all shadow-lg flex items-center justify-center gap-2"
          style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
        >
          <Check className="w-5 h-5" />
          Xác Nhận & Tiếp Tục
        </button>
      </div>
    </div>
  );
}
