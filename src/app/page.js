"use client"

import React, { useEffect, useState } from "react"
import Form from "../components/_form"
import Footer from "../components/_footer"
import DarkPage from "../components/_DarkPage"
import LightPage from "../components/_LightPage"
import { LuMoon, LuSun } from "react-icons/lu"

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(null)

  // Initialize theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark")
    } else {
      setIsDarkMode(prefersDark)
    }
  }, [])

  // Apply theme
  useEffect(() => {
    if (isDarkMode === null) return

    const root = document.documentElement
    if (isDarkMode) {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDarkMode])

  if (isDarkMode === null) return null

  return (
    <div className="relative flex flex-col min-h-screen bg-amber-50 dark:bg-background dark:text-white">
      
      {/* Theme Toggle */}
      <button
          onClick={() => {
    const root = document.documentElement;
    root.classList.add("crt-flicker");
    setIsDarkMode(!isDarkMode);

    // Remove animation after it finishes
    setTimeout(() => root.classList.remove("crt-flicker"), 500);
  }}
        className="fixed top-10 right-10 z-50 w-10 h-10 rounded-full border-2 border-background dark:border-[#d9fb06] flex items-center justify-center hover:scale-105 transition-all duration-75"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? <LuMoon /> : <LuSun />}
      </button>

      {/* Page Content */}
      {isDarkMode ? <DarkPage /> : <LightPage />}

      {/* Shared Sections */}
      <Form />
      <Footer />
    </div>
  )
}
