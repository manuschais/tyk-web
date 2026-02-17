import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Fluid background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particle system for fluid effect
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const colors = ['#003366', '#005b99', '#004080', '#0066aa'];
    
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 150 + 100,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.fillStyle = '#003366';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -p.radius) p.x = canvas.width + p.radius;
        if (p.x > canvas.width + p.radius) p.x = -p.radius;
        if (p.y < -p.radius) p.y = canvas.height + p.radius;
        if (p.y > canvas.height + p.radius) p.y = -p.radius;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        gradient.addColorStop(0, p.color + '40');
        gradient.addColorStop(0.5, p.color + '20');
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      // Title animation - split by character
      if (titleRef.current) {
        const chars = titleRef.current.innerText.split('');
        titleRef.current.innerHTML = chars
          .map((char) => `<span class="split-char inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
          .join('');

        tl.fromTo(
          titleRef.current.querySelectorAll('.split-char'),
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.05 },
          0.2
        );
      }

      // Subtitle animation
      tl.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.6
      );

      // Description animation
      tl.fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.8
      );

      // Buttons animation
      tl.fromTo(
        buttonsRef.current?.children || [],
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1 },
        1
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Fluid Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-dark/30 to-blue-dark/60"
        style={{ zIndex: 1 }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 2 }}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-white/20 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Logo Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <img
            src="/images/logo-tyk.png"
            alt="TYK Logo"
            className="w-8 h-8 object-contain brightness-0 invert"
          />
          <span className="text-white/90 text-sm font-body">{t('hero.badge')}</span>
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold text-white mb-6 tracking-tight"
        >
          SLIT SAVER
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-xl sm:text-2xl md:text-3xl text-white/90 font-heading font-light mb-6"
        >
          {t('hero.subtitle')}
        </p>

        {/* Description */}
        <p
          ref={descRef}
          className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-10 font-body leading-relaxed"
        >
          {t('hero.description')}
        </p>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-orange hover:bg-orange/90 text-white px-8 py-6 text-lg font-heading rounded-full shadow-glow-orange transition-all duration-300 hover:scale-105 group"
            onClick={() => scrollToSection('contact')}
          >
            <Phone className="w-5 h-5 mr-2" />
            {t('hero.cta.contact')}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-heading rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('portfolio')}
          >
            {t('hero.cta.portfolio')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '100+', label: t('hero.stats.installed') },
            { value: '10+', label: t('hero.stats.experience') },
            { value: '3R', label: t('hero.stats.recycle') },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/60 font-body">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 5 }}>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#f5f5f5"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
