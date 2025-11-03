
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif', color: '#4A331F' }}>
              Über WOW Beauty
            </h2>
            
            <div className="space-y-6" style={{ fontFamily: 'Inter, sans-serif', color: '#4A331F' }}>
              <p className="text-lg leading-relaxed">
                Willkommen bei WOW Beauty – Ihrem Premium Kosmetikstudio im Herzen von Berlin-Charlottenburg. 
                Seit unserer Gründung stehen wir für höchste Qualität, individuelle Beratung und 
                außergewöhnliche Ergebnisse.
              </p>
              
              <p className="text-lg leading-relaxed">
                Unser erfahrenes Team verwendet ausschließlich hochwertige Produkte und modernste 
                Behandlungsmethoden, um Ihnen das bestmögliche Beauty-Erlebnis zu bieten. 
                Jede Behandlung wird individuell auf Ihren Hauttyp und Ihre Wünsche abgestimmt.
              </p>
              
              <p className="text-lg leading-relaxed">
                In unserem stilvoll eingerichteten Studio können Sie sich entspannen und verwöhnen lassen. 
                Wir sprechen Deutsch, Russisch und Englisch und freuen uns darauf, 
                Sie in angenehmer Atmosphäre zu betreuen.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white border-2 rounded-full flex items-center justify-center" style={{ borderColor: '#4A331F' }}>
                  <i className="ri-award-line text-2xl" style={{ color: '#4A331F' }}></i>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#4A331F' }}>Zertifiziert</h3>
                <p className="text-sm opacity-80" style={{ color: '#4A331F' }}>Professionelle Ausbildung</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white border-2 rounded-full flex items-center justify-center" style={{ borderColor: '#4A331F' }}>
                  <i className="ri-heart-line text-2xl" style={{ color: '#4A331F' }}></i>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#4A331F' }}>Leidenschaft</h3>
                <p className="text-sm opacity-80" style={{ color: '#4A331F' }}>Für Ihre Schönheit</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/about/team.jpg"
                alt="WOW Beauty Studio Team"
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 bg-white border-2 rounded-full flex items-center justify-center mr-4" style={{ borderColor: '#4A331F' }}>
                  <i className="ri-star-fill text-xl" style={{ color: '#4A331F' }}></i>
                </div>
                <div>
                  <div className="font-bold text-2xl" style={{ color: '#4A331F' }}>4.9</div>
                  <div className="text-sm opacity-80" style={{ color: '#4A331F' }}>Google Bewertung</div>
                </div>
              </div>
              <p className="text-sm opacity-80" style={{ color: '#4A331F' }}>
                Über 200 zufriedene Kunden
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
