"use client"
import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-12 py-8 border-t border-gray-200 dark:border-gray-700 dark:bg-background bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-700 dark:text-gray-400">
          &copy; {year} Hustlry. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
