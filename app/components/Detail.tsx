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
    <section className="relative w-full overflow-hidden px-4 py-10 sm:px-6 lg:px-0">
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
          className="mb-8 sm:mb-10"
        >
          <h2 className="text-3xl font-bold bg-linear-to-r from-amber-500 via-pink-500 to-purple-500 bg-clip-text text-transparent sm:text-4xl lg:text-5xl">
            Contact Details
          </h2>

          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Feel free to contact me anytime
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5">
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
                className={`absolute inset-0 rounded-[28px] bg-linear-to-r ${item.color} opacity-0 blur-xl transition duration-500 group-hover:opacity-20`}
              />

              {/* Card */}
              <div className="relative flex items-start gap-4 rounded-3xl border border-white/20 bg-white/70 p-5 shadow-xl backdrop-blur-2xl transition-all duration-300 group-hover:shadow-2xl dark:border-gray-700 dark:bg-gray-900/70 sm:items-center sm:gap-5 sm:p-6">
                {/* Icon */}
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-r ${item.color} text-xl text-white shadow-lg sm:h-16 sm:w-16 sm:text-2xl`}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.label}
                  </p>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="break-words text-base font-semibold text-gray-800 transition hover:text-fuchsia-500 dark:text-white sm:text-lg"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="break-words text-base font-semibold text-gray-800 dark:text-white sm:text-lg">
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
