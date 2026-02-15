import React from 'react';
import { Search, ClipboardList, HardHat, TrendingUp } from 'lucide-react';
import { ProcessStep } from '../../types';

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Visitamos tus instalaciones, relevamos riesgos y analizamos tu situación legal actual.',
    icon: Search
  },
  {
    number: '02',
    title: 'Plan de Acción',
    description: 'Diseñamos una estrategia a medida, priorizando urgencias y optimizando recursos.',
    icon: ClipboardList
  },
  {
    number: '03',
    title: 'Implementación',
    description: 'Ejecutamos capacitaciones, mediciones y documentación necesaria junto a tu equipo.',
    icon: HardHat
  },
  {
    number: '04',
    title: 'Seguimiento',
    description: 'Monitoreamos indicadores y mantenemos el cumplimiento en el tiempo.',
    icon: TrendingUp
  }
];

const Process: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Cómo trabajamos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
            Un proceso claro y estructurado para pasar del riesgo a la tranquilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-slate-700 w-3/4 mx-auto z-0"></div>

          {steps.map((step) => (
            <div key={step.number} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-slate-800 rounded-full border-4 border-slate-900 flex items-center justify-center mb-6 shadow-xl group-hover:border-primary-500 transition-colors duration-300">
                <step.icon className="h-10 w-10 text-primary-400" />
              </div>
              <div className="absolute top-0 right-1/2 translate-x-12 -mt-2 bg-primary-600 text-xs font-bold px-2 py-1 rounded text-white">
                Paso {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;