import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css'
import App from './App'

const RootApp = () => {
  useEffect(() => {
  AOS.init({
    duration: 600,      // Faster animation
    once: true,          // Stays visible once it appears
    offset: 50,          // Triggers earlier
    delay: 0,            // No waiting
    easing: 'ease-out'   // Smoother entry
  });
}, []);

  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootApp />
  </StrictMode>,
)