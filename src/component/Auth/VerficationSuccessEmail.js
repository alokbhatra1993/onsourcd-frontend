import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyEmailApi } from "../../services/api";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { setVerificationEmailComplete } from "../../redux/actions";

const VerficationSuccessEmail = () => {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();

  const location = useLocation();
  const queryParams = new URLSearchParams(location?.search);
  const token = queryParams?.get('token');
  const navigate = useNavigate();

  useEffect(() => {
    verifyEmail();
  }, []);

  const verifyEmail = async () => {
    const response = await verifyEmailApi(token);
    console.log({ response, user });
    if (response?.ok) {
      if (user) {
        // dispatch(setUserData({... , isVerifiedEmail:true}));
        dispatch(setVerificationEmailComplete())
        if (user?.userType === "seller" || user?.userType === "buyer") {
          navigate("/customer/company-detail");
        }
        else {
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
