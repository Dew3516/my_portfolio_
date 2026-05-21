"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaJava,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "React",
      icon: <FaReact />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "from-gray-700 to-black",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "from-cyan-400 to-sky-500",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Figma",
      icon: <FaFigma />,
      color: "from-pink-500 to-purple-500",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "from-green-500 to-lime-500",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      color: "from-sky-500 to-blue-600",
    },
    {
      name: "Java",
      icon: <FaJava />,
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-8 md:px-20 py-24 bg-gray-100 dark:bg-gray-950"
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-amber-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Skills
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
          Technologies & tools I work with
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.06,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.08,
              y: -8,
            }}
            className="group relative"
          >
            {/* Glow Effect */}
            <div
              className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${skill.color} opacity-0 blur-xl transition duration-500 group-hover:opacity-30`}
            />

            {/* Card */}
            <div className="relative z-10 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border border-white/20 dark:border-gray-700 rounded-3xl p-6 text-center shadow-xl transition-all duration-300 group-hover:shadow-2xl h-full">
              {/* Icon */}
              <div
                className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-3xl text-white shadow-lg mb-4`}
              >
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="font-semibold text-gray-800 dark:text-white text-lg">
                {skill.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;