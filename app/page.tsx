"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import DarkModeToggle from "./components/DarkModeToggle";
import ContactForm from "./components/ContactForm";
import Typewriter from "./components/Typewriter";
import Navbar from "./components/Navbar";
import { FaWhatsapp } from "react-icons/fa6";
import Projects from "./components/Projects";

import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Detail from "./components/Detail";
import LiveAnimatedCertificates from "./components/LiveAnimatedCertificates";
import Education from "./components/education";


export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black transition-all duration-300 dark:bg-gray-950 dark:text-white">
      
      {/* ---------- NAVBAR ---------- */}
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-white/80 px-6 py-4 shadow-md backdrop-blur-md transition-all duration-300 dark:bg-zinc-900/80">
        <h1 className="text-3xl font-extrabold text-fuchsia-600">Shashini</h1>
        <Navbar/>
        <div className="flex justify-end p-5">
        <DarkModeToggle />
      </div>
      </nav>

      {/* ---------- HERO SECTION ---------- */}
      <section
        id="home"
        className="relative overflow-hidden min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-24"
      >
        {/* Background Glow */}
        <div className="absolute top-0 left-0 h-[350px] w-[350px] rounded-full bg-fuchsia-500/20 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-[150px]" />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl text-center md:text-left"
        >
          {/* Badge */}
          <div className="inline-flex rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-5 py-2 text-sm font-medium text-fuchsia-500 backdrop-blur-xl mb-6">
            👋 Welcome to my portfolio
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            Hi, I’m
          </h1>

          <h1 className="mt-2 text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Shashini Dewmini
          </h1>

          {/* Typewriter */}
          <div className="mt-5 text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
            <Typewriter
              words={[
                "Frontend Developer",
                "UI/UX Designer",
                "React Developer",
                "Digital Marketer",
                "Graphic Designer",
              ]}
            />
          </div>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 max-w-xl">
            Passionate about crafting
            <span className="font-semibold text-fuchsia-500">
              {" "}beautiful web experiences
            </span>{" "}
            using React, Next.js & Tailwind CSS with modern UI and smooth user experiences.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-5">
            <a href="/Shashini_Dewmini_Frontend_CV_.pdf" download>
              <button className="rounded-2xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-500 px-8 py-4 text-lg font-semibold text-white shadow-2xl hover:scale-105 transition duration-300">
                Download CV
              </button>
            </a>

            <a href="#contact">
              <button className="rounded-2xl border border-fuchsia-500/30 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl px-8 py-4 text-lg font-semibold text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white transition duration-300">
                Contact Me
              </button>
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex justify-center md:justify-start gap-5">
            {[
              {
                icon: FaFacebook,
                link: "https://facebook.com/yourprofile",
              },
              {
                icon: FaLinkedin,
                link: "https://linkedin.com/in/yourprofile",
              },
              {
                icon: FaWhatsapp,
                link: "https://wa.me/94702224674",
              },
              {
                icon: FaGithub,
                link: "https://github.com/Dew3516",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -8,
                    scale: 1.1,
                  }}
                  className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl border border-white/20 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl shadow-xl hover:shadow-fuchsia-500/20 transition"
                >
                  <Icon className="text-2xl text-fuchsia-500" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="relative mb-14 md:mb-0"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-500 blur-[80px] opacity-30" />

          {/* Image Border */}
          <div className="relative rounded-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-500 p-2">
            <Image
              src="/abut me.jpg"
              width={420}
              height={420}
              alt="Profile"
              className="rounded-full border-[6px] border-white dark:border-gray-950 object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* ---------- ABOUT SECTION ---------- */}
      <section id="about" className="mt-28">
        <About/>
      </section>

      {/* ---------- EDUCATION SECTION ---------- */}
      <section id="education" className="mt-28">
        <Education/>
      </section>

      {/* ---------- SKILLS SECTION ---------- */}
          <section id="skills" className="mt-28">
            <Skills/>
          </section>
           
      {/* ---------- CERTIFICATE SECTION ---------- */}
            <section id="projects" className="mt-28">
              <LiveAnimatedCertificates/>
            </section>
      {/* ---------- PROJECt SECTION ---------- */}
            <section id="projects" className="mt-28">
              <Projects />
            </section>
      {/* ---------- BLOG SECTION ---------- 
            <section id="blog" className="mt-28">
            <BlogList />
            </section>    */}
      {/* ---------- CONTACT SECTION ---------- */}
      <section id="contact" className="px-8 md:px-20 py-20">

        <div className="grid grid-cols-2 gap-3 "> 
        <div className="max-w-2xl mx-auto flex justify-items-start items-start">
          <ContactForm />
        </div>
           <Detail/>
        </div>  
      </section>
      

      {/* ---------- FOOTER ---------- */}
      <Footer/>
    </div>
  );
}
