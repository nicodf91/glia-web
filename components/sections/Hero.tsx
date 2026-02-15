import React, { useEffect, useMemo, useState } from 'react';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const slides = useMemo(
    () => [
      {
        src: 'https://www.vivecer.com.mx/uploads/blog/1696524099.jpg',
        alt: 'Equipo de seguridad utilizando elementos de protección personal en planta',
        captionTitle: 'Protocolos y Prevención',
        captionText: 'Estandarizamos procesos críticos con foco en personas.',
      },
      {
        src: 'https://www.previnnova.com.ar/_astro/epp-argentina-2026-guia.JHOdS8ia_Z2qhVp3.webp',
        alt: 'Elementos de protección personal para industria',
        captionTitle: 'EPP y Capacitación',
        captionText: 'Selección y entrenamiento para un uso correcto.',
      },
      {
        src: 'https://www.previnnova.com.ar/_astro/seguridad-e-higiene-laboral.CY1QfrT9_Z6ixJo.webp',
        alt: 'Seguridad e higiene laboral en entornos industriales',
        captionTitle: 'Cumplimiento Normativo',
        captionText: 'Alineamos tu operación con la normativa vigente.',
      },
    ],
    []
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, [isPaused, slides.length]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-teal-50 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary-500 mr-2"></span>
              Consultoría Integral para PyMEs e Industrias
            </div>
            
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:leading-tight">
              Higiene y seguridad que <span className="text-primary-700">protege a tu gente</span> y a tu negocio.
            </h1>
            
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Diagnóstico, plan de acción y acompañamiento continuo. Liderado por <strong>Marcelo</strong>, especialista con más de 15 años de experiencia reduciendo riesgos y asegurando cumplimiento normativo.
            </p>
            
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollTo('contacto')} className="gap-2">
                Solicitar asesoría <ChevronRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" onClick={() => navigate('/servicios')}>
                Ver servicios
              </Button>
            </div>

            <div className="mt-8 text-sm text-slate-500 flex items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-primary-600" />
                <span>Cumplimiento Normativo</span>
              </div>
              <div className="flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-primary-600" />
                <span>Gestión de Riesgos</span>
              </div>
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5 lg:flex lg:items-center">
            <div
              className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md overflow-hidden bg-slate-900/5"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative w-full h-[28rem] sm:h-[30rem]">
                {slides.map((slide, index) => (
                  <img
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
                      index === activeIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent"></div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-semibold text-lg">{slides[activeIndex].captionTitle}</p>
                <p className="text-sm opacity-90">{slides[activeIndex].captionText}</p>
              </div>

              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    type="button"
                    aria-label={`Ver imagen ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full border transition-colors ${
                      index === activeIndex
                        ? 'bg-white border-white'
                        : 'bg-white/30 border-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
