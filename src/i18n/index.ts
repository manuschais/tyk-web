import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Thai translations
const thResources = {
  translation: {
    // Navigation
    nav: {
      home: 'หน้าหลัก',
      about: 'เกี่ยวกับเรา',
      features: 'ขั้นตอนการทำงาน',
      models: 'รุ่นผลิตภัณฑ์',
      applications: 'การประยุกต์ใช้',
      videos: 'วิดีโอ',
      events: 'ข่าวสาร',
      portfolio: 'ผลงาน',
      kendensha: 'KENDENSHA',
      contact: 'ติดต่อ',
    },

    // Hero Section
    hero: {
      badge: 'นวัตกรรมจากประเทศญี่ปุ่น',
      title: 'SLIT SAVER',
      subtitle: 'นวัตกรรมการแยกกากและตะกอนจากน้ำเสีย',
      description: 'เครื่องแยกกากและตะกอนแบบต่อเนื่อง ด้วยเทคโนโลยีจากประเทศญี่ปุ่น ที่ช่วยเพิ่มประสิทธิภาพการบำบัดน้ำเสียและลดต้นทุนการดำเนินงาน',
      cta: {
        contact: 'ติดต่อเรา',
        portfolio: 'ดูผลงาน',
      },
      stats: {
        installed: 'เครื่องที่ติดตั้งในไทย',
        experience: 'ปีประสบการณ์',
        recycle: 'Reduce Reuse Recycle',
      },
    },

    // About Section
    about: {
      badge: 'เกี่ยวกับเรา',
      title: 'นวัตกรรมการแยกตะกอนที่มีประสิทธิภาพ',
      description1: 'เป็นผู้เชี่ยวชาญด้านการแยกตะกอนและกากออกจากน้ำเสีย เป็นผู้จำหน่ายเครื่อง SLIT SAVER เครื่องแยกกากและตะกอนออกจากน้ำเสียในอุตสาหกรรมต่าง ๆ',
      description2: 'เครื่อง SLIT SAVER เป็นเครื่องแยกกากตะกอนแบบต่อเนื่อง ด้วยนวัตกรรมกลิ้งเพื่อกำจัดจากประเทศญี่ปุ่น ทำให้สามารถแยกตะกอนออกจากน้ำได้อย่างง่ายดาย กากและตะกอนที่ได้นั้นยังแห้ง มีน้ำหนักน้อย ลดค่าใช้จ่ายในการขนส่งเพื่อกำจัด',
      features: [
        'ใช้พื้นที่ไม่มากเมื่อเทียบกับเครื่องแยกตะกอนในรูปแบบอื่นๆ',
        'ติดตั้งไม่ยาก แต่มีประสิทธิภาพในการแยกกากและตะกอน',
        'สามารถติดตั้งเข้าร่วมกับระบบบำบัดน้ำเสียที่มีอยู่เดิม',
        'ทีมงานออกแบบและผู้เชี่ยวชาญให้คำแนะนำเพิ่มเติม',
      ],
      patent: 'สิทธิบัตร',
      patentDesc: 'ประเทศญี่ปุ่น และ USA',
      stats: {
        installed: 'เครื่องที่ติดตั้งในไทย',
        experience: 'ปีประสบการณ์',
        recycle: 'Reduce Reuse Recycle',
      },
    },

    // Features Section
    features: {
      badge: 'ขั้นตอนการทำงาน',
      title: '4 ขั้นตอนสู่ประสิทธิภาพสูงสุด',
      description: 'ระบบการทำงานที่ออกแบบมาอย่างพิถีพิถัน เพื่อให้ได้ประสิทธิภาพการแยกตะกอนที่ดีที่สุด',
      steps: [
        {
          title: 'ติดตั้งง่าย',
          subtitle: 'Small Footprint',
          description: 'KDS separator ไม่จำเป็นต้องใช้พื้นที่กว้าง และมีเสียงและแรงสั่นสะเทือนน้อยมาก สามารถออกแบบและติดตั้งในพื้นที่เดิมของลูกค้าได้',
          points: ['ใช้พื้นที่ 1/3 ของเครื่องแบบดั้งเดิม', 'เสียงและแรงสั่นต่ำ', 'ติดตั้งในพื้นที่จำกัดได้'],
        },
        {
          title: 'ไม่อุดตัน',
          subtitle: 'Clog-free Operation',
          description: 'กลไกการทำความสะอาดตัวเองที่เป็นเอกลักษณ์ของ Kendensha ป้องกันการอุดตันบนตะแกรง ไม่จำเป็นต้องล้างย้อนกลับ',
          points: ['ไม่ต้องล้างน้ำย้อนกลับ', 'ประมวลผลเสถียรต่อเนื่อง', 'ลดการสึกหรอของอะไหล่'],
        },
        {
          title: 'ปรับได้หลากหลาย',
          subtitle: 'Versatile Adjustment',
          description: 'ปรับให้เข้ากับคุณสมบัติตะกอนที่หลากหลายได้อย่างง่ายดาย โดยการปรับความเร็วการหมุนของแผ่นรูปไข่และแรงกดของแผ่นกด',
          points: ['ปรับความเร็วรอบได้', 'ควบคุมความแห้งของตะกอน', 'รองรับหลายประเภทน้ำเสีย'],
        },
        {
          title: 'บำรุงรักษาง่าย',
          subtitle: 'Easy Maintenance',
          description: 'อะไหล่ที่สึกหรอสามารถเปลี่ยนได้โดยการแลกเปลี่ยนโมดูลทั้งชิ้น ทำให้สามารถกู้คืนได้อย่างรวดเร็ว',
          points: ['เปลี่ยนอะไหล่เป็นโมดูล', 'อะไหล่มาตรฐานราคาถูก', 'ซ่อมบำรุงรวดเร็ว'],
        },
      ],
      cta: 'ติดต่อสอบถามเพิ่มเติม',
    },

    // Models Section
    models: {
      badge: 'รุ่นผลิตภัณฑ์',
      title: 'เลือกรุ่นที่เหมาะกับความต้องการของคุณ',
      description: 'หลากหลายรุ่นที่ออกแบบมาเพื่อรองรับปริมาณการทำงานที่แตกต่างกัน',
      specs: {
        width: 'ความกว้าง',
        rows: 'จำนวนแถบ',
        motor: 'มอเตอร์',
        capacity: 'กำลังผลิต',
        flowRate: 'อัตราการไหล',
      },
      actions: {
        details: 'รายละเอียด',
        download: 'ดาวน์โหลด',
      },
      note: {
        title: 'หมายเหตุ',
        items: [
          'กำลังผลิตเป็นเพียงค่าอ้างอิงและอาจแตกต่างกันขึ้นอยู่กับความเข้มข้นและคุณสมบัติของน้ำเสีย',
          'ความจุไฟฟ้าเป็นเพียงค่าอ้างอิงและอาจเปลี่ยนแปลงตามข้อกำหนดและคุณสมบัติของน้ำเสีย',
          'กรุณาติดต่อเราสำหรับข้อกำหนดพิเศษอื่นๆ (เช่น หัวฉีดทำความสะอาด, เคลือบมอเตอร์)',
        ],
      },
    },

    // Applications Section
    applications: {
      badge: 'การประยุกต์ใช้',
      title: 'ใช้งานได้หลากหลายในทุกอุตสาหกรรม',
      description: 'SLIT SAVER สามารถประยุกต์ใช้ได้กับหลากหลายประเภทของน้ำเสีย',
      types: [
        {
          title: 'น้ำเสียจากฟาร์มปศุสัตว์',
          subtitle: 'Livestock Wastewater',
          description: 'เช่น การแยกมูลสัตว์ การแยกตะกอนจากระบบบำบัด การกำจัดสิ่งสกปรก',
          examples: ['ฟาร์มหมู', 'ฟาร์มไก่', 'ฟาร์มวัว'],
        },
        {
          title: 'น้ำเสียจากอุตสาหกรรม',
          subtitle: 'Industrial Wastewater',
          description: 'เช่น การแยกตะกอนจากโรงงานแปรรูปอาหาร โรงงานอาหารทะเล การบำบัดน้ำทิ้งจากโรงงาน',
          examples: ['อุตสาหกรรมอาหาร', 'อุตสาหกรรมเครื่องดื่ม', 'โรงงานแปรรูป'],
        },
        {
          title: 'น้ำเสียจากเทศบาล',
          subtitle: 'Municipal Wastewater',
          description: 'เช่น การขึ้นรูปและแยกตะกอนจากระบบบำบัดน้ำเสียของเทศบาล',
          examples: ['ระบบบำบัดน้ำเสีย', 'โรงบำบัดน้ำเสีย', 'ระบบสุขาภิบาล'],
        },
      ],
      stats: {
        installed: 'เครื่องที่ติดตั้งทั่วโลก',
        countries: 'ประเทศที่ให้บริการ',
        satisfaction: 'ความพึงพอใจของลูกค้า',
        support: 'การสนับสนุนตลอดเวลา',
      },
    },

    // Video Gallery Section
    videos: {
      badge: 'วิดีโอสาธิต',
      title: 'ดูการทำงานจริงของ SLIT SAVER',
      description: 'วิดีโอสาธิตการทำงานและผลงานการติดตั้งจากทั่วประเทศ',
      tabs: {
        demo: 'สาธิตการใช้งาน',
        thaiwater: 'ThaiWater 2025',
      },
      viewAll: 'ดูวิดีโอทั้งหมด',
    },

    // Events Section
    events: {
      badge: 'ข่าวสารและกิจกรรม',
      title: 'พบกับเราที่งานแสดงสินค้า',
      description: 'เข้าร่วมงานแสดงเทคโนโลยีน้ำระดับนานาชาติ พบกับนวัตกรรมล่าสุดจาก Tree Yoko',
      status: {
        ongoing: 'กำลังจัดงาน',
        upcoming: 'upcoming',
        past: 'ผ่านไปแล้ว',
      },
      highlights: 'ไฮไลท์ภายในงาน',
      upcomingEvents: 'งานที่จะเกิดขึ้น',
      actions: {
        booth: 'ดูข้อมูลบูธ',
        videos: 'วิดีโอจากงาน',
      },
    },

    // Portfolio Section
    portfolio: {
      badge: 'ผลงานการติดตั้ง',
      title: 'ผลงานการติดตั้งที่ประสบความสำเร็จ',
      description: 'ตัวอย่างผลงานการติดตั้งเครื่อง SLIT SAVER จากลูกค้าชั้นนำทั่วประเทศ',
      categories: {
        all: 'ทั้งหมด',
        water: 'การประปา',
        automotive: 'ยานยนต์',
        food: 'อาหารและเครื่องดื่ม',
        energy: 'พลังงาน',
        manufacturing: 'การผลิต',
      },
      viewMore: 'ดูเพิ่มเติม',
    },

    // Contact Section
    contact: {
      badge: 'ติดต่อเรา',
      title: 'ให้เราช่วยคุณเลือกโซลูชันที่เหมาะสม',
      description: 'ทีมงานผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาและแนะนำโซลูชันที่เหมาะสมกับความต้องการของคุณ',
      info: {
        phone: 'โทรศัพท์',
        line: 'LINE ID',
        email: 'อีเมล',
        address: 'ที่อยู่',
      },
      form: {
        title: 'ส่งข้อความถึงเรา',
        description: 'กรอกข้อมูลด้านล่าง เราจะติดต่อกลับโดยเร็วที่สุด',
        name: 'ชื่อ-นามสกุล',
        email: 'อีเมล',
        phone: 'เบอร์โทรศัพท์',
        message: 'ข้อความ',
        placeholder: 'บอกเราเกี่ยวกับความต้องการของคุณ...',
        submit: 'ส่งข้อความ',
        sending: 'กำลังส่ง...',
        success: 'ส่งข้อความสำเร็จ!',
        quickContact: 'หรือติดต่อเราผ่านช่องทางด่วน',
      },
    },

    // Footer
    footer: {
      description: 'ผู้เชี่ยวชาญด้านการแยกตะกอนและกากออกจากน้ำเสีย ด้วยนวัตกรรมเทคโนโลยีจากประเทศญี่ปุ่น',
      products: 'ผลิตภัณฑ์',
      services: 'บริการ',
      company: 'บริษัท',
      copyright: 'Tree Yoko Part.,Ltd. All rights reserved.',
    },

    // Language Switcher
    language: {
      th: 'ไทย',
      en: 'English',
    },
  },
};

// English translations
const enResources = {
  translation: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      features: 'How It Works',
      models: 'Products',
      applications: 'Applications',
      videos: 'Videos',
      events: 'News & Events',
      portfolio: 'Portfolio',
      kendensha: 'KENDENSHA',
      contact: 'Contact',
    },

    // Hero Section
    hero: {
      badge: 'Innovation from Japan',
      title: 'SLIT SAVER',
      subtitle: 'Innovation in Sludge Separation',
      description: 'Continuous sludge and solid separation machine with Japanese technology that enhances wastewater treatment efficiency and reduces operating costs',
      cta: {
        contact: 'Contact Us',
        portfolio: 'View Portfolio',
      },
      stats: {
        installed: 'Units in Thailand',
        experience: 'Years Experience',
        recycle: 'Reduce Reuse Recycle',
      },
    },

    // About Section
    about: {
      badge: 'About Us',
      title: 'Efficient Sludge Separation Innovation',
      description1: 'We are experts in sludge and solid separation from wastewater. We are the authorized distributor of KENDENSHA\'s SLIT SAVER machines for sludge and solid separation from wastewater in various industries.',
      description2: 'The SLIT SAVER is a continuous sludge separation machine with patented KDS Separator technology from KENDENSHA Japan. It can easily separate sludge from water, and the resulting sludge is dry and lightweight, reducing disposal transportation costs.',
      features: [
        'Requires less space compared to other types of sludge separators',
        'Easy installation but effective in separating solids and sludge',
        'Can be integrated with existing wastewater treatment systems',
        'Design team and experts available for additional consultation',
      ],
      patent: 'Patented',
      patentDesc: 'Japan & USA',
      stats: {
        installed: 'Units in Thailand',
        experience: 'Years Experience',
        recycle: 'Reduce Reuse Recycle',
      },
    },

    // Features Section
    features: {
      badge: 'How It Works',
      title: '4 Steps to Maximum Efficiency',
      description: 'A meticulously designed system to achieve the best sludge separation efficiency',
      steps: [
        {
          title: 'Easy Installation',
          subtitle: 'Small Footprint',
          description: 'The KDS separator does not require a wide space and has very low noise and vibration. It can be designed and installed in the client\'s existing space.',
          points: ['1/3 the space of conventional machines', 'Low noise and vibration', 'Installable in limited spaces'],
        },
        {
          title: 'Clog-free',
          subtitle: 'Clog-free Operation',
          description: 'Kendensha\'s unique self-cleaning mechanism prevents clogging on the screen, so backwash is not required.',
          points: ['No backwash needed', 'Stable continuous processing', 'Reduced wear on parts'],
        },
        {
          title: 'Versatile',
          subtitle: 'Versatile Adjustment',
          description: 'Easily adjustable to accommodate various sludge properties by adjusting the rotational speed of the oval plates and the pressure plate.',
          points: ['Adjustable rotation speed', 'Control sludge dryness', 'Support multiple wastewater types'],
        },
        {
          title: 'Easy Maintenance',
          subtitle: 'Easy Maintenance',
          description: 'Worn parts can be replaced by exchanging the entire module, enabling quick restoration.',
          points: ['Modular part replacement', 'Standard affordable parts', 'Quick maintenance'],
        },
      ],
      cta: 'Contact for more information',
    },

    // Models Section
    models: {
      badge: 'Product Models',
      title: 'Choose the Model That Fits Your Needs',
      description: 'Various models designed to handle different workloads',
      specs: {
        width: 'Width',
        rows: 'Plate Rows',
        motor: 'Motor',
        capacity: 'Capacity',
        flowRate: 'Flow Rate',
      },
      actions: {
        details: 'Details',
        download: 'Download',
      },
      note: {
        title: 'Note',
        items: [
          'Capacity is for reference only and may vary depending on concentration and wastewater properties',
          'Electric capacity is for reference only and may change according to specifications and wastewater properties',
          'Please contact us for other special specifications (e.g., cleaning nozzles, motor coatings)',
        ],
      },
    },

    // Applications Section
    applications: {
      badge: 'Applications',
      title: 'Versatile for All Industries',
      description: 'SLIT SAVER can be applied to various types of wastewater',
      types: [
        {
          title: 'Livestock Wastewater',
          subtitle: 'Livestock Wastewater',
          description: 'Such as manure separation, sludge separation from treatment systems, impurity removal',
          examples: ['Pig farms', 'Chicken farms', 'Cattle farms'],
        },
        {
          title: 'Industrial Wastewater',
          subtitle: 'Industrial Wastewater',
          description: 'Such as sludge separation from food processing plants, seafood factories, industrial wastewater treatment',
          examples: ['Food industry', 'Beverage industry', 'Processing plants'],
        },
        {
          title: 'Municipal Wastewater',
          subtitle: 'Municipal Wastewater',
          description: 'Such as thickening and separating sludge from municipal wastewater treatment systems',
          examples: ['Wastewater treatment', 'Sewage plants', 'Sanitation systems'],
        },
      ],
      stats: {
        installed: 'Units Installed Worldwide',
        countries: 'Countries Served',
        satisfaction: 'Customer Satisfaction',
        support: '24/7 Support',
      },
    },

    // Video Gallery Section
    videos: {
      badge: 'Video Demonstrations',
      title: 'See SLIT SAVER in Action',
      description: 'Demonstration videos and installation works from across the country',
      tabs: {
        demo: 'Demonstrations',
        thaiwater: 'ThaiWater 2025',
      },
      viewAll: 'View All Videos',
    },

    // Events Section
    events: {
      badge: 'News & Events',
      title: 'Meet Us at Trade Shows',
      description: 'Join international water technology exhibitions and discover the latest innovations from Tree Yoko',
      status: {
        ongoing: 'Ongoing',
        upcoming: 'Upcoming',
        past: 'Past Event',
      },
      highlights: 'Event Highlights',
      upcomingEvents: 'Upcoming Events',
      actions: {
        booth: 'View Booth Info',
        videos: 'Event Videos',
      },
    },

    // Portfolio Section
    portfolio: {
      badge: 'Installation Portfolio',
      title: 'Successful Installation Works',
      description: 'Examples of SLIT SAVER installations from leading customers across the country',
      categories: {
        all: 'All',
        water: 'Water Supply',
        automotive: 'Automotive',
        food: 'Food & Beverage',
        energy: 'Energy',
        manufacturing: 'Manufacturing',
      },
      viewMore: 'View More',
    },

    // Contact Section
    contact: {
      badge: 'Contact Us',
      title: 'Let Us Help You Choose the Right Solution',
      description: 'Our team of experts is ready to consult and recommend solutions that fit your needs',
      info: {
        phone: 'Phone',
        line: 'LINE ID',
        email: 'Email',
        address: 'Address',
      },
      form: {
        title: 'Send Us a Message',
        description: 'Fill in the information below and we will get back to you as soon as possible',
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone Number',
        message: 'Message',
        placeholder: 'Tell us about your requirements...',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Message Sent Successfully!',
        quickContact: 'Or contact us through quick channels',
      },
    },

    // Kendensha Section
    kendensha: {
      badge: 'Authorized Distributor',
      title: 'Authorized Distributor of KENDENSHA',
      description: 'Tree Yoko is the authorized distributor of KENDENSHA Co., Ltd. Japan, manufacturer of the patented KDS Separator sludge dewatering machine',
      company: 'KENDENSHA Co., Ltd.',
      companyDesc: 'Japan',
      companyInfo: 'Founded in 1963, KENDENSHA has over 60 years of expertise in sludge separation and wastewater treatment. The KDS Separator is patented in Japan and USA with over 1,300 units installed worldwide',
      highlights: [
        'Patented technology from Japan and USA',
        'Self-Cleaning technology, clog-free',
        'Energy saving, low power consumption',
        'Easy maintenance, standard parts',
      ],
      servicesTitle: 'Our Services',
      services: [
        {
          title: 'Distribution',
          description: 'Authorized distributor of KENDENSHA in Thailand',
        },
        {
          title: 'Installation',
          description: 'Expert technicians for complete machine and system installation',
        },
        {
          title: 'System Design',
          description: 'Design wastewater treatment systems tailored to customer needs',
        },
        {
          title: 'Testing & Demo',
          description: 'On-site machine testing service before decision making',
        },
      ],
      stats: {
        installed: 'Units in Thailand',
        experience: 'Years Experience',
        satisfaction: 'Customer Satisfaction',
      },
      cta: 'KENDENSHA Website',
    },

    // Footer
    footer: {
      description: 'Authorized distributor of KENDENSHA Japan. Experts in sludge separation and wastewater treatment systems.',
      products: 'Products',
      services: 'Services',
      company: 'Company',
      copyright: 'Tree Yoko Part.,Ltd. All rights reserved.',
    },

    // Language Switcher
    language: {
      th: 'ไทย',
      en: 'English',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      th: thResources,
      en: enResources,
    },
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
