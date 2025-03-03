import React from 'react'
import "./SplitText.css"
const SplitText = ({text}) => {
  return (
    <div className="split-text-parent">
    <div className="top-text-div split-text-div">
        <h5 className="absolute-text split-text-offset-bottom">{text}</h5>
        <h5 className="transparent-text">{text}</h5>
    </div>
    <div className="bottom-text-div split-text-div">
        <h5 className="absolute-text split-text-offset-top">{text}</h5>
        <h5 className="transparent-text">{text}</h5>
    </div>
</div>
  )
}

export default SplitText