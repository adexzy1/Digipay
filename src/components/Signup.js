import React, { useState, useEffect } from 'react';
import icon from '../img/Ellipse25.svg';
import HeroImg from '../img/Creditcardpana1.svg';
import '../css/signup.css';
import { Link } from 'react-router-dom';
import { Schema } from './Schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import auth from './firebase/fire';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

function Signup({ history }) {
  //states
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  //useEffects
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      history.push('/dashboard');
    }
  }, []);

  //React hook form states
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  //functions
  const submitForm = (data) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        // Signed in
        updateProfile(auth.currentUser, { displayName: data.fullName }).then(
          () => history.push('/')
        );
      })
      .catch((error) => {
        const errorMessage = error.code;
        // ..
        handleError(errorMessage);
      })
      .finally(() => setLoading(false));
  };

  function handleError(errorMessage) {
    if (errorMessage) {
      const dangertText = (
        <p className="accept_terms email_error">Account already exist! Login</p>
      );
      setErrorText(dangertText);
      setTimeout(() => {
        setErrorText('');
      }, 3000);
    }
  }
  return (
    <div>
      <section className="signup_top-section">
        <img src={icon} alt="ellipse" className="signup_ellipse" />
        <img src={HeroImg} alt="hero-img" className="hero_img" />
      </section>
      <form onSubmit={handleSubmit(submitForm)}>
        {errorText}
        <h5>
          All Your Transactions in <span>ONE</span> Place
        </h5>
        <p>Let’s get you started, Complete details below</p>
        <section
          className={`input_container ${errors.fullName ? 'invalid' : ''}`}
        >
          <svg
            width="74"
            height="99"
            viewBox="0 0 74 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="35.5248"
              cy="20.6378"
              r="19.6918"
              fill="black"
              fillOpacity="0.63"
            />
            <path
              d="M7.99169 67.5439C4.3296 56.8905 12.245 45.7996 23.5102 45.7996H49.4355C61.0825 45.7996 69.0223 57.595 64.6386 68.3856L56.6388 88.0774C54.1254 94.2642 48.1136 98.3109 41.4357 98.3109H30.2793C23.2724 98.3109 17.0385 93.8619 14.7607 87.2356L7.99169 67.5439Z"
              fill="black"
              fillOpacity="0.63"
            />
          </svg>
          <input
            type="text"
            name="fullName"
            required="required"
            {...register('fullName')}
          />
          <label>
            <span className="label_text">Enter your full name</span>
          </label>
        </section>

        <section className={`input_container ${errors.email ? 'invalid' : ''}`}>
          <svg
            width="119"
            height="85"
            viewBox="0 0 119 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="4.50586"
              y="0.866699"
              width="114.193"
              height="83.3303"
              rx="15.4315"
              fill="black"
              fillOpacity="0.63"
            />
            <mask id="path-2-inside-1" fill="white">
              <path d="M118.698 8.27979L59.3626 50.8224L0.0268555 8.27979" />
            </mask>
            <path
              d="M122.612 13.7389C125.627 11.5772 126.319 7.38069 124.157 4.36572C121.996 1.35075 117.799 0.659021 114.784 2.8207L122.612 13.7389ZM59.3626 50.8224L55.4485 56.2815C57.7883 57.959 60.9369 57.959 63.2767 56.2815L59.3626 50.8224ZM3.94092 2.8207C0.925948 0.659021 -3.27055 1.35075 -5.43223 4.36572C-7.59391 7.38069 -6.90218 11.5772 -3.88721 13.7389L3.94092 2.8207ZM114.784 2.8207L55.4485 45.3633L63.2767 56.2815L122.612 13.7389L114.784 2.8207ZM63.2767 45.3633L3.94092 2.8207L-3.88721 13.7389L55.4485 56.2815L63.2767 45.3633Z"
              fill="white"
              mask="url(#path-2-inside-1)"
            />
          </svg>
          <input
            type="email"
            name="email"
            required="required"
            {...register('email')}
          />
          <label>
            <span className="label_text">Enter your email</span>
          </label>
        </section>
        {errors.email && <p className="accept_terms">Enter a valid Email</p>}
        <section
          className={`input_container ${errors.password ? 'invalid' : ''}`}
        >
          <svg
            width="64"
            height="101"
            viewBox="0 0 64 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.841797"
              y="36.6335"
              width="62.8235"
              height="63.6725"
              rx="8.48967"
              fill="black"
              fillOpacity="0.63"
            />
            <path
              d="M10.2266 33.2616V20.7501C10.2266 16.6023 12.5746 12.6243 16.754 9.69139C20.9335 6.75843 26.602 5.11072 32.5127 5.11072C38.4233 5.11072 44.0919 6.75843 48.2714 9.69139C52.4508 12.6243 54.7988 16.6023 54.7988 20.7501V33.2616"
              stroke="black"
              strokeOpacity="0.63"
              strokeWidth="9.38363"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="33.5271"
              cy="64.0696"
              r="10.6121"
              fill="white"
              fillOpacity="0.84"
            />
          </svg>
          <input
            type="password"
            name="password"
            required="required"
            {...register('password')}
          />
          <label>
            <span className="label_text">Enter Password</span>
          </label>
        </section>
        {errors.password && (
          <p className="accept_terms">Password must be at least 8 characters</p>
        )}

        <div
          className={`signup_checkbox ${errors.fullName ? 'accept_terms' : ''}`}
        >
          <input
            type="checkbox"
            name="acceptTerms"
            {...register('acceptTerms')}
          />
          <p>
            I agree to all <span>Terms</span>, <span> Policy </span> and
            <span> Fees</span>
          </p>
        </div>
        {errors.acceptTerms && <p className="accept_terms">Accept TC & CS</p>}
        <button className="signup_btn" type="submit">
          {loading ? 'Creating Account....' : 'Create Account'}
        </button>
        <p id="login_link">
          Already have an Account? <Link to="/">Log in </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
