/* eslint-disable react/prop-types */
import { RxRocket } from "react-icons/rx";
import { Link } from "react-router-dom";

const ProjectCard = ({ image, title, details, url, github }) => {
  return (
    <>
      <section className="flex px-4 gap-x-8 py-8">
        <div className="h-56 w-96 min-w-[24rem] border-4 border-main-yellow relative cursor-pointer flex items-center justify-center hover:scale-105 transition-all duration-75 ">
          <img
            src={image}
            alt="Project Image"
            className="object-fill w-full h-full "
          />
        </div>

        <article className="">
          <h1 className="font-bold text-gray-200  text-2xl flex items-center cursor-pointer gap-x-1 mb-4">
            <span>
              <RxRocket />
            </span>
            {title}
          </h1>

          <p className="mb-8 w-full  text-gray-300 tracking-wide">{details}</p>

          <div className="flex space-x-4">
            <button className="px-8 py-3 bg-main-red text-gray-50 font-semibold rounded ">
              <Link target="_blank" to={url}>
                View Site
              </Link>
            </button>

            <button className="px-8 py-3 bg-main-red text-gray-50 font-semibold rounded">
              <Link target="_blank" to={github}>
                View Code
              </Link>
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default ProjectCard;
