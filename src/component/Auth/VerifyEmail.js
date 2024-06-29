import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { sendVerifyEmail } from "../../services/api";
import { useSelector } from "react-redux";

const VerifyEmail = () => {
  const location = useLocation();
  const user = useSelector((state) => state);
  console.log({ location });

  useEffect(() => {
    sendEmail();
  }, []);

  const sendEmail = async () => {
    console.log("SEND MAIL");
    const response = await sendVerifyEmail(user?.token);
    console.log({ response });
  };

  return (
    <div>
      <h1>We have send you verification email on the email</h1>
    </div>
  );
};

export default VerifyEmail;
