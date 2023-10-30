import React from "react";
import { useLocation, useNavigate } from "react-router";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();


  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
    return false;
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-100 ">
      <header className="flex items-center justify-between px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="site logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex items-center space-x-10">
            <li
              onClick={() => navigate("/")}
              className={`py-4 cursor-pointer text-sm font-semibold text-gray-400 border-b-[3px] border-transparent ${
                pathMatchRoute("/") && "text-link border-b-[3px] border-b-bottom"
              }`}
            >
              Home
            </li>
            <li
              onClick={() => navigate("/offers")}
              className={`py-4 cursor-pointer text-sm font-semibold text-gray-400 border-b-[3px] border-transparent ${
                pathMatchRoute("/offers") && "text-link border-b-[3px] border-b-bottom"
              }`}
            >
              Offers
            </li>
            <li
              onClick={() => navigate("/log-in")}
              className={`py-4 cursor-pointer text-sm font-semibold text-gray-400 border-b-[3px] border-transparent ${
                pathMatchRoute("/log-in") && "text-link border-b-[3px] border-b-bottom"
              }`}
            >
              Log in
            </li>
            <li
              onClick={() => navigate("/sign-up")}
              className={`py-2 px-6 cursor-pointer text-sm font-semibold text-white bg-black rounded-3xl uppercase`}
            >
              Sign up
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
