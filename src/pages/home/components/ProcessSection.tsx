
export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Beratungsgespräch',
      description: 'Ausführliche Analyse Ihres Hauttyps und Ihrer individuellen Bedürfnisse',
      icon: 'ri-chat-3-line'
    },
    {
      number: '02',
      title: 'Behandlungsplan',
      description: 'Entwicklung eines maßgeschneiderten Behandlungskonzepts nur für Sie',
      icon: 'ri-file-list-3-line'
    },
    {
      number: '03',
      title: 'Professionelle Behandlung',
      description: 'Durchführung mit hochwertigen Produkten und modernsten Methoden',
      icon: 'ri-hand-heart-line'
    },
    {
      number: '04',
      title: 'Nachbetreuung',
      description: 'Pflegetipps und Empfehlungen für langanhaltende Ergebnisse',
      icon: 'ri-customer-service-2-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif', color: '#4A331F' }}>
            Unser Behandlungsprozess
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', color: '#4A331F' }}>
            Von der ersten Beratung bis zur Nachbetreuung – wir begleiten Sie 
            auf Ihrem Weg zu strahlender Schönheit.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto bg-white border-2 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ borderColor: '#4A331F' }}>
                  <i className={`${step.icon} text-2xl`} style={{ color: '#4A331F' }}></i>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#4A331F' }}>
                {step.title}
              </h3>
              
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#4A331F' }} className="opacity-80">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <a 
            href="https://wow-beauty-berlin.easyweek.de/?ref=instagram&fbclid=PAZXh0bgNhZW0CMTEAAafFB9prXkuqxlokg7MIZU-c0VC7rJQp2xGySOJRhM0Kc4nuj0RoUI8NeyQsjA_aem_0k9mc7GdyhFU6dbHr_TOMw"
            className="inline-flex items-center px-8 py-4 bg-white border-2 font-semibold text-lg rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer whitespace-nowrap"
            style={{ borderColor: '#4A331F', color: '#4A331F' }}
          >
            <i className="ri-calendar-line mr-3 text-xl"></i>
            Jetzt Beratungstermin buchen
          </a>
        </div>
      </div>
    </section>
  );
}
