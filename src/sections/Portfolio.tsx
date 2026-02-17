import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Building2, ExternalLink, Filter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

interface PortfolioItem {
  id: number;
  name: string;
  nameEn: string;
  category: string;
  location: string;
  description: string;
  descriptionEn: string;
  image: string;
}

const Portfolio = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: t('portfolio.categories.all') },
    { id: 'water', label: t('portfolio.categories.water') },
    { id: 'automotive', label: t('portfolio.categories.automotive') },
    { id: 'food', label: t('portfolio.categories.food') },
    { id: 'energy', label: t('portfolio.categories.energy') },
    { id: 'manufacturing', label: t('portfolio.categories.manufacturing') },
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      name: 'การประปาส่วนภูมิภาค เขต 2 สาขาบางไทร',
      nameEn: 'Provincial Waterworks Authority Zone 2, Bang Sai Branch',
      category: 'water',
      location: 'จ.อยุธยา',
      description: 'ระบบบำบัดน้ำเสียจากกระบวนการผลิตน้ำประปา',
      descriptionEn: 'Wastewater treatment system from water production process',
      image: `${import.meta.env.BASE_URL}images/app-municipal.jpg`,
    },
    {
      id: 2,
      name: 'การประปาส่วนภูมิภาค เขต 4 สาขาหาดส้มแป้น',
      nameEn: 'Provincial Waterworks Authority Zone 4, Hat Som Paen Branch',
      category: 'water',
      location: 'จ.ระนอง',
      description: 'ระบบแยกตะกอนจากน้ำเสียในโรงงานผลิตน้ำประปา',
      descriptionEn: 'Sludge separation system from wastewater in water production plant',
      image: `${import.meta.env.BASE_URL}images/app-municipal.jpg`,
    },
    {
      id: 3,
      name: 'Mitsubishi Motor (แหลมฉบัง)',
      nameEn: 'Mitsubishi Motor (Laem Chabang)',
      category: 'automotive',
      location: 'ชลบุรี',
      description: 'ระบบบำบัดน้ำเสียจากกระบวนการผลิตชิ้นส่วนยานยนต์',
      descriptionEn: 'Wastewater treatment from automotive parts manufacturing',
      image: `${import.meta.env.BASE_URL}images/app-industrial.jpg`,
    },
    {
      id: 4,
      name: 'โรงกลั่นน้ำมันบางจากไบโอฟูเอล',
      nameEn: 'Bangchak Biofuel Refinery',
      category: 'energy',
      location: 'บางปะอิน, จ.อยุธยา',
      description: 'ระบบแยกตะกอนจากน้ำเสียในกระบวนการผลิตไบโอดีเซล',
      descriptionEn: 'Sludge separation from biodiesel production wastewater',
      image: `${import.meta.env.BASE_URL}images/app-industrial.jpg`,
    },
    {
      id: 5,
      name: 'เคซีจี คอร์ปอเรชั่น (อิมพีเรียล บัตเตอร์คุกกี้)',
      nameEn: 'KCG Corporation (Imperial Butter Cookies)',
      category: 'food',
      location: 'กรุงเทพฯ',
      description: 'ระบบบำบัดน้ำเสียจากโรงงานผลิตคุกกี้และขนมอบ',
      descriptionEn: 'Wastewater treatment from cookie and bakery production',
      image: `${import.meta.env.BASE_URL}images/app-livestock.jpg`,
    },
    {
      id: 6,
      name: 'ฟาแสง ซีรีเน็กซ์',
      nameEn: 'Fasang Serinex',
      category: 'manufacturing',
      location: 'กรุงเทพฯ',
      description: 'ระบบบำบัดน้ำเสียจากโรงงานชุบอโนไดซ์และขึ้นรูป CNC',
      descriptionEn: 'Wastewater treatment from anodizing and CNC machining',
      image: `${import.meta.env.BASE_URL}images/app-industrial.jpg`,
    },
    {
      id: 7,
      name: 'คลีน แคร์ คอนเซ็พท์ แมนูแฟคเจอริ่ง',
      nameEn: 'Clean Care Concept Manufacturing',
      category: 'manufacturing',
      location: 'กรุงเทพฯ',
      description: 'ระบบบำบัดน้ำเสียจากการผลิตสบู่และสารซักฟอก',
      descriptionEn: 'Wastewater treatment from soap and detergent production',
      image: `${import.meta.env.BASE_URL}images/app-industrial.jpg`,
    },
    {
      id: 8,
      name: 'เคเอฟฟู้ดส์',
      nameEn: 'KF Foods',
      category: 'food',
      location: 'กรุงเทพฯ',
      description: 'ระบบบำบัดน้ำเสียจากโรงงานแปรรูปอาหารทะเลและอาหารแช่แข็ง',
      descriptionEn: 'Wastewater treatment from seafood and frozen food processing',
      image: `${import.meta.env.BASE_URL}images/app-livestock.jpg`,
    },
    {
      id: 9,
      name: 'โรงงานผลิตภัณฑ์อาหารไทย (ไวไว)',
      nameEn: 'Thai Food Products Factory (Wai Wai)',
      category: 'food',
      location: 'กรุงเทพฯ',
      description: 'ระบบบำบัดน้ำเสียจากโรงงานผลิตบะหมี่กึ่งสำเร็จรูป',
      descriptionEn: 'Wastewater treatment from instant noodle production',
      image: `${import.meta.env.BASE_URL}images/app-livestock.jpg`,
    },
    {
      id: 10,
      name: 'ชาญมิวสิคเคิล',
      nameEn: 'Charn Musical',
      category: 'manufacturing',
      location: 'กรุงเทพฯ',
      description: 'ระบบบำบัดน้ำเสียจากโรงงานผลิตเครื่องดนตรี',
      descriptionEn: 'Wastewater treatment from musical instrument manufacturing',
      image: `${import.meta.env.BASE_URL}images/app-industrial.jpg`,
    },
  ];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

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
      const cards = gridRef.current?.querySelectorAll('.portfolio-card');
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
              trigger: gridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
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
        <div ref={headerRef} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-dark/10 mb-6">
            <Building2 className="w-4 h-4 text-blue-dark" />
            <span className="text-blue-dark text-sm font-body font-medium">{t('portfolio.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-dark-text mb-4">
            {t('portfolio.title')}
          </h2>

          <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
            {t('portfolio.description')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <div className="flex items-center gap-2 mr-4 text-gray-500">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-body">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-dark text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-dark/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-card group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={i18n.language === 'th' ? item.name : item.nameEn}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-dark/80 via-blue-dark/40 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-body">
                    {categories.find(c => c.id === item.category)?.label}
                  </span>
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/90">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-body">{item.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-semibold text-dark-text mb-2 line-clamp-2 group-hover:text-blue-dark transition-colors">
                  {i18n.language === 'th' ? item.name : item.nameEn}
                </h3>
                <p className="text-gray-500 font-body text-sm line-clamp-2">
                  {i18n.language === 'th' ? item.description : item.descriptionEn}
                </p>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange/30 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/playlist?list=PLGPZB4P127dXMh2WCjeCEniaJEMGtDEEc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-dark text-white font-heading hover:bg-blue-light transition-colors"
          >
            {t('portfolio.viewMore')}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

