import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Flame, Calendar, Package, Truck, CheckCircle, Activity, Award, Plus, Trash2 } from 'lucide-react';
import Header from '../components/Header';

interface DeliveryStatus {
  id: string;
  plan: string;
  date: string;
  status: 'sourcing' | 'prepped' | 'in-transit' | 'delivered';
}

interface WeightEntry {
  id: string;
  date: string;
  weight: number;
}

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState<'7days' | '30days'>('7days');
  const [cleanStreak] = useState(14);
  const [weightEntries, setWeightEntries] = useState<WeightEntry[]>([
    { id: '1', date: '2024-12-20', weight: 73.5 },
    { id: '2', date: '2024-12-23', weight: 72.8 },
    { id: '3', date: '2024-12-26', weight: 72.0 },
    { id: '4', date: '2024-12-29', weight: 71.5 }
  ]);
  const [newWeight, setNewWeight] = useState('');
  const [newDate, setNewDate] = useState('');

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Sample calorie data
  const calorieData7Days = [
    { date: 'T2', calories: 1850, target: 2000 },
    { date: 'T3', calories: 1920, target: 2000 },
    { date: 'T4', calories: 1880, target: 2000 },
    { date: 'T5', calories: 1950, target: 2000 },
    { date: 'T6', calories: 1900, target: 2000 },
    { date: 'T7', calories: 1870, target: 2000 },
    { date: 'CN', calories: 1940, target: 2000 }
  ];

  const calorieData30Days = [
    { date: 'Tuần 1', calories: 1950, target: 2000 },
    { date: 'Tuần 2', calories: 1900, target: 2000 },
    { date: 'Tuần 3', calories: 1880, target: 2000 },
    { date: 'Tuần 4', calories: 1920, target: 2000 }
  ];

  const calorieData = timeRange === '7days' ? calorieData7Days : calorieData30Days;

  // Sample delivery data
  const deliveries: DeliveryStatus[] = [
    {
      id: '1',
      plan: 'Gói 7 Ngày Sức Sống',
      date: '25 Th12 - 31 Th12',
      status: 'in-transit'
    },
    {
      id: '2',
      plan: 'Gói 3 Ngày Khởi Đầu',
      date: '1 Th1 - 3 Th1',
      status: 'prepped'
    },
    {
      id: '3',
      plan: 'Gói 7 Ngày Sức Sống',
      date: '4 Th1 - 10 Th1',
      status: 'sourcing'
    }
  ];

  const getStatusProgress = (status: DeliveryStatus['status']) => {
    const stages = ['sourcing', 'prepped', 'in-transit', 'delivered'];
    const currentIndex = stages.indexOf(status);
    return ((currentIndex + 1) / stages.length) * 100;
  };

  const getStatusColor = (status: DeliveryStatus['status']) => {
    switch (status) {
      case 'sourcing': return 'text-yellow-600 bg-yellow-100';
      case 'prepped': return 'text-blue-600 bg-blue-100';
      case 'in-transit': return 'text-orange-600 bg-orange-100';
      case 'delivered': return 'text-emerald-600 bg-emerald-100';
    }
  };

  const getStatusIcon = (status: DeliveryStatus['status']) => {
    switch (status) {
      case 'sourcing': return Package;
      case 'prepped': return Activity;
      case 'in-transit': return Truck;
      case 'delivered': return CheckCircle;
    }
  };

  const getStatusLabel = (status: DeliveryStatus['status']) => {
    switch (status) {
      case 'sourcing': return 'Đang Tìm Nguồn';
      case 'prepped': return 'Đã Chuẩn Bị';
      case 'in-transit': return 'Đang Giao';
      case 'delivered': return 'Đã Giao';
    }
  };

  const handleAddWeight = () => {
    if (newWeight && newDate) {
      const entry: WeightEntry = {
        id: Date.now().toString(),
        date: newDate,
        weight: parseFloat(newWeight)
      };
      setWeightEntries([...weightEntries, entry].sort((a, b) => 
        new Date(a.date).getTime() - new Date(b.date).getTime()
      ));
      setNewWeight('');
      setNewDate('');
    }
  };

  const handleDeleteWeight = (id: string) => {
    setWeightEntries(weightEntries.filter(entry => entry.id !== id));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50">
      <Header />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              Bảng Điều Khiển
              <span className="block mt-2 bg-gradient-to-r from-emerald-600 to-orange-600 bg-clip-text text-transparent">
                Sức Khỏe Của Bạn
              </span>
            </h1>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              Theo dõi hành trình sức khỏe chuyển hóa của bạn với thông tin chi tiết hỗ trợ AI
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>Chuỗi Ăn Sạch</p>
                  <p className="text-2xl font-bold text-gray-900">{cleanStreak} ngày</p>
                  <p className="text-xs text-emerald-600" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>Tiếp tục phát huy!</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>Calo Trung Bình</p>
                  <p className="text-2xl font-bold text-gray-900">1.910</p>
                  <p className="text-xs text-orange-600" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>Nạp hàng ngày</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>Ngày Hoạt Động</p>
                  <p className="text-2xl font-bold text-gray-900">14</p>
                  <p className="text-xs text-blue-600" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>Tháng này</p>
                </div>
              </div>
            </div>
          </div>

          {/* Time Range Toggle */}
          <div className="flex justify-end mb-6">
            <div className="inline-flex bg-white rounded-xl shadow-lg p-1">
              <button
                onClick={() => setTimeRange('7days')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                  timeRange === '7days'
                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
              >
                7 Ngày
              </button>
              <button
                onClick={() => setTimeRange('30days')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                  timeRange === '30days'
                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
              >
                30 Ngày
              </button>
            </div>
          </div>

          {/* Charts and Weight Tracker */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Calorie Chart */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                Theo Dõi Calo
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={calorieData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" stroke="#6b7280" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }} />
                  <YAxis stroke="#6b7280" domain={[1800, 2100]} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '2px solid #f97316',
                      borderRadius: '12px',
                      padding: '12px',
                      fontFamily: 'Be Vietnam Pro, sans-serif'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="calories" 
                    stroke="#f97316" 
                    strokeWidth={3}
                    dot={{ fill: '#f97316', r: 5 }}
                    activeDot={{ r: 7 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="target" 
                    stroke="#9ca3af" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-600 mt-4 text-center" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                Mục Tiêu Hàng Ngày: <span className="font-semibold text-orange-600">2.000 cal</span>
              </p>
            </div>

            {/* Weight Tracker */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                Theo Dõi Cân Nặng
              </h2>
              
              {/* Add Weight Form */}
              <div className="mb-6 p-4 bg-emerald-50 rounded-xl">
                <p className="text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                  Thêm Số Đo Mới
                </p>
                <div className="flex gap-3">
                  <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-900 text-sm"
                    style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
                  />
                  <input
                    type="number"
                    step="0.1"
                    value={newWeight}
                    onChange={(e) => setNewWeight(e.target.value)}
                    placeholder="Cân nặng (kg)"
                    className="w-32 px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none text-gray-900 text-sm"
                    style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
                  />
                  <button
                    onClick={handleAddWeight}
                    disabled={!newWeight || !newDate}
                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold text-sm hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Weight Entries Table */}
              <div className="space-y-2 max-h-[300px] overflow-y-auto">
                {weightEntries.length === 0 ? (
                  <p className="text-center text-gray-500 py-8" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    Chưa có dữ liệu. Thêm số đo đầu tiên!
                  </p>
                ) : (
                  weightEntries.map((entry) => (
                    <div key={entry.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                          {formatDate(entry.date)}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="text-lg font-bold text-emerald-700">
                          {entry.weight} kg
                        </p>
                        <button
                          onClick={() => handleDeleteWeight(entry.id)}
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {weightEntries.length > 0 && (
                <div className="mt-4 p-4 bg-gradient-to-r from-emerald-100 to-orange-100 rounded-xl">
                  <p className="text-sm text-center" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                    <span className="font-semibold text-emerald-700">
                      Tiến độ: {(weightEntries[0].weight - weightEntries[weightEntries.length - 1].weight).toFixed(1)} kg
                    </span>
                    {weightEntries[0].weight > weightEntries[weightEntries.length - 1].weight ? ' 🎉' : ''}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Upcoming Deliveries */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              Đơn Hàng Sắp Tới
            </h2>
            <div className="space-y-6">
              {deliveries.map((delivery) => {
                const StatusIcon = getStatusIcon(delivery.status);
                return (
                  <div key={delivery.id} className="border-2 border-gray-100 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                          {delivery.plan}
                        </h3>
                        <p className="text-sm text-gray-600" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                          {delivery.date}
                        </p>
                      </div>
                      <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${getStatusColor(delivery.status)}`}>
                        <StatusIcon className="w-4 h-4" />
                        <span className="text-sm font-semibold" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                          {getStatusLabel(delivery.status)}
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="flex justify-between mb-2">
                        <span className="text-xs font-semibold text-gray-600" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                          Tìm Nguồn
                        </span>
                        <span className="text-xs font-semibold text-gray-600" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                          Chuẩn Bị
                        </span>
                        <span className="text-xs font-semibold text-gray-600" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                          Vận Chuyển
                        </span>
                        <span className="text-xs font-semibold text-gray-600" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                          Đã Giao
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-600 to-orange-600 transition-all duration-500"
                          style={{ width: `${getStatusProgress(delivery.status)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
