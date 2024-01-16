import React from 'react'
import "./about.css"
import cartoon from "./3d cartoon.png"
function about() {
  return (
    <>
        <div className="about_container section">
            <div className="strip2"></div>
            <div className="about1">
              <p>Hey there! I'm Jay, a passionate web developer with a knack for turning ideas into interactive and visually appealing digital experiences. With a professional background in web development, I thrive on crafting seamless and user-friendly websites that not only meet but exceed expectations.</p>
            </div>
            <h1>DEVELEOPER</h1>
            <div className="cartoon"><img src={cartoon} alt="" srcset="" /></div>
            <div className="about2">
              <p>I'm always open to new challenges and collaborations. If you have a project in mind or just want to discuss the exciting possibilities that the digital world offers, feel free to reach out. Together, we can create something extraordinary!</p>
            </div>
        </div>
    </>
  )
}

export default about