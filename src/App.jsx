import { useEffect} from 'react';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Ofrecer from './components/Ofrecer';
import Planes from './components/Planes'
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './components/Footer';
import Proyects from './components/Proyects';
import Timeline from './components/Timeline';
import Marcas from './components/Marcas';

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
     <Home />
     </div>
     <div id='ofrecer'>
     <Ofrecer />
     </div>
     <div id='proyects'>
     <Proyects />
     </div>
     <Marcas />
     <div>
     <Planes />
     </div>
     <Timeline />
     <div id='footer'>
      <Footer />
     </div>
    </div>
  )
}

export default App
