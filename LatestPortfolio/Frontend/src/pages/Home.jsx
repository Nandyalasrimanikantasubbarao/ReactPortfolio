import HomeScene from "../Components/Spines/HomeScene";
import NameScene from "../Components/Spines/NameScene";

function Home() {
  return (
    <div>
      <div className="place-items-center">
        {/* <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 p-12"> */}
        <div>
          <NameScene />
          {/* <HomeScene /> */}
        </div>
        <div className="z-10"></div>
      </div>
    </div>
  );
}

export default Home;
