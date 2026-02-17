import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Settings, Shield, Sliders, Wrench, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const { i18n } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const isThai = i18n.language === 'th';

  const features = [
    {
      step: '01',
      title: isThai ? 'ติดตั้งง่าย' : 'Easy Installation',
      subtitle: 'Small Footprint',
      description: isThai 
        ? 'KDS separator ไม่จำเป็นต้องใช้พื้นที่กว้าง และมีเสียงและแรงสั่นสะเทือนน้อยมาก สามารถออกแบบและติดตั้งในพื้นที่เดิมของลูกค้าได้'
        : 'The KDS separator does not require a wide space and has very low noise and vibration. It can be designed and installed in the client\'s existing space.',
      icon: Settings,
      image: '/images/feature-install.jpg',
      color: 'from-blue-dark to-blue-light',
      points: isThai 
        ? ['ใช้พื้นที่ 1/3 ของเครื่องแบบดั้งเดิม', 'เสียงและแรงสั่นต่ำ', 'ติดตั้งในพื้นที่จำกัดได้']
        : ['1/3 the space of conventional machines', 'Low noise and vibration', 'Installable in limited spaces'],
    },
    {
      step: '02',
      title: isThai ? 'ไม่อุดตัน' : 'Clog-free',
      subtitle: 'Clog-free Operation',
      description: isThai
        ? 'กลไกการทำความสะอาดตัวเองที่เป็นเอกลักษณ์ของ Kendensha ป้องกันการอุดตันบนตะแกรง ไม่จำเป็นต้องล้างย้อนกลับ'
        : 'Kendensha\'s unique self-cleaning mechanism prevents clogging on the screen, so backwash is not required.',
      icon: Shield,
      image: '/images/feature-operation.jpg',
      color: 'from-blue-light to-cyan-500',
      points: isThai
        ? ['ไม่ต้องล้างน้ำย้อนกลับ', 'ประมวลผลเสถียรต่อเนื่อง', 'ลดการสึกหรอของอะไหล่']
        : ['No backwash needed', 'Stable continuous processing', 'Reduced wear on parts'],
    },
    {
      step: '03',
      title: isThai ? 'ปรับได้หลากหลาย' : 'Versatile',
      subtitle: 'Versatile Adjustment',
      description: isThai
        ? 'ปรับให้เข้ากับคุณสมบัติตะกอนที่หลากหลายได้อย่างง่ายดาย โดยการปรับความเร็วการหมุนของแผ่นรูปไข่และแรงกดของแผ่นกด'
        : 'Easily adjustable to accommodate various sludge properties by adjusting the rotational speed of the oval plates and the pressure plate.',
      icon: Sliders,
      image: '/images/about-machine.jpg',
      color: 'from-cyan-500 to-teal-500',
      points: isThai
        ? ['ปรับความเร็วรอบได้', 'ควบคุมความแห้งของตะกอน', 'รองรับหลายประเภทน้ำเสีย']
        : ['Adjustable rotation speed', 'Control sludge dryness', 'Support multiple wastewater types'],
    },
    {
      step: '04',
      title: isThai ? 'บำรุงรักษาง่าย' : 'Easy Maintenance',
      subtitle: 'Easy Maintenance',
      description: isThai
        ? 'อะไหล่ที่สึกหรอสามารถเปลี่ยนได้โดยการแลกเปลี่ยนโมดูลทั้งชิ้น ทำให้สามารถกู้คืนได้อย่างรวดเร็ว'
        : 'Worn parts can be replaced by exchanging the entire module, enabling quick restoration.',
      icon: Wrench,
      image: '/images/feature-install.jpg',
      color: 'from-teal-500 to-green-500',
      points: isThai
        ? ['เปลี่ยนอะไหล่เป็นโมดูล', 'อะไหล่มาตรฐานราคาถูก', 'ซ่อมบำรุงรวดเร็ว']
        : ['Modular part replacement', 'Standard affordable parts', 'Quick maintenance'],
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

      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll('.feature-card');
      cards?.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Progress bar animation
      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [i18n.language]);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative py-24 lg:py-32 bg-light-gray overflow-hidden"
    >
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-blue-dark via-blue-light to-orange origin-left"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-dark/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-dark animate-pulse" />
            <span className="text-blue-dark text-sm font-body font-medium">
              {isThai ? 'ขั้นตอนการทำงาน' : 'How It Works'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-dark-text mb-4">
            {isThai ? (
              <>4 ขั้นตอนสู่<span className="text-blue-light"> ประสิทธิภาพสูงสุด</span></>
            ) : (
              <>4 Steps to <span className="text-blue-light">Maximum Efficiency</span></>
            )}
          </h2>

          <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
            {isThai 
              ? 'ระบบการทำงานที่ออกแบบมาอย่างพิถีพิถัน เพื่อให้ได้ประสิทธิภาพการแยกตะกอนที่ดีที่สุด'
              : 'A meticulously designed system to achieve the best sludge separation efficiency'
            }
          </p>
        </div>

        {/* Features Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-60`} />
                
                {/* Step Badge */}
                <div className="absolute top-4 left-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <span className="text-2xl font-heading font-bold text-white">{feature.step}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <span className="text-xs font-body text-gray-400 uppercase tracking-wider">
                    {feature.subtitle}
                  </span>
                  <h3 className="text-2xl font-heading font-semibold text-dark-text mt-1">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-gray-600 font-body leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Feature Points */}
                <div className="space-y-3">
                  {feature.points.map((point, pIndex) => (
                    <div key={pIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-body">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-orange/30 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 font-body mb-6">
            {isThai 
              ? 'สนใจทดลองเครื่องที่หน้างาน? ทีมงานของเรายินดีให้บริการ'
              : 'Interested in on-site machine testing? Our team is ready to serve you'
            }
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-blue-dark font-heading font-medium hover:text-orange transition-colors"
          >
            {isThai ? 'ติดต่อสอบถามเพิ่มเติม' : 'Contact for more information'}
            <span className="w-6 h-6 rounded-full bg-blue-dark/10 flex items-center justify-center group-hover:bg-orange/10">
              <span className="text-lg">→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
