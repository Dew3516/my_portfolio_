"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

function Education() {
  const educationData = [
    {
      title: "Higher National Diploma in Information Technology",
      institute:
        "Sri Lanka Institute of Advanced Technological Education (SLIATE)",
      year: "Current",
      icon: <FaGraduationCap />,
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Advanced Level (A/L)",
      institute: "Hungama Vijayabha National School, Sri Lanka",
      year: "2017 - 2019",
      icon: <FaSchool />,
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Professional Marketing Certificate",
      institute: "Sri Lanka Institute of Marketing (SLIM), Sri Lanka",
      year: "2025 Dec - 2026 Mar",
      icon: <FaSchool />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Digital Marketing Certificate",
      institute: "Sri Lanka Institute of Marketing (SLIM), Sri Lanka",
      year: "2026 May - 2026 Aug",
      icon: <FaSchool />,
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section
      id="education"
      className="relative overflow-hidden px-6 md:px-20 py-24 bg-gray-100 dark:bg-gray-950"
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
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold bg-linear-to-r from-amber-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Education
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
          My academic journey and qualifications
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-7 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-1 bg-linear-to-b from-amber-500 via-pink-500 to-purple-500 rounded-full" />

        <div className="space-y-12">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className={`relative flex items-center ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-linear-to-r ${item.color} flex items-center justify-center text-white text-2xl shadow-xl z-10`}
              >
                {item.icon}
              </div>

              {/* Card */}
              <div
                className={`ml-20 md:ml-0 w-full md:w-[45%] backdrop-blur-2xl bg-white/60 dark:bg-gray-900/50 border border-white/20 dark:border-gray-700 rounded-[30px] p-7 shadow-2xl hover:scale-[1.03] transition-all duration-300 hover:shadow-amber-500/20`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white leading-snug">
                      {item.title}
                    </h3>

                    <span
                      className={`px-5 py-2 rounded-full text-sm font-semibold bg-left-to-r ${item.color} text-white shadow-lg`}
                    >
                      {item.year}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <SiGoogleclassroom className="text-amber-500 text-lg" />
                    {item.institute}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;