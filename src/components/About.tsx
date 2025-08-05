import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT, ABOUT_TEXT2, ABOUT_TEXT3 } from "../constants";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about">
      <div className="border-b border-neutral-900 pb-4 pt-0.5">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="my-20 text-center text-5xl"
        >
          About <span className="text-[#3d5a80]">Me</span>
        </motion.h1>
        <div className="flex flex-wrap">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className="flex items-center justify-center">
              <img
                className="rounded-4xl lg:w-lg"
                src={aboutImg}
                alt="about"
              ></img>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-6 lg:text-xl">
                {ABOUT_TEXT}
                <br />
                <br />
                {ABOUT_TEXT2}
                <br />
                <br />
                {ABOUT_TEXT3}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
