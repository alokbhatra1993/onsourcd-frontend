import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { verifyEmailApi } from "../../services/api";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const VerficationSuccessEmail = () => {
  const user = useSelector((state) => state);
  const location = useLocation();
  console.log({location})
  const navigate = useNavigate();

  useEffect(() => {
    verifyEmail();
  }, []);

  const verifyEmail = async () => {
    const response = await verifyEmailApi(user?.token);
    console.log({ response });
    if (response?.ok) {
      if (user?.userType === "seller" || user?.userType === "buyer") {
        navigate("/customer");
      }
    }
  };

  return (
    <div>
      <h1>You have successfully verified</h1>
    </div>
  );
};

export default VerficationSuccessEmail;
