import React, {useEffect, useRef} from 'react'
import { useObserver } from '../../hooks/useObserver'
import "./Reasons.css"


const ReasonCard = ({reason})=>{
    const reasonRef = useRef();
    const isVisible = useObserver(reasonRef);

    // console.log(isVisible);

    // useEffect(()=>{

    // })


  return (
    <div ref={reasonRef} className="reason-card-observer-div">
    <div className={`reason-card ${isVisible ? 'clear-blur' : 'blur-card'}`}>
      <div className={`reason-card-content`}>
        <div className="reason-card-img-div">
          <img className="reason-img" src={reason.img} alt={`reason_img-${reason.id}`} />
        </div>
        <div className="reason-card-info-div">
          <h3 className="thin reason-h3-title">{reason.title}</h3>
          <h5>{reason.blurb}</h5> 
        </div>
      </div>
    </div>
    </div>
  )
}

const Reasons = ({reasons}) => {
  return (
    <div id="reasons" className="reasons parent-container">
      {reasons.map((reason,idx)=>(
        <ReasonCard key={reason.id} reason={reason}/>
      ))}
    </div>
  )
}

export default Reasons