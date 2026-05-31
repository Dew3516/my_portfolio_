"use client";

import { useEffect, useSyncExternalStore } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const themeChangeEvent = "themechange";

function getThemeSnapshot() {
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return stored ? stored === "dark" : prefersDark;
}

function getServerThemeSnapshot() {
  return false;
}

function subscribeToThemeChange(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  window.addEventListener("storage", callback);
  window.addEventListener(themeChangeEvent, callback);
  mediaQuery.addEventListener("change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(themeChangeEvent, callback);
    mediaQuery.removeEventListener("change", callback);
  };
}

export default function DarkModeToggle() {
  const darkMode = useSyncExternalStore(
    subscribeToThemeChange,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    const next = !darkMode;
    localStorage.setItem("theme", next ? "dark" : "light");
    window.dispatchEvent(new Event(themeChangeEvent));
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
