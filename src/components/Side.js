import React ,{useState} from 'react'
import {useEffect} from 'react'
import './Side.css'
function Side() {
  
useEffect(()=>{
  window.addEventListener('scroll',function(){
    var scrollPosition=window.scrollY;
    var containers=document.querySelector(".container");
   if(scrollPosition >20){
    containers.style.top=scrollPosition*0.5+'vh'; 
   }
  })
})
const [text,setText]=useState('INTRO');
  return (

    <>
    <div className="container">
      {text}
    </div>
    </>
  )
}

export default Side