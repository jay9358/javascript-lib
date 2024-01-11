
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
import Projects from './components/projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  const [loader, setLoader] = useState(true);
  const vertical=()=>{
    gsap.registerPlugin(ScrollTrigger);
    const t2 = gsap.timeline();
    t2.to(".containerr",5,{y:-window.innerHeight})
    ScrollTrigger.create({
      animation: t2,
      trigger: ".w",
      start: "center",
      end: "+=4001",
      scrub: true,
      pin: true
    });

  }
  const scrollAnimation = () => {
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline();
    t1.to(".w", 1, { x: -window.innerWidth})
    ScrollTrigger.create({
      animation: t1,
      trigger: ".w",
      start: "top",
      end: "+=4000",
      scrub: true,
      pin: true
    });
  }; 

  useEffect(() => {
  scrollAnimation();
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
    <div className="w">
        <Intro></Intro>
        <About></About>
        <Contact></Contact>
        </div>
   

    </>
  )
}
export default App;
