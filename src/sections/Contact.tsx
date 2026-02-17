import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: 'โทรศัพท์',
      value: '090-282-0591',
      href: 'tel:0902820591',
    },
    {
      icon: MessageCircle,
      title: 'LINE ID',
      value: 'tyk-ton',
      href: 'https://line.me/ti/p/~tyk-ton',
    },
    {
      icon: Mail,
      title: 'อีเมล',
      value: 'info@treeyoko.com',
      href: 'mailto:info@treeyoko.com',
    },
    {
      icon: MapPin,
      title: 'ที่อยู่',
      value: 'ประเทศไทย',
      href: '#',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      if (formRef.current) {
        formRef.current.reset();
      }
    }, 3000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left panel slide animation
      gsap.fromTo(
        leftPanelRef.current,
        { x: '-100%', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Right panel slide animation
      gsap.fromTo(
        rightPanelRef.current,
        { x: '100%', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Form fields stagger animation
      gsap.fromTo(
        formRef.current?.querySelectorAll('.form-field') || [],
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: formRef.current,
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
      id="contact"
      className="relative py-24 lg:py-32 bg-light-gray overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          {/* Left Panel - Contact Info */}
          <div
            ref={leftPanelRef}
            className="relative bg-blue-dark p-8 lg:p-12 text-white"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '30px 30px',
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
                  <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                  <span className="text-white/90 text-sm font-body">ติดต่อเรา</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-heading font-semibold mb-4">
                  ให้เราช่วยคุณ
                  <span className="text-orange block">เลือกโซลูชันที่เหมาะสม</span>
                </h2>

                <p className="text-white/70 font-body leading-relaxed">
                  ทีมงานผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาและแนะนำโซลูชันที่เหมาะสมกับความต้องการของคุณ
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange/20 flex items-center justify-center group-hover:bg-orange/30 transition-colors">
                      <item.icon className="w-5 h-5 text-orange" />
                    </div>
                    <div>
                      <span className="text-xs text-white/50 font-body">{item.title}</span>
                      <p className="text-white font-body font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="2" />
                  <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="2" />
                  <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Panel - Contact Form */}
          <div
            ref={rightPanelRef}
            className="relative bg-white p-8 lg:p-12"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-heading font-semibold text-dark-text mb-2">
                ส่งข้อความถึงเรา
              </h3>
              <p className="text-gray-500 font-body">
                กรอกข้อมูลด้านล่าง เราจะติดต่อกลับโดยเร็วที่สุด
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="form-field">
                <Label htmlFor="name" className="text-dark-text font-body mb-2 block">
                  ชื่อ-นามสกุล
                </Label>
                <div className="input-focus-line">
                  <Input
                    id="name"
                    type="text"
                    placeholder="กรุณากรอกชื่อของคุณ"
                    required
                    className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-orange focus:ring-orange/20"
                  />
                </div>
              </div>

              <div className="form-field">
                <Label htmlFor="email" className="text-dark-text font-body mb-2 block">
                  อีเมล
                </Label>
                <div className="input-focus-line">
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-orange focus:ring-orange/20"
                  />
                </div>
              </div>

              <div className="form-field">
                <Label htmlFor="phone" className="text-dark-text font-body mb-2 block">
                  เบอร์โทรศัพท์
                </Label>
                <div className="input-focus-line">
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="090-000-0000"
                    className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-orange focus:ring-orange/20"
                  />
                </div>
              </div>

              <div className="form-field">
                <Label htmlFor="message" className="text-dark-text font-body mb-2 block">
                  ข้อความ
                </Label>
                <div className="input-focus-line">
                  <Textarea
                    id="message"
                    placeholder="บอกเราเกี่ยวกับความต้องการของคุณ..."
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-orange focus:ring-orange/20 resize-none"
                  />
                </div>
              </div>

              <div className="form-field">
                <Button
                  type="submit"
                  disabled={isLoading || isSubmitted}
                  className={`w-full py-6 rounded-xl font-heading font-medium text-lg transition-all duration-300 ${
                    isSubmitted
                      ? 'bg-green-500 hover:bg-green-500'
                      : 'bg-orange hover:bg-orange/90'
                  } text-white`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      กำลังส่ง...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      ส่งข้อความสำเร็จ!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      ส่งข้อความ
                    </span>
                  )}
                </Button>
              </div>
            </form>

            {/* Quick Contact */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 font-body text-center mb-4">
                หรือติดต่อเราผ่านช่องทางด่วน
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="tel:0902820591"
                  className="w-12 h-12 rounded-full bg-blue-dark/10 flex items-center justify-center hover:bg-blue-dark hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href="https://line.me/ti/p/~tyk-ton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
