import React, { useState, useEffect } from 'react'; // ✅ make sure useEffect is imported
import './Page.css';
import Navigation from '../Navigation/Navigation';
import { useNavigate } from 'react-router-dom';
import Experiment from '../Experiment';

const MainPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false); // 👈 for controlling visibility

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowReviewForm(true);
    }, 10000); 

    return () => clearTimeout(timer); 
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    Submit(event);
    console.log('Review Submitted');
  };

  const Submit = (event) => {
    const formEle = document.querySelector('.ask-review-form');
    const formData = new FormData(formEle);

    fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec", {
      method: 'POST',
      body: formData,
    })
      .then(response => console.log("Success!", response))
      .catch(error => console.error("Error!", error.message));
  };

  return (
    <>
      <Navigation />
      <div className='d-flex justify-content-center align-items-center Body-Main'>
        <div className='d-flex flex-column justify-content-center align-items-center Main-content'>
          <h4 className='Title-name'>Aniket Gadge</h4>
          <div className='animation-div'>
            {/* <Experiment /> */}
            <div className='animated-1'></div>
            <div className='animated-2'></div>
          </div>
          <p className='text-center title-para'>
            I’m a full-stack web developer specializing in building modern, responsive, and scalable web applications.
          </p>
          <button onClick={() => navigate('/About')} className='btn btn-success w-25 mainpage-button'>
            <span className='Main-About-me'>About Me</span>
          </button>
        </div>

        {/* ✨ Only show after 5s */}
        {showReviewForm && (
          <div className='ask-review-body'>
            {submitted ? (
              <div className="text-center mt-3">
                <strong>
                  <i className="fa-solid fa-circle-check fa-xl" style={{ color: "#63E6BE" }}></i> Your Review is{' '}
                  <span style={{ color: "#63E6BE" }}>Submitted</span>
                </strong>
              </div>
            ) : (
              <form className='ask-review-form' onSubmit={handleSubmit}>
                <p className='sentence-review' >We’d love to hear your thoughts 😊—please share your review or any suggestions ✍️✨</p>
                <input
                  type="text"
                  className='form-control mb-2'
                  placeholder='Enter Your Name'
                  name="ReviewName"
                  required
                />
                <div className='d-flex justify-content-center align-items-center mb-2 w-100' >
                <input
                  type="text"
                  className='form-control'
                  placeholder='Enter Your Review'
                  name="Review"
                  required
                />

                <select className='form-control w-50' name="ReviewStar" required>
                  <option value="">Select ⭐ </option>
                  <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
                  <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                  <option value="⭐⭐⭐">⭐⭐⭐</option>
                  <option value="⭐⭐">⭐⭐</option>
                  <option value="⭐">⭐</option>
                </select>

                </div>
                <input
                  className='btn btn-success w-100'
                  type="submit"
                  value="Submit Review"
                />
              </form>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default MainPage;
