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
    <div>
           <div className=" min-h-screen bg-white font-sans dark:bg-black ">
         {/* 🌟 NAVBAR ANIMATION */}
        <motion.nav initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className=" w-full  border-r border-zinc-200 dark:border-zinc-800 shadow-md hover:shadow-lg transition-shadow duration-300">
            < a href="" className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 ml-2"><BsChevronLeft /> </a>
        </motion.nav>

        <nav className=" flex justify-center mt-20 ">
        <ul className="flex  ">
                <li>
                <a href=""className="text-zinc-900 font-bold p-5 dark:text-zinc-100 hover:underline">My work</a>
                </li>
                <li>
                <a href=""className="text-zinc-900 font-bold p-5 dark:text-zinc-100 hover:underline">
                    <Link href="/professional">
                    Professional work
                    </Link>
                    </a>
                </li>
            </ul>
        </nav>
        </div>
    </div>
  )
}
