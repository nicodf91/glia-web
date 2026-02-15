import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToHash from './components/layout/ScrollToHash';

const Home = React.lazy(() => import('./pages/Home'));
const Servicios = React.lazy(() => import('./pages/Servicios'));
const Novedades = React.lazy(() => import('./pages/Novedades'));

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollToHash />

      <Suspense
        fallback={
          <main className="flex-grow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <div className="h-8 w-1/2 bg-slate-200 rounded mb-4 animate-pulse"></div>
              <div className="h-5 w-2/3 bg-slate-200 rounded animate-pulse"></div>
            </div>
          </main>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/novedades" element={<Novedades />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
