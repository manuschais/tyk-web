import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, CheckCircle, Wrench, FlaskConical, Settings, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const Kendensha = () => {
  const { i18n } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Settings,
      title: i18n.language === 'th' ? 'จัดจำหน่าย' : 'Distribution',
      description: i18n.language === 'th' 
        ? 'ตัวแทนจำหน่ายอย่างเป็นทางการของ KENDENSHA ในประเทศไทย'
        : 'Authorized distributor of KENDENSHA in Thailand',
    },
    {
      icon: Wrench,
      title: i18n.language === 'th' ? 'ติดตั้ง' : 'Installation',
      description: i18n.language === 'th'
        ? 'ทีมช่างผู้เชี่ยวชาญติดตั้งเครื่องและระบบครบวงจร'
        : 'Expert technicians for complete machine and system installation',
    },
    {
      icon: FlaskConical,
      title: i18n.language === 'th' ? 'ออกแบบระบบ' : 'System Design',
      description: i18n.language === 'th'
        ? 'ออกแบบระบบบำบัดน้ำเสียตามความต้องการของลูกค้า'
        : 'Design wastewater treatment systems tailored to customer needs',
    },
    {
      icon: Users,
      title: i18n.language === 'th' ? 'ทดสอบและสาธิต' : 'Testing & Demo',
      description: i18n.language === 'th'
        ? 'บริการทดลองเครื่องที่หน้างานก่อนตัดสินใจ'
        : 'On-site machine testing service before decision making',
    },
  ];

  const highlights = [
    i18n.language === 'th' ? 'สิทธิบัตรเฉพาะทางจากประเทศญี่ปุ่นและสหรัฐอเมริกา' : 'Patented technology from Japan and USA',
    i18n.language === 'th' ? 'เทคโนโลยี Self-Cleaning ไม่อุดตัน' : 'Self-Cleaning technology, clog-free',
    i18n.language === 'th' ? 'ประหยัดพลังงาน ใช้ไฟต่ำ' : 'Energy saving, low power consumption',
    i18n.language === 'th' ? 'บำรุงรักษาง่าย อะไหล่มาตรฐาน' : 'Easy maintenance, standard parts',
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      id="kendensha"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
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
            <Award className="w-4 h-4 text-blue-dark" />
            <span className="text-blue-dark text-sm font-body font-medium">
              {i18n.language === 'th' ? 'ตัวแทนจำหน่ายอย่างเป็นทางการ' : 'Authorized Distributor'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-dark-text mb-4">
            {i18n.language === 'th' ? 'ผู้จัดจำหน่าย ' : 'Authorized Distributor of '}
            <span className="text-blue-light">KENDENSHA</span>
          </h2>

          <p className="text-gray-600 font-body text-lg max-w-3xl mx-auto">
            {i18n.language === 'th' 
              ? 'Tree Yoko เป็นตัวแทนจำหน่ายอย่างเป็นทางการของ KENDENSHA Co., Ltd. ประเทศญี่ปุ่น ผู้ผลิตเครื่องแยกตะกอน KDS Separator ที่มีสิทธิบัตรระดับโลก'
              : 'Tree Yoko is the authorized distributor of KENDENSHA Co., Ltd. Japan, manufacturer of the patented KDS Separator sludge dewatering machine'
            }
          </p>
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - About Kendensha */}
          <div className="space-y-8">
            <div className="bg-light-gray rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-dark flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-white">K</span>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-dark-text">
                    KENDENSHA Co., Ltd.
                  </h3>
                  <p className="text-gray-500 font-body text-sm">
                    {i18n.language === 'th' ? 'ประเทศญี่ปุ่น' : 'Japan'}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 font-body leading-relaxed mb-6">
                {i18n.language === 'th'
                  ? 'KENDENSHA ก่อตั้งขึ้นในปี 1963 เป็นผู้เชี่ยวชาญด้านเครื่องแยกตะกอนและน้ำเสียมากกว่า 60 ปี ผลิตภัณฑ์ KDS Separator ได้รับสิทธิบัตรในประเทศญี่ปุ่นและสหรัฐอเมริกา มีการติดตั้งมากกว่า 1,300 เครื่องทั่วโลก'
                  : 'Founded in 1963, KENDENSHA has over 60 years of expertise in sludge separation and wastewater treatment. The KDS Separator is patented in Japan and USA with over 1,300 units installed worldwide'
                }
              </p>

              {/* Highlights */}
              <div className="space-y-3">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange flex-shrink-0" />
                    <span className="text-gray-700 font-body text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://kendensha.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="w-full rounded-xl border-blue-dark/20 text-blue-dark hover:bg-blue-dark/5 py-6"
              >
                {i18n.language === 'th' ? 'เว็บไซต์ KENDENSHA' : 'KENDENSHA Website'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>

          {/* Right - Our Services */}
          <div>
            <h3 className="text-xl font-heading font-semibold text-dark-text mb-6">
              {i18n.language === 'th' ? 'บริการของเรา' : 'Our Services'}
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-light-gray rounded-2xl p-6 hover:bg-blue-dark transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-dark/10 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors">
                    <service.icon className="w-6 h-6 text-blue-dark group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-heading font-semibold text-dark-text group-hover:text-white mb-2 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 group-hover:text-white/80 font-body text-sm transition-colors">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { 
                  value: '100+', 
                  label: i18n.language === 'th' ? 'เครื่องในไทย' : 'Units in Thailand' 
                },
                { 
                  value: '10+', 
                  label: i18n.language === 'th' ? 'ปีประสบการณ์' : 'Years Experience' 
                },
                { 
                  value: '99%', 
                  label: i18n.language === 'th' ? 'ลูกค้าพึงพอใจ' : 'Customer Satisfaction' 
                },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-light-gray rounded-xl">
                  <div className="text-2xl font-heading font-bold text-blue-dark">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kendensha;
