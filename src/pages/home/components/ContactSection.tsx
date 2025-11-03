
export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-600" style={{ fontFamily: 'Playfair Display, serif' }}>
          Bereit für Ihr <span className="text-amber-500">WOW-Erlebnis</span>?
        </h2>
        
        <p className="text-xl mb-12 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
          Vereinbaren Sie jetzt Ihren Termin und erleben Sie Premium-Beauty 
          auf höchstem Niveau im Herzen von Berlin.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a 
            href="https://wow-beauty-berlin.easyweek.de/?ref=instagram&fbclid=PAZXh0bgNhZW0CMTEAAafFB9prXkuqxlokg7MIZU-c0VC7rJQp2xGySOJRhM0Kc4nuj0RoUI8NeyQsjA_aem_0k9mc7GdyhFU6dbHr_TOMw" 
            className="inline-flex items-center px-12 py-6 font-bold text-xl rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 whitespace-nowrap cursor-pointer text-white"
            style={{ backgroundColor: '#4A331F' }}
          >
            <i className="ri-calendar-line mr-4 text-3xl"></i>
            Termin direkt buchen
          </a>
          
          <a 
            href="https://wa.me/491737158636" 
            className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-xl rounded-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-whatsapp-line mr-4 text-3xl"></i>
            Beratung via WhatsApp
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="rounded-xl p-6" style={{ backgroundColor: '#F5F1E8', borderColor: '#E5D5B7', border: '1px solid' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#4A331F' }}>
              <i className="ri-map-pin-line text-white text-xl"></i>
            </div>
            <h3 className="font-semibold mb-2" style={{ color: '#4A331F' }}>Adresse</h3>
            <p className="text-gray-600 text-sm">
              Uhlandstraße 173–174<br />
              10719 Berlin-Charlottenburg
            </p>
          </div>
          
          <div className="rounded-xl p-6" style={{ backgroundColor: '#F5F1E8', borderColor: '#E5D5B7', border: '1px solid' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#4A331F' }}>
              <i className="ri-phone-line text-white text-xl"></i>
            </div>
            <h3 className="font-semibold mb-2" style={{ color: '#4A331F' }}>Telefon</h3>
            <p className="text-gray-600 text-sm">
              +49 173 7158636
            </p>
          </div>
          
          <div className="rounded-xl p-6" style={{ backgroundColor: '#F5F1E8', borderColor: '#E5D5B7', border: '1px solid' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#4A331F' }}>
              <i className="ri-time-line text-white text-xl"></i>
            </div>
            <h3 className="font-semibold mb-2" style={{ color: '#4A331F' }}>Öffnungszeiten</h3>
            <p className="text-gray-600 text-sm">
              Mo–Sa: 10:00–18:00 Uhr
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            <i className="ri-global-line mr-2" style={{ color: '#4A331F' }}></i>
            Wir sprechen: Deutsch · Russisch · Englisch
          </p>
        </div>
      </div>
    </section>
  );
}
