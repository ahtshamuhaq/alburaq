import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { verifyOtp } from "../services/api/userAuth";

const Otp = () => {
  // const { email } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  async function handleVerifyOTP(e) {
    e.preventDefault();
    let { otp } = e.target.elements;
    otp = otp.value;

    console.log("test", otp);
    try {
      // let code = values.code;
      let email = state.email;
      console.log("Email");
      const response = await verifyOtp(otp, email);
      if (response.data.success) {
        navigate("/login");
      } else {
        console.log("response is ", response);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="mt-16">
      <h1 className="bg-black mx-auto w-2/5 my-auto p-3 text-center text-white text-3xl mb-8 mt-16">
        ENTER OTP
      </h1>

      <form onSubmit={handleVerifyOTP}>
        <input
          className="flex bg-[#696969] mx-auto w-2/5 text-white  mb-8 my-auto p-6"
          type="text"
          placeholder="ENTER YOUR OTP"
          name="otp"
          required="true"
        />
        <button
          type="submit"
          className="flex bg-[#696969] mx-auto w-2/5 text-white  mb-8 my-auto p-6"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Otp;
