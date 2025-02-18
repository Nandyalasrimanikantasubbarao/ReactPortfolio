import Connectivity from "../Components/Connectivity";
const date = new Date();
const year = date.getFullYear() + 1;

function Footer() {
  return (
    <div className="relative -mt-14 h-[10rem] bg-amber-400 text-white">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center">
          &copy; {year} Manikanta. All rights reserved.
        </h1>
        <div>
          <Connectivity size={30} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
