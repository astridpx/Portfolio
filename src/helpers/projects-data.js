import Barista from "../assets/projects-img/barista.png";
import Hotel from "../assets/projects-img/hotel.png";
import Library from "../assets/projects-img/LMS.png";
import WRS from "../assets/projects-img/wrs.jpg";

export const projectsData = [
  {
    id: 1,
    img: Barista,
    title: "BARISTA COFFEE SHOP ",
    url: "https://astridpx.github.io/coffee-shop/",
    github: "https://github.com/astridpx/coffee-shop",
    details:
      "Barista is a coffee website, the first project I made on a framework. It's a static website focusing on improving layout design. This website is responsive and can be accessible on both small and large screens. It is built in React JS and CSS.",
  },
  {
    id: 2,
    img: Hotel,
    title: "MrStudio HOTEL BOOKING ",
    url: "https://hotel-booking-client-fmrs.onrender.com/",
    github: "https://github.com/astridpx/REACT-HOTEL-BOOKING-CLIENT",
    details:
      "MRstudio is a hotel website. This website has CRUD operations and sends email operations using Nodemailer. A user can book a date and can only sign in with their Google account. It is a responsive website that can be accessible on both small and large screens. This is built in React JS and Tailwind CSS for the frontend and Node.js, Express, and MongoDB for the backend.",
  },
  {
    id: 3,
    img: Library,
    title: "LIBRARY MANAGEMENT SYSTEM",
    url: "https://svcc-library-system.onrender.com/Login",
    github:
      "https://github.com/astridpx/REACT-SVCC-Library-Management-System-Client",
    details:
      "SVCC LMS is our project for our Software Engineering subject. The SVCC LMS is using a QR code for borrowing and returning books. The admin can manage the student account, book lists, and book status. This is built in React JS and SASS for the frontend and Node.js, Express, and MySQL for the backend.",
  },
  {
    id: 4,
    img: WRS,
    title: "Morning Breeze Management System",
    url: "https://morningbreeze.vercel.app/",
    github: "https://github.com/astridpx/Morning-Breeze",
    details:
      "Morning Breeze Water Refilling Station Management System is our capstone project. This system is built to help the Morning Breeze Water Refilling Station to manage and monitor their customer, sales, expenses, stocks, products, items, unpaid orders, and create a customer order with ease. This system is built in NextJs, MongoDB, Tanstack Query, and Tailwind with Shadcn-UI",
  },
];
