import React from 'react'
import './Service.css'
import Navigation from '../Navigation/Navigation'

const Service = () => {
  return (
    <div className='Service-body' >
      <Navigation></Navigation>
      <div className='title-service' >
        <h5 className='Main-service-title' >Services</h5>
        <p className='Main-service-para' >We build powerful, custom websites tailored to your needs. Explore our website creation categories below.</p>
      </div>

      <div className='Service-cateogery' >

        <div className='Service-Content'>
          <div className='Sub-content-1'>
            <i className='fas fa-briefcase fa-2xl' style={{ color: '#FF6B6B' }}></i>
          </div> 
          <h6 className='content-title'>Business Websites</h6>
          <p className='content-para'>Professional, sleek, and conversion-focused websites for small to large businesses, designed to build your online presence and attract customers.</p>
        </div>

        <div className='Service-Content'>
          <div className='Sub-content-2'>
            <i className='fas fa-shopping-cart fa-2xl' style={{ color: '#4ECDC4' }}></i>
          </div>
          <h6 className='content-title'>E-Commerce Stores</h6>
          <p className='content-para'>Fully-featured online shops with product listings, secure payments, and customer management to help you sell your products 24/7.</p>
        </div>

        <div className='Service-Content'>
          <div className='Sub-content-3'>
            <i className='fas fa-user-circle fa-2xl' style={{ color: '#FFA726' }}></i>
          </div>
          <h6 className='content-title'>Portfolio Websites</h6>
          <p className='content-para'>Elegant and creative websites for artists, photographers, writers, and professionals to showcase their work and achievements beautifully.</p>
        </div>

        <div className='Service-Content'>
          <div className='Sub-content-4'>
            <i className='fas fa-graduation-cap fa-2xl' style={{ color: '#5C6BC0' }}></i>
          </div>
          <h6 className='content-title'>Educational Websites</h6>
          <p className='content-para'>Custom-built online learning platforms, school websites, or coaching institute sites with features like class schedules, admission forms, and online study material.</p>
        </div>

        <div className='Service-Content'>
          <div className='Sub-content-5'>
            <i className='fas fa-heart fa-2xl' style={{ color: '#F06292' }}></i>
          </div>
          <h6 className='content-title'>Event & Wedding Websites</h6>
          <p className='content-para'>Stylish, one-page or multi-page websites for weddings, parties, or corporate events — complete with RSVP forms, event details, and galleries.</p>
        </div>

        <div className='Service-Content'>
          <div className='Sub-content-6'>
            <i className='fas fa-newspaper fa-2xl' style={{ color: '#26C6DA' }}></i>
          </div>
          <h6 className='content-title'>Blog & News Portals</h6>
          <p className='content-para'>Dynamic and engaging blogging or news platforms with categories, tags, easy post management, and SEO-friendly designs.</p>
        </div>
      </div>
    </div>
  )
}

export default Service
