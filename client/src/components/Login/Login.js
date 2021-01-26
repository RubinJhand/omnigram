import React from 'react';

import './Login.css';

const Login = () => {
  return (
    <div className='login'>
      <div className='login__container'>
        <h1>Omnigram</h1>
        <form className='login__form'>
          <h5>E-mail</h5>
          <input type='text' />

          <h5>Password</h5>
          <input type='password' />

          <button type='submit' className='login__signInButton'>
            Sign In
          </button>

          <p>or</p>

          <button className='login__registerButton'>
            Create your Omnigram Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
