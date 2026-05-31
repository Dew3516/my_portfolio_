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
    <section className="relative w-full rounded-2xl bg-gray-100 px-4 py-6 dark:bg-gray-950 sm:px-5 sm:py-8 lg:bg-transparent lg:px-0 lg:dark:bg-transparent">
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
          className="mb-6 text-center sm:mb-7 lg:text-left"
        >
          <h2 className="text-2xl font-bold bg-linear-to-r from-amber-500 via-pink-500 to-purple-500 bg-clip-text text-transparent sm:text-3xl lg:text-4xl">
            Contact Details
          </h2>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base">
            Feel free to contact me anytime
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-4">
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
              <div className="relative flex w-full items-start gap-3 rounded-2xl border border-white/20 bg-white/70 p-4 shadow-lg backdrop-blur-2xl transition-all duration-300 group-hover:shadow-xl dark:border-gray-700 dark:bg-gray-900/70 sm:gap-4 sm:p-5">
                {/* Icon */}
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-r ${item.color} text-lg text-white shadow-md sm:h-12 sm:w-12 sm:text-xl`}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.label}
                  </p>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="block max-w-full overflow-visible break-words text-sm font-semibold leading-relaxed text-gray-800 transition hover:text-fuchsia-500 dark:text-white sm:text-base"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="max-w-full overflow-visible break-words text-sm font-semibold leading-relaxed text-gray-800 dark:text-white sm:text-base">
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
