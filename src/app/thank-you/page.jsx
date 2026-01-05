"use client"
import React, { useEffect } from "react"
import { useRouter } from "next/navigation"

const ThankYou = () => {
  const router = useRouter()

  useEffect(() => {
    // Redirect to home after 5 seconds
    const timer = setTimeout(() => {
      router.push("/")
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white dark:bg-background text-slate-950 dark:text-white transition-colors duration-300">
      <h1 className="text-4xl font-black mb-4 text-center">
        Thank you for reaching out!
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 text-center mb-6">
        We’ve received your submission and will get back to you within 24 hours.
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
        Redirecting to homepage in 5 seconds...
      </p>
    </div>
  )
}

export default ThankYou
