import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

const Projects = () => {
  return (
    <section id="projects">
      <div className="border-b border-neutral-900 pb-4 pt-0.5">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-5xl"
        >
          Projects
        </motion.h2>
        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    width={500}
                    height={500}
                    alt={project.title}
                    className="mb-6 rounded-xl border-neutral-400 border"
                  ></img>
                </a>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4 lg:ps-25 mb-3"
              >
                <h6 className="mb-2 font-semibold text-2xl">{project.title}</h6>
                <div className="mb-4 text-neutral-400 text-xl">
                  <ReactMarkdown>{project.description}</ReactMarkdown>
                </div>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-md font-medium text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
