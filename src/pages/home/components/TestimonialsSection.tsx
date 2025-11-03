
export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah M.',
      rating: 5,
      text: 'Absolut professionell! Die Gesichtsbehandlung war fantastisch und meine Haut strahlt wie nie zuvor. Das Team ist sehr freundlich und kompetent.',
      image: null
    },
    {
      name: 'Julia R.',
      rating: 5,
      text: 'Ich bin seit Jahren Stammkundin bei WOW Beauty. Die Qualität der Behandlungen ist immer top und die Atmosphäre sehr entspannend.',
      image: null
    },
    {
      name: 'Anna L.',
      rating: 5,
      text: 'Das Permanent Make-up für meine Augenbrauen ist perfekt geworden! Sehr professionelle Beratung und Ausführung. Kann ich nur empfehlen.',
      image: null
    },
    {
      name: 'Maria K.',
      rating: 5,
      text: 'Endlich ein Kosmetikstudio, das hält was es verspricht. Die Anti-Aging Behandlung hat meine Erwartungen übertroffen.',
      image: null
    },
    {
      name: 'Elena S.',
      rating: 5,
      text: 'Sehr sauberes Studio, freundliches Personal und excellente Ergebnisse. Besonders die Maniküre ist immer perfekt.',
      image: null
    },
    {
      name: 'Natasha P.',
      rating: 5,
      text: 'Als Russin fühle ich mich hier sehr wohl. Das Team spricht mehrere Sprachen und versteht genau was ich möchte.',
      image: null
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#F4E8D0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#4A331F' }}>
            Was unsere Kunden sagen
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', color: '#4A331F' }}>
            Lesen Sie die Erfahrungen unserer zufriedenen Kunden und überzeugen Sie sich 
            von der Qualität unserer Behandlungen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 flex items-center justify-center">
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <i className="ri-user-line text-xl text-gray-400"></i>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold" style={{ color: '#4A331F' }}>{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-yellow-400"></i>
                    ))}
                  </div>
                </div>
              </div>
              
              <p style={{ fontFamily: 'Inter, sans-serif', color: '#4A331F' }} className="opacity-80 italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-white rounded-2xl px-8 py-4 shadow-lg">
            <div className="flex mr-4">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="ri-star-fill text-yellow-400 text-xl"></i>
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-2xl" style={{ color: '#4A331F' }}>4.9/5</div>
              <div className="text-sm opacity-80" style={{ color: '#4A331F' }}>Google Bewertungen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
