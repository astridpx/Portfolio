import World from "../assets/world.svg";

const ContactPage = () => {
  return (
    <>
      <main className="h-screen w-full " id="contact">
        <section className="container h-full mx-auto  py-8 ">
          <h1 className="text-5xl mb-8 text-main-dark-blue font-bold text-center">
            Get In Touch
          </h1>

          <div className="grid grid-cols-2 pt-12">
            <div className=" flex justify-center relative  ">
              <img
                src={World}
                alt="world"
                className="w-full h-full scale-125  object-contain absolute opacity-30 -z-10"
              />
              <div className="relative">
                <h2 className="font-bold text-3xl text-main-dark-blue ">
                  Let&apos;s talk about everything
                </h2>
                <p className="font-bold text-lg text-main-dark-blue/95 ">
                  Start by
                  <span
                    onClick={() => alert("hello")}
                    className="text-main-red cursor-pointer pl-1"
                  >
                    Saying Hi👋
                  </span>
                </p>
              </div>
            </div>

            <form className="space-y-8 pr-12 ">
              <div className="flex space-x-4">
                <input
                  type="email"
                  aria-describedby="helper-text-explanation"
                  className="rounded-2xl border w-[50%] border-gray-300 text-gray-400 text-sm outline-gray-300 focus:outline p-2.5 placeholder:font-semibold shadow-sm "
                  placeholder="Your name"
                />
                <input
                  type="email"
                  aria-describedby="helper-text-explanation"
                  className="rounded-2xl border w-[50%] border-gray-200 text-gray-400 text-sm outline-gray-200 focus:outline p-2.5 placeholder:font-semibold shadow-sm "
                  placeholder="Email adrress"
                />
              </div>
              <div>
                <input
                  type="text"
                  aria-describedby="helper-text-explanation"
                  className="rounded-2xl border w-full border-gray-300 text-gray-400 text-sm outline-gray-300 focus:outline p-2.5 placeholder:font-semibold shadow-sm "
                  placeholder="Subject"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  cols={30}
                  rows={10}
                  className="max-h-40 min-h-[10rem] h-40 rounded-2xl border w-full border-gray-300 text-gray-400 text-sm outline-gray-300 focus:outline p-2.5 placeholder:font-semibold shadow-sm "
                ></textarea>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
