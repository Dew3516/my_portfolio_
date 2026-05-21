"use client";
import React from 'react'
import { motion } from "framer-motion";

export default function Myproject() {
  return (
        <div className=" min-h-screen bg-white font-sans dark:bg-black ">
          <div className="fixed w-full mt-[-200] z-50 shadow-md bg-white dark:bg-black">
          {/* 🌟 NAVBAR ANIMATION */}
          <motion.nav initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          <nav className="w-auto h-auto p-4 border-r border-zinc-200 dark:border-zinc-800 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 ml-2">Shashini Dewmini</h1>
              <ul className="flex justify-center">
                <li>
                  <a href="#" className="text-zinc-900 p-5 dark:text-zinc-100 hover:underline">Home</a>
                </li>
                <li>
                  <a href="#about" className="text-zinc-900 p-5 dark:text-zinc-100 hover:underline">About</a>
                </li>
                <li>
                  <a href="#skill" className="text-zinc-900 p-5 dark:text-zinc-100 hover:underline">Skils</a>
                </li>
                <li>
                  <a href="#project" className="text-zinc-900 p-5 dark:text-zinc-100 hover:underline">Projects</a>
                </li>
                <li>
                  <a href="#contact" className="text-zinc-900 p-5 dark:text-zinc-100 hover:underline">Contact</a>
                </li>
              </ul>
            </nav>
          </motion.nav>
          </div>
    </div>
  )
}
