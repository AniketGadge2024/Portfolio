import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
const navigate = useNavigate();
  const toggleMenu = () => {
    setShowMenu(prev => !prev);
  };

  return (
    <div className='Navigation-body'>
      <h2 onClick={()=>navigate('/')} className='Name-Title' >Aniket</h2>

      
      <div className='d-none d-md-flex'>
        <div onClick={()=>navigate('/')} className='Nav-items'><span className='.indicator-span' >Home</span> </div>
        <div onClick={()=>navigate('/About')} className='Nav-items'><span>About</span> </div>
        <div onClick={()=>navigate('/Service')} className='Nav-items'><span>Service</span> </div>
        <div className='Nav-items'><span>Contact</span></div>
      </div>

      
      <div className='d-flex align-items-center justify-content-center'>
        <a className='logo-nav' href="#"><i className="fa-brands fa-facebook fa-xl"></i></a>
        <a className='logo-nav' href="#"><i className="fa-brands fa-linkedin fa-xl  "></i></a>
        <a className='logo-nav' href="#"><i className="fa-brands fa-instagram fa-xl  "></i></a>

        
        <div className='d-block d-md-none' onClick={toggleMenu}>
          <i className="fa-solid fa-bars fa-xl logo-nav "></i>
        </div>
      </div>

      
      {showMenu && (
        <div className='Menu-div'>
          <div className='Menu-content-div-main'>
            <div onClick={()=>navigate('/')} className='Nav-itemsm'>Home</div>
            <div onClick={()=>navigate('/About')} className='Nav-itemsm'>About</div>
            <div onClick={()=>navigate('/Service')} className='Nav-itemsm'>Service</div>
            <div className='Nav-itemsm'>Contact</div>
            <div onClick={()=>navigate('/Admin')} className='Nav-itemsm'>Admin</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
