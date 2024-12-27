import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div className="flex">
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg"
          alt="no img found"
        />
      </div>

      <div
        className="relative w-3/12 
     bg-black
      mx-auto my-72 p-12
      bg-opacity-80
      rounded"
      >
        <h1 className="px-2 pb-5 text-white font-extrabold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <form className="text-white">
          {!isSignInForm && (
            <div>
              <input
                type="text"
                placeholder="Enter Full Name "
                className="p-2 m-2 rounded w-80"
              />
            </div>
          )}
          <div>
            <input
              type="text"
              placeholder="Enter Email Address"
              className="p-2 m-2 rounded w-80"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              className="p-2 m-2 rounded w-80"
            />
          </div>
          <div>
            <button className=" p-4 m-2 text-xl bg-red-600 w-80 font-bold rounded">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <div>
            <h1 className="px-40 mb-5 font-semibold text-2xl w-80 h-5">or</h1>
          </div>
          <div>
            <button className=" p-4 m-2 text-xl bg-gray-600 bg-opacity-60 w-80 font-bold rounded">
              Use a sign-in code
            </button>
          </div>
          <div>
            <button className=" p-4 m-2 text-white text-xl w-80 font-bold rounded">
              Forget password ?
            </button>
          </div>
          <div>
            <p
              className=" p-4 m-2 text-white text-xl w-80 font-bold rounded cursor-pointer"
              onClick={toggleSignInForm}
            >
              {" "}
              {isSignInForm
                ? "New to Netflix? Sign Up Now"
                : "Already have account! Sign In"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
