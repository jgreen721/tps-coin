import React, {useRef,} from 'react'
import "./HowTos.css"


const HowToCard=({howTo})=>{
      const cardRef = useRef();
      const isVisible = useRef();


      return(
        <div ref={cardRef} className="how-to-observer-card" id="howto">
          <div className="how-to-card">
          <div className="how-to-title-div">
            <div className="how-to-title-text-wrapper">
            <h2 className={`how-to-title ${isVisible ? 'raise-title' : ''}`}>{howTo.title}</h2>
            </div>
            <h2 style={{"--duration":howTo.duration,"--delay":"1s"}} className={`shadow-h2-how-to ${isVisible ? 'show-shadow-text' : 'hide-shadow-text'}`}>{howTo.title}</h2>
          </div>
          <h5 className="how-to-blurb">{howTo.blurb}</h5>
        </div>
        </div>
      )
}

const HowTos = ({howTos}) => {
  return (
    <div id="howtos" className="howTos parent-container">
      {howTos.map(howTo=>(
        <HowToCard key={howTo.id} howTo={howTo}/>
      ))}
    </div>
  )
}

export default HowTos