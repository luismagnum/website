import { useEffect} from 'react';
import Navbar from './components/Navbar'
import HeroMeta from './components/HeroMeta'
import MetaFooter from './components/MetaFooter'
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
     <MetaFooter />
    </div>
  )
}

export default App
