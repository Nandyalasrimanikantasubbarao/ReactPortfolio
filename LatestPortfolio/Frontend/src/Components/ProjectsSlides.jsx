import { useState } from "react";
import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2";

const projects = [
  {
    title: "Latest Portfolio",
    technology: ["JSX", "Tailwind.css", "React", "Spline"],
    description:
      "A modern portfolio website built using React, JSX, Tailwind CSS, and Spline. It features an interactive 3D experience with smooth transitions, and a visually engaging design. ",
    image: "/project4.png",
    link: "#",
  },
  {
    title: "Old portfolio",
    technology: ["HTML", "CSS", "JavaScript"],
    description:
      "My old portfolio website. This is the first website that I built entirely from scratch, and it's my favorite one 💖.",
    image: "/project1.png",
    link: "https://manikantaoldportfolio.netlify.app/",
  },
  {
    title: "Restorent Application",
    technology: ["HTML", "CSS", "JavaScript"],
    description:
      "Restorent Application done by using HTML,CSS and basic JavaScript.",
    image: "/project2.png",
    link: "https://omnifood-manikanta1.netlify.app/",
  },
  {
    title: "Movie List and Reviews",
    technology: ["JSX", "CSS", "React"],
    description:
      "A Movie List and Reviews Application where users can search for movies, write and read reviews.",
    image: "/project3.png",
    link: "https://movielist-one.vercel.app/",
  },
];

function ProjectsSlides() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length,
    );
  };

  return (
    <div className="relative mx-auto w-[22rem]">
      {/* Project Slide */}
      <div className="h-[28rem] w-[22rem] transform overflow-hidden rounded-2xl bg-white shadow-lg transition-transform">
        <img
          className="h-48 rounded-lg object-cover p-2"
          src={projects[currentIndex].image}
          alt={projects[currentIndex].title}
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900">
            {projects[currentIndex].title}
          </h3>
          <ul className="mt-2 flex gap-2">
            {projects[currentIndex].technology.map((tech, index) => (
              <li
                key={index}
                className={`rounded ${tech === "React" ? "bg-cyan-300" : "bg-gray-300"} px-2 py-1 text-sm font-medium text-gray-800`}
              >
                {tech}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-gray-600">
            {projects[currentIndex].description}
          </p>
          {projects[currentIndex].link === "#" ? (
            <button className="mt-4 inline-block rounded-lg bg-orange-300 px-4 py-2 font-semibold text-white transition-all duration-200 hover:bg-orange-400">
              cureely viewing
            </button>
          ) : (
            <a
              href={projects[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-lg bg-orange-300 px-4 py-2 font-semibold text-white transition-all duration-200 hover:bg-orange-400"
            >
              view project
            </a>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="mt-5 cursor-pointer rounded-full bg-orange-400 p-2 text-white hover:bg-orange-500"
      >
        <HiArrowLeftCircle size={60} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 mt-5 cursor-pointer rounded-full bg-orange-400 p-2 text-white hover:bg-orange-500"
      >
        <HiArrowRightCircle size={60} />
      </button>
    </div>
  );
}

export default ProjectsSlides;
