import React from 'react';
import { useForm } from 'react-hook-form';
import './Loginsignup.css';

const Loginsignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    alert("Signup successful!");
    reset();
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <form className='loginsignup-fields' onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder='Enter Your Name'
            {...register('name', { required: true })}
          />
          {errors.name && <p className="error">Name is required</p>}

          <input
            type="email"
            placeholder='Email'
            {...register('email', { required: true })}
          />
          {errors.email && <p className="error">Email is required</p>}

          <input
            type="password"
            placeholder='Password'
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password && (
            <p className="error">Password must be at least 6 characters</p>
          )}

          <button type="submit">Proceed</button>
        </form>

        <p className='loginsignup-login'>
          Already have an account? <span>Login here</span>
        </p>

        <div className='loginsignup-agree'>
          <input type="checkbox" />
          <p>By continuing, you agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
