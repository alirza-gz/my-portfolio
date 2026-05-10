import { useState } from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import freelancers from "../../Assets/Projects/freelancers.jpg";
import eftekhartalent from "../../Assets/Projects/eftekhartalent.jpg";
import neginbazr from "../../Assets/Projects/neginbazr.jpg";
import bookingHotel from "../../Assets/Projects/hotel.jpg";
import digitize from "../../Assets/Projects/digitize.jpg";
import inventory from "../../Assets/Projects/inventory.jpg";

const projects = [
  {
    imgPath: freelancers,
    title: "Freelancering App",
    description:
      "Fullstack app for freelancers with NodeJS, MongoDB, ReactJS, Tailwindcss. In this app there are 3 roles: Freelancer, Owner and Admin. Owner creates projects, Freelancer creates proposals for projects and Admin controls all the process. each role has a panel. stack: React, React-Router-DOM, React-Query, React-Hook-Form, Axios, Tailwindcss, etc.",
    ghLink: "https://github.com/alirza-gz/Freelancering-App",
    videoUrl: "https://www.aparat.com/embed/iwd9v5i",
    tags: ["React.js", "Tailwindcss", "MongoDB"],
  },
  {
    imgPath: eftekhartalent,
    title: "Eftekhar Talent",
    description:
      "A full-stack intelligent platform designed for human resource skill assessment and entrepreneurship evaluation, helping users better understand and develop their professional capabilities. The system allows users to create structured, professional resumes and export them as high-quality PDFs using the react-pdf library. It also features multiple customized assessment tests, with results presented through detailed visual charts and downloadable PDF reports for deeper analysis. Built with Next.js, TypeScript, and Django, the platform delivers a scalable, modern, and data-driven solution for talent evaluation and career development.",
    demoLink: "https://Eftekhartalent.ir/",
    tags: ["Next.js", "Typescript", "React.js"],
  },
  {
    imgPath: neginbazr,
    title: "NeginBazr Danesh",
    description:
      "A full-stack web application built for managing greenhouses, farms, and agricultural products, enabling users to register farms, list products, and place orders seamlessly. The platform features dedicated admin and user panels to efficiently handle operations and user interactions. It includes an interactive map powered by react-leaflet, allowing users to explore and filter farms based on type, products, cultivation methods, and location. Developed with React.js, Tailwind CSS, and Django, the system provides a scalable and user-friendly solution for modern agricultural management.",
    videoUrl: "https://www.aparat.com/embed/gplak1z",
    tags: ["React.js", "Tailwindcss", "React-leaflet"],
  },
  {
    imgPath: bookingHotel,
    title: "Booking Hotel App",
    description:
      "A complete booking app with advanced state management using context+reducer and routing using RRD v6 stack: React, React-Router-DOM, React-Hook-Form, Context, Reducer, Axios, Tailwindcss, etc.",
    ghLink: "https://github.com/alirza-gz/BookingHotel-App",
    demoLink: "https://bookinghotel-app-alirzagz.netlify.app/",
    videoUrl: "https://www.aparat.com/embed/ebp78fe",
    tags: ["React.js", "Tailwindcss"],
  },
  {
    imgPath: digitize,
    title: "Digitize Ecommerce Store",
    description:
      "Digitize is a demo online shop built with ReactJS and TailwindCSS. With Digitize, you can browse a selection of digital products including mobile phones, laptops, and smartwatches. You can filter products, sort them, search for specific items, and add them to your cart. You can also mark products as favorites. stack: React, React-Router-DOM, React-Hook-Form, Axios, Context, Reducer, Tailwindcss, Firebase, etc.",
    ghLink: "https://github.com/alirza-gz/Digitize-Ecommerce-Store",
    demoLink: "https://digitize-shop-alirzagz.netlify.app/",
    videoUrl: "https://www.aparat.com/embed/zic4rwc",
    tags: ["React.js", "Tailwindcss", "Firebase"],
  },
  {
    imgPath: inventory,
    title: "Inventory App",
    description:
      "Inventory App with ReactJS & TailwindCSS. Some Features: Create categories, Add new products based on previous or recently added categories, Edit and Delete product, Sort products based on createdAt Date, Filter products based on selected category, Search in products based product title, use Context API as state management, Light and Dark theme",
    ghLink: "https://github.com/alirza-gz/Inventory-App",
    demoLink: "https://inventory-app-alirzagz.netlify.app/",
    videoUrl: "https://www.aparat.com/embed/kva8y40",
    tags: ["React.js", "Tailwindcss"],
  },
];

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="projects-root">
      <Particle />
      <div className="projects-inner">
        {/* Header */}
        <div className="projects-header">
          <span className="projects-eyebrow">SELECTED WORKS</span>
          <h1 className="projects-title">
            My Recent <span className="projects-accent">Projects</span>
          </h1>
          <p className="projects-subtitle">
            A curated collection of things I've built
          </p>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <ProjectCard
              key={i}
              index={i}
              isHovered={hoveredIndex === i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              {...proj}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
