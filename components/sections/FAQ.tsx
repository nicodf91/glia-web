import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, HelpCircle } from 'lucide-react';
import { FAQItem } from '../../types';

const faqs: FAQItem[] = [
  {
    question: '¿Trabajan en todo el país?',
    answer: 'Nuestra base operativa está en Buenos Aires, pero realizamos consultoría y auditorías en todo el país. Para servicios recurrentes presenciales, nos concentramos en CABA y GBA, coordinando viáticos para el interior.'
  },
  {
    question: '¿Qué documentación entregan al finalizar?',
    answer: 'Dependiendo del servicio, entregamos informes técnicos firmados, constancias de capacitación, legajos técnicos, mediciones certificadas y cualquier documentación exigida por la SRT o ART.'
  },
  {
    question: '¿Atienden PyMEs pequeñas?',
    answer: '¡Sí! Nos especializamos en PyMEs. Adaptamos nuestros honorarios y alcance a la estructura de tu empresa, asegurando que cumplas la ley sin costos innecesarios.'
  },
  {
    question: '¿Cómo es el proceso de inicio?',
    answer: 'Comienza con una visita de diagnóstico o una videollamada para entender tu necesidad. Luego presentamos una propuesta formal y, una vez aprobada, asignamos un profesional y comenzamos el relevamiento.'
  },
  {
    question: '¿Realizan mediciones de puesta a tierra?',
    answer: 'Sí, realizamos la medición de puesta a tierra y continuidad de las masas según la Resolución 900/15 de la SRT, con instrumental calibrado y certificado.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute -left-20 top-40 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Sticky Header & Support CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-primary-700 text-xs font-bold uppercase tracking-wider mb-6">
              <HelpCircle className="w-4 h-4" />
              <span>Centro de Ayuda</span>
            </div>
            
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Resolvemos tus dudas <br/>
              <span className="text-primary-600">principales</span>
            </h2>
            
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              Entendemos que la normativa puede ser confusa. Aquí simplificamos las respuestas a las consultas más habituales de nuestros clientes.
            </p>

            {/* Support Card */}
            <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              
              <h4 className="text-lg font-bold text-slate-900 mb-2 relative z-10">¿No encontrás lo que buscás?</h4>
              <p className="text-slate-500 text-sm mb-6 relative z-10">
                Hablá directamente con nuestro equipo técnico. Te respondemos en menos de 24hs.
              </p>
              
              <button 
                onClick={scrollToContact}
                className="w-full py-3 px-4 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group/btn relative z-10"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contactar a Soporte</span>
              </button>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className={`group rounded-2xl transition-all duration-300 border ${
                    isOpen 
                      ? 'bg-white border-primary-200 shadow-lg shadow-primary-900/5' 
                      : 'bg-white border-transparent shadow-sm hover:border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-start focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-bold text-lg pr-8 transition-colors ${isOpen ? 'text-primary-700' : 'text-slate-800'}`}>
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 ml-4 mt-0.5 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-primary-600 text-white rotate-180' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                    }`}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>
                  
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;