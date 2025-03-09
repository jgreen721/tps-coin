import { useState } from 'react'
import {Navbar,Header,Reasons,HowTos} from "./components"
import data from "./data.json"
import './App.css'

function App() {

  console.log(data)


  return (
    <div className="app">
       <div className="app-bg"></div>
      <div className="app-content-container"> 
        <div className="app-content">
          <Navbar/>
          <Header blurb={data.shortBlurb}/>
           <Reasons reasons={data.reasons}/>
          <HowTos howTos={data.howTos}/> 
          <footer>
            <strong className="footer-strong"><span className="coin-icon">🪙</span> TPS-Coin <span className="poop-icon">💩</span></strong>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
