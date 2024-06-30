import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { verifyEmailApi } from "../../services/api";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";

const VerficationSuccessEmail = () => {
  const user = useSelector((state) => state);
  const location = useLocation();
  const queryParams = new URLSearchParams(location?.search);
    const token = queryParams?.get('token');
  console.log({ location })
  const navigate = useNavigate();

  console.log("VERIFIED emil", queryParams  ,token);
  useEffect(() => {
    verifyEmail();
  }, []);

  const verifyEmail = async () => {
    const response = await verifyEmailApi(token);
    console.log({ response });
    if (response?.ok) {
      if(user){
        if (user?.userType === "seller" || user?.userType === "buyer") {
          navigate("/customer/savedaddress");
        }
        else{
          navigate("/login")
        }
      }
     
    }
  };

  return (
    <div className="mx-auto w-full px-2 py-40 max-w-lg bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          You have successfully verified , redirecting you to dashboard
        </h1>
      </div>

    </div>
  );
};

export default VerficationSuccessEmail;
