import { useEffect, useRef } from "react";
import Connectivity from "./Connectivity";
import gsap from "gsap";

export default function NameHeader({ value }) {
  const btnRef = useRef();
  useEffect(() => {
    gsap.to(
      btnRef.current,

      { opacity: 1, y: 0, duration: 1, delay: 1 },
    );
  });
  return (
    <div>
      <div className="">
        <h1 className="absolute left-1/4 top-[15%] z-20 text-xl font-medium uppercase text-white">
          hi there
        </h1>
        <h1 className="absolute left-[30%] top-[25%] text-[4rem] font-[900] uppercase text-white">
          i'm <sapn>Manikanta</sapn>
        </h1>
      </div>
      <div className="pointer-events-auto absolute bottom-[40%] left-[45%] z-10 text-white">
        <Connectivity size={40} />
      </div>
      <div className="pointer-events-auto absolute bottom-[40%] left-[60%] ml-10 cursor-pointer">
        <button
          ref={btnRef}
          onClick={value}
          className="ml-50 z-20 cursor-pointer rounded-2xl bg-lime-400 from-lime-200 via-lime-400 to-lime-500 px-6 py-3 text-center text-2xl font-medium uppercase text-white opacity-0 shadow-lg shadow-lime-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-lime-300 dark:shadow-lg dark:shadow-lime-800/80 dark:focus:ring-lime-800"
        >
          Contact &rarr;
        </button>
      </div>
    </div>
  );
}
