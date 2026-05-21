"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    return stored === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    const next = !darkMode;
    localStorage.setItem("theme", next ? "dark" : "light");
    setDarkMode(next);
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full bg-gray-200 p-3 transition-all duration-300 hover:scale-110 dark:bg-zinc-800"
    >
      {darkMode ? (
        <FaSun className="text-yellow-400" />
      ) : (
        <FaMoon className="text-gray-900" />
      )}
    </button>
  );
}