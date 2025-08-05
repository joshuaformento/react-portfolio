import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import RESUME from "../assets/RESUME.pdf";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

function Navbar() {
  return (
    <nav className="mb-10 flex items-center justify-between pb-6 pt-4">
      <div className="flex flex-shrink-0 items-center">
        <a href="#" className="lg:text-3xl text-xl me-6">
          My Portfolio
        </a>
      </div>
      <div
        className="m-8 flex-col items-center justify-center gap-4 lg:text-2xl lg:flex-row hidden lg:flex"
        id="mobile-menu-3"
      >
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#tech" className="text-center">
          Technology Stack
        </a>
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
      <div className="lg:hidden">
        <Popover>
          <PopoverButton className="navbar-burger flex items-center p-3 hover:bg-neutral-500">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </PopoverButton>
          <PopoverPanel className="absolute left-0 right-0 top-16 z-10 bg-[#14141d] p-4 justify-items-center text-center">
            <div className="flex flex-col space-y-2">
              <a href="#" className="block py-2">
                Home
              </a>
              <a href="#about" className="block py-2">
                About
              </a>
              <a href="#tech" className="block py-2">
                Technology Stack
              </a>
              <a href="#projects" className="block py-2">
                Projects
              </a>
              <a href="#contact" className="block py-2">
                Contact
              </a>
              <a
                href={RESUME}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2"
              >
                Resume
              </a>
              <div className="flex gap-4 pt-4 justify-center">
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
            </div>
          </PopoverPanel>
        </Popover>
      </div>
    </nav>
  );
}

export default Navbar;
