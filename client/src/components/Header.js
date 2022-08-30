import React from 'react'
import './style.css';

function Header() {
  return (
    <div>
    <div className="navigation1">
        <a className="links" href="https://www.turners.co.nz/?">Cars</a>| 
        <a className="links" href="https://www.turners.co.nz/Trucks-Machinery/?">Trucks & Machinery</a>|
        <a className="links" href="https://www.turners.co.nz/?">Damaged & End of Life</a>| 
        <a className="links" href="https://www.turners.co.nz/?">Boats & Marine</a>| 
        <a className="links" href="https://www.turners.co.nz/?">Motorcycles & Scooters</a>| 
        <a className="links" href="https://www.turners.co.nz/?">General Goods</a>| 
        <a className="links" href="https://www.turners.co.nz/?">Buses, Caravans & Motorhomes</a>
    </div>
    <div className="container1">
        <a href="https://www.turners.co.nz/?">
            <img id="logo" src="/logo.png" alt="logo"/>
        </a>
    <div className="navigation2">
    <a className="auth" href="https://www.turners.co.nz/?">LOGIN</a> <i>OR</i> 
    <a className="auth" href="https://www.turners.co.nz/?"> REGISTER</a>
    <a className="contact" href="https://www.turners.co.nz/?">0800 887 637</a>
    <a className="contact" href="https://www.turners.co.nz/?">Find Us</a>
    <a className="translate" href="https://www.turners.co.nz/?">中文</a>
    </div>
    </div>
    </div>
  )
}

export default Header