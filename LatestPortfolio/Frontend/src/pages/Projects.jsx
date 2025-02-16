import ProjectsSlides from "../Components/ProjectsSlides";
import RoboScene from "../Components/Spines/RoboScene";
function Projects() {
  return (
    <div className="relative z-20 -mt-14 h-[47rem] overflow-hidden bg-amber-400">
      <h2 className="py-16 text-center text-5xl font-bold uppercase text-white">
        Projects
      </h2>
      <div className="grid h-[38rem] grid-cols-2">
        <div className="relative right-32 top-10">
          <RoboScene />
        </div>
        <div>
          <ProjectsSlides />
        </div>
      </div>
    </div>
  );
}

export default Projects;
