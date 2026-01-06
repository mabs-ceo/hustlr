import React from "react"
import { FaRegComment } from "react-icons/fa"
import { features } from "./features"

const Page = () => {
  return (
    <div className="bg-white text-slate-950 dark:bg-background dark:text-white transition-colors duration-300">

      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <h1 className="font-extrabold uppercase tracking-tight mb-6 text-[48px]">
            Turn your online presence into a lead machine
          </h1>

          <p className="mb-8 max-w-[600px] font-light tracking-tight text-slate-700 dark:text-slate-400">
            We build conversion-focused websites and landing pages that turn visitors into inquiries, calls, and paying customers.
          </p>

          <div className="inline-flex flex-col gap-4">
            <a
         href="https://wa.me/6582240060?text=I%20want%20a%20professional%20website%20for%20my%20business.%20Please%20share%20pricing%20and%20timeline."
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase rounded-full px-6 py-4 font-bold inline-flex items-center gap-2 
                         bg-darktext text-background hover:scale-105 transition-transform"
            >
              <FaRegComment />
              Let’s build your lead system
            </a>

            <span className="text-sm text-slate-500 dark:text-slate-400">
              Starting from just $199
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="font-black text-3xl uppercase mb-2">
            Why your business needs a lead-focused online presence
          </h2>

          <p className="text-sm font-light text-slate-600 dark:text-slate-400">
            A website without conversions is just decoration. Infrastructure generates leads.
          </p>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-12 text-center">
          Every element we build is designed to earn trust, remove friction, and push visitors to take action.
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="p-6 border rounded-2xl transition-all duration-200
                           bg-white dark:bg-transparent
                           border-slate-200 dark:border-darktext/50
                           hover:-translate-y-2 hover:shadow-lg dark:hover:shadow-none"
              >
                <span className="block text-sm font-black mb-4 text-darktext">
                  0{index + 1}
                </span>

                <Icon size={28} className="mb-3 text-darktext" />

                <h3 className="font-bold text-lg mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-500">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Page
