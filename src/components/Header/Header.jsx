import React from 'react'
import "./Header.css"

const Header = ({blurb}) => {
  return (
    <div className="header">
      <div className="header-bg"></div>
      <div className="header-card">
    <div className="header-h1-row slide-in-right">
      <h1>T</h1>
      <h1>o</h1>
      <h1>t</h1>
      <h1>a</h1>
      <h1>l</h1>
    </div>
    <div className="middle-header-row flex">
    <h1 className="middle-header-h1">POS</h1>
    <h1 className="middle-header-h1 shadow-middle-h1">POS</h1>
    </div>
      <div className="header-h1-row slide-in-left">
        <h1 className="c-coin">C</h1>
        <h1>o</h1>
        <h1>i</h1>
        <h1>n</h1>
      </div>
      <div className="blurb-div">
      <small className="header-blurb">a coin that’s upfront about being absolutely worthless… and that’s exactly <span className="emphasis-bold-animate">why</span> it’s worth something!</small>
      </div>

      </div>
  </div>
  )
}

export default Header