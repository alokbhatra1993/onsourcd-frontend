import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { sendVerifyEmail } from "../../services/api";
import { useSelector } from "react-redux";

const VerifyEmail = () => {
  const location = useLocation();
  const user = useSelector((state) => state);
  // console.log({ location });
  const [loading, setloading] = useState(true);

  useEffect(() => {
    sendEmail();
  }, []);

  const sendEmail = async () => {
    console.log("SEND MAIL");
    const response = await sendVerifyEmail(user?.token);
    setloading(false);
  };

  return (
    <div>
      {loading
        ? "We are  sending you verification email on the email , Please wait for some time"
        : "We have send you verification email on the email , check you email"}
    </div>
  );
};

export default VerifyEmail;
