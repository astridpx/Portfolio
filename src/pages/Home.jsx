/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar";
import Chibi from "../assets/chibi-yellow.png";

// socmedd icons
import { FaFacebook, FaLinkedin } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { BsGithub, BsInstagram } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";

import Particle from "../components/Particle";
// import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <div className="h-screen w-full bg-main-dark-blue relative">
        <Particle />

        <div className="container mx-auto h-full ">
          <Navbar />
          <div className="flex justify-center items-center  h-[90vh]  ">
            <section className="  grid place-items-center gap-y-5 z-10  -translate-y-[5vh] ">
              <img src={Chibi} alt="Profile" className="h-52 cursor-pointer" />
              <h1 className="  text-gray-100 text-5xl font-bold tracking-wide">
                John Angelo Lante
              </h1>
              <p className="  text-gray-200 font-semisbold text-lg">
                I'm a Fullstack Developer
              </p>
              {/* <Typewriter
                  options={{
                    strings: [
                      "I'm a Front-End Developer",
                      "I'm a Enthusiast Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    pauseFor: 3000,
                  }}
              /> */}
              <div className="flex justify-evenly w-full py-3  ">
                <FaFacebook
                  className=" text-xl cursor-pointer text-gray-100 "
                  onClick={() => alert("helo")}
                />
                <BsGithub
                  className=" text-xl cursor-pointer text-gray-100 "
                  onClick={() => alert("helo")}
                />
                {/* <BsInstagram className=" text-xl cursor-pointer text-gray-100 " /> */}
                <SiTiktok
                  className=" text-xl cursor-pointer text-gray-100 "
                  onClick={() => alert("helo")}
                />
                <FaLinkedin
                  className=" text-xl cursor-pointer text-gray-100 "
                  onClick={() => alert("helo")}
                />
              </div>
              <button
                className="rounded py-3 px-6 font-semibold bg-main-red text-gray-50 hover:bg-main-red-2 "
                onClick={() => alert("downalod cv")}
              >
                Contact Me
              </button>
              {/* <button
                className="py-2 px-4 rounded-lg bg-main-red cursor-pointer font-semibold text-base text-gray-100 flex justify-center items-center"
                onClick={() => alert("Send me an email")}
              >
                Hire me
              </button> */}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
