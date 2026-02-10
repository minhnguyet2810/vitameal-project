import { useState, useEffect } from 'react'
import { Filter, Search, Sparkles } from 'lucide-react'
import Header from '../components/Header'
import MealCard from '../components/MealCard'
import { meals, type Meal } from '../data/meals'

type Category = 'All' | 'Healthy' | 'Keto' | 'Diabetes-Friendly' | 'Personalized'

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>(meals)
  const [addedMeals, setAddedMeals] = useState<Set<string>>(new Set())

  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }, [])

  useEffect(() => {
    let filtered = meals.slice()

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(meal => meal.category === selectedCategory)
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      filtered = filtered.filter(meal =>
        (meal.name ?? '').toLowerCase().includes(q) ||
        (meal.description ?? '').toLowerCase().includes(q)
      )
    }

    setFilteredMeals(filtered)
  }, [selectedCategory, searchQuery])

  const handleAddToPlan = (meal: Meal) => {
    setAddedMeals(prev => new Set(prev).add(meal.id))
    setTimeout(() => {
      setAddedMeals(prev => {
        const newSet = new Set(prev)
        newSet.delete(meal.id)
        return newSet
      })
    }, 2000)
  }

  const categories: { value: Category; label: string }[] = [
    { value: 'All', label: 'Tất Cả' },
    { value: 'Healthy', label: 'Lành Mạnh' },
    { value: 'Keto', label: 'Keto' },
    { value: 'Diabetes-Friendly', label: 'Thân Thiện Tiểu Đường' },
    { value: 'Personalized', label: 'Cá Nhân Hóa' }
  ]

  const categoryColors: { [key in Category]: string } = {
    All: 'from-gray-600 to-gray-700',
    Healthy: 'from-emerald-600 to-emerald-700',
    Keto: 'from-purple-600 to-purple-700',
    'Diabetes-Friendly': 'from-blue-600 to-blue-700',
    Personalized: 'from-orange-600 to-orange-700'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-900" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              Phân Tích Dinh Dưỡng AI
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
            Khám Phá
            <span className="block mt-2 bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text text-transparent">
              Món Ăn Lành Mạnh
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
            Duyệt bộ sưu tập món ăn bổ dưỡng được tuyển chọn với phân tích dinh dưỡng AI thời gian thực
          </p>

          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm món ăn..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-emerald-500 focus:outline-none text-gray-900 shadow-lg"
              style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
            />
          </div>
        </div>
      </section>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-emerald-600" />
                <h2 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                  Lọc Theo Danh Mục
                </h2>
              </div>

              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                      selectedCategory === category.value
                        ? `bg-gradient-to-r ${categoryColors[category.value]} text-white shadow-lg transform scale-105`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                  Hiển thị <span className="font-bold text-emerald-600">{filteredMeals.length}</span> trong số {meals.length} món
                </p>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            {filteredMeals.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                  Không tìm thấy món ăn phù hợp với tiêu chí của bạn
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredMeals.map((meal) => (
                  <MealCard key={meal.id} meal={meal} onAddToPlan={handleAddToPlan} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {addedMeals.size > 0 && (
        <div className="fixed bottom-8 right-8 bg-emerald-600 text-white px-6 py-4 rounded-xl shadow-2xl animate-bounce">
          <p className="font-semibold" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
            ✓ Đã thêm vào kế hoạch!
          </p>
        </div>
      )}
    </div>
  )
}
