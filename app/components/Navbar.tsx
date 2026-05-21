"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  {
    id: "liveAnimatedCertificates",
    label: "Certificates",
  },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] =
    useState("home");

  useEffect(() => {
    const onScroll = () => {
      const scrollY =
        window.scrollY + 150;

      for (const item of navItems) {
        const el =
          document.getElementById(
            item.id
          );

        if (!el) continue;

        const top =
          el.offsetTop;
        const height =
          el.offsetHeight;

        if (
          scrollY >= top &&
          scrollY <
            top + height
        ) {
          setActive(item.id);
          return;
        }
      }
    };

    window.addEventListener(
      "scroll",
      onScroll
    );

    onScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        onScroll
      );
  }, []);

  const smoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const section =
      document.getElementById(id);

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <ul className="hidden md:flex items-center gap-3 rounded-full border border-white/20 bg-white/40 dark:bg-gray-900/40 px-4 py-3 backdrop-blur-2xl shadow-xl relative">
      {navItems.map(
        (item) => (
          <li key={item.id} className="relative">
            <a
              href={`#${item.id}`}
              onClick={(e) =>
                smoothScroll(
                  e,
                  item.id
                )
              }
              className="relative block"
            >
              <motion.span
                whileHover={{
                  scale: 1.05,
                }}
                className={`relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  active ===
                  item.id
                    ? "text-white"
                    : "text-gray-700 dark:text-gray-300 hover:text-fuchsia-500"
                }`}
              >
                {item.label}
              </motion.span>

              {/* Active Pill */}
              {active ===
                item.id && (
                <motion.div
                  layoutId="navbar-active-pill"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-500 shadow-lg -z-10"
                />
              )}
            </a>
          </li>
        )
      )}
    </ul>
  );
}