/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar";
// import Chibi from "../assets/chibi-yellow.png";
import NewProfile from "../assets/newProfile.jpg";
import { Link } from "react-router-dom";
// socmedd icons
import { FaFacebook, FaLinkedin } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { BsGithub, BsInstagram } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";

import Particle from "../components/Particle";
import Typewriter from "typewriter-effect";

const fb = "https://www.facebook.com/";
const github = "https://github.com/astridpx";
const tiktok = "https://www.tiktok.com/";
const linkedin = "https://www.linkedin.com/in/iskyyy";

const Home = () => {
  return (
    <>
      <div className="h-screen w-full bg-main-dark-blue relative">
        <Particle />

        <div className="container mx-auto h-full ">
          <Navbar />
          <div className="flex justify-center items-center  h-[90vh]  ">
            <section className="  grid place-items-center gap-y-5 z-10  -translate-y-[5vh] ">
              <img
                src={NewProfile}
                alt="Profile"
                data-aos="zoom-in-left"
                data-aos-duration="2000"
                className="h-52 cursor-pointer rounded-full"
              />
              <h1
                data-aos="fade-right"
                data-aos-duration="2000"
                className="  text-gray-100 text-4xl font-bold tracking-wide md:text-5xl"
              >
                John Angelo Lante
              </h1>
              <p
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-delay="600"
                className="  text-gray-200 font-semisbold text-lg"
              >
                {/* I'm a Fullstack Developer */}
                <Typewriter
                  options={{
                    strings: [
                      "I'm a Front-End Developer",
                      "I'm a Enthusiastic Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    pauseFor: 3000,
                  }}
                />
              </p>
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="600"
                className="flex justify-evenly w-full py-3  "
              >
                <Link to={fb} target="_blank">
                  <FaFacebook className=" text-xl cursor-pointer text-gray-100 " />
                </Link>

                <Link to={github} target="_blank">
                  <BsGithub className=" text-xl cursor-pointer text-gray-100 " />
                </Link>

                {/* <BsInstagram className=" text-xl cursor-pointer text-gray-100 " /> */}

                <Link to={tiktok} target="_blank">
                  <SiTiktok className=" text-xl cursor-pointer text-gray-100 " />
                </Link>

                <Link to={linkedin} target="_blank">
                  <FaLinkedin className=" text-xl cursor-pointer text-gray-100 " />
                </Link>
              </div>
              <button
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="600"
                className="rounded py-2 px-6 font-semibold bg-main-red text-gray-50 hover:bg-main-red/80 "
                onClick={() => alert("downalod cv")}
              >
                Hire Me
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
