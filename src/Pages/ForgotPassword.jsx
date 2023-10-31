import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onFormChange(e) {
    setEmail(e.target.value)
  }

  return (
    <section>
      <h1 className="text-3xl font-bold text-center mt-6">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] h-[28rem] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1695710765217-9443fb6e3494?auto=format&fit=crop&q=80&w=2535&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
            alt="house"
            className="w-full rounded-2xl h-full"
          />
        </div>

        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              className="w-full mb-6 px-4 py-2 text-xl text-body bg-white border-body rounded-lg transition ease-in-out"
              placeholder="Email Address"
              type="email"
              id="email"
              value={email}
              onChange={onFormChange}
            />
            
            <div className="flex justify-between items-center whitespace-nowrap text-sm sm:text-lg mb-6">
              <p>
                Don't have an account?{" "}
                <Link
                  className="underline transition ease-in-out duration-200 ml-1"
                  to="/sign-up"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/log-in"
                  className="text-red-500 transition ease-in-out duration-200 hover:text-black hover:underline"
                >
                  Sign in instead
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white px-7 py-3 rounded-3xl text-sm font-medium uppercase shadow-md hover:bg-gray-800 transition duration-200 ease-in-out hover:shadow-lg active:bg-gray-900"
            >
              Send Reset Email
            </button>
            <div className="my-6 before:border-t flex before:flex-1 items-center before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold text-gray-500 mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword
