import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Connectivity({ size }) {
  return (
    <div className="ml-20 flex gap-6">
      <a href="mailto:srimaninandyala@gmail.com">
        <IoIosMail size={size} />
      </a>
      <a
        href="https://www.linkedin.com/in/srimani-nandyala-16088b187/"
        target="_blank"
      >
        <CiLinkedin size={size} />
      </a>
      <a href="https://github.com/Nandyalasrimanikantasubbarao" target="_blank">
        <FaGithub size={size} />
      </a>
    </div>
  );
}

export default Connectivity;
