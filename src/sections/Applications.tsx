import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PiggyBank, Factory, Building2, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Applications = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLDivElement>(null);

  const applications = [
    {
      icon: PiggyBank,
      title: 'น้ำเสียจากฟาร์มปศุสัตว์',
      subtitle: 'Livestock Wastewater',
      description: 'เช่น การแยกมูลสัตว์ การแยกตะกอนจากระบบบำบัด การกำจัดสิ่งสกปรก',
      image: `${import.meta.env.BASE_URL}images/app-livestock.jpg`,
      color: 'from-green-500 to-emerald-600',
      examples: ['ฟาร์มหมู', 'ฟาร์มไก่', 'ฟาร์มวัว'],
    },
    {
      icon: Factory,
      title: 'น้ำเสียจากอุตสาหกรรม',
      subtitle: 'Industrial Wastewater',
      description: 'เช่น การแยกตะกอนจากโรงงานแปรรูปอาหาร โรงงานอาหารทะเล การบำบัดน้ำทิ้งจากโรงงาน',
      image: `${import.meta.env.BASE_URL}images/app-industrial.jpg`,
      color: 'from-blue-500 to-blue-600',
      examples: ['อุตสาหกรรมอาหาร', 'อุตสาหกรรมเครื่องดื่ม', 'โรงงานแปรรูป'],
    },
    {
      icon: Building2,
      title: 'น้ำเสียจากเทศบาล',
      subtitle: 'Municipal Wastewater',
      description: 'เช่น การขึ้นรูปและแยกตะกอนจากระบบบำบัดน้ำเสียของเทศบาล',
      image: `${import.meta.env.BASE_URL}images/app-municipal.jpg`,
      color: 'from-cyan-500 to-teal-600',
      examples: ['ระบบบำบัดน้ำเสีย', 'โรงบำบัดน้ำเสีย', 'ระบบสุขาภิบาล'],
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

      // Bubbles floating animation
      const bubbles = bubblesRef.current?.querySelectorAll('.app-bubble');
      bubbles?.forEach((bubble, index) => {
        // Entrance animation
        gsap.fromTo(
          bubble,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: bubblesRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Continuous floating
        gsap.to(bubble, {
          y: `${Math.sin(index * 1.5) * 20}`,
          x: `${Math.cos(index * 1.2) * 10}`,
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="applications"
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
            <span className="w-2 h-2 rounded-full bg-blue-dark animate-pulse" />
            <span className="text-blue-dark text-sm font-body font-medium">การประยุกต์ใช้</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-dark-text mb-4">
            ใช้งานได้หลากหลาย
            <span className="text-blue-light"> ในทุกอุตสาหกรรม</span>
          </h2>

          <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
            SLIT SAVER สามารถประยุกต์ใช้ได้กับหลากหลายประเภทของน้ำเสีย
          </p>
        </div>

        {/* Applications Bubbles */}
        <div
          ref={bubblesRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {applications.map((app, index) => (
            <div
              key={index}
              className="app-bubble group relative"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${app.color} opacity-70`} />
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                      <app.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-body text-gray-400 uppercase tracking-wider">
                    {app.subtitle}
                  </span>
                  <h3 className="text-xl font-heading font-semibold text-dark-text mt-1 mb-3">
                    {app.title}
                  </h3>

                  <p className="text-gray-600 font-body text-sm leading-relaxed mb-4">
                    {app.description}
                  </p>

                  {/* Examples */}
                  <div className="flex flex-wrap gap-2">
                    {app.examples.map((example, eIndex) => (
                      <span
                        key={eIndex}
                        className="px-3 py-1 rounded-full bg-light-gray text-xs font-body text-gray-600"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '1,300+', label: 'เครื่องที่ติดตั้งทั่วโลก' },
            { value: '30+', label: 'ประเทศที่ให้บริการ' },
            { value: '99%', label: 'ความพึงพอใจของลูกค้า' },
            { value: '24/7', label: 'การสนับสนุนตลอดเวลา' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-heading font-bold text-blue-dark mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 font-body">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;

