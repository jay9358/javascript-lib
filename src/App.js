
import './App.css';
import Intro from './components/Intro';
import Nav from './components/Nav';
import { useState,useEffect , useMemo} from 'react';
import Preloader from './components/Preloader';
import About from './components/about/about';
import Project from './components/projects/Project';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {
  const [loader, setLoader] = useState(true);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);




  return (
 <>
  {loader ? (
                <Preloader/>
              ) : (
                <Start></Start>

              )}

 </>
  );
}
function Start(){
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
    scrollAnimation();
  }, []);
  
  
  const particlesLoaded = (container) => {
    console.log(container);
  };
  
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "black",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 1.1,
          },
          repulse: {
            distance: 200,
            duration: 0.9,
          },
        },
      },
      particles: {
        color: {
          value: "000000",
        },
        links: {
          color: "#000000",
          distance: 200,
          enable: true,
          opacity: 0.7,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1.1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
          max: 150,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "triangle",
        },
        size: {
          value: { min: 3, max: 6 },
        },
        zIndex: {
          value: -1,
        },
      },
      detectRetina: true,
    }),
    [],
  );
  const scrollAnimation = () => {
    gsap.registerPlugin(ScrollTrigger);

    const content = document.querySelector('.content');
    
    // Check if the content width exceeds the window width
   
      gsap.to(content, {
        xPercent: -100 * (content.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.wrapper',
          pin: true,
          scrub: 0.5,
          snap: 1 / (content.length - 1),
          start: 'top top',
          end: 3000,
        },
      });
  
    
  };

  return(
    <>
        <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
     <div className="Nav-container"  >
  <div className="Navbar">
    <Nav></Nav>

  </div>
</div>
<div className="w content">
        <Intro></Intro>
        <About></About>
        <Project></Project>
      </div>

    </>
  )
}
export default App;
