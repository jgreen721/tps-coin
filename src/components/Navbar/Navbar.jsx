import React from 'react'
import { SplitText } from '../../generics'
import { NavLogo } from './components'
import "./Navbar.css"




const Navbar = () => {
    const links =[
        {id:1,name:"About",link:"#about"},
        {id:2,name:"Contact",link:"#contact"},
    ]
  return (
    <nav className="nav">
        {/* <div className="nav-logo-div"> */}
            <div className="flex-center nav-logo-div">
                <NavLogo text="TPS"/>
                <SplitText text="coin"/>
            </div>
        {/* </div> */}
        <ul className="nav-links flex">
            {links.map(link=>(
                <li key={link.id} className="nav-link-item">
                    <a href={link.link} className="nav-link">{link.name}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar