import "./Navbar.css"
import logo from '../Assets/logo.png'
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [menu,setMenu] =useState("Shop")
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt=""/>
               
            </div>
            <ul className="nav-menu">
                <li onClick={()=>setMenu('Shop')}><Link style={{textDecoration:"none",color:'black'}} to='/'>Shop</Link>{menu==='Shop'?(<hr/>):(<></>)}</li>
                <li onClick={()=>setMenu('Men')}><Link style={{textDecoration:"none",color:'black'}} to='/mens'>Men</Link>{menu==='Men'?(<hr/>):(<></>)}</li>
                <li onClick={()=>setMenu('Women')}><Link style={{textDecoration:"none",color:'black'}} to='/women'>Women</Link>{menu==='Women'?(<hr/>):(<></>)}</li>
                <li onClick={()=>setMenu('Kids')}><Link style={{textDecoration:"none",color:'black'}} to='/kids'>Kids</Link>{menu==='Kids'?(<hr/>):(<></>)}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'style={{textDecoration:"none",color:'black'}}><button>Login</button></Link>
                <Link to='/cart'style={{textDecoration:"none",color:'black'}}><i class="fa-solid fa-cart-shopping"></i></Link>
                <div className="nav-cart-count">0</div>

            </div>
            
        </div>
    )
}

export default Navbar
