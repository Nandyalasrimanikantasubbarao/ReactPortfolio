// function NameHeader() {
//   return (
//     <div>
//       <h1 className="absolute left-1/4 top-1/3 text-5xl font-bold">
//         Hi There,
//       </h1>
//       <h1 className="absolute left-1/4 top-2/3 text-6xl font-bold text-orange-600">
//         I'm Manikanta
//       </h1>
//     </div>
//   );
// }

import Spline from "@splinetool/react-spline";

export default function NameHeader() {
  return (
    <div>
      <Spline scene="https://prod.spline.design/dw27OfWtaUy-OtV1/scene.splinecode" />
      <button className="absolute bottom-48 left-1/3 ml-48 rounded-2xl bg-lime-400 from-lime-200 via-lime-400 to-lime-500 px-8 py-4 text-center text-2xl font-medium uppercase text-white shadow-lg shadow-lime-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-lime-300 dark:shadow-lg dark:shadow-lime-800/80 dark:focus:ring-lime-800">
        Contact &rarr;
      </button>
    </div>
  );
}
