import React from "react";
import { FcGoogle } from "react-icons/fc";

function OAuth() {
  return (
    <button
      type="submit"
      className="flex items-center justify-center w-full bg-white text-black border border-black px-7 py-3 rounded-3xl text-sm font-medium uppercase hover:bg-gray-200 transition duration-200 ease-in-out active:bg-gray-300"
    >
      <FcGoogle className="text-2xl mr-4" />
      Continue with Google
    </button>
  );
}

export default OAuth;
