import React from 'react'
import type { Meal } from '../data/meals'

type Props = {
  meal: Meal
  onAddToPlan?: (meal: Meal) => void
}

export default function MealCard({ meal, onAddToPlan }: Props) {
  return (
    <div className="meal-card bg-white rounded-xl shadow p-4">
      {meal.thumbnailUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={meal.thumbnailUrl}
          alt={meal.name ?? 'Món ăn'}
          className="w-full h-40 object-cover rounded-md mb-3"
        />
      ) : null}

      <h3 className="font-semibold text-lg mb-1">{meal.name}</h3>
      {meal.description ? <p className="text-sm text-gray-600 mb-3">{meal.description}</p> : null}

      {/* Remove any family-package UI — always show single-person */}
      <p className="text-sm text-gray-500 mb-3">Phục vụ: 1 người</p>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => onAddToPlan?.(meal)}
          className="px-4 py-2 bg-emerald-600 text-white rounded-md font-medium"
        >
          Thêm vào kế hoạch
        </button>

        {meal.nutrition ? (
          <div className="text-right text-sm text-gray-600">
            <div>{meal.nutrition?.calories ?? '-'} Kcal</div>
            <div>Đạm {meal.nutrition?.protein ?? '-'}g</div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
