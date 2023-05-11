import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../data";

const Contuct = () => {
  return (
   <>
    <footer className="py-16 lg:sec" id="contuct">
      <div className="container">
        <div className="md:flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
           className="md:w-2/5"
         >
            <div>
              <h2 className="text-[40px] font-medium text-accent mb-10 tracking-wide font-primary">
                Contact Me
              </h2>
              <p className=" mb-6 text-white/50 leading-tight">
                If you have any suggestion, project or even you want to say
                “hello”, please fill out the form below and I will reply you
                shortly.
              </p>
            </div>

            <div>
              <h1 className="text-4xl text-accent font-semibold mb-6 ">
                Badda 1212, Dhaka, <br />
                Bangladesh
              </h1>
              <div className="flex flex-col">
                <span className="mb-4">
                  <a
                    className="text-2xl font-semibold mb-4 font-primary"
                    href="tel:+8801724754996"
                  >
                    +8801724754996
                  </a>
                </span>
                <span>
                  <a className="" href="mailto:coderskhasan@gmail.com">
                    coderskhasan@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}} 
            className="flex-1 border rounded-2xl flex flex-col gap-y-5 pb-24 p-6 items-start"
         >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </footer>

    <div className="text-start flex ml-16 items-center">
         <span className="block text-sm text-gray-400 sm:text-center dark:text-gray-400 pb-6 text-left">&copy; {new Date().getFullYear()} <a href="https://www.linkedin.com/in/sk-mehedi-hasen-642659217/" className="hover:underline font-bold text-base" target="_blank" rel="noreferrer">Developer Hasan</a>. All Rights Reserved.
            </span>
      </div>

    </>
  );
};

export default Contuct;
