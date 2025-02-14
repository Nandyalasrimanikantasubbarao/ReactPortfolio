import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NameScene from "./Components/Spines/NameScene";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";

function AppLayout() {
  return (
    <div className="overflow-hidden">
      <div>
        <div>
          <NameScene />
        </div>
        <Navbar />
        <Home />
      </div>
      <About />
      <Skills />
      <Projects />
      <Education />
    </div>
  );
}

export default AppLayout;
