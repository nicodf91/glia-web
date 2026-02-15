import React from 'react';
import { UserCheck, Users, Briefcase, Award, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-64 -mt-64 w-[50rem] h-[50rem] bg-slate-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-xs mb-3 block">
            Nuestra Esencia
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl tracking-tight">
            Sobre Glia
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            Expertos comprometidos con la seguridad laboral y la excelencia técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: The "Pro" Profile Card */}
          <div className="lg:col-span-5 relative">
            {/* Decorative blob behind card */}
            <div className="absolute top-10 left-10 right-10 bottom-10 bg-primary-100 rounded-[3rem] rotate-3 blur-xl opacity-60 -z-10 transform scale-105"></div>
            
            <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgb(0,0,0,0.1)] border border-slate-100 overflow-hidden relative group transition-transform duration-300 hover:-translate-y-1">
              
              {/* Card Header Pattern */}
              <div className="h-32 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4a7167 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-600 rounded-full blur-3xl opacity-30"></div>
              </div>

              {/* Content Container */}
              <div className="px-8 pb-8 relative">
                
                {/* Profile Picture Container */}
                <div className="relative -mt-16 mb-6 flex justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full p-1 bg-white shadow-xl">
                      <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" 
                        alt="Lic. Marcelo Cabali" 
                        className="w-full h-full rounded-full object-cover object-[50%_20%]"
                      />
                    </div>
                    {/* Verification Badge */}
                    <div className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-sm" title="Verificado">
                      <CheckCircle2 className="w-6 h-6 text-primary-600 fill-primary-50" />
                    </div>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">Lic. Marcelo Cabali</h3>
                  <p className="text-primary-700 font-semibold text-sm uppercase tracking-wide mb-2">Especialista en Higiene y Seguridad</p>
                  <p className="text-slate-400 text-xs font-mono bg-slate-50 inline-block px-3 py-1 rounded border border-slate-100">Matrícula Prof. Nº 1234</p>
                </div>

                {/* Bio text */}
                <div className="space-y-4 mb-8 text-center sm:text-left">
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    Con más de <span className="font-semibold text-slate-900">15 años de trayectoria</span>, he liderado la implementación de normas ISO y planes de prevención en industrias metalúrgicas, logísticas y de servicios de alta complejidad.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    Mi enfoque combina el <span className="text-primary-700 font-medium">rigor técnico</span> necesario para el cumplimiento legal con un trato humano cercano que facilita la adopción de nuevas culturas de seguridad en las organizaciones.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-6">
                  <div className="text-center p-2 rounded-lg hover:bg-slate-50 transition-colors">
                    <span className="block text-2xl font-bold text-slate-900">15+</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Años Exp.</span>
                  </div>
                  <div className="text-center p-2 rounded-lg hover:bg-slate-50 transition-colors border-l border-slate-100 border-r">
                    <span className="block text-2xl font-bold text-slate-900">200+</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Proyectos</span>
                  </div>
                  <div className="text-center p-2 rounded-lg hover:bg-slate-50 transition-colors">
                    <span className="block text-2xl font-bold text-slate-900">100%</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Garantía</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Features / Values */}
          <div className="lg:col-span-7 space-y-12 lg:pl-8 pt-4">
             {/* Introduction */}
             <div>
               <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-snug">
                 No ofrecemos soluciones enlatadas. <br/>
                 <span className="text-primary-700">Diseñamos seguridad a medida.</span>
               </h3>
               <p className="text-lg text-slate-600 leading-relaxed">
                 En Glia entendemos que cada empresa es un ecosistema único. Nuestro equipo multidisciplinario analiza cada variable para ofrecer respuestas que no solo cumplen la norma, sino que optimizan costos operativos y protegen lo más valioso: su gente.
               </p>
             </div>

             {/* Features List */}
             <div className="grid gap-8">
               
               <div className="flex gap-6 items-start group">
                 <div className="flex-shrink-0 relative">
                   <div className="w-14 h-14 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center text-primary-600 group-hover:scale-110 group-hover:border-primary-200 group-hover:shadow-primary-100/50 transition-all duration-300 z-10 relative">
                     <UserCheck className="w-7 h-7" strokeWidth={1.5} />
                   </div>
                   <div className="absolute inset-0 bg-primary-50 rounded-2xl rotate-6 -z-0 group-hover:rotate-12 transition-transform duration-300"></div>
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900 text-xl mb-2 group-hover:text-primary-700 transition-colors">Trato Personalizado y Directo</h4>
                   <p className="text-slate-500 leading-relaxed">
                     Sin intermediarios burocráticos. Tenés un referente asignado a tu cuenta (muchas veces el propio Marcelo) disponible para resolver dudas operativas y urgencias reales.
                   </p>
                 </div>
               </div>

               <div className="flex gap-6 items-start group">
                 <div className="flex-shrink-0 relative">
                   <div className="w-14 h-14 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center text-primary-600 group-hover:scale-110 group-hover:border-primary-200 group-hover:shadow-primary-100/50 transition-all duration-300 z-10 relative">
                     <Briefcase className="w-7 h-7" strokeWidth={1.5} />
                   </div>
                   <div className="absolute inset-0 bg-primary-50 rounded-2xl rotate-6 -z-0 group-hover:rotate-12 transition-transform duration-300"></div>
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900 text-xl mb-2 group-hover:text-primary-700 transition-colors">Experiencia Multirubro</h4>
                   <p className="text-slate-500 leading-relaxed">
                     Hemos adaptado protocolos para metalúrgicas pesadas, laboratorios estériles, oficinas corporativas y centros logísticos. Conocemos los dolores de cada sector.
                   </p>
                 </div>
               </div>

               <div className="flex gap-6 items-start group">
                 <div className="flex-shrink-0 relative">
                   <div className="w-14 h-14 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center text-primary-600 group-hover:scale-110 group-hover:border-primary-200 group-hover:shadow-primary-100/50 transition-all duration-300 z-10 relative">
                     <Award className="w-7 h-7" strokeWidth={1.5} />
                   </div>
                   <div className="absolute inset-0 bg-primary-50 rounded-2xl rotate-6 -z-0 group-hover:rotate-12 transition-transform duration-300"></div>
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900 text-xl mb-2 group-hover:text-primary-700 transition-colors">Rigor Técnico y Legal</h4>
                   <p className="text-slate-500 leading-relaxed">
                     Nuestros informes no son plantillas. Están diseñados para resistir auditorías exigentes, inspecciones ministeriales y certificaciones de calidad.
                   </p>
                 </div>
               </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
