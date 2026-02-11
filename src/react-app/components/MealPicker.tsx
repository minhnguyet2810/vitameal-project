import { useState } from 'react';
import { Coffee, Sun, Moon, Check } from 'lucide-react';
import type { DayMenu, Meal } from '../../data/menu';
import { breakfasts, lunches, dinners } from '../../data/menu';

type MealType = 'breakfast' | 'lunch' | 'dinner';

interface MealPickerProps {
  menu: DayMenu[];
  onMenuChange: (menu: DayMenu[]) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function MealPicker({ menu, onMenuChange, onConfirm, onCancel }: MealPickerProps) {
  const [activeSlot, setActiveSlot] = useState<{ dayIdx: number; type: MealType } | null>(null);

  const getMealList = (type: MealType): Meal[] => {
    if (type === 'breakfast') return breakfasts;
    if (type === 'lunch') return lunches;
    return dinners;
  };

  const handleSelectMeal = (dayIdx: number, type: MealType, meal: Meal) => {
    const updated = [...menu];
    updated[dayIdx] = { ...updated[dayIdx], [type]: meal };
    onMenuChange(updated);
    setActiveSlot(null);
  };

  const renderMealCard = (meal: Meal) => (
    <div key={meal.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-emerald-50">
      <img src={meal.imageUrl} alt="" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900 truncate" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
          {meal.name}
        </p>
        <p className="text-xs text-gray-500">{meal.calories} kcal · {meal.protein}g đạm</p>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-6 text-white">
        <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
          Chọn Món Ăn Theo Ý Bạn
        </h2>
        <p className="text-emerald-100 text-sm" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
          Bấm vào từng ô để chọn món cho từng bữa
        </p>
      </div>

      <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
        {menu.map((day, dayIdx) => (
          <div key={day.day} className="border border-gray-200 rounded-2xl overflow-hidden">
            <div className="bg-gray-50 px-4 py-2 font-semibold text-gray-800" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              Ngày {day.day} — {day.date}
            </div>
            <div className="grid grid-cols-3 gap-2 p-4">
              {(['breakfast', 'lunch', 'dinner'] as const).map((type) => {
                const meal = day[type];
                const isActive = activeSlot?.dayIdx === dayIdx && activeSlot?.type === type;
                const Icon = type === 'breakfast' ? Coffee : type === 'lunch' ? Sun : Moon;
                const labels = { breakfast: 'Bữa Sáng', lunch: 'Bữa Trưa', dinner: 'Bữa Tối' };
                return (
                  <div key={type} className="relative">
                    <button
                      type="button"
                      onClick={() => setActiveSlot(isActive ? null : { dayIdx, type })}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                        isActive ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-emerald-600" />
                        <span className="text-xs font-semibold text-gray-500">{labels[type]}</span>
                      </div>
                      <p className="text-sm font-medium text-gray-900 line-clamp-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                        {meal.name}
                      </p>
                    </button>

                    {isActive && (
                      <div className="absolute top-full left-0 right-0 mt-1 z-20 bg-white border-2 border-emerald-500 rounded-xl shadow-xl p-4 max-h-64 overflow-y-auto">
                        <p className="text-xs font-semibold text-gray-500 mb-2">Chọn món — {labels[type]}</p>
                        <div className="space-y-1">
                          {getMealList(type).map((m) => (
                            <button
                              key={m.id}
                              type="button"
                              onClick={() => handleSelectMeal(dayIdx, type, m)}
                              className="w-full text-left border border-gray-200 rounded-lg p-3 hover:bg-emerald-50 hover:border-emerald-300 transition-all flex items-center gap-3"
                            >
                              {renderMealCard(m)}
                              {meal.id === m.id && <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 bg-gray-50 border-t border-gray-200 flex gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-6 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50"
          style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
        >
          Chọn Gói Khác
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="flex-1 px-6 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-semibold hover:from-emerald-700 flex items-center justify-center gap-2"
          style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
        >
          <Check className="w-5 h-5" />
          Xác Nhận & Thanh Toán
        </button>
      </div>
    </div>
  );
}
