import { useState } from "react";
import EducationSpline from "../Components/Spines/EducationSpline";
import {
  HiArrowLeftCircle,
  HiArrowRightCircle,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";

const education = [
  {
    id: "1",
    title: "Enginnering",
    image: "/clg-img.jpg",
    discription:
      "Engineering in artificial intelligence & Machine learning (2022-2025),Bonam Venkata Chalamayya Institute of Technology and Science -Amalapuram.",
  },
  {
    id: "2",
    title: "Diploma",
    image: "/clg-img.jpg",
    discription:
      "Diploma in Mechanical Engineering (2019-2022),Bonam Venkata Chalamayya Institute of Technology and Science -Amalapuram.",
  },
];

function Education() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % education.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + education.length) % education.length,
    );
  };

  return (
    <div className="relative -mt-4 h-[50rem] overflow-hidden">
      <div className="absolute left-20 top-1/3 z-30 mx-auto w-[24rem] -skew-x-12">
        <h1 className="- absolute -top-[90%] left-full ml-32 skew-x-12 text-5xl font-bold uppercase text-white">
          Education
        </h1>
        {/* Project Slide */}
        <div className="h-[15rem] w-[35rem] transform overflow-hidden rounded-2xl bg-white pt-3 opacity-80 shadow-lg transition-transform">
          <h3 className="mt-4 text-center text-2xl font-medium text-gray-900">
            {education[currentIndex].title}
          </h3>
          <div className="mt-4 grid auto-cols-min grid-cols-[8rem,1fr]">
            <img
              src={education[currentIndex].image}
              alt={education[currentIndex].title}
              className="object-cove col-span-1 m-2 h-32 w-32 skew-x-12 rounded-full"
            />
            <div className="p-4">
              <p className="col-span-3 mt-1 skew-x-12 text-xl text-gray-900">
                {education[currentIndex].discription}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute -left-20 top-1/3 mt-5 skew-x-12 cursor-pointer rounded-full text-white"
        >
          <HiChevronLeft size={60} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-60 top-1/3 skew-x-12 cursor-pointer rounded-full text-white"
        >
          <HiChevronRight size={60} />
        </button>
      </div>
      <EducationSpline />
    </div>
  );
}

export default Education;
