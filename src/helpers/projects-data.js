import Barista from "../assets/projects-img/barista.png";
import Hotel from "../assets/projects-img/hotel.png";
import Library from "../assets/projects-img/LMS.png";

export const projectsData = [
  {
    id: 1,
    img: Barista,
    title: "BARISTA COFFEE SHOP ",
    url: "https://astridpx.github.io/coffee-shop/",
    github: "https://github.com/astridpx/coffee-shop",
    details:
      "Barista is a Coffee Website, a first project I made on framework. I made this responsive  that can be accessible on both small and large screen, it is only a template and has no functions. This is built in REACT JS and CSS.",
  },
  {
    id: 2,
    img: Hotel,
    title: "MrStudio HOTEL BOOKING ",
    url: "https://hotel-booking-client-fmrs.onrender.com/",
    github: "https://github.com/astridpx/REACT-HOTEL-BOOKING-CLIENT",
    details:
      "MRstudio is a hotel website. It is a reponsive website that can be accessible on both small and large screen. This website has a CRUD operations and sending email operations using Nodemailer. A user can be signed only with their google account. This is built in REACT JS and Tailwind CSS for frontend and Node Js, Express and MongoDB for the backend.",
  },
  {
    id: 3,
    img: Library,
    title: "LIBRARY MANAGEMENT SYSTEM",
    url: "https://svcc-library-system.onrender.com/Login",
    github:
      "https://github.com/astridpx/REACT-SVCC-Library-Management-System-Client",
    details:
      "This system is our project for our Software Engineering Subject. The LMS is using a qr-code for borrowing and returning books. This is built in REACT JS and SASS for frontend and Node Js, Express, and MySQL for the backend. ",
  },
];
