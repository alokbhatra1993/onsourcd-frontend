import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/actions";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa6";


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
 const [loading,setloading]=useState(false)


  const onSubmit = async (formData) => {
    const { email, password } = formData;
 setloading(true)
    const response = await fetch("https://onsourcd-backend.vercel.app/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setUserData(data));
      if (data?.userType === "seller" ||  data?.userType === "buyer") {
        navigate("/customer");
      } else if (data?.userType === "admin") {
        navigate("/admin-dashboard");
      }
    } else {
      alert("Login failed. Please try again.");
    }
    setloading(false)
  };

  return (
    <div className="mt-50 mb-50 flex flex-col justify-center sm:items-center sm:px-6">
      <div className="sm:flex sm:justify-center sm:items-center sm:w-full">
        <div className="bg-white w-full sm:max-w-md sm:rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8 sm:px-10">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">Log in to your account</h2>
            <form className="mt-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    {...register("email", { required: true })}
                    type="email"
                    autoComplete="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.email && <span className="text-red-500">Email is required</span>}
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mt-4">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    {...register("password", { required: true })}
                    type="password"
                    autoComplete="current-password"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {errors.password && <span className="text-red-500">Password is required</span>}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6"
                  style={{ backgroundColor: "#02123c" }}
                >
                  {loading?(<FaSpinner/>):"  Sign in"}
                  {/* Sign in */}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="hidden sm:block sm:w-1/3">
          <img
            src="https://plus.unsplash.com/premium_photo-1663047551288-0f67e968022b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Login Image"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
