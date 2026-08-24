import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-3 mb-4">
               <img
                 src="/brand/logo-glia.jpg"
                 alt="Glia Consultora"
                 className="h-10 w-auto object-contain"
                 loading="lazy"
                 decoding="async"
               />
             </div>
             <p className="text-sm text-slate-400">
               Consultoría integral en higiene y seguridad laboral. Protegiendo personas, asegurando negocios.
             </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Mapa del Sitio</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="/#sobre-glia" className="hover:text-white transition-colors">Sobre Glia</a></li>
              <li><a href="/servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="/novedades" className="hover:text-white transition-colors">Novedades</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-4">Alcance</h4>
             <ul className="space-y-2 text-sm">
               <li>Proyecto demostrativo</li>
               <li>Sin backend ni canal de contacto</li>
               <li>Datos y métricas ilustrativos</li>
             </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-4">Portfolio</h4>
             <p className="text-sm text-slate-400">Implementación frontend para demostrar arquitectura, UI responsive y validación local.</p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Glia Consultora. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


