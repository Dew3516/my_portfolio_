"use client"
import Image from "next/image";
import { BsFillFileEarmarkMedicalFill } from "react-icons/bs";
import { FaTwitter, FaFacebook, FaLinkedin, FaDribbble,FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaLandMineOn } from "react-icons/fa6";
import { Metadata } from "next";
import { motion } from "framer-motion";
import Link from "next/link";

import { BsChevronLeft } from "react-icons/bs";


export default function page() {
  return (
    <div className="  bg-white font-sans dark:bg-black ">
        {/* 🌟 NAVBAR ANIMATION */}
      <nav className=" w-full sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-md border-b border-zinc-200 dark:border-zinc-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl block font-bold text-zinc-900 dark:text-zinc-100 ">Shashini Dewmini</h1>
            <ul className="hidden md:flex gap-8">
              <li>
                <Link href="#" className="text-zinc-900 p-5 dark:text-zinc-100 hover:underline">Home</Link>
              </li>
              <li>
                <Link href="#about" className="text-zinc-900 p-5 dark:text-zinc-100 hover:underline">About</Link>
              </li>
              <li>
                <Link href="#skill" className="text-zinc-900 p-5 dark:text-zinc-100 hover:underline">Skils</Link>
              </li>
              <li>
                <Link href="#project" className="text-zinc-900 p-5 dark:text-zinc-100 hover:underline">Projects</Link>
              </li>
              <li>
                <Link href="#certificate" className="text-zinc-900 p-5 dark:text-zinc-100 hover:underline">Certificate</Link>
              </li>
              <li>
                <Link href="#contact" className="text-zinc-900 p-5 dark:text-zinc-100 hover:underline">Contact</Link>
              </li>
            </ul>
        </div>
        </nav >

            <nav className="flex justify-center mt-12">
              <ul className="flex gap-8">
                <li>
                  <a
                    href="#"
                    className="text-zinc-900 font-semibold dark:text-zinc-100 hover:underline"
                  >
                    My work
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-zinc-900 font-semibold dark:text-zinc-100 hover:underline"
                  >
                    Professional work
                  </a>
                </li>
              </ul>
            </nav>


        {/* 👉 Clean Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12 ">
           {/* 🌟 CARD TEMPLATE */}
        <div id="project" className="min-h-screen columns-2 flex flex-col  mt-5 items-center justify-center  gap-8">
            <h2 className="text-4xl font-bold mb-8 text-zinc-900 dark:text-zinc-100">Projects</h2>
            <motion.div initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}>
            <div className="rounded-2xl overflow-hidden border border-zinc-300 dark:border-zinc-700 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all bg-white dark:bg-zinc-900 p-5">
            <Image src="/facebook poster figma.png" alt="Project 1" width={300} height={200} className="rounded-xl mb-4 object-cover"/>
            <h3 className="font-semibold text-xl text-zinc-900 dark:text-zinc-100">Furniture Social Post</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2">Create simple furniture post.</p>
            <p className="mt-4 text-sm font-light">Technologies: Figma</p>
           </div>
           </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 40 }}
                transition={{ duration: 1.5 }}>
            <div className="rounded-2xl overflow-hidden border border-zinc-300 dark:border-zinc-700 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all bg-white dark:bg-zinc-900 p-5">
            <Image src="/poster 1.png" alt="Project 1" width={300} height={200} className="rounded-xl mb-4 object-cover"/>
            <h3 className="font-semibold text-xl text-zinc-900 dark:text-zinc-100">Backor Brand Design</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2"></p>
            <p className="mt-4 text-sm font-light">Technologies: Canva</p>
           </div> 
           </motion.div>
            </div>

                <motion.div initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 40 }}
                transition={{ duration: 1.5 }}>
            <div className="rounded-2xl overflow-hidden border border-zinc-300 dark:border-zinc-700 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all bg-white dark:bg-zinc-900 p-5">
            <Image src="/Backor.jpg" alt="Project 1" width={400} height={250} className="rounded-xl mb-4 object-cover"/>
            <h3 className="font-semibold text-xl text-zinc-900 dark:text-zinc-100">Backor Brand Design</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2"></p>
            <p className="mt-4 text-sm font-light ">Technologies: Adobe Illustrator</p>
           </div> 
           </motion.div>

             <motion.div initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 40 }}
                transition={{ duration: 1.5 }}>
            <div className="rounded-2xl overflow-hidden border border-zinc-300 dark:border-zinc-700 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all bg-white dark:bg-zinc-900 p-5">
            <Image src="/burn.png" alt="Project 1" width={400} height={250} className="rounded-xl mb-4 object-cover"/>
            <h3 className="font-semibold text-xl backdrop-blur-md">Project Title 2</h3>
            <p className="font-thin"></p>
            <ul className="mt-6">
              <li className="font-thin">Technologies: Canva</li>
            </ul>
           </div> 
           </motion.div>

           <motion.div initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 40 }}
                transition={{ duration: 1.5 }}>
            <div className="rounded-2xl overflow-hidden border border-zinc-300 dark:border-zinc-700 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all bg-white dark:bg-zinc-900 p-5">
            <Image src="/Fitness Tracking App.png" alt="Project 1" width={300} height={200} className="rounded-xl mb-4 object-cover"/>
            <h3 className="font-semibold text-xl text-zinc-900 dark:text-zinc-100">Fitness App UI Design</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2">Mobile UI design concept.</p>
            <p className="mt-4 text-sm font-light">Technologies: Figma</p>
           </div> 
           </motion.div>

           <motion.div initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 40 }}
                transition={{ duration: 1.5 }}>
            <div className="mt-10 flex-3 mx-20  h-125  w-auto items-center self-center justify-center rounded-md borde p-4shadow-md hover:shadow-lg  text-zinc-800 dark:text-zinc-200 justify-items-center border-b-2 border-zinc-300 pb-4">
            <Image src="/Untitled-4.png" alt="Project 1" width={300} height={200} className="mb-4 rounded-md"/>
            <h3 className="font-semibold text-xl text-zinc-900 dark:text-zinc-100">Creative Digital Poster</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2"></p>
            <p className="mt-4 text-sm font-light">Technologies: Photoshop</p>
           </div> 
           </motion.div>
           </div>
    </div>
  )
}
