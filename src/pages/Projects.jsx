/* eslint-disable react/prop-types */
import ProjectCard from "../components/Project-Card";
import { projectsData } from "../helpers/projects-data";

const Projects = () => {
  return (
    <>
      <div
        className="h-max w-full bg-main-dark-blue relative py-12"
        id="projects"
      >
        <div className="container mx-auto  ">
          <h1
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-center text-gray-200 text-5xl font-bold mb-12"
          >
            My Projects
          </h1>
          <div className="space-y-16">
            {/* Projects Cards */}
            {projectsData.map((props) => {
              return (
                <ProjectCard
                  key={props.id}
                  image={props.img}
                  title={props.title}
                  details={props.details}
                  url={props.url}
                  github={props.github}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
