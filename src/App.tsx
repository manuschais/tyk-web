import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './i18n';

import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Features from './sections/Features';
import Models from './sections/Models';
import Applications from './sections/Applications';
import VideoGallery from './sections/VideoGallery';
import Portfolio from './sections/Portfolio';
import Kendensha from './sections/Kendensha';
import Events from './sections/Events';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-light-gray">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Features Section */}
        <Features />

        {/* Models Section */}
        <Models />

        {/* Applications Section */}
        <Applications />

        {/* Video Gallery Section */}
        <VideoGallery />

        {/* Portfolio Section */}
        <Portfolio />

        {/* Kendensha Partnership Section */}
        <Kendensha />

        {/* Events Section */}
        <Events />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
