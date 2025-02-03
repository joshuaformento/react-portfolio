import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import RESUME from "../assets/RESUME.pdf";

function Navbar() {
  return (
    <nav className="mb-10 flex items-center justify-between pb-6 pt-4">
      <div className="flex flex-shrink-0 items-center">
        <a href="#" className="lg:text-3xl text-xl">
          My Portfolio
        </a>
      </div>
      <div className="m-8 flex flex-col items-center justify-center gap-4 lg:text-2xl lg:flex-row">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#tech">Technology Stack</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a
          href={RESUME}
          target="_blank"
          rel="noopener noreferrer"
          className="lg:me-6"
        >
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/joshua-formento"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/joshuaformento"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/formentojoshua/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
