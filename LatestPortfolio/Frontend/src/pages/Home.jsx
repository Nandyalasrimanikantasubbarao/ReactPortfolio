import ParticlesComponent from "../Componets/ParticlesComponent";
import "./Home.css";

function Home() {
  return (
    <>
      <ParticlesComponent id="particles" />
      <div className="h-100% grid min-h-full grid-cols-2 place-items-center">
        <div className="flex items-center justify-center">
          <h1>Manikanta</h1>
        </div>
        <div>
          <h1>hello</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
