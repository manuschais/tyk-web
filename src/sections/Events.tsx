import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Users, ArrowRight, Award, Globe, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const events = [
    {
      title: 'Thai Water Expo 2025',
      subtitle: 'งานแสดงเทคโนโลยีน้ำระดับภูมิภาค',
      date: '2-4 กรกฎาคม 2025',
      location: 'Queen Sirikit National Convention Center (QSNCC), กรุงเทพฯ',
      booth: 'Hall 6, Stand J16',
      description: 'Tree Yoko ได้เข้าร่วมงาน Thai Water Expo 2025 งานแสดงเทคโนโลยีน้ำที่ใหญ่ที่สุดในภูมิภาค พบกับนวัตกรรมล่าสุดของ SLIT SAVER และทีมงานผู้เชี่ยวชาญของเรา',
      highlights: [
        'สาธิตการทำงานของเครื่อง SLIT SAVER แบบสดๆ',
        'ปรึกษาผู้เชี่ยวชาญฟรี',
        'รับข้อเสนอพิเศษภายในงาน',
        'ชมผลงานการติดตั้งจากทั่วประเทศ',
      ],
      stats: [
        { icon: Users, value: '16,000+', label: 'ผู้เข้าชมงาน' },
        { icon: Globe, value: '200+', label: 'แบรนด์ทั่วโลก' },
        { icon: Award, value: 'Top', label: 'นวัตกรรมน้ำ' },
      ],
      image: '/images/app-municipal.jpg',
      status: 'past', // 'upcoming' | 'ongoing' | 'past'
    },
  ];

  const upcomingEvents = [
    {
      title: 'InterAqua 2026',
      date: 'มกราคม 2026',
      location: 'โอซาก้า ประเทศญี่ปุ่น',
      description: 'งานแสดงเทคโนโลยีน้ำระดับนานาชาติ',
    },
    {
      title: 'Vietwater 2025',
      date: 'ตุลาคม 2025',
      location: 'โฮจิมินห์ซิตี้ ประเทศเวียดนาม',
      description: 'งานแสดงเทคโนโลยีน้ำและน้ำเสีย',
    },
  ];

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

      // Content animation
      gsap.fromTo(
        contentRef.current?.children || [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="events"
      className="relative py-24 lg:py-32 bg-light-gray overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #003366 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-dark/10 mb-6">
            <Calendar className="w-4 h-4 text-blue-dark" />
            <span className="text-blue-dark text-sm font-body font-medium">ข่าวสารและกิจกรรม</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-dark-text mb-4">
            พบกับเราที่
            <span className="text-blue-light"> งานแสดงสินค้า</span>
          </h2>

          <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
            เข้าร่วมงานแสดงเทคโนโลยีน้ำระดับนานาชาติ พบกับนวัตกรรมล่าสุดจาก Tree Yoko
          </p>
        </div>

        {/* Main Event Card */}
        <div ref={contentRef} className="space-y-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-500"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-dark/80 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-6 left-6">
                    <div className={`px-4 py-2 rounded-full text-sm font-body font-medium ${
                      event.status === 'ongoing'
                        ? 'bg-green-500 text-white'
                        : event.status === 'upcoming'
                        ? 'bg-orange text-white'
                        : 'bg-blue-dark text-white'
                    }`}>
                      {event.status === 'ongoing'
                        ? 'กำลังจัดงาน'
                        : event.status === 'upcoming'
                        ? ' upcoming'
                        : 'ผ่านไปแล้ว'}
                    </div>
                  </div>

                  {/* Event Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-white/80 font-body">{event.subtitle}</p>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-10">
                  {/* Event Info */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5 text-orange" />
                      <span className="font-body text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5 text-orange" />
                      <span className="font-body text-sm">{event.location}</span>
                    </div>
                  </div>

                  {/* Booth Info */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-dark/5 mb-6">
                    <Droplets className="w-5 h-5 text-blue-dark" />
                    <span className="font-body font-medium text-blue-dark">{event.booth}</span>
                  </div>

                  <p className="text-gray-600 font-body leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h4 className="font-heading font-semibold text-dark-text mb-4">ไฮไลท์ภายในงาน</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {event.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-orange" />
                          </div>
                          <span className="text-gray-700 font-body text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {event.stats.map((stat, sIndex) => (
                      <div key={sIndex} className="text-center p-4 rounded-xl bg-light-gray">
                        <stat.icon className="w-6 h-6 text-blue-dark mx-auto mb-2" />
                        <div className="text-xl font-heading font-bold text-dark-text">{stat.value}</div>
                        <div className="text-xs text-gray-500 font-body">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://exhibitors.informamarkets-info.com/event/2025THW/en-US/exhibitor/424833/tree-yoko-part---ltd-/product/1304171/slit-saver"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-orange hover:bg-orange/90 text-white rounded-full px-6">
                        ดูข้อมูลบูธ
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                    <a
                      href="https://www.youtube.com/playlist?list=PLGPZB4P127dXMh2WCjeCEniaJEMGtDEEc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="rounded-full px-6 border-blue-dark/20 text-blue-dark hover:bg-blue-dark/5">
                        วิดีโอจากงาน
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Upcoming Events */}
          <div className="mt-12">
            <h3 className="text-xl font-heading font-semibold text-dark-text mb-6">งานที่จะเกิดขึ้น</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-heading font-semibold text-dark-text text-lg">{event.title}</h4>
                      <p className="text-gray-500 font-body text-sm">{event.description}</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-blue-dark/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-blue-dark" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-orange" />
                      <span className="font-body text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-orange" />
                      <span className="font-body text-sm">{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
