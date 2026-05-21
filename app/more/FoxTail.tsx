"use client";
import { motion } from "framer-motion";

export default function FoxTail() {
  return (
    <motion.svg
      width="400"
      height="400"
      viewBox="0 0 200 200"
      className="absolute bottom-0 right-0 opacity-40"
      animate={{ rotate: [0, 5, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      <path
        d="M30 120 C70 80, 120 60, 160 120 C100 180, 60 160, 30 120"
        fill="#ff7b39"
        stroke="#ff4500"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}
