import React from 'react';
import ReactDOM from 'react-dom/client';
import Hero from './components/Hero';
import Socials from './components/Socials';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Interests';
import TechStack from './components/TechStack';
import './styles/global.css';

const Main: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col background relative">
      <div className="dot-mask" />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="w-full p-4 flex justify-center items-center">
          <div className="w-12 h-12 bg-white/100 rounded-full"></div>
        </header>

        <div className="flex-grow flex items-center justify-center p-4">
          <main className="max-w-7xl w-full mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]">
              <Hero className="glass col-span-1 sm:col-span-2 lg:col-span-3 row-span-2" />
              <Socials className="glass col-span-1 row-span-2" />
              <TechStack className="glass col-span-1 sm:col-span-2 lg:col-span-4 row-span-1" />    
              <Experience className="glass col-span-1 sm:col-span-2 row-span-2" />
              <Projects className="glass col-span-1 sm:col-span-2 row-span-2" />
              <Contact className="glass col-span-1 row-span-2" />
              <Blog className="glass col-span-1 sm:col-span-2 lg:col-span-3 row-span-2" />
            </div>
          </main>
        </div>

        <footer className="w-full p-4 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Claudee Directo</p>
        </footer>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);