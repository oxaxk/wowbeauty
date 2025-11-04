import { useState, useRef, useEffect } from 'react';

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number>(0);
  const currentXRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);

  const services = [
    {
      icon: 'ri-heart-pulse-line',
      title: 'Kosmetologie / Gesichtspflege',
      description: 'Reinigung, Hautanalyse, Aquafacial, PRX‑T33, BioRePeel, Peelings nach Hauttyp, Microneedling/RF‑Needling, Hydration & Straffung – individuell kombiniert für ein klares, strahlendes Hautbild',
      image: '/images/services/kosmetik.jpg'
    },
    {
      icon: 'ri-magic-line',
      title: 'Endosphères-Therapie',
      description: 'Mikrovibrationen zur Lymphdrainage, Entstauung und Hautstraffung; fördert Durchblutung, Detox und Body‑Contouring – angenehm, nicht invasiv',
      image: '/images/services/endospheres.jpg'
    },
    {
      icon: 'ri-flashlight-line',
      title: 'Laser SPARKpro – Dauerhafte Haarentfernung',
      description: 'Moderne Diodenlaser‑Technologie für alle Hauttypen; sanft dank ICE‑Kühlung, präzise Behandlung einzelner Zonen oder Pakete – mit langanhaltenden Ergebnissen',
      image: '/images/services/laser.jpg'
    },
    {
      icon: 'ri-hand-heart-line',
      title: 'Nagelpflege',
      description: 'Maniküre & Pediküre (auch parallel), Gellack, Gelverstärkung, Reparatur sowie natürliche und apparative Pflege – hygienisch, präzise, in Trendfarben',
      image: '/images/services/naegel.jpg'
    },
    {
      icon: 'ri-scissors-line',
      title: 'Haare',
      description: 'Haarschnitt, Farbe, Blondier‑Techniken (Balayage, AirTouch), Pflegerituale mit HADAT; Barber‑Services für Herren inkl. Konturen & Bart',
      image: '/images/services/haare.jpg'
    },
    {
      icon: 'ri-eye-line',
      title: 'Augenbrauen & Wimpern',
      description: 'Brow Lifting & Tint, Formkorrektur und Pflege; Lash Lifting für schwungvolle, natürlich wirkende Wimpern – wacher Blick ohne Mascara',
      image: '/images/services/brows-lashes.jpg'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Massage',
      description: 'Ganzkörper‑, Sport‑ und Anti‑Cellulite‑Massage sowie Nacken‑/Schultermassage; löst Verspannungen, aktiviert die Regeneration und sorgt für tiefe Entspannung',
      image: '/images/services/massage.jpg'
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
    const el = mobileScrollRef.current;
    if (el) {
      el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' });
    }
  };

  // Touch/Mouse handlers for swipe functionality
  const handleStart = (clientX: number) => {
    if (isTransitioning) return;
    isDraggingRef.current = true;
    startXRef.current = clientX;
    currentXRef.current = clientX;
  };

  const handleMove = (clientX: number) => {
    if (!isDraggingRef.current || isTransitioning) return;
    currentXRef.current = clientX;
  };

  const handleEnd = () => {
    if (!isDraggingRef.current || isTransitioning) return;
    
    const deltaX = currentXRef.current - startXRef.current;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    isDraggingRef.current = false;
  };

  // Wheel handler for trackpad support
  const handleWheel = (e: React.WheelEvent) => {
    if (isTransitioning) return;
    
    // Check if it's a horizontal scroll (trackpad gesture)
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      
      if (e.deltaX > 30) {
        nextSlide();
      } else if (e.deltaX < -30) {
        prevSlide();
      }
    }
  };

  // Mobile scroll handler for snap carousel
  const handleMobileScroll = () => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const newIndex = Math.round(el.scrollLeft / el.clientWidth);
    if (newIndex !== currentIndex) setCurrentIndex(newIndex);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDraggingRef.current) {
        handleEnd();
      }
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        handleMove(e.clientX);
      }
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);

  const currentService = services[currentIndex];
  const visibleServices = [0, 1, 2].map(i => services[(currentIndex + i) % services.length]);

  return (
    <section id="services" className="py-20" style={{ backgroundColor: '#F4E8D0' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif', color: '#4A331F' }}>
            Unsere Behandlungen
          </h2>
          <p className="text-lg lg:text-xl opacity-80 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', color: '#4A331F' }}>
            Entdecken Sie unser umfassendes Angebot an Beauty- und Wellness-Behandlungen
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows - Positioned closer to center with proper spacing */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="hidden lg:block absolute -left-24 top-1/2 -translate-y-1/2 z-10 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 cursor-pointer disabled:opacity-50"
            style={{ color: '#4A331F' }}
          >
            <i className="ri-arrow-left-line text-2xl"></i>
          </button>
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="hidden lg:block absolute -right-24 top-1/2 -translate-y-1/2 z-10 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 cursor-pointer disabled:opacity-50"
            style={{ color: '#4A331F' }}
          >
            <i className="ri-arrow-right-line text-2xl"></i>
          </button>

          {/* Card Container with proper spacing */}
          <div className="w-full px-4 lg:px-20 lg:hidden">
            <div
              ref={mobileScrollRef}
              className="w-full flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-6 px-4"
              onScroll={handleMobileScroll}
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {services.map((svc) => (
                <div key={svc.title} className="shrink-0 w-[85%] snap-center">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-[560px] flex flex-col">
                    <div className="relative h-1/2 overflow-hidden">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover object-center"
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="px-6 pt-4 pb-8 flex flex-col justify-center h-1/2">
                      <div className="mb-2">
                        <h3
                          className="text-xl font-bold mb-1"
                          style={{ fontFamily: '"Playfair Display", serif', color: '#4A331F' }}
                        >
                          {svc.title}
                        </h3>
                      </div>
                      <p
                        className="opacity-80 leading-relaxed text-base"
                        style={{ fontFamily: 'Inter, sans-serif', color: '#4A331F' }}
                      >
                        {svc.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Grid: 3 cards per row */}
          <div className="hidden lg:grid grid-cols-3 gap-8 px-4 lg:px-0">
            {visibleServices.map((svc) => (
              <div key={svc.title} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-[560px] flex flex-col">
                <div className="relative h-1/2 overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover object-center"
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center h-1/2">
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ fontFamily: '"Playfair Display", serif', color: '#4A331F' }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="opacity-80 leading-relaxed text-base"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#4A331F' }}
                  >
                    {svc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 lg:mt-12 space-x-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`h-3 rounded-full transition-all duration-300 cursor-pointer disabled:opacity-50 ${
                  index === currentIndex ? 'w-8' : 'w-3 hover:opacity-80'
                }`}
                style={{
                  backgroundColor: index === currentIndex ? '#4A331F' : 'rgba(74, 51, 31, 0.25)'
                }}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <a
            href="#contact"
            className="bg-white text-lg lg:text-xl font-semibold px-8 lg:px-12 py-4 lg:py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
            style={{ color: '#4A331F', fontFamily: 'Inter, sans-serif' }}
          >
            Jetzt Beratungstermin buchen
          </a>
        </div>
      </div>
    </section>
  );
}
