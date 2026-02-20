import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import Services from './sections/Services';
import Process from './sections/Process'; // New Section
import About from './sections/About';
import Contact from './sections/Contact';

function App() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="w-full min-h-screen bg-wealth-light selection:bg-wealth-gold/30">
      <Navbar 
        logoText="Roots Capital"
        onCtaClick={() => scrollTo('contact')}
      />
      <Hero 
        onCtaClick={() => scrollTo('process')} 
        onSecondaryCtaClick={() => scrollTo('about')}
      />
      <div className="relative z-20">
        <TrustBar />
      </div>
      <Process />
      <Services />
      <About />
      <Contact />
      <footer className="bg-wealth-charcoal text-white pt-24 pb-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
      <div className="col-span-1 md:col-span-2 space-y-6">
        <h4 className="text-3xl font-serif font-bold tracking-tight">Roots Capital</h4>
        <p className="text-white/50 max-w-sm leading-relaxed">
          Educating individuals in an easy-to-understand manner so they can grasp personal finance and pursue their financial objectives. [cite: 23]
        </p>
      </div>
      <div>
        <h5 className="font-bold uppercase tracking-widest text-xs text-wealth-gold mb-8">Contact</h5>
        <ul className="space-y-4 text-white/50 text-sm">
          <li>9022757060 / 8097807061 </li>
          <li>info@rootscapital.in</li>
          <li className="pt-4 text-white font-medium italic">"Connected to roots of every financial need." [cite: 7]</li>
        </ul>
      </div>
    </div>
    <div className="pt-12 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="text-[10px] text-white/30 uppercase tracking-widest space-y-2">
          <p>Office No 1003, Millenium Empire, Sector - 15, Kharghar, Navi Mumbai - 410210 [cite: 68-69]</p>
          <p>Mutual Fund investments are subject to market risks. Read all scheme related documents carefully.</p>
        </div>
        <p className="text-[10px] text-white/30 self-end">© 2026 Roots Capital. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</footer>
    </main>
  );
}

export default App;

