
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Impressum() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl font-bold mb-8" style={{ color: '#4A331F' }}>
            Impressum
          </h1>
          
          <div className="prose prose-lg max-w-none" style={{ color: '#4A331F' }}>
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            
            <div className="mb-8">
              <p className="mb-2"><strong>WOW Beauty</strong></p>
              <p className="mb-2">Uhlandstraße 173–174</p>
              <p className="mb-2">10719 Berlin-Charlottenburg</p>
              <p className="mb-2">Deutschland</p>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6">Kontakt</h3>
            <div className="mb-8">
              <p className="mb-2">Telefon: +49 173 7158636</p>
              <p className="mb-2">WhatsApp: +49 173 7158636</p>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6">Öffnungszeiten</h3>
            <div className="mb-8">
              <p className="mb-2">Montag bis Samstag: 10:00 – 18:00 Uhr</p>
              <p className="mb-2">Sonntag: Geschlossen</p>
              <p className="mb-2 text-sm opacity-70">Termine nach Vereinbarung</p>
            </div>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <div className="mb-8">
              <p className="mb-2"><strong>Berufsbezeichnung:</strong> Kosmetikerin</p>
              <p className="mb-2"><strong>Verliehen in:</strong> Deutschland</p>
            </div>

            <h2 className="text-2xl font-semibold mb-4 mt-8">EU-Streitschlichtung</h2>
            <p className="mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:underline ml-1">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mb-8">
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p className="mb-8">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Haftung für Inhalte</h2>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
              unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Haftung für Links</h2>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Urheberrecht</h2>
            <p className="mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>

            <div className="mt-12 pt-8 border-t-2" style={{ borderColor: '#4A331F' }}>
              <p className="text-sm opacity-70">
                Stand: Januar 2024
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}