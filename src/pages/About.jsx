// import React from 'react'/
// import Profile from "../assets/profile.png";
import NewProfile from "../assets/newProfile1.jpg";
import { cardData } from "../helpers/cards-data";
import Cards from "../components/Skill-Card";

const About = () => {
  return (
    <>
      <main className="h-max w-full " id="about">
        <div className="container h-full mx-auto py-12 ">
          <section className="flex items-center px-4">
            <div className=" justify-center gap-x-24 md:flex ">
              <div className="w-full flex justify-center mb-12">
                <div className="w-max h-max cursor-pointer relative z-20  after:absolute after:h-full after:w-full after:-z-10  after:border-8 after:border-main-yellow  after:-bottom-6 after:-right-6 md:after:-bottom-7 md:after:-right-7 ">
                  <img
                    src={NewProfile}
                    alt="profile"
                    className="h-[28rem]  rounded-sm "
                  />
                </div>
              </div>

              <article className="bg-violest-500 w-auto max-w-[50rem]  py-5 space-y-12 ">
                <h1 className="text-5xl text-main-dark-blue font-bold  relative before:absolute before:h-1 before:w-24 before:bg-main-dark-blue before:-bottom-3 before:rounded-xl">
                  About Me
                </h1>

                <p className="text-gray-500 text-lg">
                  My interest in Computer Programming began back in 2021 when I
                  feel I&apos;m being left behind my classmates in programming
                  because I don&apos;t have any knowledge on coding. During my
                  vacation, I spent my time learning the basics of coding.
                  Before the new school year started, I learned how to create
                  website landing page and my own algorithms. Fast-forward today
                  I&apos;m now a enthusiastic and passionate Developer.
                </p>

                <p className="text-gray-500 text-lg">
                  As an aspiring frontend developer, I am eager to explore
                  entry-level position that will allow me to contribute to
                  real-world projects and gain valuable experience in a
                  professional setting.
                </p>

                <button
                  className="rounded py-3 px-5 font-semibold bg-main-red text-gray-50 hover:bg-main-red/90"
                  onClick={() => alert("downalod cv")}
                >
                  DOWNLOAD CV
                </button>
              </article>
            </div>
          </section>

          {/* My Skill Section */}
          <section className="h-max my-14 py-12 bg-gray-200 w-full" id="skill">
            <h1 className="text-5xl mb-8 text-center text-main-dark-blue font-bold ">
              My Skills
            </h1>

            <div className="w-full  mx-auto px-4 grid grid-cols-2 gap-4 md:w-5/6 md:grid-cols-4 md:gap-8">
              {/* Cards */}

              {cardData.map((data) => {
                return (
                  <Cards
                    key={data.id}
                    title={data.title}
                    logo={data.img}
                    name={data.name}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
