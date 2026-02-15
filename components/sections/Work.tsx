import React from 'react';
import { CaseStudy } from '../../types';

const cases: CaseStudy[] = [
  {
    id: '1',
    clientType: 'Industria Metalúrgica',
    problem: 'Alto índice de accidentabilidad y multas recurrentes de la ART.',
    solution: 'Implementación de Programa de Seguridad específico, capacitación intensiva en uso de máquinas y rediseño de puestos críticos.',
    result: 'Reducción del 70% en accidentes leves en el primer año y 0 accidentes graves.',
    tags: ['Industria', 'Seguridad Máquinas']
  },
  {
    id: '2',
    clientType: 'Empresa de Logística y Distribución',
    problem: 'Falta de estudios ergonómicos y protocolos de incendio en depósito de 5000m².',
    solution: 'Relevamiento ergonómico integral (Res. 886/15) y desarrollo completo del plan de evacuación con simulacro.',
    result: 'Aprobación inmediata en auditoría municipal y mejora en clima laboral.',
    tags: ['Logística', 'Ergonomía', 'Incendio']
  },
  {
    id: '3',
    clientType: 'Cadena de Oficinas Administrativas',
    problem: 'Necesidad de estandarizar procesos de seguridad en 5 sucursales distintas.',
    solution: 'Manual de procedimientos único y gestión centralizada de legajos técnicos.',
    result: 'Cumplimiento normativo total y reducción de costos administrativos en un 30%.',
    tags: ['Servicios', 'Gestión']
  }
];

const Work: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Trabajos Realizados
          </h2>
          <p className="mt-4 text-xl text-slate-500 max-w-3xl">
            Resultados reales en clientes reales. Así ayudamos a transformar la cultura de seguridad.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {cases.map((item) => (
            <div 
              key={item.id} 
              className="bg-slate-50 rounded-lg p-6 border-l-4 border-primary-500 hover:bg-slate-100 transition-colors shadow-sm"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-white text-xs font-semibold text-slate-600 rounded border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.clientType}</h3>
              
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">El Desafío</p>
                  <p className="text-sm text-slate-700">{item.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Solución Glia</p>
                  <p className="text-sm text-slate-700">{item.solution}</p>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <p className="text-xs font-bold text-primary-600 uppercase tracking-wide">Resultado</p>
                  <p className="text-sm font-medium text-slate-900">{item.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;