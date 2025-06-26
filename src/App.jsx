import { useEffect} from 'react';
import Home from './components/Home'
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Ofrecer from './components/Ofrecer';
import Planes from './components/Planes'
import Servicios from './components/Servicios';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './components/Footer';
import Proyects from './components/Proyects';
import Timeline from './components/Timeline';
import Marcas from './components/Marcas';
import Boton from './components/Boton';

function App() {
  useEffect(() => {
    AOS.init({
      offset:100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
    }, []);

  return ( 
    <div className="overflow-x-hidden">
     <Navbar />
     <div id='home'>
     <Hero />
     </div>
     <div>
     <Servicios />
     </div>
     <div id='ofrecer'>
     <Ofrecer />
     </div>
     <div id='proyects'>
     <Proyects />
     </div>
     <Timeline />
     <div id='footer'>
      <Footer />
     </div>
     <Boton />
    </div>
  )
}

export default App
