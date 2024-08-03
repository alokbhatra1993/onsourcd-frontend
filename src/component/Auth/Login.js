import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/actions";
import { useForm } from "react-hook-form";
import { FaSpinner, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const onSubmit = async (formData) => {
    const { email, password } = formData;
    setLoading(true);
    const response = await fetch("https://onsourcd-backend.vercel.app/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (response.ok) {
      dispatch(setUserData(data));

      if (!data?.isVerifiedEmail) {
        navigate("/verify-email", { state: { email: data?.email } });
        return;
      }

      if (["seller", "buyer", "manufacturer"].includes(data?.userType)) {
        navigate("/customer/company-detail");
      } else if (data?.userType === "admin") {
        navigate("/admin-dashboard/products");
      }
    } else {
      console.log({ data });
      setLoginError(data?.message);
    }
    setLoading(false);
  };

  const handleOnChange = () => {
    setLoginError("");
  };

  return (
    <div className="p-9 flex items-center justify-center bg-gray-100 py-4 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="sm:w-1/2 hidden sm:block relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1663047551288-0f67e968022b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Login"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="w-full sm:w-1/2 p-6 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">Log in to your account</h2>
            <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="email"
                    {...register("email", { required: true })}
                    type="email"
                    onChange={handleOnChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  {errors.email && <span className="text-red-500">Email is required</span>}
                </div>
              </div>

              <div className="relative mt-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="password"
                    {...register("password", { required: true })}
                    type={showPassword ? "text" : "password"}
                    onChange={handleOnChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
                  </div>
                  {errors.password && <span className="text-red-500">Password is required</span>}
                </div>
              </div>

              {loginError && <span className="text-red-500 mt-2 block">{loginError}</span>}

              <div className="mt-2 text-right">
                <Link to={"/forgot-password"} className="text-sm text-yellow-500">Forgot password?</Link>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  style={{ backgroundColor: "#f6b60d" }}
                >
                  {loading ? <FaSpinner className="animate-spin" /> : "Sign in"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
