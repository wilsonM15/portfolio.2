import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import './Navbar.css';

function Navbar() {


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
<>
   <header>
    <div className='container'>
     <nav> 
      <div className='logo'>
       <h2>WMDEV</h2>
      </div>
      <ul className={isOpen ? 'nav-link active' : 'nav-link'}>
        <li>
            <a href='/Home' className='active'>
                Home
            </a>
        </li>
            <li><a href='/About'>About</a></li>
            <li><a href='/Portfolio'>Portfolio</a></li>
            <li><a href='/Contact'>Contact</a></li>
      </ul>
      <div className='icon' onClick={toggleMenu}>
        <FaBars />
      </div>
     </nav>
    </div>
   </header>
</>
  );
}
/*
function CustomLink ({ href, children, ...props}) {
    const path = window.location.pathname

    return (
        <li className="{path === href ? 'active' : ''}">
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}
*/
export default Navbar