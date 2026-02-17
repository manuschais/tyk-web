import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, ChevronRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

gsap.registerPlugin(ScrollTrigger);

interface ModelSpec {
  model: string;
  width: string;
  rows: string;
  motor: string;
  capacity: string;
  flowRate: string;
}

const Models = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const models: ModelSpec[] = [
    { model: 'SS-2.56', width: '236', rows: '6', motor: '0.1', capacity: '20', flowRate: '2' },
    { model: 'SS-312', width: '280', rows: '12', motor: '0.2', capacity: '45', flowRate: '4.5' },
    { model: 'SS-412', width: '380', rows: '12', motor: '0.2', capacity: '55', flowRate: '5.5' },
    { model: 'SS-512', width: '480', rows: '12', motor: '0.2', capacity: '80', flowRate: '8' },
    { model: 'SS-612', width: '580', rows: '12', motor: '0.4', capacity: '100', flowRate: '10' },
    { model: 'SS-616', width: '580', rows: '16', motor: '0.4', capacity: '130', flowRate: '13' },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setMousePos({ x: 0, y: 0 });
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

      // Cards flip animation
      const cards = cardsRef.current?.querySelectorAll('.model-card');
      cards?.forEach((card, index) => {
        gsap.fromTo(
          card,
          { rotateX: 45, opacity: 0, y: 60 },
          {
            rotateX: 0,
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="models"
      className="relative py-24 lg:py-32 bg-light-gray overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-dark/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-dark animate-pulse" />
            <span className="text-blue-dark text-sm font-body font-medium">รุ่นผลิตภัณฑ์</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-dark-text mb-4">
            เลือกรุ่นที่เหมาะกับ
            <span className="text-blue-light"> ความต้องการของคุณ</span>
          </h2>

          <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
            หลากหลายรุ่นที่ออกแบบมาเพื่อรองรับปริมาณการทำงานที่แตกต่างกัน
          </p>
        </div>

        {/* Models Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: '1000px' }}
        >
          {models.map((model, index) => (
            <div
              key={index}
              className="model-card group relative bg-white rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer"
              style={{
                transform:
                  hoveredCard === index
                    ? `rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg) translateZ(20px)`
                    : 'rotateX(0) rotateY(0) translateZ(0)',
                transformStyle: 'preserve-3d',
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Model Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-body text-gray-400">MODEL</span>
                  <h3 className="text-2xl font-heading font-bold text-blue-dark">{model.model}</h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-dark/10 flex items-center justify-center group-hover:bg-orange/10 transition-colors">
                  <span className="text-lg font-heading font-bold text-blue-dark group-hover:text-orange transition-colors">
                    {index + 1}
                  </span>
                </div>
              </div>

              {/* Specs */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-500 font-body">ความกว้าง</span>
                  <span className="text-sm font-body font-medium text-dark-text">{model.width} mm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-500 font-body">จำนวนแถบ</span>
                  <span className="text-sm font-body font-medium text-dark-text">{model.rows} แถว</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-500 font-body">มอเตอร์</span>
                  <span className="text-sm font-body font-medium text-dark-text">{model.motor} kW</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-500 font-body">กำลังผลิต</span>
                  <span className="text-sm font-body font-medium text-dark-text">{model.capacity} kgDS/hr</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-500 font-body">อัตราการไหล</span>
                  <span className="text-sm font-body font-medium text-dark-text">{model.flowRate} m³/hr</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 rounded-xl border-blue-dark/20 text-blue-dark hover:bg-blue-dark/5"
                    >
                      <Info className="w-4 h-4 mr-2" />
                      รายละเอียด
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-lg">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-heading text-blue-dark">
                        {model.model}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <img
                        src={`${import.meta.env.BASE_URL}images/about-machine.jpg`}
                        alt={model.model}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-light-gray rounded-xl p-4">
                          <span className="text-xs text-gray-500">ความกว้าง</span>
                          <p className="text-lg font-heading font-semibold">{model.width} mm</p>
                        </div>
                        <div className="bg-light-gray rounded-xl p-4">
                          <span className="text-xs text-gray-500">จำนวนแถบ</span>
                          <p className="text-lg font-heading font-semibold">{model.rows} แถว</p>
                        </div>
                        <div className="bg-light-gray rounded-xl p-4">
                          <span className="text-xs text-gray-500">มอเตอร์</span>
                          <p className="text-lg font-heading font-semibold">{model.motor} kW</p>
                        </div>
                        <div className="bg-light-gray rounded-xl p-4">
                          <span className="text-xs text-gray-500">กำลังผลิต</span>
                          <p className="text-lg font-heading font-semibold">{model.capacity} kgDS/hr</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 font-body">
                        * กำลังผลิตเป็นเพียงค่าอ้างอิง อาจแตกต่างกันขึ้นอยู่กับความเข้มข้นและคุณสมบัติของน้ำเสีย
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button
                  size="sm"
                  className="flex-1 rounded-xl bg-blue-dark hover:bg-blue-light text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  ดาวน์โหลด
                </Button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl border-2 border-orange/30" />
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-card">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
              <Info className="w-5 h-5 text-orange" />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-dark-text mb-2">หมายเหตุ</h4>
              <ul className="space-y-2 text-sm text-gray-600 font-body">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                  กำลังผลิตเป็นเพียงค่าอ้างอิงและอาจแตกต่างกันขึ้นอยู่กับความเข้มข้นและคุณสมบัติของน้ำเสีย
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                  ความจุไฟฟ้าเป็นเพียงค่าอ้างอิงและอาจเปลี่ยนแปลงตามข้อกำหนดและคุณสมบัติของน้ำเสีย
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                  กรุณาติดต่อเราสำหรับข้อกำหนดพิเศษอื่นๆ (เช่น หัวฉีดทำความสะอาด, เคลือบมอเตอร์)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;

