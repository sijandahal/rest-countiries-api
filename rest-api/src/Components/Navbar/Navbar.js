import React from "react";
import { MoonIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [addBodyClass, setaddBodyClass] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark");
  }, [addBodyClass]);

  return (
    <header className="py-5 bg-white shadow-md dark:bg-black">
      <nav>
        <div className="container flex justify-between">
          <h2 className="text-2xl font-bold text-Dark-text">
            Where in the World
          </h2>
          <div className="flex right item-center ">
            <button
              className="inline-flex"
              onClick={() => {
                setaddBodyClass(!addBodyClass);
              }}
            >
              <span>
                <MoonIcon className="w-5 h-5 text-blue-500" />
              </span>
              <p className="ml-3">Dark Mode</p>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
