import React from 'react';
import { 
  ClipboardCheck, 
  FileText, 
  GraduationCap, 
  Siren, 
  Activity, 
  Shield,
  ArrowRight,
  Check
} from 'lucide-react';
import { ServiceItem } from '../../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

const servicesData: ServiceItem[] = [
  {
    id: 'diagnostico',
    title: 'Diagnóstico Integral',
    description: 'Evaluación completa del estado actual de la empresa en materia de higiene y seguridad.',
    icon: ClipboardCheck,
    features: ['Relevamiento de planta', 'Matriz de riesgos', 'Informe técnico detallado']
  },
  {
    id: 'planes',
    title: 'Planes y Programas',
    description: 'Desarrollo de documentación y planificación estratégica para cumplir la normativa.',
    icon: FileText,
    features: ['Legajo técnico', 'Estudios ergonómicos', 'Mediciones ambientales']
  },
  {
    id: 'capacitacion',
    title: 'Capacitación In-Company',
    description: 'Formación del personal adaptada a los riesgos específicos de tu actividad.',
    icon: GraduationCap,
    features: ['Uso de EPP', 'Prevención de incendios', 'Primeros auxilios']
  },
  {
    id: 'auditorias',
    title: 'Auditorías y Cumplimiento',
    description: 'Ejemplo de cómo presentar un servicio regulado; no acredita representación ni certificaciones.',
    icon: Shield,
    features: ['Tarjetas informativas', 'Jerarquía de contenidos', 'Navegación por secciones']
  },
  {
    id: 'emergencias',
    title: 'Gestión de Emergencias',
    description: 'Protocolos de actuación y simulacros para estar preparados ante lo inesperado.',
    icon: Siren,
    features: ['Plan de evacuación', 'Roles de emergencia', 'Simulacros anuales']
  },
  {
    id: 'consultoria',
    title: 'Servicio Externo Continuo',
    description: 'Externalización total del departamento de HyS con visitas periódicas.',
    icon: Activity,
    features: ['Visitas mensuales/semanales', 'Seguimiento de indicadores', 'Asesoría permanente']
  }
];

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      {/* Technical Dot Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#4a7167 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      {/* Ambient Gradient Glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/3 w-full h-64 bg-slate-200 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm bg-primary-50 px-3 py-1 rounded-full border border-primary-100 mb-4 inline-block">
            Nuestras Soluciones
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl tracking-tight mb-6">
            Servicios de muestra para evaluar la <span className="relative whitespace-nowrap text-primary-700">interfaz</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 leading-relaxed">
            Desde el diagnóstico inicial hasta la gestión diaria. Cubrimos todas las necesidades normativas para que te enfoques en producir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 border border-slate-100 overflow-hidden"
            >
              {/* Top Accent Bar Animation */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary-500 to-primary-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

              {/* Icon Container */}
              <div className="relative mb-8">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary-600 group-hover:border-primary-600 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-primary-500/30">
                  <service.icon className="h-8 w-8 text-slate-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-700 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-8 leading-relaxed h-[4.5rem] overflow-hidden">
                {service.description}
              </p>
              
              {/* Features List with Checkmarks */}
              <ul className="space-y-3 mb-8 border-t border-slate-50 pt-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-500 group-hover:text-slate-600 transition-colors">
                    <Check className="h-4 w-4 text-primary-600 mt-0.5 mr-3 flex-shrink-0" strokeWidth={3} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Action Link */}
              <button 
                onClick={() => onSelectService(service.title)}
                className="w-full flex items-center justify-between text-slate-900 font-semibold group/btn bg-slate-50 hover:bg-slate-100 px-4 py-3 rounded-lg transition-colors border border-slate-100"
              >
                <span>Solicitar servicio</span>
                <ArrowRight className="h-5 w-5 text-primary-600 transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
