// import React from 'react'/
import Profile from "../assets/profile.png";
import { cardData } from "../helpers/cards-data";
import Cards from "../components/Skill-Card";

const About = () => {
  return (
    <>
      <section className="h-max w-full ">
        <div className="container h-full mx-auto py-12 ">
          <div className="flex items-center  bg-gray-40z0 px-4">
            <div className="flex justify-center gap-x-24 ">
              <div className="w-2/6  cursor-pointer relative z-20  after:absolute after:h-full after:w-full after:-z-10  after:border-8 after:border-main-yellow  after:-bottom-7 after:-right-7 ">
                <img src={Profile} alt="profile" className="h-[28rem]   " />
              </div>

              <article className="bg-violest-500 w-auto max-w-[50rem]  py-5 space-y-12 ">
                <h1 className="text-5xl text-main-dark-blue font-bold  relative before:absolute before:h-1 before:w-24 before:bg-main-dark-blue before:-bottom-3 before:rounded-xl">
                  About Me
                </h1>

                <p className="text-gray-500 text-lg">
                  My interest in Computer Programming started back in 2021 when
                  I feel like I&apos;m being left behind by my classmates in
                  programming because I don&apos;t have any knowledge about
                  coding. During my vacation, I spent my time learning the
                  basics of coding. Before school started, I learned how to
                  create my own algorithms. Fast-forward today I&apos;m now an
                  enthusiastic and passionate Developer.
                </p>

                <button
                  className="rounded py-3 px-5 font-semibold bg-main-red text-gray-50 hover:bg-main-red-2 "
                  onClick={() => alert("downalod cv")}
                >
                  DOWNLOAD CV
                </button>
              </article>
            </div>
          </div>

          {/* My Skill Section */}
          <section className="h-max my-14 py-12 bg-gray-200 w-full">
            <h1 className="text-5xl text-center text-main-dark-blue font-bold ">
              My Skills
            </h1>

            <div className="w-5/6 mx-auto p-8 grid grid-cols-4 gap-8 ">
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
      </section>
    </>
  );
};

export default About;
