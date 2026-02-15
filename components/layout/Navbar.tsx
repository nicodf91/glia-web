import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre Glia', href: '/#sobre-glia' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Novedades', href: '/novedades' },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1) {
      return;
    }
    e.preventDefault();
    setIsOpen(false);

    if (href === '/' && location.pathname === '/' && !location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigate(href);
  };

  const scrollToContact = () => {
    setIsOpen(false);
    navigate('/#contacto');
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-sm py-3 border-slate-200/50' 
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a 
              href="/" 
              onClick={(e) => handleNavClick(e, '/')} 
              className="flex-shrink-0 flex items-center gap-2 group relative z-50"
            >
              <div className="flex items-center">
                <img
                  src="/brand/logo-glia.jpg"
                  alt="Glia Consultora"
                  className="h-9 w-auto object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              <div className={`flex items-center px-2 py-1.5 rounded-full border transition-all duration-300 mr-4 ${scrolled ? 'bg-slate-50/50 border-slate-200/50' : 'bg-white/40 border-white/40 backdrop-blur-sm'}`}>
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white/80 rounded-full transition-all duration-200"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <button 
                onClick={scrollToContact}
                className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-full overflow-hidden shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contactar
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 transition-colors"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-full focus:outline-none transition-colors ${scrolled ? 'hover:bg-slate-100 text-slate-900' : 'bg-white/50 backdrop-blur-md text-slate-900'}`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 md:hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-2xl font-bold text-slate-900 hover:text-primary-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-8 w-full max-w-xs">
              <button 
                onClick={scrollToContact}
                className="w-full flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-slate-900 rounded-xl shadow-xl active:scale-95 transition-transform"
              >
                Contactar ahora
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
