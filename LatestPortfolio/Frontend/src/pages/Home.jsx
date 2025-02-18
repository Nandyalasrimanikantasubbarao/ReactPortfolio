import NameHeader from "../Components/NameHeader";

function Home({ value }) {
  return (
    <div
      id="home"
      className="pointer-events-none relative mt-10 h-[37rem] w-screen"
    >
      <NameHeader value={value} />
    </div>
  );
}

export default Home;
