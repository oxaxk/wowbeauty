import { useState, useEffect } from 'react';
import Button from '../../../components/base/Button';

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down & past 100px
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-8 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="cursor-pointer">
                <h1 className="text-lg md:text-2xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <span>WOW BEAUTY BERLIN</span>
                </h1>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-white hover:text-white/70 transition-colors font-medium">
                Leistungen
              </a>
              <a href="#about" className="text-white hover:text-white/70 transition-colors font-medium">
                Über uns
              </a>
              <a href="#specials" className="text-white hover:text-white/70 transition-colors font-medium">
                Angebote
              </a>
              <a href="#contact" className="text-white hover:text-white/70 transition-colors font-medium">
                Kontakt
              </a>
              <Button href="https://wa.me/491737158636" size="sm">
                Termin buchen
              </Button>
            </div>

            <button
              className="md:hidden w-6 h-6 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl text-white`}></i>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/20">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#services" className="text-white hover:text-white/70 transition-colors font-medium">
                  Leistungen
                </a>
                <a href="#about" className="text-white hover:text-white/70 transition-colors font-medium">
                  Über uns
                </a>
                <a href="#specials" className="text-white hover:text-white/70 transition-colors font-medium">
                  Angebote
                </a>
                <a href="#contact" className="text-white hover:text-white/70 transition-colors font-medium">
                  Kontakt
                </a>
                <Button href="https://wa.me/491737158636" size="sm" className="self-start">
                  Termin buchen
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mobile video (shown < md) */}
        <video
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
          src="/videos/hero-mobile.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        {/* Desktop video (shown >= md) */}
        <video
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 flex-1 flex items-center justify-center text-center px-6 max-w-4xl mx-auto pb-16 md:pb-8 pt-32">
        <div>
          <h2 className="text-6xl md:text-8xl font-bold mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            WOW BEAUTY BERLIN
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Premium Kosmetikstudio in Berlin-Charlottenburg. 
            Erleben Sie professionelle Hautpflege und Beauty-Behandlungen auf höchstem Niveau.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              href="https://wow-beauty-berlin.easyweek.de/?ref=instagram&fbclid=PAZXh0bgNhZW0CMTEAAafFB9prXkuqxlokg7MIZU-c0VC7rJQp2xGySOJRhM0Kc4nuj0RoUI8NeyQsjA_aem_0k9mc7GdyhFU6dbHr_TOMw" 
              size="lg"
              className="text-xl px-12 py-6"
            >
              <i className="ri-calendar-line mr-3 text-2xl"></i>
              Termin buchen
            </Button>
            
            <Button 
              href="https://wa.me/491737158636" 
              variant="outline"
              size="lg"
              className="text-xl px-12 py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
            >
              <i className="ri-whatsapp-line mr-3 text-2xl"></i>
              WhatsApp Beratung
            </Button>
          </div>
          
          <div className="mt-16 mb-8 md:mb-0 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <i className="ri-award-line text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-2">Premium Qualität</h3>
              <p className="text-white/80 text-sm">Hochwertige Produkte und Behandlungen</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <i className="ri-user-heart-line text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-2">Persönliche Betreuung</h3>
              <p className="text-white/80 text-sm">Individuelle Beratung für jeden Hauttyp</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <i className="ri-map-pin-line text-2xl"></i>
              </div>
              <h3 className="font-semibold mb-2">Top Lage</h3>
              <p className="text-white/80 text-sm">Mitten in Berlin-Charlottenburg</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
