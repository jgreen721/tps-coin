import React from 'react'
import "./Billboard.css"

const Billboard = () => {
  return (
    <div className="billboard">
    <div className="billboard-h1-row slide-in-right">
      <h1>T</h1>
      <h1>o</h1>
      <h1>t</h1>
      <h1>a</h1>
      <h1>l</h1>
    </div>
    <div className="middle-billboard-row flex">
      <h1 className="middle-billboard-h1 shadow-middle-h1">POS</h1>
      <h1 className="middle-billboard-h1 middle-billboard-h1-absolute">POS</h1>
    </div>
      <div className="billboard-h1-row slide-in-left">
        <h1>C</h1>
        <h1>o</h1>
        <h1>i</h1>
        <h1>n</h1>
      </div>
  </div>
  )
}

export default Billboard