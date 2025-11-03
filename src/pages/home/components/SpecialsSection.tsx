
export default function SpecialsSection() {
  const specials = [
    {
      title: '15% Rabatt ab 50€',
      description: 'Für Neukunden bei der ersten Behandlung',
      badge: 'NEUKUNDEN ANGEBOT',
      badgeColor: 'bg-emerald-500',
      icon: 'ri-user-star-line',
      iconBg: 'bg-emerald-500',
      image: '/images/specials/rabatt.jpg'
    },
    {
      title: '20% auf Massage oder 10er-Kurs',
      description: 'Entspannung und Wellness zum Vorteilspreis',
      badge: 'MASSAGE ANGEBOT',
      badgeColor: 'bg-purple-500',
      icon: 'ri-hand-heart-line',
      iconBg: 'bg-purple-500',
      image: '/images/specials/massage2.jpg'
    },
    {
      title: 'Herbstaktionen: 30% Laser, 20% Massage',
      description: 'Begrenzte Zeit – jetzt zugreifen!',
      badge: 'SAISON-RABATTE',
      badgeColor: 'bg-orange-500',
      icon: 'ri-leaf-line',
      iconBg: 'bg-orange-500',
      image: '/images/specials/herbstaktion.jpg'
    }
  ];

  return (
    <section id="specials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#4A331F' }}>
            Aktuelle Angebote
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', color: '#4A331F' }}>
            Entdecken Sie unsere exklusiven Beauty-Pakete und sparen Sie bei 
            hochwertigen Behandlungen. Limitierte Angebote für neue und bestehende Kunden.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specials.map((special, index) => (
            <div key={index} className="bg-white border-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col" style={{ borderColor: '#4A331F' }}>
              <div className="relative">
                <img 
                  src={special.image} 
                  alt={special.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className={`absolute top-4 left-4 ${special.badgeColor} text-white rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide`}>
                  {special.badge}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#4A331F' }}>
                  {special.title}
                </h3>
                
                <p className="mb-6 opacity-80 flex-grow" style={{ fontFamily: 'Inter, sans-serif', color: '#4A331F' }}>
                  {special.description}
                </p>
                
                <button className="w-full py-3 bg-white border-2 rounded-xl font-medium transition-all duration-300 hover:bg-gray-50 mt-auto" style={{ borderColor: '#4A331F', color: '#4A331F' }}>
                  Jetzt buchen
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg mb-6" style={{ fontFamily: 'Inter, sans-serif', color: '#4A331F' }}>
            Haben Sie Fragen zu unseren Angeboten? Kontaktieren Sie uns gerne!
          </p>
          <a 
            href="https://wa.me/491737158636"
            className="inline-flex items-center px-8 py-4 bg-white border-2 font-semibold text-lg rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer whitespace-nowrap"
            style={{ borderColor: '#4A331F', color: '#4A331F' }}
          >
            <i className="ri-whatsapp-line mr-3 text-xl"></i>
            WhatsApp Beratung
          </a>
        </div>
      </div>
    </section>
  );
}
