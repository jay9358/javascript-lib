import React, { useState } from 'react'
import "./project.css"
import Projects from "./Projects"
function Project() {
   
  return (
    <>
    <div className="project_container">
        <Projects value={1}></Projects>
        <Projects value={2}></Projects>
        <Projects value={3}></Projects>
    </div>
    </>
  )
}

export default Project