import React, { Suspense, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const News = React.lazy(() => import('../components/sections/News'));

const Novedades: React.FC = () => {
  useEffect(() => {
    document.title = 'Novedades | Glia Consultora';
    const description =
      'Novedades normativas, eventos y recursos técnicos en higiene y seguridad laboral.';
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, []);

  return (
    <main className="flex-grow pt-24">
      <section className="border-b border-slate-100 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-primary-600 font-semibold mb-3">
                Novedades
              </p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Actualidad y recursos profesionales
              </h1>
              <p className="mt-3 text-base text-slate-600">
                Actualizaciones, guÃ­as y eventos relevantes para mantener a tu organizaciÃ³n
                alineada con las mejores prÃ¡cticas de higiene y seguridad.
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
          <div className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-6 w-40 bg-slate-200 rounded mb-4 animate-pulse"></div>
              <div className="h-10 w-2/3 bg-slate-200 rounded mb-6 animate-pulse"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm"
                  >
                    <div className="h-48 bg-slate-200 animate-pulse"></div>
                    <div className="p-6">
                      <div className="h-4 bg-slate-200 rounded w-1/2 mb-3 animate-pulse"></div>
                      <div className="h-5 bg-slate-200 rounded w-3/4 mb-2 animate-pulse"></div>
                      <div className="h-4 bg-slate-200 rounded w-full animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      >
        <News />
      </Suspense>
    </main>
  );
};

export default Novedades;
