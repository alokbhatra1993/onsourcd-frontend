import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const navigate = useNavigate();
  const password = watch("password", "");

  const [signupErrror, setSignUpError] = useState(" ")


  const onSubmit = async (data) => {
    const response = await fetch('http://localhost:5000/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json()

    if (response.ok) {
      navigate('/login');
    } else {
      setSignUpError(responseData?.message)
    }
  };

  const handleOnChange = () => {
    setSignUpError(" ")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-6 sm:py-0 sm:px-6">
      <div className="sm:flex sm:justify-center sm:items-center">
        <div className="bg-white w-full sm:max-w-md sm:rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8 sm:px-10">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
              <div className="form-group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  onChange={handleOnChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  onChange={handleOnChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  onChange={handleOnChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  onChange={handleOnChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  onChange={handleOnChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                  onChange={handleOnChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select user type</option>
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                  <option value="manufacturer">Manufacturer</option>
                </select>
                {errors.userType && <p className="error">{errors.userType.message}</p>}
              </div>

              {signupErrror && <p className="error">{signupErrror}</p>}

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6"
                style={{ backgroundColor: "#02123c" }}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="hidden sm:flex sm:w-1/3 sm:ml-4 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1595569099963-77bf7706643a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, height: '42rem' }}>
        </div>
      </div>
    </div>
  );
};

export default Signup;
