import { useState } from 'react'
import {Navbar,Hero} from "./components"
import './App.css'
import { Billboard } from './components/Hero/components'

function App() {


  return (
    <div className="app">
      <div className="app-content-container">
        <div className="app-bg"></div>
        <div className="app-content">
          <Navbar/>
          {/* <Hero/> */}
          <Billboard/>
          <h1 className="arsenal">COMING SOON</h1>
        </div>
      </div>
    </div>
  )
}

export default App
