import React from "react"
import { FaRegComment } from "react-icons/fa"
import {
  LuHandshake,
  LuTrophy,
  LuTrendingUp,
  LuHistory,
  LuCircleCheckBig,
} from "react-icons/lu"

const features = [
  {
    icon: LuHandshake,
    title: "Build trust instantly",
    description:
      "People expect a website. Without one, your business feels unverified — even if you’re good at what you do.",
  },
  {
    icon: LuHistory,
    title: "Be available 24/7",
    description:
      "Your website answers questions, shows your services, and collects inquiries while you sleep.",
  },
  {
    icon: LuTrophy,
    title: "Own your brand",
    description:
      "Social platforms change rules. A website gives you full control over your message, design, and audience.",
  },
  {
    icon: LuTrendingUp,
    title: "Turn visitors into leads",
    description:
      "A clear website guides users to take action — request a quote, book a call, or message you.",
  },
]

const _DarkPage = () => {
  return (
    <div className="bg-background text-white transition-all duration-500">

      {/* Hero Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-extrabold uppercase tracking-tight mb-6 text-[48px] text-darktext">
            Build websites that drive business results
          </h1>

          <p className="text-slate-400 mb-8 max-w-[600px] font-light tracking-tight">
            At Hustlr we create fast, mobile-friendly websites built for businesses that want to grow online.
          </p>

          <div className="inline-flex flex-col gap-4">
            <a
  href="https://wa.me/6588062313"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:scale-105 transition-all duration-75 uppercase bg-darktext text-background rounded-full px-6 py-4 font-bold inline-flex items-center gap-2"
>
  <FaRegComment />
  Get your website now
</a>

            <span className="text-slate-400 text-sm">
              Starting from just $100
            </span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="font-black text-3xl text-darktext uppercase mb-2">
            Why your business needs a website
          </h2>
          <p className="text-sm font-light text-slate-400">
            A website is not a luxury. It is infrastructure.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="p-8 border-2 border-darktext/50 transition-all duration-300 hover:border-darktext hover:-translate-y-4 flex flex-col gap-4 text-left"
              >
                <Icon size={32} className="text-darktext" />
                <p className="text-darktext uppercase font-bold text-lg">
                  {feature.title}
                </p>
                <p className="text-slate-500">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-[600px] mx-auto">
          <div className="bg-slate-950/20 p-10 border border-slate-500 text-center">
            <h2 className="font-black text-2xl text-darktext uppercase tracking-wider mb-8">
              Transparent pricing
            </h2>

            <div className="flex justify-center items-end mb-6">
              <span className="text-3xl font-bold text-darktext mr-1">$</span>
              <span className="text-6xl font-black text-darktext">100</span>
              <span className="text-3xl font-bold text-darktext ml-1">+</span>
            </div>

            <p className="text-lg text-textdark mb-8">
              Starting price for a professional business website. Final cost depends on your specific needs.
            </p>

            <ul className="text-left mb-8 space-y-3">
              {[
                "Responsive design",
                "Fast loading speed",
                "Mobile optimized",
                "Contact forms",
                "SEO basics",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-lg text-slate-500"
                >
                  <LuCircleCheckBig className="text-darktext" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="hover:scale-105 transition-all duration-75 w-full uppercase bg-darktext text-background rounded-full px-10 py-5 text-lg font-bold inline-flex justify-center items-center gap-2">
              <FaRegComment />
              Request custom quote
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default _DarkPage
