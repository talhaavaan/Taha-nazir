import { useEffect } from 'react';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import Trust from './components/Trust';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Software from './components/Software';
import Why from './components/Why';
import Footer from './components/Footer';

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px',
    });

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function App() {
  useScrollReveal();

  return (
    <>
      <Cursor />
      <Hero />
      <Trust />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Software />
      <Why />
      <Footer />
    </>
  );
}
