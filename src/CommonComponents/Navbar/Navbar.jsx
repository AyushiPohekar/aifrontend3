import React from 'react';
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className='NavbarDiv'>
        <h1 onClick={()=>navigate("/")}>LegaciesAI</h1>
        <div className='Navbardiv2'>
        <h1 onClick={()=>navigate("/models")}>Models</h1>
        <h1 onClick={()=>navigate("/models")}>Docs</h1>
        <h1 onClick={()=>navigate("/models")}>Blog</h1>
        <h1 onClick={()=>navigate("/models")} style={{marginRight:"35px"}}> G Login</h1>
        </div>
    </div>
  )
}

export default Navbar