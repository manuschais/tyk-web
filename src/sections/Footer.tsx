import { Droplets, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { label: 'SLIT SAVER', href: '#models' },
      { label: 'KDS Separator', href: '#models' },
      { label: 'รุ่นผลิตภัณฑ์', href: '#models' },
      { label: 'อะไหล่', href: '#contact' },
    ],
    services: [
      { label: 'ติดตั้งเครื่อง', href: '#features' },
      { label: 'ทดลองใช้งาน', href: '#contact' },
      { label: 'บำรุงรักษา', href: '#features' },
      { label: 'ให้คำปรึกษา', href: '#contact' },
    ],
    company: [
      { label: 'เกี่ยวกับเรา', href: '#about' },
      { label: 'ผลงาน', href: '#applications' },
      { label: 'ข่าวสาร', href: '#' },
      { label: 'ติดต่อ', href: '#contact' },
    ],
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-blue-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">SLIT SAVER</h3>
                <p className="text-xs text-white/60">by Tree Yoko</p>
              </div>
            </div>

            <p className="text-white/70 font-body leading-relaxed mb-6 max-w-sm">
              ผู้เชี่ยวชาญด้านการแยกตะกอนและกากออกจากน้ำเสีย
              ด้วยนวัตกรรมเทคโนโลยีจากประเทศญี่ปุ่น
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:0902820591"
                className="flex items-center gap-3 text-white/70 hover:text-orange transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-body text-sm">090-282-0591</span>
              </a>
              <a
                href="mailto:info@treeyoko.com"
                className="flex items-center gap-3 text-white/70 hover:text-orange transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="font-body text-sm">info@treeyoko.com</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-4 h-4" />
                <span className="font-body text-sm">ประเทศไทย</span>
              </div>
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">ผลิตภัณฑ์</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-orange transition-colors font-body text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">บริการ</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-orange transition-colors font-body text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">บริษัท</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/60 hover:text-orange transition-colors font-body text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 font-body text-sm text-center md:text-left">
              © {currentYear} Tree Yoko Part.,Ltd. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="https://www.treeyoko.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-orange transition-colors"
              >
                <span className="font-body text-sm">www.treeyoko.com</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 opacity-10">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z"
            fill="white"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
