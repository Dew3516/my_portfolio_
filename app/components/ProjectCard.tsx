"use client"; 
import { motion } from "framer-motion"; 
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  tech = [],
  image,
  link = "#",
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-900 shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800"
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span key={i} className="text-sm px-3 py-1 bg-fuchsia-600 text-white rounded-full">
              {t}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-black dark:bg-white dark:text-black text-white rounded-lg hover:opacity-80"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
}
