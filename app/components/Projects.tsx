"use client";

import React, {
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Fitness Tracker App",
    description:
      "A mobile app to track workouts and monitor progress over time.",
    tech: ["Figma"],
    image:
      "/Fitness Tracking App.png",
    link:
      "/Fitness Tracking App.png",
    category: "UI/UX",
  },
  {
    title: "AI Chatbot",
    description:
      "Interactive AI chatbot interface.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: "/chatbot.png",
    link: " https://dew3516.github.io/AI-Chatbot/",
    category: "Frontend",
  },
  {
    title:
      "Books Cover Design",
    description:
      "Creative book cover designs.",
    tech: [
      "Adobe Photoshop",
    ],
    image: "/first.png",
    link: "/first.png",
    category:
      "Graphic Design",
  },
  {
    title:
      "Books Cover Design",
    description:
      "Creative book cover designs.",
    tech: [
      "Adobe Photoshop",
    ],
    image: "/second.png",
    link: "/second.png",
    category:
      "Graphic Design",
  },
  {
    title: "Poster Design",
    description:
      "Creative social media posters.",
    tech: [
      "Adobe Photoshop",
    ],
    image:
      "/facebook poster figma.png",
    link:
      "/facebook poster figma.png",
    category:
      "Graphic Design",
  },
  {
    title: "Task App",
    description:
      " A simple task management app to organize daily activities.",
    tech: ["Figma"],
    image:
      "/Screenshot 2026-05-20 234332.png",
    link:
      "https://www.figma.com/proto/NYgG7AG513Ju1qFJzL2MF6/Untitled?page-id=0%3A1&node-id=1-2&viewport=-529%2C12%2C0.76&t=NOtjcE1N4nTbxcya-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
    category: "UI/UX",
  },
   {
    title: "AI Chatbot",
    description:
      "Interactive AI chatbot interface.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: "/Screenshot 2026-05-20 234848.png",
    link: "https://dew3516.github.io/First-web-page-design/",
    category: "Frontend",
  },

];

export default function Projects() {
  const [
    activeCategory,
    setActiveCategory,
  ] = useState("All");

  const scrollRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const categories = [
    "All",
    "Frontend",
    "UI/UX",
    "Graphic Design",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category ===
            activeCategory
        );

  const scrollByAmount = (
    direction:
      | "left"
      | "right"
  ) => {
    if (!scrollRef.current)
      return;

    scrollRef.current.scrollBy({
      left:
        direction === "right"
          ? 420
          : -420,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects1"
      className="relative overflow-hidden px-6 md:px-20 py-24 bg-gray-100 dark:bg-gray-950"
    >
      {/* Glow */}
      <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-amber-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/20 blur-[120px]" />

      {/* Heading */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        viewport={{
          once: true,
        }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
          Explore my frontend,
          UI/UX & graphic
          design projects
        </p>
      </motion.div>

      {/* Categories */}
      <div className="mb-14 flex flex-wrap justify-center gap-4">
        {categories.map(
          (cat) => (
            <motion.button
              key={cat}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() =>
                setActiveCategory(
                  cat
                )
              }
              className={`rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 backdrop-blur-xl border
              ${
                activeCategory ===
                cat
                  ? "bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 text-white shadow-xl"
                  : "bg-white/50 dark:bg-gray-900/50 border-white/20 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:scale-105"
              }`}
            >
              {cat}
            </motion.button>
          )
        )}
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() =>
            scrollByAmount(
              "left"
            )
          }
          className="absolute left-0 top-1/2 z-20 hidden md:flex -translate-y-1/2 items-center justify-center h-14 w-14 rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/20 dark:border-gray-700 shadow-xl hover:scale-110 transition"
        >
          <ChevronLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() =>
            scrollByAmount(
              "right"
            )
          }
          className="absolute right-0 top-1/2 z-20 hidden md:flex -translate-y-1/2 items-center justify-center h-14 w-14 rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/20 dark:border-gray-700 shadow-xl hover:scale-110 transition"
        >
          <ChevronRight />
        </button>

        {/* Projects */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto px-4 md:px-16 scroll-smooth snap-x snap-mandatory scrollbar-hide"
        >
          {filteredProjects.map(
            (
              project,
              index
            ) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay:
                    index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -10,
                }}
                className="snap-center shrink-0"
              >
                <ProjectCard
                  {...project}
                />
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}