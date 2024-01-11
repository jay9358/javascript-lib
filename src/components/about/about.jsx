import React from 'react'
import "./about.css"
import cartoon from "./3d cartoon.png"
function about() {
  return (
    <>
        <div className="about_container section">
            <div className="strip2"></div>
            <div className="about1"></div>
            <h1>DEVELEOPER</h1>
            <div className="cartoon"><img src={cartoon} alt="" srcset="" /></div>
            <div className="about2"></div>
        </div>
    </>
  )
}

export default about