import HomeScene from "../Componets/Spines/HomeScene";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="grid min-h-full grid-cols-2 place-items-center">
        {/* <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 p-12"> */}
        <div>
          <h1>Manikanta</h1>
        </div>
        <div className="absolute top-10">
          <HomeScene />
        </div>
      </div>
      {/* </div>
      </div> */}
    </>
  );
}

export default Home;
