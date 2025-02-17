import { Suspense, lazy } from "react";
import FramerMotion from "./Components/FramerMotion";

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
  return (
    <div className="overflow-hidden">
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <div>
          <div>
            <NameScene />
          </div>
          <Navbar />
          <Home />
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
      </Suspense>
    </div>
  );
}

export default AppLayout;
