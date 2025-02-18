import { Suspense, lazy, useState } from "react";
import FramerMotion from "./Components/FramerMotion";
import ContactForm from "./pages/Contactform";

// Lazy load components
const Navbar = lazy(() => import("./Components/Navbar"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const NameScene = lazy(() => import("./Components/Spines/NameScene"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Education = lazy(() => import("./pages/Education"));
const Footer = lazy(() => import("./pages/Footer"));

function AppLayout() {
  const [open, setOpen] = useState(false);

  function handelOpen() {
    setOpen(() => !open);
  }

  return (
    <div className="overflow-hidden">
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <div>
          <div>
            <NameScene />
          </div>
          <Navbar />
          <Home value={handelOpen} />
        </div>
        <FramerMotion>
          <About />
        </FramerMotion>
        <FramerMotion>
          <Skills />
        </FramerMotion>
        <FramerMotion>
          <Projects />
        </FramerMotion>
        <FramerMotion>
          <Education />
        </FramerMotion>
        <FramerMotion>
          <Footer />
        </FramerMotion>
        {open && <ContactForm value={handelOpen} />}
      </Suspense>
    </div>
  );
}

export default AppLayout;
