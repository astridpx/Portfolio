/* eslint-disable react/prop-types */
// import React from 'react'
import { navlink } from "../helpers/navlink";
import { Link } from "react-router-dom";
import { handleClick } from "../helpers/navlink-click";

const MobileMenu = ({ isToggle, setOpenMenu }) => {
  return (
    <>
      <main
        className={`${
          !isToggle && "hidden"
        } absolute  bg-black/30 h-[91vh] w-full right-0 z-20 flex justify-end md:hidden `}
      >
        <section className=" w-64 bg-main-dark-blue p-4">
          <ul className="grid place-content-center space-y-8 ">
            {/* MAPPING NAVLINK */}
            {navlink.map((obj) => {
              return (
                <li
                  key={obj.id}
                  className="px-4 font-semibold text-lg text-gray-300 hover:text-main-yellow ease-in-out duration-150"
                >
                  <Link
                    to={obj.path}
                    onClick={() => {
                      setOpenMenu(!isToggle);
                      handleClick(obj.id);
                    }}
                  >
                    {obj.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
};

export default MobileMenu;
