import { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t('nav.home'), href: '#hero' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.features'), href: '#features' },
    { label: t('nav.models'), href: '#models' },
    { label: t('nav.applications'), href: '#applications' },
    { label: t('nav.videos'), href: '#videos' },
    { label: t('nav.portfolio'), href: '#portfolio' },
    { label: t('nav.kendensha'), href: '#kendensha' },
    { label: t('nav.events'), href: '#events' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'th' ? 'en' : 'th';
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#hero')}
              className="flex items-center gap-3 group"
            >
              <img
                src="/images/logo-tyk.png"
                alt="TYK Logo"
                className={`w-[100px] h-[100px] object-contain transition-all duration-300 ${
                  isScrolled ? 'brightness-100' : 'brightness-0 invert'
                }`}
              />
              <div className="hidden sm:block">
                <span
                  className={`font-heading font-bold text-lg transition-colors ${
                    isScrolled ? 'text-blue-dark' : 'text-white'
                  }`}
                >
                  SLIT SAVER
                </span>
                <span
                  className={`block text-xs transition-colors ${
                    isScrolled ? 'text-gray-500' : 'text-white/70'
                  }`}
                >
                  by Tree Yoko
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-3 py-2 rounded-lg font-body text-sm transition-all duration-300 ${
                    isScrolled
                      ? 'text-gray-600 hover:text-blue-dark hover:bg-blue-dark/5'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-blue-dark hover:bg-blue-dark/5'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-body font-medium">
                  {i18n.language === 'th' ? 'TH' : 'EN'}
                </span>
              </button>

              {/* CTA Button */}
              <Button
                onClick={() => scrollToSection('#contact')}
                className={`rounded-full px-6 transition-all duration-300 ${
                  isScrolled
                    ? 'bg-orange hover:bg-orange/90 text-white'
                    : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30'
                }`}
              >
                <Phone className="w-4 h-4 mr-2" />
                090-282-0591
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                isScrolled
                  ? 'bg-blue-dark/10 text-blue-dark'
                  : 'bg-white/20 text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            {/* Language Switcher Mobile */}
            <div className="mb-6 pb-6 border-b border-gray-100">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-blue-dark/5 text-blue-dark"
              >
                <Globe className="w-5 h-5" />
                <span className="font-body font-medium">
                  {i18n.language === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย'}
                </span>
              </button>
            </div>

            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="w-full text-left px-4 py-3 rounded-xl font-body text-dark-text hover:bg-blue-dark/5 hover:text-blue-dark transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <Button
                onClick={() => scrollToSection('#contact')}
                className="w-full rounded-xl bg-orange hover:bg-orange/90 text-white py-6"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('nav.contact')}
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-orange" />
                <span className="font-body">090-282-0591</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <span className="w-5 h-5 flex items-center justify-center text-orange font-bold text-sm">@</span>
                <span className="font-body">tyk-ton</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
