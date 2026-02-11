export interface Meal {
  id: string;
  name: string;
  // legacy numeric fields (used by breakfasts/lunches/dinners)
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  // richer fields (used by `meals` list)
  description?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  category?: 'Healthy' | 'Keto' | 'Diabetes-Friendly' | 'Personalized';
  nutrition?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  ingredients?: string[];
  prepTime?: number;
  imageUrl?: string; // used by breakfasts/lunches/dinners items
}

export interface DayMenu {
  day: number;
  date: string;
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
}

export const breakfasts: Meal[] = [
  {
    id: 'b1',
    name: 'Trứng chiên rau củ và bánh mì nguyên cám',
    calories: 320,
    protein: 18,
    carbs: 35,
    fat: 12,
    description: 'Trứng chiên với rau cầu vồng, cà chua bi, kèm bánh mì nguyên cám nướng',
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400'
  },
  {
    id: 'b2',
    name: 'Yến mạch chuối và hạnh nhân',
    calories: 280,
    protein: 12,
    carbs: 42,
    fat: 8,
    description: 'Yến mạch nấu với sữa hạnh nhân, chuối thái lát, hạnh nhân rang',
    imageUrl: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400'
  },
  {
    id: 'b3',
    name: 'Bát sinh tố việt quất',
    calories: 290,
    protein: 10,
    carbs: 45,
    fat: 8,
    description: 'Sinh tố việt quất với granola, hạt chia và dâu tây',
    imageUrl: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400'
  },
  {
    id: 'b4',
    name: 'Bánh kếp protein',
    calories: 310,
    protein: 22,
    carbs: 38,
    fat: 9,
    description: 'Bánh kếp giàu protein, ăn kèm mật ong và trái cây tươi',
    imageUrl: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400'
  },
  {
    id: 'b5',
    name: 'Bánh mì nướng kẹp bơ',
    calories: 305,
    protein: 15,
    carbs: 36,
    fat: 11,
    description: 'Bánh mì nướng kẹp bơ, cà chua và rau xà lách',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400'
  },
  {
    id: 'b6',
    name: 'Cháo yến mạch trứng',
    calories: 295,
    protein: 16,
    carbs: 40,
    fat: 9,
    description: 'Cháo yến mạch mặn kèm trứng lòng đào và rau thơm',
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400'
  },
  {
    id: 'b7',
    name: 'Sữa chua Hy Lạp trái cây',
    calories: 285,
    protein: 20,
    carbs: 38,
    fat: 7,
    description: 'Sữa chua Hy Lạp với mật ong, granola và trái cây hỗn hợp',
    imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400'
  }
];

export const lunches: Meal[] = [
  {
    id: 'l1',
    name: 'Ức gà nướng và salad hạt diêm mạch',
    calories: 380,
    protein: 35,
    carbs: 32,
    fat: 14,
    description: 'Ức gà nướng thảo mộc kèm salad hạt diêm mạch và rau xanh',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'
  },
  {
    id: 'l2',
    name: 'Cơm gạo lứt và cá hồi nướng',
    calories: 420,
    protein: 38,
    carbs: 40,
    fat: 18,
    description: 'Cá hồi nướng sốt mật ong kèm cơm gạo lứt và rau củ hấp',
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400'
  },
  {
    id: 'l3',
    name: 'Thịt bò xào rau củ',
    calories: 390,
    protein: 32,
    carbs: 35,
    fat: 16,
    description: 'Thịt bò thăn xào với rau củ nhiều màu, phục vụ cùng cơm gạo lứt',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400'
  },
  {
    id: 'l4',
    name: 'Tôm nướng kèm salad',
    calories: 365,
    protein: 30,
    carbs: 38,
    fat: 12,
    description: 'Tôm nướng tỏi kèm salad nhiều màu',
    imageUrl: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400'
  },
  {
    id: 'l5',
    name: 'Gà sốt teriyaki và rau xào',
    calories: 395,
    protein: 36,
    carbs: 36,
    fat: 14,
    description: 'Gà sốt teriyaki phục vụ cùng rau xào và cơm gạo lứt',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'
  },
  {
    id: 'l6',
    name: 'Bún gạo lứt với chả cá',
    calories: 375,
    protein: 28,
    carbs: 42,
    fat: 12,
    description: 'Bún gạo lứt kèm chả cá, rau thơm và nước chấm chua ngọt',
    imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400'
  },
  {
    id: 'l7',
    name: 'Mì bí ngòi tôm sốt cà chua',
    calories: 340,
    protein: 26,
    carbs: 30,
    fat: 14,
    description: 'Mì làm từ bí ngòi với tôm và sốt cà chua tươi',
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400'
  }
];

export const dinners: Meal[] = [
  {
    id: 'd1',
    name: 'Cá hồi áp chảo và măng tây',
    calories: 410,
    protein: 36,
    carbs: 28,
    fat: 20,
    description: 'Cá hồi áp chảo bơ tỏi kèm măng tây và khoai tây nghiền',
    imageUrl: 'https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?w=400'
  },
  {
    id: 'd2',
    name: 'Bít tết bò và rau củ nướng',
    calories: 450,
    protein: 42,
    carbs: 30,
    fat: 22,
    description: 'Bít tết bò nướng medium kèm rau củ nướng thập cẩm',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400'
  },
  {
    id: 'd3',
    name: 'Gà nướng sốt cam và bông cải xanh',
    calories: 385,
    protein: 38,
    carbs: 32,
    fat: 15,
    description: 'Đùi gà nướng sốt cam kèm bông cải xanh và khoai lang',
    imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400'
  },
  {
    id: 'd4',
    name: 'Canh hải sản thập cẩm',
    calories: 320,
    protein: 32,
    carbs: 28,
    fat: 12,
    description: 'Canh hải sản với tôm, mực, cá, rau củ và nấm',
    imageUrl: 'https://images.unsplash.com/photo-1559564484-e48eef1f7ba8?w=400'
  },
  {
    id: 'd5',
    name: 'Gà xào rau củ',
    calories: 370,
    protein: 34,
    carbs: 32,
    fat: 14,
    description: 'Ức gà xào với ớt chuông, bông cải và nấm, kèm cơm gạo lứt',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400'
  },
  {
    id: 'd6',
    name: 'Cá diêu hồng nướng sả',
    calories: 350,
    protein: 35,
    carbs: 30,
    fat: 13,
    description: 'Cá diêu hồng nướng sả phục vụ cùng cơm gạo lứt và dưa chuột',
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400'
  },
  {
    id: 'd7',
    name: 'Đậu phụ xào rau và nấm',
    calories: 310,
    protein: 22,
    carbs: 35,
    fat: 12,
    description: 'Đậu phụ chiên giòn xào cùng nấm và rau củ',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-efd4eda21f3c?w=400'
  }
];

export const generate3DayMenu = (): DayMenu[] => {
  const today = new Date();
  const menus: DayMenu[] = [];

  for (let i = 0; i < 3; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    menus.push({
      day: i + 1,
      date: date.toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'long' }),
      breakfast: breakfasts[i % breakfasts.length],
      lunch: lunches[i % lunches.length],
      dinner: dinners[i % dinners.length]
    });
  }

  return menus;
};

export const generate7DayMenu = (): DayMenu[] => {
  const today = new Date();
  const menus: DayMenu[] = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    menus.push({
      day: i + 1,
      date: date.toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'long' }),
      breakfast: breakfasts[i % breakfasts.length],
      lunch: lunches[i % lunches.length],
      dinner: dinners[i % dinners.length]
    });
  }

  return menus;
};

export const meals: Meal[] = [
  {
    id: '1',
    name: 'Cơm bát cá hồi áp chảo',
    description: 'Cá hồi áp chảo tươi ăn kèm quinoa, bơ và rau xanh',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-grilled-salmon-dish-4365-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop',
    category: 'Healthy',
    nutrition: {
      calories: 520,
      protein: 42,
      carbs: 38,
      fat: 22
    },
    ingredients: ['Cá hồi', 'Quinoa', 'Bơ', 'Rau trộn', 'Chanh'],
    prepTime: 25
  },
  {
    id: '2',
    name: 'Salad gà bơ (Keto)',
    description: 'Ức gà nướng kèm sốt bơ kem',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-healthy-salad-with-vegetables-4366-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
    category: 'Keto',
    nutrition: {
      calories: 380,
      protein: 35,
      carbs: 8,
      fat: 24
    },
    ingredients: ['Ức gà', 'Bơ', 'Rau chân vịt', 'Dầu olive', 'Hạnh nhân'],
    prepTime: 20
  },
  {
    id: '3',
    name: 'Bát sinh tố ít đường',
    description: 'Sinh tố ít đường với quả mọng và hạt chia',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-pouring-milk-into-a-bowl-of-cereal-6934-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1623428187429-8ae658dc80c0?w=800&auto=format&fit=crop',
    category: 'Diabetes-Friendly',
    nutrition: {
      calories: 240,
      protein: 12,
      carbs: 28,
      fat: 10
    },
    ingredients: ['Quả mọng', 'Hạt chia', 'Sữa hạnh nhân', 'Bột protein', 'Dừa'],
    prepTime: 10
  },
  {
    id: '4',
    name: 'Wrap rau Địa Trung Hải',
    description: 'Bánh tráng nguyên cám kẹp hummus, rau và phô mai feta',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fresh-vegetable-salad-4367-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&auto=format&fit=crop',
    category: 'Healthy',
    nutrition: {
      calories: 420,
      protein: 18,
      carbs: 52,
      fat: 16
    },
    ingredients: ['Bánh tráng nguyên cám', 'Hummus', 'Dưa leo', 'Cà chua', 'Feta', 'Olives'],
    prepTime: 15
  },
  {
    id: '5',
    name: 'Bữa sáng Keto: Bacon & Trứng',
    description: 'Bacon giòn kèm trứng ốp và bơ',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-breakfast-with-eggs-and-bacon-4368-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=800&auto=format&fit=crop',
    category: 'Keto',
    nutrition: {
      calories: 450,
      protein: 32,
      carbs: 4,
      fat: 35
    },
    ingredients: ['Trứng', 'Bacon', 'Bơ', 'Bơ lạt', 'Phô mai'],
    prepTime: 12
  },
  {
    id: '6',
    name: 'Bát gà nhiều protein',
    description: 'Ức gà nướng kèm cơm gạo lứt và bông cải hấp',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-healthy-food-bowl-4369-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=800&auto=format&fit=crop',
    category: 'Personalized',
    nutrition: {
      calories: 480,
      protein: 45,
      carbs: 42,
      fat: 14
    },
    ingredients: ['Ức gà', 'Cơm gạo lứt', 'Bông cải', 'Cà rốt', 'Dầu mè'],
    prepTime: 30
  },
  {
    id: '7',
    name: 'Sữa chua Hy Lạp không đường',
    description: 'Sữa chua Hy Lạp kèm hạt và quả mọng',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-yogurt-with-granola-and-berries-6935-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop',
    category: 'Diabetes-Friendly',
    nutrition: {
      calories: 280,
      protein: 20,
      carbs: 24,
      fat: 12
    },
    ingredients: ['Sữa chua Hy Lạp', 'Hạnh nhân', 'Óc chó', 'Việt quất', 'Quế'],
    prepTime: 5
  },
  {
    id: '8',
    name: 'Salad năng lượng Quinoa',
    description: 'Salad giàu dinh dưỡng với quinoa, đậu gà và rau',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-fresh-salad-bowl-4370-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop',
    category: 'Healthy',
    nutrition: {
      calories: 390,
      protein: 16,
      carbs: 58,
      fat: 12
    },
    ingredients: ['Quinoa', 'Đậu gà', 'Kale', 'Cà chua bi', 'Sốt chanh'],
    prepTime: 20
  }
];
