import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Youtube, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  category: string;
}

const VideoGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'demo' | 'thaiwater'>('demo');

  const demoVideos: Video[] = [
    {
      id: 'qyVjTY3S0_c',
      title: 'ระบบบำบัดน้ำเสีย แยกตะกอนออกจากน้ำเสียด้วยเครื่อง SLIT SAVER',
      thumbnail: 'https://img.youtube.com/vi/qyVjTY3S0_c/maxresdefault.jpg',
      duration: '1:57',
      category: 'demo',
    },
    {
      id: 'MT0Ec6oxM8g',
      title: 'SLIT SAVER ชุดทดสอบเคลื่อนที่ ทดลองแยกตะกอนที่หน้างาน',
      thumbnail: 'https://img.youtube.com/vi/MT0Ec6oxM8g/maxresdefault.jpg',
      duration: '0:25',
      category: 'demo',
    },
    {
      id: 'Z-5WWa3GIiI',
      title: 'ตะกอนที่แยกออกจาก SLIT SAVER Tree Yoko Part.,Ltd.',
      thumbnail: 'https://img.youtube.com/vi/Z-5WWa3GIiI/maxresdefault.jpg',
      duration: '0:17',
      category: 'demo',
    },
    {
      id: 'vYtLJMASKsY',
      title: 'ระบบบำบัดน้ำเสีย เครื่องแยกตะกอนออกจากน้ำ SLIT SAVER',
      thumbnail: 'https://img.youtube.com/vi/vYtLJMASKsY/maxresdefault.jpg',
      duration: '1:04',
      category: 'demo',
    },
    {
      id: 'TImOFOoXtBY',
      title: 'ทดสอบใช้เครื่อง SLIT SAVER แยกตะกอนออกจากน้ำ',
      thumbnail: 'https://img.youtube.com/vi/TImOFOoXtBY/maxresdefault.jpg',
      duration: '0:37',
      category: 'demo',
    },
    {
      id: 'ZRiEo99NP8Y',
      title: 'เครื่องแยกตะกอน ในระบบบำบัดน้ำเสีย Slit Saver',
      thumbnail: 'https://img.youtube.com/vi/ZRiEo99NP8Y/maxresdefault.jpg',
      duration: '1:19',
      category: 'demo',
    },
  ];

  const thaiwaterVideos: Video[] = [
    {
      id: 'X0fe6n-ULcc',
      title: 'TYK Thai Water 2025 - บูธ Tree Yoko',
      thumbnail: 'https://img.youtube.com/vi/X0fe6n-ULcc/maxresdefault.jpg',
      duration: '32:07',
      category: 'thaiwater',
    },
    {
      id: 'aULf2YbUF4w',
      title: 'บริการสาธิตทั่วประเทศ',
      thumbnail: 'https://img.youtube.com/vi/aULf2YbUF4w/maxresdefault.jpg',
      duration: '2:13',
      category: 'thaiwater',
    },
    {
      id: 'E5DYWzc7cNg',
      title: 'ผลงานการติดตั้ง - การประปา',
      thumbnail: 'https://img.youtube.com/vi/E5DYWzc7cNg/maxresdefault.jpg',
      duration: '2:30',
      category: 'thaiwater',
    },
    {
      id: 'Dq70J2Mamds',
      title: 'ผลงานการติดตั้ง - บะหมี่กึ่งสำเร็จรูป',
      thumbnail: 'https://img.youtube.com/vi/Dq70J2Mamds/maxresdefault.jpg',
      duration: '3:15',
      category: 'thaiwater',
    },
    {
      id: 'W-FEHWPGRAo',
      title: 'ผลงานการติดตั้ง - แปรรูปอาหารทะเล',
      thumbnail: 'https://img.youtube.com/vi/W-FEHWPGRAo/maxresdefault.jpg',
      duration: '2:45',
      category: 'thaiwater',
    },
    {
      id: 'G7iBSuSPSeQ',
      title: 'ผลงานการติดตั้ง - แปรรูปอาหาร',
      thumbnail: 'https://img.youtube.com/vi/G7iBSuSPSeQ/maxresdefault.jpg',
      duration: '3:00',
      category: 'thaiwater',
    },
  ];

  const currentVideos = activeTab === 'demo' ? demoVideos : thaiwaterVideos;

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 400;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Cards animation
      const cards = sliderRef.current?.querySelectorAll('.video-card');
      cards?.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: sliderRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      id="videos"
      className="relative py-24 lg:py-32 bg-blue-dark overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-light/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
                <Youtube className="w-4 h-4 text-orange" />
                <span className="text-white/90 text-sm font-body">วิดีโอสาธิต</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-white mb-4">
                ดูการทำงานจริงของ
                <span className="text-orange block">SLIT SAVER</span>
              </h2>

              <p className="text-white/70 font-body text-lg max-w-xl">
                วิดีโอสาธิตการทำงานและผลงานการติดตั้งจากทั่วประเทศ
              </p>
            </div>

            {/* Tab Buttons */}
            <div className="flex gap-2 bg-white/10 backdrop-blur-sm p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('demo')}
                className={`px-6 py-3 rounded-lg font-body text-sm transition-all duration-300 ${
                  activeTab === 'demo'
                    ? 'bg-orange text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                สาธิตการใช้งาน
              </button>
              <button
                onClick={() => setActiveTab('thaiwater')}
                className={`px-6 py-3 rounded-lg font-body text-sm transition-all duration-300 ${
                  activeTab === 'thaiwater'
                    ? 'bg-orange text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                ThaiWater 2025
              </button>
            </div>
          </div>
        </div>

        {/* Video Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-orange transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-orange transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {currentVideos.map((video, index) => (
              <div
                key={index}
                className="video-card flex-shrink-0 w-80 snap-start group cursor-pointer"
                onClick={() => setSelectedVideo(video.id)}
              >
                <div className="relative rounded-2xl overflow-hidden bg-white/5">
                  {/* Thumbnail */}
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                      }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-orange/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Play className="w-7 h-7 text-white ml-1" fill="white" />
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/70 text-white text-xs font-body">
                      {video.duration}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="p-4">
                    <h3 className="text-white font-body font-medium line-clamp-2 group-hover:text-orange transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <a
            href={activeTab === 'demo' 
              ? 'https://www.youtube.com/playlist?list=PLGPZB4P127dWJvGDXzdlxFa6859SF62si'
              : 'https://www.youtube.com/playlist?list=PLGPZB4P127dXMh2WCjeCEniaJEMGtDEEc'
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 rounded-full font-heading"
            >
              <Youtube className="w-5 h-5 mr-2" />
              ดูวิดีโอทั้งหมด
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-orange transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* YouTube Embed */}
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube Video"
              className="w-full h-full rounded-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoGallery;
