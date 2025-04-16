import React from 'react'
import './Page.css'
import Navigation from '../Navigation/Navigation'
import { useNavigate } from 'react-router-dom';
import Experiment from '../Experiment';

const MainPage = () => {
const navigate = useNavigate();
  return (<>
  <Navigation></Navigation>
    <div className='d-flex justify-content-center align-items-center Body-Main' >
      <div className='d-flex flex-column justify-content-center align-items-center Main-content' >
<h4 className='Title-name' >Aniket Gadge</h4>
<div className='animation-div' > <Experiment></Experiment> </div>
<p className='text-center title-para' >I’m a full-stack web developer specializing in building modern, responsive, and scalable web applications.</p>
<button onClick={()=>navigate('/About')} className='btn btn-success w-25 ' > <span className='Main-About-me' >About Me</span> </button>
      </div>
    </div>
    </>)
}

export default MainPage
