import { useState } from "react";
import { Link } from "react-router-dom";
import { navlink } from "../helpers/navlink";
import { RiMenu4Line, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const menuStyle = { color: "#c2bcbc", fontSize: "1.9rem", cursor: "pointer" };
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = async (id) => {
    const about = document.getElementById("about");
    const project = document.getElementById("projects");
    const skill = document.getElementById("skill");
    const contact = document.getElementById("contact");

    switch (id) {
      case 2:
        about.scrollIntoView({ behavior: "smooth" });
        break;
      case 3:
        skill.scrollIntoView({ behavior: "smooth" });
        break;
      case 4:
        project.scrollIntoView({ behavior: "smooth" });
        break;
      case 5:
        contact.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        return null;
    }
  };

  return (
    <>
      {/* <div className="container mx-auto"> */}
      <div className=" bg-main-dark-blue  flex justify-between items-center h-16 relative px-4 md:px-0  ">
        <h2 className="font-bold text-4xl  space-x-[1.2px] cursor-pointer text-main-yellow ">
          <span className="I">I</span>
          <span className="text-main-blue">s</span>
          <span className="text-main-red">k</span>
          <span className="text-main-brown">y</span>
        </h2>
        <nav>
          <ul className="flex items-center">
            {/* MAPPING NAVLINK */}
            {navlink.map((obj) => {
              return (
                <li
                  key={obj.id}
                  className="px-4 font-semibold text-lg text-gray-300 hidden md:block hover:text-main-yellow ease-in-out duration-150"
                >
                  <Link to={obj.path} onClick={() => handleClick(obj.id)}>
                    {obj.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* //? HAMBURGER MENU */}
          <div
            id="menu-bar"
            className=" md:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {!openMenu ? (
              <RiMenu4Line style={menuStyle} />
            ) : (
              <RiCloseFill style={menuStyle} />
            )}
          </div>
        </nav>
      </div>
      {/* </div> */}
    </>
  );
};

export default Navbar;
