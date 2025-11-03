
export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#4A331F' }}>
              WOW BEAUTY BERLIN
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Ihr exklusives Beauty-Studio in Berlin-Charlottenburg. Professionelle Kosmetik, 
              Laser-Haarentfernung und Wellness-Behandlungen auf höchstem Niveau.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/wowbeauty.berlin/" 
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <i className="ri-instagram-line text-gray-600"></i>
              </a>
              <a 
                href="https://wa.me/491737158636" 
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover-bg-gray-300 transition-colors"
              >
                <i className="ri-whatsapp-line text-gray-600"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#4A331F' }}>Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Leistungen</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">Über uns</a></li>
              <li><a href="#specials" className="text-gray-600 hover:text-gray-900 transition-colors">Angebote</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#4A331F' }}>Kontakt</h4>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center">
                <i className="ri-map-pin-line mr-2"></i>
                Uhlandstraße 173-174<br />
                10719 Berlin-Charlottenburg
              </p>
              <p className="flex items-center">
                <i className="ri-phone-line mr-2"></i>
                +49 173 715 8636
              </p>
              <p className="flex items-center">
                <i className="ri-time-line mr-2"></i>
                Mo-Sa: 10:00-18:00 Uhr
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2025 WOW BEAUTY BERLIN. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/impressum" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
              Datenschutz
            </a>
            <a href="https://slicker.agency/" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
              by Slicker
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
