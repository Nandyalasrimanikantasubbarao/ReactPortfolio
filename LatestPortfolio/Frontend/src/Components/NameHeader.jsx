import Spline from "@splinetool/react-spline";

export default function NameHeader() {
  return (
    <div>
      <Spline scene="https://prod.spline.design/dw27OfWtaUy-OtV1/scene.splinecode" />
      <div className="absolute bottom-1/4 left-1/3 ml-10 cursor-pointer">
        {/* <button className="ml-50 cursor-pointer rounded-2xl bg-lime-400 from-lime-200 via-lime-400 to-lime-500 px-8 py-4 text-center text-2xl font-medium uppercase text-white shadow-lg shadow-lime-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-lime-300 dark:shadow-lg dark:shadow-lime-800/80 dark:focus:ring-lime-800">
          Contact &rarr;
        </button> */}
      </div>
    </div>
  );
}
