import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './header/header'
import Main from './main/main'
import Frontend from './frontend/frontend'
import AboutUs from './studio/aboutUs'
import Footer from './footer/footer'
import './main_styles.css'

const App = () => {
  useEffect(() => {
    import('lenis').then((LenisModule) => {
      const Lenis = LenisModule.default;
      
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    });
  }, []);

  return (
    <>
      <Header />
      <Main/>
      <Frontend/>
      <AboutUs/>
      <Footer/>
    </>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)