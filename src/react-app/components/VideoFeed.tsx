import { useState, useRef, useEffect } from 'react';
import { Heart, Share2, ShoppingCart, Flame, Zap } from 'lucide-react';

interface Video {
  id: string;
  videoUrl: string;
  dishName: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  description: string;
  cookTime: string;
}

const sampleVideos: Video[] = [
  {
    id: '1',
    videoUrl: 'https://videos.pexels.com/video-files/3195412/3195412-uhd_2560_1440_25fps.mp4',
    dishName: 'Ức Gà Áp Chảo Sốt Cam',
    calories: 350,
    protein: 35,
    carbs: 25,
    fat: 12,
    description: 'Ức gà mềm mại với sốt cam chua ngọt, bữa trưa hoàn hảo',
    cookTime: '20 phút'
  },
  {
    id: '2',
    videoUrl: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
    dishName: 'Salad Quinoa Rau Củ',
    calories: 280,
    protein: 12,
    carbs: 38,
    fat: 8,
    description: 'Salad giàu chất xơ với quinoa và rau tươi',
    cookTime: '15 phút'
  },
  {
    id: '3',
    videoUrl: 'https://videos.pexels.com/video-files/3195440/3195440-uhd_2560_1440_25fps.mp4',
    dishName: 'Cá Hồi Nướng Mật Ong',
    calories: 420,
    protein: 38,
    carbs: 18,
    fat: 22,
    description: 'Cá hồi giàu Omega-3 với lớp mật ong caramel',
    cookTime: '25 phút'
  },
  {
    id: '4',
    videoUrl: 'https://videos.pexels.com/video-files/3195445/3195445-uhd_2560_1440_25fps.mp4',
    dishName: 'Bát Phật Rau Xanh',
    calories: 320,
    protein: 15,
    carbs: 42,
    fat: 10,
    description: 'Bát đầy màu sắc với rau xanh và ngũ cốc nguyên hạt',
    cookTime: '15 phút'
  },
  {
    id: '5',
    videoUrl: 'https://videos.pexels.com/video-files/3195430/3195430-uhd_2560_1440_25fps.mp4',
    dishName: 'Bò Xào Teriyaki',
    calories: 380,
    protein: 32,
    carbs: 28,
    fat: 16,
    description: 'Thịt bò mềm với sốt teriyaki đậm đà',
    cookTime: '18 phút'
  },
  {
    id: '6',
    videoUrl: 'https://videos.pexels.com/video-files/3195396/3195396-uhd_2560_1440_25fps.mp4',
    dishName: 'Tô Smoothie Acai',
    calories: 290,
    protein: 8,
    carbs: 45,
    fat: 9,
    description: 'Smoothie tươi mát với trái cây nhiệt đới',
    cookTime: '10 phút'
  }
];

export default function VideoFeed() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videos] = useState(sampleVideos);
  const [likes, setLikes] = useState<Record<string, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay prevented, user interaction needed
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.7 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollTop = containerRef.current.scrollTop;
    const videoHeight = window.innerHeight;
    const newIndex = Math.round(scrollTop / videoHeight);
    if (newIndex !== currentIndex && newIndex < videos.length) {
      setCurrentIndex(newIndex);
    }
  };

  const toggleLike = (videoId: string) => {
    setLikes(prev => ({ ...prev, [videoId]: !prev[videoId] }));
  };

  return (
    <section className="relative bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-white font-medium" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              Khám Phá Món Ăn
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
            Video Ngắn Ẩm Thực
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
            Cuộn xem công thức viral và thêm ngay vào gói của bạn
          </p>
        </div>

        {/* Video Feed Container */}
        <div 
          ref={containerRef}
          onScroll={handleScroll}
          className="relative h-[600px] md:h-[700px] overflow-y-scroll snap-y snap-mandatory scrollbar-hide rounded-3xl"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {videos.map((video, index) => (
            <div
              key={video.id}
              className="relative h-[600px] md:h-[700px] snap-start snap-always"
            >
              {/* Video */}
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={video.videoUrl}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                muted
                playsInline
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                {/* Top Info */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-xs text-white font-semibold" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      LIVE
                    </span>
                  </div>
                  
                  <div className="px-4 py-2 bg-emerald-500/90 backdrop-blur-sm rounded-full">
                    <span className="text-sm text-white font-bold" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      {video.cookTime}
                    </span>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="flex gap-6">
                  {/* Left: Info */}
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      {video.dishName}
                    </h3>
                    
                    <p className="text-white/90 text-lg mb-4 line-clamp-2" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      {video.description}
                    </p>

                    {/* Nutrition Info */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/90 backdrop-blur-sm rounded-full">
                        <Flame className="w-4 h-4 text-white" />
                        <span className="text-sm font-bold text-white" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                          {video.calories} kcal
                        </span>
                      </div>
                      <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <span className="text-sm font-semibold text-white" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                          {video.protein}g Đạm
                        </span>
                      </div>
                      <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <span className="text-sm font-semibold text-white" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                          {video.carbs}g Carb
                        </span>
                      </div>
                    </div>

                    {/* Add to Package Button */}
                    <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full font-bold text-lg shadow-2xl shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-3" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Thêm Vào Gói
                    </button>
                  </div>

                  {/* Right: Social Actions */}
                  <div className="flex flex-col gap-6 items-center">
                    <button
                      onClick={() => toggleLike(video.id)}
                      className="flex flex-col items-center gap-1 group"
                    >
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 ${
                        likes[video.id] 
                          ? 'bg-red-500 scale-110' 
                          : 'bg-white/20 hover:bg-white/30'
                      }`}>
                        <Heart 
                          className={`w-7 h-7 transition-all ${
                            likes[video.id] ? 'fill-white text-white' : 'text-white'
                          }`}
                        />
                      </div>
                      <span className="text-xs font-semibold text-white" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                        {likes[video.id] ? '12.5K' : '12.4K'}
                      </span>
                    </button>

                    <button className="flex flex-col items-center gap-1 group">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all">
                        <Share2 className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-white" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                        Chia sẻ
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Scroll Indicator (only on first video) */}
              {index === 0 && currentIndex === 0 && (
                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce">
                  <div className="flex flex-col items-center gap-2 text-white/60">
                    <div className="w-6 h-10 border-2 border-white/40 rounded-full p-1">
                      <div className="w-1.5 h-2 bg-white/60 rounded-full mx-auto animate-pulse" />
                    </div>
                    <span className="text-xs font-semibold" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
                      Vuốt lên
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Video Counter */}
        <div className="text-center mt-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <span className="text-sm text-white font-semibold" style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
              Video {currentIndex + 1} / {videos.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
