import React from 'react'
import { FaRegComment } from "react-icons/fa"

const _LightPage = () => {
  const cards = [
    {
      title: "Build trust instantly",
      description:
        "People expect a website. Without one, your business feels unverified — even if you’re good at what you do.",
    },
    {
      title: "Be available 24/7",
      description:
        "Your website answers questions, shows your services, and collects inquiries while you sleep.",
    },
    {
      title: "Own your brand",
      description:
        "Social platforms change rules. A website gives you full control over your message, design, and audience.",
    },
    {
      title: "Turn visitors into leads",
      description:
        "A clear website guides users to take action — request a quote, book a call, or message you.",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="w-full text-center flex justify-center py-24 px-6 relative z-10">
        <div className="flex flex-col max-w-3xl mx-auto w-full items-center">
          <h1 className="font-extrabold uppercase tracking-tight mb-6 text-[48px] text-slate-950">
  Build websites that drive business results
</h1>

          <p className="text-slate-800 mb-8 max-w-[600px] font-light tracking-tight">
          At Hustlry we create fast, mobile-friendly websites built for businesses that want to grow online.
          </p>

          <div className="inline-flex flex-col gap-4 items-center">
            <a
  href="https://wa.me/6588062313?text=I%20want%20to%20get%20a%20website%20built.%20Please%20contact%20me."
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

      {/* Card Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="uppercase font-black text-4xl text-slate-950 mb-3">
            Why your business needs a website
          </h2>
          <p className="text-slate-600">
            A website is not a luxury. It is infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white border border-slate-200 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="block text-sm font-black text-darktext mb-4">
                0{index + 1}
              </span>

              <h3 className="font-bold text-lg text-slate-950 mb-2">
                {card.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default _LightPage
