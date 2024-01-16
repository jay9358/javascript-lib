
import './App.css';
import Intro from './components/Intro';
import Nav from './components/Nav';
import { useState,useEffect , useMemo} from 'react';
import Preloader from './components/Preloader';
import About from './components/about/about';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Projects from './components/projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  const [loader, setLoader] = useState(true);
 
  const scrollAnimation = () => {
   
    
    
    const t1 = gsap.timeline();
    t1.to(".w", { x: -window.innerWidth *4, duration: 2 });
  
    ScrollTrigger.create({
      trigger: '.w',
      start: 'top',
      end: `+=${window.innerWidth *4}`,
      scrub: true,
      pin: true,
      animation: t1,
    });
  

    gsap.to(".Into",{
      fontSize:'1vw',
      top:'-16rem',
      left:'90rem',
      scrollTrigger:{
        trigger: ".Into",
      start: "top top",
      end: "801",
      scrub: 0.5
      }
    })

    gsap.to(".strip",{
      height:'6rem',
      scrollTrigger:{
        trigger: ".strip",
      start: "center center",
      end: "1002",
      scrub: 0.5
      }
      
    })
    gsap.to('.about1 p',{
      left:'0%',
      top:'70%',
      scrollTrigger:{
        containerAnimation:t1,
        trigger:'.about1 p',
        start:'top bottom',
        end:'850',
        scrub:0.5

      }
    })
    gsap.to('.about2 p',{
      left:'0%',
      top:'70%',
      ease:'none',
      scrollTrigger:{
      containerAnimation:t1,
        trigger:'.about1 p',
        start:'top bottom',
        end:'900',
        scrub:0.5

      }
    })
    gsap.to('.cartoon',{
      left:'32%',
      top:'20%',
      scrollTrigger:{
        containerAnimation:t1,
        trigger:'.cartoon',
        start:'top bottom',
        end:'+=50',
        scrub:0.5

      }
    })
    gsap.to('.about_container h1',{
      top:'30%',
      scrollTrigger:{
        containerAnimation:t1,
        trigger:'.cartoon',
        start:'top bottom',
        end:'801',
        scrub:0.5

      }
    })
    gsap.to('.containerr',{
      left:'378vw',
      scrollTrigger:{
        containerAnimation:t1,
        trigger:'.containerr',
        duration:10,
        start:'top bottom',
        end:'+=1201',
        scrub:0.5

      }
    })
    gsap.to('.social-icons',{
      left:'398vw',
      top:'-9rem',
      scrollTrigger:{
        containerAnimation:t1,
        trigger:'.social-icons',
        duration:10,
        start:'top bottom',
        end:'+=2000',
        scrub:0.5

      }
    })
    gsap.to('.social-icons i',{
      color:"white",
      scrollTrigger:{
        containerAnimation:t1,
        trigger:'.social-icons i',
     
        start:'top bottom',
        end:'+=1000',
        scrub:0.5

      }
    })

  


  }; 

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
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
    <Nav count={init}></Nav>

  </div>
</div>
    <div className="w">
      
        <Intro></Intro>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        </div>
   

    </>
  )
}
export default App;
