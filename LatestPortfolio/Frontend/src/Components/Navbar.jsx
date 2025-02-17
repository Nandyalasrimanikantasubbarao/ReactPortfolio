import gsap from "gsap";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const navigationLinks = [
  "home",
  "about",
  "skills",
  "projects",
  "education",
  "contact",
];

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        // Customize this value as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    var t1 = gsap.timeline();
    t1.to("#box", {
      y: 0,
      opacity: 1,
      duration: 2.5,
      ease: "power4.out",
      stagger: 0.3, // Reduced stagger for a smoother effect
    });

    t1.to("#box1", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  return (
    <motion.header
      className={`w-full ${isSticky ? "fixed left-0 top-0 z-50 bg-black shadow-lg" : ""} transition-all duration-500`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <nav
        aria-label="Global"
        className="mx-auto mb-5 mt-8 flex items-center justify-between gap-5 px-7 text-xl font-medium uppercase lg:px-8"
        id="nav"
      >
        <div className="z-10">
          <h1 className="mb-6 cursor-pointer text-3xl lowercase text-white hover:text-lime-300">
            Srimanikanta
          </h1>
        </div>
        <div className="flex gap-9">
          {navigationLinks.map((item, index) => (
            <div key={index} className="flex lg:flex-1">
              <Link
                id={item === "contact" ? "box1" : "box"}
                to={item}
                smooth={true}
                duration={800} // Smooth scroll duration
                offset={-50}
                className={`z-10 cursor-pointer p-2 opacity-0 transition-all duration-300 hover:text-green-400 ${
                  item === "contact"
                    ? "rounded-lg bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 px-5 py-2.5 text-gray-900 shadow-lg shadow-lime-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-lime-300 dark:shadow-lg dark:shadow-lime-800/80 dark:focus:ring-lime-800"
                    : "text-white"
                }`}
              >
                {item}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}

export default Navbar;
