import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const navigationLinks = [
  "home",
  "about",
  "skills",
  "projects",
  "education",
  "contact",
];

function Navbar() {
  useGSAP(() => {
    var t1 = gsap.timeline();
    t1.to("#box", {
      y: 0,
      opacity: 1,
      duration: 2.5,
      ease: "power4.out",
      stagger: 0.6,
      delay: 1,
    });

    t1.to("#box1", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.6,
      delay: 1,
    });
  }, []);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="gap:5rem max-w-9xl mx-auto mt-8 flex items-center justify-between px-7 text-xl font-medium uppercase lg:px-8"
        id="nav"
      >
        <div className="z-10">
          <h1 className="mb-6 cursor-pointer text-3xl lowercase text-white hover:text-lime-300">
            Srimanikanta.me
          </h1>
        </div>
        <div className="flex gap-9">
          {navigationLinks.map((item, index) => (
            <div key={index} className="flex lg:flex-1">
              {item === "contact" ? (
                <a
                  id="box1"
                  to={item}
                  className="z-10 mb-2 me-2 cursor-pointer rounded-lg bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 px-5 py-2.5 text-center text-sm font-medium text-gray-900 opacity-0 shadow-lg shadow-lime-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-lime-300 dark:shadow-lg dark:shadow-lime-800/80 dark:focus:ring-lime-800"
                >
                  {item}
                </a>
              ) : (
                <a
                  id="box"
                  to={item}
                  className="z-10 p-2 text-white opacity-0 transition-all duration-300 hover:text-green-400"
                >
                  {item}
                </a>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
