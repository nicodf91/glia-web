import React, { Suspense, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Services = React.lazy(() => import('../components/sections/Services'));

const Servicios: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Servicios | Glia Consultora';
    const description =
      'Servicios profesionales en higiene y seguridad laboral para PyMEs e industrias.';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, []);

  const handleSelectService = (serviceName: string) => {
    sessionStorage.setItem('glia_preselected_service', serviceName);
    navigate('/#contacto');
  };

  return (
    <main className="flex-grow pt-24">
      <section className="border-b border-slate-100 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary-600 font-semibold mb-2">
                Servicios
              </p>
              <p className="text-sm text-slate-600">
                Soluciones profesionales para asegurar cumplimiento y continuidad operativa.
              </p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="bg-slate-50 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-6 w-40 bg-slate-200 rounded mb-4 animate-pulse"></div>
              <div className="h-10 w-2/3 bg-slate-200 rounded mb-10 animate-pulse"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-slate-200 mb-6 animate-pulse"></div>
                    <div className="h-5 w-3/4 bg-slate-200 rounded mb-4 animate-pulse"></div>
                    <div className="h-4 w-full bg-slate-200 rounded mb-2 animate-pulse"></div>
                    <div className="h-4 w-5/6 bg-slate-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      >
        <Services onSelectService={handleSelectService} />
      </Suspense>
    </main>
  );
};

export default Servicios;
