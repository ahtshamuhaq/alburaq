import React from "react";

const Otp = () => {
  return (
    <div className="mt-16">
      <h1 className="bg-black mx-auto w-2/5 my-auto p-3 text-center text-white text-3xl mb-8 mt-16">
        ENTER OTP
      </h1>

      <form>
        <input
          className="flex bg-[#696969] mx-auto w-2/5 text-white  mb-8 my-auto p-6"
          type="text"
          placeholder="ENTER YOUR OTP"
        />
        <button className="flex bg-[#696969] mx-auto w-2/5 text-white  mb-8 my-auto p-6">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Otp;
