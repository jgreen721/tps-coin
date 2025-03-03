import React from 'react'
import { Coin,Billboard } from './components'
import "./Hero.css"

const Hero = () => {
  return (
    <header className="hero">
      <Billboard/>
      <Coin/>
    </header>
  )
}

export default Hero