import { useEffect} from 'react';
import HeroMeta from './components/HeroMeta';
import Navbar from './components/Navbar'
import AOS from "aos";
import "aos/dist/aos.css";

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
     <HeroMeta />
    
    </div>
  )
}

export default App
