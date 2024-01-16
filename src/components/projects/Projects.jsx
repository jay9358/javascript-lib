import React from 'react'
import Card from './Card'
import "./project.css"
function Projects(props) {
  return (
    <div className='proj_cont section ww'>
      <div class="containers">
        <div className="parent card1">
          <Card/>
        </div>
        <div className="parent card2">
          <Card/>
        </div>
        <div className="parent card3">
          <Card/>
        </div>
    
    </div>
    </div>
  )
}

export default Projects