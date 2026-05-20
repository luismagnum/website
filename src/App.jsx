import { useEffect} from 'react';
import Ebook from './components/Ebook';
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
     <Ebook />
    </div>
  )
}

export default App
