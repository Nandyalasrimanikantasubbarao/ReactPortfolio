import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  useGSAP(() => {
    gsap.to("#box", {
      y: 0,
      opacity: 1,
      duration: 2.5,
      ease: "power4.out",
      stagger: 0.6,
      delay: 1,
    });
  }, []);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="gap:5rem mx-auto flex max-w-7xl items-center p-6 text-xl font-medium uppercase lg:px-8"
        id="nav"
      >
        {["home", "about", "contact", "projects", "skills", "education"].map(
          (item, index) => (
            <div key={index} className="flex lg:flex-1">
              <Link
                id="box"
                to={item}
                className="opacity-0 transition-all duration-300 hover:text-orange-300"
              >
                {item}
              </Link>
            </div>
          ),
        )}
      </nav>
    </header>
  );
}

export default Navbar;
