import React from 'react'
import "./NavLogo.css"


const AnimateLetter=({letter,delay})=>{

  return(
      <div className="nav-letter-h3-div">
          <h3 style={{"--delay":delay}} className="nav-letter-h3">{letter}</h3>
       </div>
  )
}

const NavLogo = ({text}) => {
  return (
          <div className="flex">
               {text.split("").map((letter,idx)=>(
                   <AnimateLetter key={idx} letter={letter} delay={`${idx/2}s`}/>
               ))}
          </div>
  )
}

export default NavLogo