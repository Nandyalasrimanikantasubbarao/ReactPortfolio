import { IoIosMail } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
const date = new Date();
const year = date.getFullYear() + 1;

function Footer() {
  return (
    <div className="relative -mt-14 h-[15rem] bg-gray-100">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-center">
          &copy; {year} Manikanta. All rights reserved.
        </h1>
        <div className="ml-20 flex gap-6">
          <a href="mailto:srimaninandyala@gmail.com">
            <IoIosMail size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/srimani-nandyala-16088b187/"
            target="_blank"
          >
            <CiLinkedin size={30} />
          </a>
          <a
            href="https://github.com/Nandyalasrimanikantasubbarao"
            target="_blank"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
