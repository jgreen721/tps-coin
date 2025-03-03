import React from 'react'
import "./Billboard.css"

const Billboard = () => {
  return (
    <div className="hero-billboard">
    <h1 className="top-billboard-h1 slide-in-right">To<span className="bold">tal</span></h1>
    <div className="middle-billboard-row flex">
      {/* <div className="middle-billboard-h1">P</div>
      <div className="middle-billboard-h1">O</div>
      <div className="middle-billboard-h1">S</div> */}
      <h1 className="middle-billboard-h1 shadow-middle-h1">POS</h1>
      <h1 className="middle-billboard-h1 middle-billboard-h1-absolute">POS</h1>
    </div>
    <div className="bottom-billboard-row">
      <h1 className="bottom-billboard-h1 slide-in-left">C<span className="bold">O</span>IN</h1>
    </div>
  </div>
  )
}

export default Billboard