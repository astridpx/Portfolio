/* eslint-disable react/prop-types */
import { RxRocket } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FiPlay } from "react-icons/fi";
import { HiOutlineCode } from "react-icons/hi";

const ProjectCard = ({ image, title, details, url, github }) => {
  return (
    <>
      <section className="flex space-x-12 py-12 ">
        <div className="h-64  min-w-[28rem] border-4 border-main-yellow/70 rounded-xl overflow-hidden cursor-pointer flex items-center justify-center hover:scale-105 transition-all duration-100 ">
          <img
            src={image}
            alt="Project Image"
            className="object-fill w-full h-full "
          />
        </div>

        <article className="">
          <h1 className="font-semibold text-gray-300  text-2xl flex items-center cursor-pointer gap-x-1 mb-4">
            <span>
              <RxRocket />
            </span>
            {title}
          </h1>

          <p className="mb-8  text-gray-400 tracking-wide">{details}</p>

          <div className="flex space-x-4 ">
            <button className="px-6 py-2 bg-main-red text-gray-200 font-semibold rounded flex items-center gap-x-1 hover:bg-main-red/80">
              <span>
                <FiPlay className="text-xl" />
              </span>
              <Link target="_blank" to={url}>
                Demo
              </Link>
            </button>

            <button className="px-8 py-2 bg-main-red text-gray-200 font-semibold rounded flex items-center gap-x-1 hover:bg-main-red/80">
              <span>
                <HiOutlineCode className="text-xl " />
              </span>
              <Link target="_blank" to={github}>
                Source
              </Link>
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default ProjectCard;
