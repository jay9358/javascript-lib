import React, { useEffect,useRef } from 'react';
import './Intro.css';
import image from './assets/Hi.png';
import Typed from 'typed.js';

function Intro() {
  const typingTextRef = useRef(null);
  useEffect(() => {

    const typed = new Typed(typingTextRef.current, {
      strings: ["&nbsp;frontend development", "&nbsp;backend development", "&nbsp;web designing", "&nbsp;android development", "&nbsp;web development"],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
    });

  
    window.addEventListener('scroll', function () {
      var nametext = document.querySelector('.nametext');
      var Into = document.querySelector('.Into');
      var scrollpos = window.scrollY;
      
    
      if(scrollpos<100){
        nametext.style.left = scrollpos + 'px';
        Into.style.left=-scrollpos+'px';
        nametext.style.opacity=1;
        Into.style.opacity=1;
      }
   
    });
    return () => {
      typed.destroy(); // Clean up the Typed instance when the component unmounts
    };
  }, []);

  return (
    <>
      
      <div className="Intro-container section" >
        <div className='strip'></div>
        <div className="name">
          <h1>Hi There,</h1>
          <h1 className="nametext">
            I'm <span className="jay">Jay</span>
          </h1>
          <div className="Into"><h2>I am Into   </h2> <div ref={typingTextRef} className="typing-text" style={{color:"pink"}}></div></div>
          <button type="button" class="btn btn-dark btn-lg mb-3">About Me</button>
          <div className="social-icons">
          <i class="fa-brands fa-linkedin  mx-2 " style={{color: "#6c757d"}}></i>
          <i class="fa-brands fa-github  mx-2" style={{color: "#6c757d"}}></i>
          <i class="fa-brands fa-instagram mx-2" style={{color: "#6c757d"}}></i>
          <i class="fa-brands fa-twitter  mx-2" style={{color: "#6c757d"}}></i>
          
          </div>
        </div>
        <div className="containerr">
          <img id="inner" src={image} alt="Images" />
        </div>
      </div>
    </>
  );
}

export default Intro;
