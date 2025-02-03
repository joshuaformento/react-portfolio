import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact">
      <div className="border-b border-neutral-900 pb-20">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="mt-10 mb-5 text-center text-4xl"
        >
          Get in Touch
        </motion.h2>
        <p className="text-center tracking-normal text-2xl mb-10">
          I'm currently looking for internship opportunities. Feel free to leave
          any suggestions or feedback!
        </p>
        <div className="text-center tracking-tighter">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.address}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.phoneNo}
          </motion.p>
          <motion.a
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            href="https://mail.google.com/mail/#inbox?compose=new"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b"
          >
            {CONTACT.email}
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
