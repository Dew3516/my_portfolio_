"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUserAstronaut } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-8 md:px-20 py-24 bg-gray-100 dark:bg-gray-950"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-amber-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-5">
            <div className="flex items-center justify-center w-20 h-20 rounded-3xl bg-linear-to-r from-amber-500 via-pink-500 to-purple-500 text-white shadow-2xl">
              <FaUserAstronaut className="text-3xl" />
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-amber-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
            Passionate about creating beautiful digital experiences
          </p>
        </motion.div>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{
            y: -6,
          }}
          className="relative group"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-[40px] bg-linear-to-r from-amber-500/20 via-pink-500/20 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

          {/* Glass Card */}
          <div className="relative rounded-[40px] border border-white/20 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl p-10 md:p-14 shadow-2xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl leading-relaxed text-center text-gray-700 dark:text-gray-300"
            >
              I am a passionate{" "}
              <span className="font-semibold text-fuchsia-500">
                Frontend Developer
              </span>{" "}
              skilled in{" "}
              <span className="font-semibold text-amber-500">
                React, Next.js, Tailwind CSS,
              </span>{" "}
              UI/UX Design, and modern web animation.

              <br />
              <br />

              I love building{" "}
              <span className="font-semibold text-purple-500">
                beautiful, clean, and user-friendly
              </span>{" "}
              digital experiences that solve real-world problems and create
              meaningful impact through technology.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;