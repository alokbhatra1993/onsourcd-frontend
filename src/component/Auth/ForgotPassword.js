import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false)
    const [otp, setOtp] = useState(null)

    const [isOtpVerified, setIsOtpVerified] = useState(false)


    const [password, setPassword] = useState("")


    const handleSendOtp = async () => {
        try {
            const response = await fetch("https://onsourcd-backend.vercel.app/api/users/send-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json()
            if (response.status === 200) {
                toast.success("Otp send succefully")
                setIsOtpSent(true)
            }
            else {
                toast.error(data?.message)
            }
        } catch (error) {
            console.error("Error sending OTP:", error);
            toast.error(error?.message)

        }
    };

    const handleVerifytOtp = async () => {
        try {
            const response = await fetch("https://onsourcd-backend.vercel.app/api/users/verify-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, otp }),
            });

            const data = await response.json()

            if (response.status === 200) {
                // setIsOtpSent(true)
                setIsOtpVerified(true)
            }
            else {
                toast.error(data?.message)
            }

        } catch (error) {
            toast.error(error?.message)

        }
    }

    const handleChangePassword = async () => {
        try {
            const response = await fetch("https://onsourcd-backend.vercel.app/api/users/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json()

            if (response.status === 200) {
                // setIsOtpVerified(true)
                toast.success("Password Reset succefully")

                setTimeout(()=>{
                    navigate("/")

                },1000)
            }
            else {
                toast.error(data?.message)
            }

        } catch (error) {
            toast.error(error?.message)
        }
    }

    return (
        <div className="flex items-center justify-center bg-gray-100 p-4">
            <ToastContainer />
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
                    Forgot Password
                </h2>
                {
                    isOtpSent ? (
                        <>

                            {
                                !isOtpVerified ? (
                                    <button className="W-1/2" onClick={handleSendOtp}>Resend OTP</button>

                                ) : (
                                    null
                                )
                            }

                            <input
                                value={otp}
                                type="number"
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="Enter OTP"
                                className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-blue-500"
                                required
                                disabled={isOtpVerified}
                            />
                            <button
                                disabled={isOtpVerified}
                                onClick={handleVerifytOtp}
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Verify OTP
                            </button>
                        </>
                    ) : (
                        <>
                            <input
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-blue-500"
                            />
                            <button
                                onClick={handleSendOtp}
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Send OTP
                            </button>

                        </>
                    )
                }


                {
                    isOtpVerified ? (
                        <>
                            <input
                                value={password}
                                type="text"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter New Password"
                                className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-blue-500"
                                required
                            />
                            <button
                                onClick={handleChangePassword}
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Change password
                            </button>
                        </>
                    ) : null
                }





            </div>
        </div>
    );
};

export default ForgotPassword;
