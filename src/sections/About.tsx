import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, Recycle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { i18n } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const features = i18n.language === 'th' 
    ? [
        'ใช้พื้นที่ไม่มากเมื่อเทียบกับเครื่องแยกตะกอนในรูปแบบอื่นๆ',
        'ติดตั้งไม่ยาก แต่มีประสิทธิภาพในการแยกกากและตะกอน',
        'สามารถติดตั้งเข้าร่วมกับระบบบำบัดน้ำเสียที่มีอยู่เดิม',
        'ทีมงานออกแบบและผู้เชี่ยวชาญให้คำแนะนำเพิ่มเติม',
      ]
    : [
        'Requires less space compared to other sludge separators',
        'Easy installation with effective solid and sludge separation',
        'Can be integrated with existing wastewater treatment systems',
        'Design team and experts available for consultation',
      ];

  const stats = [
    { 
      icon: Award, 
      value: 100, 
      suffix: '+', 
      label: i18n.language === 'th' ? 'เครื่องที่ติดตั้งในไทย' : 'Units in Thailand', 
      color: 'bg-blue-dark' 
    },
    { 
      icon: Users, 
      value: 10, 
      suffix: '+', 
      label: i18n.language === 'th' ? 'ปีประสบการณ์' : 'Years Experience', 
      color: 'bg-blue-light' 
    },
    { 
      icon: Recycle, 
      value: 3, 
      suffix: 'R', 
      label: 'Reduce Reuse Recycle', 
      color: 'bg-orange' 
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
        {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Content slide animation
      gsap.fromTo(
        contentRef.current?.children || [],
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Stats counter animation
      const statElements = statsRef.current?.querySelectorAll('.stat-value');
      statElements?.forEach((el) => {
        const target = parseInt(el.getAttribute('data-value') || '0');
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Stats cards lift animation
      gsap.fromTo(
        statsRef.current?.children || [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
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
      id="about"
      className="relative py-24 lg:py-32 bg-light-gray overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-machine.jpg"
                alt="SLIT SAVER Machine"
                className="w-full h-auto object-cover"
              />
              {/* Diagonal overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-dark/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-card p-6 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-orange/10 flex items-center justify-center">
                  <Award className="w-7 h-7 text-orange" />
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold text-blue-dark">
                    {i18n.language === 'th' ? 'สิทธิบัตร' : 'Patented'}
                  </div>
                  <div className="text-sm text-gray-500 font-body">
                    {i18n.language === 'th' ? 'ประเทศญี่ปุ่น และ USA' : 'Japan & USA'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div ref={contentRef} className="lg:pl-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-dark/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-dark animate-pulse" />
              <span className="text-blue-dark text-sm font-body font-medium">
                {i18n.language === 'th' ? 'เกี่ยวกับเรา' : 'About Us'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-dark-text mb-6 leading-tight">
              {i18n.language === 'th' ? (
                <>
                  นวัตกรรมการแยกตะกอน
                  <span className="text-blue-light block">ที่มีประสิทธิภาพ</span>
                </>
              ) : (
                <>
                  Efficient Sludge
                  <span className="text-blue-light block">Separation Innovation</span>
                </>
              )}
            </h2>

            <p className="text-gray-600 font-body text-lg leading-relaxed mb-6">
              <strong className="text-blue-dark">TREE YOKO Part.,Ltd.</strong>{' '}
              {i18n.language === 'th' 
                ? 'เป็นผู้เชี่ยวชาญด้านการแยกตะกอนและกากออกจากน้ำเสีย เป็นผู้จำหน่ายเครื่อง'
                : 'is an expert in sludge and solid separation from wastewater. We are the authorized distributor of'
              }{' '}
              <span className="text-orange font-medium">SLIT SAVER</span>{' '}
              {i18n.language === 'th'
                ? 'เครื่องแยกกากและตะกอนออกจากน้ำเสียในอุตสาหกรรมต่าง ๆ'
                : 'machines for sludge and solid separation from wastewater in various industries.'
              }
            </p>

            <p className="text-gray-600 font-body leading-relaxed mb-8">
              {i18n.language === 'th'
                ? 'เครื่อง SLIT SAVER เป็นเครื่องแยกกากตะกอนแบบต่อเนื่อง ด้วยนวัตกรรมกลิ้งเพื่อกำจัดจากประเทศญี่ปุ่น ทำให้สามารถแยกตะกอนออกจากน้ำได้อย่างง่ายดาย กากและตะกอนที่ได้นั้นยังแห้ง มีน้ำหนักน้อย ลดค่าใช้จ่ายในการขนส่งเพื่อกำจัด'
                : 'The SLIT SAVER is a continuous sludge separation machine with patented KDS Separator technology from KENDENSHA Japan. It can easily separate sludge from water, and the resulting sludge is dry and lightweight, reducing disposal transportation costs.'
              }
            </p>

            <div className="space-y-4 mb-8">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-orange" />
                  </div>
                  <span className="text-gray-700 font-body">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
              style={{ perspective: '1000px' }}
            >
              <div className="flex items-center gap-6">
                <div className={`w-16 h-16 rounded-2xl ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold text-dark-text mb-1">
                    <span className="stat-value" data-value={stat.value}>
                      0
                    </span>
                    {stat.suffix}
                  </div>
                  <div className="text-gray-500 font-body">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
