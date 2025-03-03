import { useState } from 'react'
import {Navbar,Hero} from "./components"
import './App.css'

function App() {


  return (
    <div className="app">
      <div className="app-content-container">
        <div className="app-bg"></div>
        <div className="app-content">
          <Navbar/>
          <Hero/>
        </div>
      </div>
    </div>
  )
}

export default App
