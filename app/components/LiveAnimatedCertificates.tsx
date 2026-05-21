"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  link?: string;
}

const certificates: Certificate[] = [
  {
    title: "Learn Tailwind CSS",
    issuer: "Coursera",
    date: "Oct 2025",
    image: "/TAILWIN CSS.png",
    link: "https://coursera.org/verify/3EDQ98KS19FG",
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Coursera - Google Cloud",
    date: "Apr 2025",
    image: "/GOOGLE.png",
    link: "https://coursera.org/verify/MKZYI5XHA5GM",
  },
  {
    title: "Introduction to Responsible AI",
    issuer: "Coursera - Google Cloud",
    date: "Oct 2025",
    image: "/cloud.png",
    link: "https://coursera.org/verify/RVVTMLFSOGB8",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Coursera - Google Cloud",
    date: "Oct 2025",
    image: "/clo.png",
    link: "https://coursera.org/verify/ZQDDI7V6R5HG",
  },
  {
    title: "Python Beginners",
    issuer: "CODL",
    date: "Jan 2026",
    image: "/codl.png",
    link: "https://open.uom.lk/verify",
  },
];

export default function LiveAnimatedCertificates() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const looping = [...certificates, ...certificates];

  // Auto Scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let raf = 0;
    let last = performance.now();

    const speed = 50;

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;

      if (!isPaused) {
        el.scrollLeft += speed * dt;

        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft = 0;
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [isPaused]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: direction === "right" ? 340 : -340,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="liveAnimatedCertificates"
      className="relative overflow-hidden px-6 py-24 md:px-20 bg-gray-100 dark:bg-gray-950"
    >
      {/* Background Blur */}
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-amber-500/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Certificates
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
          Professional certifications & achievements
        </p>
      </motion.div>

      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 z-20 -translate-y-1/2 hidden md:flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-white/20 text-white hover:scale-110 transition"
        >
          <FaChevronLeft />
        </button>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 z-20 -translate-y-1/2 hidden md:flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-xl bg-white/20 dark:bg-black/20 border border-white/20 text-white hover:scale-110 transition"
        >
          <FaChevronRight />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-8 overflow-x-auto px-4 py-4 scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {looping.map((cert, index) => (
            <motion.div
              key={`${cert.title}-${index}`}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
              }}
              className="group relative min-w-[320px] overflow-hidden rounded-[32px]"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-amber-500/20 via-pink-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Card */}
              <div className="relative backdrop-blur-2xl bg-white/70 dark:bg-gray-900/70 border border-white/20 dark:border-gray-700 rounded-[32px] p-5 shadow-2xl">
                {/* Certificate Image */}
                {cert.image && (
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={400}
                      height={220}
                      className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="mt-5">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {cert.issuer}
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                    {cert.date}
                  </p>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-5 rounded-full bg-gradient-to-r from-amber-500 to-pink-500 px-5 py-2 text-sm font-semibold text-white shadow-lg hover:scale-105 transition"
                    >
                      View Certificate →
                    </a>
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