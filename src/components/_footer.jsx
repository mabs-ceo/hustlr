"use client"
import React,{useState} from 'react'

const _footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className="mt-12 py-8 border-t border-gray-700 dark:border-gray-700 dark:bg-background bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {year} Hustlry. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default _footer