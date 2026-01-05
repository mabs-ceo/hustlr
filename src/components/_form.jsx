import React from 'react'

const _form = () => {
  return (
    <div className="max-w-[600px] w-full mx-auto px-4 py-16 relative z-10">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="uppercase dark:text-darktext font-black text-4xl mb-4">
          Get started today
        </h2>
        <p className="dark:text-slate-400 text-slate-800">
          Fill out the form below and we'll get back to you within 24 hours with a custom quote.
        </p>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-8" action={process.env.NEXT_PUBLIC_FORMSPREE_URL} method="POST">
        
        {/* Field */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="fullname"
            className="dark:text-darktext font-bold text-sm tracking-widest uppercase"
          >
            Full name *
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            className="
              w-full
              rounded-md
              bg-slate-950/50
              border border-darktext/20
              px-4 py-3
              text-base text-white
              shadow-sm
              transition-colors duration-200
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-darktext
            "
          />
        </div>

        {/* Field */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="dark:text-darktext font-bold text-sm tracking-widest uppercase"
          >
            Email address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="
              w-full
              rounded-md
              bg-slate-950/50
              border border-darktext/20
              px-4 py-3
              text-base text-white
              shadow-sm
              transition-colors duration-200
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-darktext
            "
          />
        </div>

        {/* Field */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="dark:text-darktext font-bold text-sm tracking-widest uppercase"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="
              w-full
              rounded-md
              bg-slate-950/50
              border border-darktext/20
              px-4 py-3
              text-base text-white
              shadow-sm
              transition-colors duration-200
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-darktext
            "
          />
        </div>

        {/* Field */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="business"
            className="dark:text-darktext font-bold text-sm tracking-widest uppercase"
          >
            Tell us about your business *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="
              w-full
              rounded-md
              bg-slate-950/50
              border border-darktext/20
              px-4 py-3
              text-base text-white
              shadow-sm
              transition-colors duration-200
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-darktext
              resize-none
            "
          />
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-4 items-center pt-4">
          <button className="w-full uppercase bg-darktext text-background rounded-full px-6 py-4 font-bold inline-flex justify-center items-center hover:scale-105 transition-all duration-75">
            Request free quote
          </button>

          <p className="text-sm text-slate-400">
            Prefer instant chat?{" "}
            <a
  href="https://wa.me/6588062313?text=I%20want%20a%20professional%20website%20for%20my%20business.%20Please%20share%20pricing%20and%20timeline."
  target="_blank"
  rel="noopener noreferrer"
  className="dark:text-darktext text-red-600 font-semibold cursor-pointer"
>
  Message me on WhatsApp
</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default _form
