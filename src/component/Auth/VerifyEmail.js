import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sendVerifyEmail } from "../../services/api";
import { useSelector } from "react-redux";
import { FaEnvelope } from 'react-icons/fa';

const VerifyEmail = () => {
  const location = useLocation();
  const user = useSelector((state) => state);
  const navigate = useNavigate();
  console.log("verifyemail")

  const [loading, setloading] = useState(true);

  useEffect(() => {
    sendEmail();
  }, []);

  const sendEmail = async () => {
    console.log({ user });
    if (user?.isVerifiedEmail) {
      navigate("/customer/savedaddress")
    }
    const response = await sendVerifyEmail(user?.token);

    if (response.ok) {
      // dispatchEvent(setVerificationEmailComplete())
    }

  };

  const handleOpenEmail = () => {
    const gmailUrl = 'https://mail.google.com/';
    window.open(gmailUrl, '_blank');

  };

  return (
    <div className="mx-auto w-full px-2 py-40 max-w-lg bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <FaEnvelope className="text-4xl text-[#372800] mb-4" />
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          We have sent you a verification email to {user?.email}
        </h1>

      </div>
      <div className="flex mt-10 space-x-4">
        <button className="px-4 py-2 bg-[#f6b60d] text-white rounded-lg shadow-md">
          Resend Email
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
          onClick={handleOpenEmail}
        >
          Open Email
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
