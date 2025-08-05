import { GrReactjs } from "react-icons/gr";
import { FaHtml5, FaVuejs } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa6";
import { BiLogoJava } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { BiLogoVisualStudio } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandVite } from "react-icons/tb";
import { TbBrandNetbeans } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { TbBrandVercelFilled } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration: any) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
});

function Technologies() {
  return (
    <section id="tech">
      <div className="border-b border-neutral-800 pb-24 pt-0.5">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-5xl"
        >
          Technology Stack
        </motion.h2>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaHtml5 className="text-7xl text-.orange-600" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaCss3Alt className="text-7xl text-blue-600" />
          </motion.div>
          <motion.div
            variants={iconVariants(5.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaJs className="text-7xl text-yellow-300" />
          </motion.div>
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <GrReactjs className="text-7xl text-cyan-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiTailwindCssFill className="text-7xl text-sky-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <BiLogoJava className="text-7xl text-sky-700" />
          </motion.div>
          <motion.div
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <GrMysql className="text-7xl text-sky-700" />
          </motion.div>
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <BiLogoVisualStudio className="text-7xl text-sky-600" />
          </motion.div>
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <BiLogoTypescript className="text-7xl text-blue-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <TbBrandVite className="text-7xl text-purple-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(5.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <TbBrandNetbeans className="text-7xl text-green-700" />
          </motion.div>
          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaBootstrap className="text-7xl text-purple-700" />
          </motion.div>
          <motion.div
            variants={iconVariants(5.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaNodeJs className="text-7xl text-green-700" />
          </motion.div>
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiExpress className="text-7xl" />
          </motion.div>
          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaPython className="text-7xl" />
          </motion.div>
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <TbBrandVercelFilled className="text-7xl" />
          </motion.div>
          <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaVuejs className="text-7xl text-green-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Technologies;
