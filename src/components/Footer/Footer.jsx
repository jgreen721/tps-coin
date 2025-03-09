import React, {useRef} from 'react'
import { useObserver } from '../../hooks/useObserver'
import "./Footer.css"

const Footer = () => {
    const footerRef = useRef();
    const isVisible = useObserver(footerRef);


  return (
    <footer>
        <div ref={footerRef} className="footer-content-div">
            <span className={`coin-icon ${isVisible ? 'lower-el' : ''}`}>🪙</span>
            <span className={`poop-icon ${isVisible ? 'scale-y' : ''}`}>💩</span>
            <strong className="footer-strong"> TPS-Coin </strong>
        </div>
  </footer>
  )
}

export default Footer