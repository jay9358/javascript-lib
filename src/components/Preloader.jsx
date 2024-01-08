import React, { useEffect, useRef } from 'react';
import './Preloader.css';


function Preloader() {
  
  return (
    <div className="preloader">
        <div class="spinner">
  <div class="ball"></div>
  <p>LOADING</p>
</div>
    </div>
  );
}

export default Preloader;
