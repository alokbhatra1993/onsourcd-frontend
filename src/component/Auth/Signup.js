import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import 'animate.css';

const Signup = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const navigate = useNavigate();
  const password = watch("password", "");

  const onSubmit = async (data) => {
    const response = await fetch('http://localhost:5000/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      navigate('/login'); // Redirect to login page on successful signup
    } else {
      // Handle errors
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-6 sm:py-0 sm:px-6">
      <div className="container mx-auto sm:flex sm:justify-center sm:items-center">
        <div className="bg-white w-full sm:max-w-md sm:rounded-lg shadow-lg overflow-hidden animate__animated animate__fadeInUp">
          <div className="px-6 py-6 sm:px-10">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4 animate__animated animate__fadeInDown">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="form-group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="input-field"
                />
                {errors.name && <p className="error">{errors.name.message}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { required: 'Email is required' })}
                  className="input-field"
                />
                {errors.email && <p className="error">{errors.email.message}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', { required: 'Phone number is required' })}
                  className="input-field"
                />
                {errors.phone && <p className="error">{errors.phone.message}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register('password', { 
                    required: 'Password is required',
                    minLength: { value: 6, message: 'Password must be at least 6 characters' }
                  })}
                  className="input-field"
                />
                {errors.password && <p className="error">{errors.password.message}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  {...register('confirmPassword', {
                    validate: value => value === password || 'Passwords do not match'
                  })}
                  className="input-field"
                />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="userType" className="block text-sm font-medium text-gray-700">
                  User Type
                </label>
                <select
                  id="userType"
                  {...register('userType', { required: 'User type is required' })}
                  className="input-field"
                >
                  <option value="">Select user type</option>
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                  <option value="manufacturer">Manufacturer</option>
                </select>
                {errors.userType && <p className="error">{errors.userType.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6 animate__animated animate__fadeInUp"
                style={{ backgroundColor: "#f6b60d" }}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="hidden sm:flex sm:w-1/3 sm:ml-4 bg-cover bg-center animate__animated animate__fadeIn"
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1595569099963-77bf7706643a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, height: '30rem' }}>
        </div>
      </div>
    </div>
  );
};

export default Signup;
