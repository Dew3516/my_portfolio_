"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const details = [
  {
    icon: <FaUser />,
    label: "Name",
    value: "K.H.A.S. Dewmini",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "+94 70 222 4674",
    href: "tel:+94702224674",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "dewminihettiarachchi25@gmail.com",
    href: "mailto:dewminihettiarachchi25@gmail.com",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Address",
    value:
      "Srimali, Mamadala, Ambalantota, Hambantota, Sri Lanka",
    color: "from-purple-500 to-indigo-600",
  },
];

function Detail() {
  return (
    <section className="relative overflow-hidden px-6 md:px-10 py-20">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-amber-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Contact Details
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Feel free to contact me anytime
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-rows-1 md:grid-rows-2 gap-6">
          {details.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
              }}
              className="group relative"
            >
              {/* Hover Glow */}
              <div
                className={`absolute inset-0 rounded-[28px] bg-gradient-to-r ${item.color} opacity-0 blur-xl transition duration-500 group-hover:opacity-20`}
              />

              {/* Card */}
              <div className="relative flex items-center gap-5 rounded-[28px] border border-white/20 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl p-6 shadow-xl transition-all duration-300 group-hover:shadow-2xl">
                {/* Icon */}
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-2xl text-white shadow-lg`}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.label}
                  </p>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-lg font-semibold text-gray-800 dark:text-white hover:text-fuchsia-500 transition break-words"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-gray-800 dark:text-white break-words">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Detail;