import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import NameScene from "./Components/Spines/NameScene";
import Skills from "./pages/Skills";

function AppLayout() {
  return (
    <>
      <div>
        <div>
          <div>
            <NameScene />
          </div>
          <Navbar />
          <Home />
        </div>
        <About />
        <Skills />
      </div>
    </>
  );
}

export default AppLayout;
