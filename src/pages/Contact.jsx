import { useRef } from "react";
import World from "../assets/world.svg";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const form = useRef();
  const gmail = `mailto:${import.meta.env.VITE_MY_EMAIL}`;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Message successfully send.");
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          toast.error("This didn't work.");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <main className="h-screen w-full overflow-hidden" id="contact">
        <section className="container h-full mx-auto  py-8 px-4 ">
          <h1
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-5xl mb-8 text-main-dark-blue font-bold text-center"
          >
            Get In Touch
          </h1>

          <div className="grid lg:grid-cols-2 pt-12 ">
            <div className="flex lg:justify-center relative  mb-8 ">
              <img
                src={World}
                alt="world"
                className="w-full h-full scale-125  object-contain absolute opacity-30 -z-10"
              />
              <div className="relative">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  className="font-bold text-3xl text-main-dark-blue "
                >
                  Let&apos;s talk about everything
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="font-bold text-lg text-main-dark-blue/95 "
                >
                  Start by
                  <span
                    // onClick={() => alert("hello")}
                    className="text-main-red cursor-pointer pl-1"
                  >
                    <Link target="_blank" to={gmail}>
                      Saying Hi👋
                    </Link>
                  </span>
                </p>
              </div>
            </div>

            <form
              data-aos="flip-left"
              data-aos-duration="1000"
              ref={form}
              onSubmit={sendEmail}
              className="space-y-8 md:pr-12 "
            >
              <div className="flex space-x-4 ">
                <input
                  type="text"
                  required
                  name="from_name"
                  className="rounded-2xl capitalize border w-[50%] border-gray-300 text-gray-400 text-sm outline-gray-300 focus:outline p-2.5 placeholder:font-semibold shadow-sm "
                  placeholder="Your name"
                />
                <input
                  type="email"
                  required
                  name="visitor_email"
                  className="rounded-2xl lowercase border w-[50%] border-gray-200 text-gray-400 text-sm outline-gray-200 focus:outline p-2.5 placeholder:capitalize placeholder:font-semibold shadow-sm "
                  placeholder="Email adrress"
                />
              </div>
              <div>
                <input
                  type="text"
                  required
                  name="subject"
                  className="rounded-2xl uppercase border w-full border-gray-300 text-gray-400 text-sm outline-gray-300 focus:outline p-2.5 placeholder:font-semibold shadow-sm "
                  placeholder="Subject"
                />
              </div>
              <div>
                <textarea
                  required
                  name="message"
                  placeholder="Message"
                  cols={30}
                  rows={10}
                  className="max-h-40 min-h-[10rem] h-40 rounded-2xl border w-full border-gray-300 text-gray-400 text-sm outline-gray-300 focus:outline p-2.5 placeholder:font-semibold shadow-sm "
                ></textarea>
              </div>

              <button
                type="submit"
                className="rounded-3xl py-2 px-6 font-bold bg-main-red text-gray-100 hover:bg-main-red/90 -translate-y-2 "
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
