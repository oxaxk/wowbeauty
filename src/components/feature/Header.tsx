
import { useState } from 'react';
import Button from '../base/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="cursor-pointer">
              <h1 className="text-lg md:text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                <span style={{ color: '#4A331F' }}>WOW BEAUTY BERLIN</span>
              </h1>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" style={{ color: '#4A331F' }} className="hover:opacity-70 transition-colors font-medium">
              Leistungen
            </a>
            <a href="#about" style={{ color: '#4A331F' }} className="hover:opacity-70 transition-colors font-medium">
              Über uns
            </a>
            <a href="#specials" style={{ color: '#4A331F' }} className="hover:opacity-70 transition-colors font-medium">
              Angebote
            </a>
            <a href="#contact" style={{ color: '#4A331F' }} className="hover:opacity-70 transition-colors font-medium">
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
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`} style={{ color: '#4A331F' }}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#services" style={{ color: '#4A331F' }} className="hover:opacity-70 transition-colors font-medium">
                Leistungen
              </a>
              <a href="#about" style={{ color: '#4A331F' }} className="hover:opacity-70 transition-colors font-medium">
                Über uns
              </a>
              <a href="#specials" style={{ color: '#4A331F' }} className="hover:opacity-70 transition-colors font-medium">
                Angebote
              </a>
              <a href="#contact" style={{ color: '#4A331F' }} className="hover:opacity-70 transition-colors font-medium">
                Kontakt
              </a>
              <Button href="https://wa.me/491737158636" size="sm" className="self-start">
                Termin buchen
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
