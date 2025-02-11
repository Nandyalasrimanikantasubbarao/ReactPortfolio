import NameHeader from "../Components/NameHeader";
import NameScene from "../Components/Spines/NameScene";

function Home() {
  return (
    <div className="bg-black-400 container -z-10 mt-10 h-[37rem] w-screen overflow-hidden">
      <div className="place-items-center">
        <div className="pointer-events-none absolute left-20 top-2">
          <NameHeader />
        </div>
      </div>
    </div>
  );
}

export default Home;
