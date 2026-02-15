import React from 'react';
import { FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const socialLinks = [
    { label: 'Instagram', href: '#', icon: FaInstagram },
    { label: 'LinkedIn', href: '#', icon: FaLinkedinIn },
    { label: 'YouTube', href: '#', icon: FaYoutube },
    { label: 'WhatsApp', href: '#', icon: FaWhatsapp },
  ];

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
             <div className="mt-6">
               <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">
                 Seguinos
               </p>
               <div className="flex items-center gap-3">
                 {socialLinks.map(({ label, href, icon: Icon }) => (
                   <a
                     key={label}
                     href={href}
                     aria-label={label}
                     title={label}
                     className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-800/70 bg-slate-900/60 text-slate-400 transition-colors hover:border-slate-700 hover:bg-slate-800/70 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                   >
                     <Icon className="h-4 w-4" />
                   </a>
                 ))}
               </div>
             </div>
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
             <h4 className="text-white font-semibold mb-4">Contacto</h4>
             <ul className="space-y-2 text-sm">
               <li>contacto@gliaconsultora.com</li>
               <li>+54 11 1234-5678</li>
               <li>Buenos Aires, Argentina</li>
             </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-4">Legales</h4>
             <ul className="space-y-2 text-sm">
               <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
             </ul>
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


