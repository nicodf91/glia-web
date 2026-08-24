import React, { useEffect, useState } from 'react';
import Hero from '../components/sections/Hero';
import TrustedBy from '../components/sections/TrustedBy';
import About from '../components/sections/About';
import Process from '../components/sections/Process';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  const [preselectedService, setPreselectedService] = useState<string>('');

  useEffect(() => {
    document.title = 'Glia | Demo de higiene y seguridad laboral';
    const description =
      'Demo frontend ficticia de higiene y seguridad laboral para portfolio.';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;

    const storedService = sessionStorage.getItem('glia_preselected_service');
    if (storedService) {
      setPreselectedService(storedService);
      sessionStorage.removeItem('glia_preselected_service');
    }
  }, []);

  return (
    <main className="flex-grow">
      <Hero />

      <TrustedBy />

      <div id="sobre-glia">
        <About />
      </div>

      <div id="como-trabajamos">
        <Process />
      </div>

      <div id="faq">
        <FAQ />
      </div>

      <div id="contacto">
        <Contact initialService={preselectedService} />
      </div>
    </main>
  );
};

export default Home;
