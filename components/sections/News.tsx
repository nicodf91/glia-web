import React, { useState, useEffect } from 'react';
import { ArrowRight, Loader2, Calendar } from 'lucide-react';
import { NewsPost } from '../../types';

// Mock Data simulates a database response
const ALL_POSTS: NewsPost[] = [
  {
    id: '1',
    title: 'Ejemplo de cobertura de una feria',
    excerpt: 'Contenido ficticio usado para mostrar una tarjeta editorial con imagen, fecha, categoría y resumen.',
    category: 'Feria Intersec',
    imageUrl: 'https://ellecktra.com/casos/stands-funcional-voran/img/funcional-voran-stand-intersec-01.jpg',
    date: '10 Ago, 2024',
    readTime: '3 min lectura'
  },
  {
    id: '2',
    title: 'Diseño de Rociadores Automáticos',
    excerpt: 'Texto ilustrativo para evaluar una tarjeta editorial; no existe inscripción, curso ni evento asociado.',
    category: 'Sistemas',
    imageUrl: 'https://bomfireparts.com/wp-content/uploads/2025/06/Rociadores-contra-incendio-para-oficinas-proteccion-integral-en-un-solo-lugar-980x551.jpg',
    date: '05 Sep, 2024',
    readTime: '5 min lectura'
  },
  {
    id: '3',
    title: 'Nueva Resolución de trabajo en Altura',
    excerpt: 'Análisis detallado de la nueva normativa de la SRT para trabajos superiores a 2 metros de altura y sus implicancias.',
    category: 'Normativa',
    imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800',
    date: '15 Sep, 2024',
    readTime: '7 min lectura'
  },
  {
    id: '4',
    title: 'La ergonomía de una organización',
    excerpt: 'Cómo los estudios ergonómicos (Res. 886/15) impactan directamente en la productividad y la reducción de ausentismo.',
    category: 'Ergonomía',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAecxvmz86F3DliWxLlpzQMbjHE5YabHQw2Q&s',
    date: '22 Sep, 2024',
    readTime: '4 min lectura'
  },
  {
    id: '5',
    title: '¿Por qué monitorear el agua?',
    excerpt: 'Laboratorio de análisis bacteriológico y fisicoquímico. Importancia de cumplir con el Código Alimentario.',
    category: 'Laboratorio',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDizFgkZvsr0WTHpaapFja4OJ0zZiYWWjE3Q&s',
    date: '01 Oct, 2024',
    readTime: '2 min lectura'
  },
  {
    id: '6',
    title: 'Simulacros de Evacuación Efectivos',
    excerpt: 'Guía práctica para realizar simulacros que realmente preparen a tu equipo ante una emergencia real.',
    category: 'Emergencias',
    imageUrl: 'https://www.riesgozero.ar/hubfs/Imported_Blog_Media/simulacros-de-evacuacion.png',
    date: '10 Oct, 2024',
    readTime: '6 min lectura'
  }
];

const News: React.FC = () => {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  // Simulate initial data fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      setPosts(ALL_POSTS.slice(0, visibleCount));
      setLoading(false);
    }, 1500); // 1.5s delay to show skeleton
    return () => clearTimeout(timer);
  }, []);

  // Handle "Load More"
  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      const newCount = visibleCount + 3;
      setVisibleCount(newCount);
      setPosts(ALL_POSTS.slice(0, newCount));
      setLoadingMore(false);
    }, 1000);
  };

  const hasMore = visibleCount < ALL_POSTS.length;

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-xs mb-3 block">
            Contenido editorial de muestra
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl tracking-tight">
            Tarjetas de <span className="text-primary-700">recursos ficticios</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            Estos títulos y fechas prueban el layout; no son publicaciones, asesoramiento ni participación en eventos reales.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          
          {loading ? (
            // Skeleton Loading State
            <>
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm animate-pulse">
                  <div className="h-48 bg-slate-200"></div>
                  <div className="relative -mt-6 mx-auto w-24 h-24 bg-slate-100 rounded-full border-4 border-white z-10"></div>
                  <div className="p-6 pt-2 text-center">
                    <div className="h-6 bg-slate-200 rounded w-3/4 mx-auto mb-4"></div>
                    <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-slate-200 rounded w-5/6 mx-auto"></div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            // Actual Content
            <>
              {posts.map((post) => (
                <article 
                  key={post.id} 
                  className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden hover:-translate-y-1"
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 pt-16 flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3 font-medium uppercase tracking-wide">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-6 w-full border-t border-slate-50">
                      <button className="text-sm font-bold text-primary-600 hover:text-primary-800 inline-flex items-center transition-colors group/btn">
                        Vista de demostración
                        <ArrowRight className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </>
          )}
        </div>

        {/* Load More Button */}
        {hasMore && !loading && (
          <div className="mt-16 text-center">
            <button
              onClick={handleLoadMore}
              disabled={loadingMore}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loadingMore ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Cargando...
                </>
              ) : (
                'Cargar más novedades'
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default News;
