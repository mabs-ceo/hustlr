import React from 'react'
import { FaRegComment } from 'react-icons/fa';
import { LuCircleCheckBig } from 'react-icons/lu';

const _pricing = () => {
    const pricingPackages = [
      {
        id: "starter",
        name: "Starter",
        price: 199,
        currency: "SGD",
        description: "For idea validation and simple web presence",
        link:"https://wa.me/6588062313?text=I%27m%20interested%20in%20the%20Starter%20website%20plan.%20Please%20share%20features%20and%20pricing.",
        deliveryTime: "3–5 days",
        features: [
          "1-page website",
          "Mobile responsive",
          "Basic SEO",
          "Contact / WhatsApp button",
          "Deployment",
          "1 revision"
        ],
        limitations: [
          "No backend",
          "No CMS",
          "No support"
        ],
        paymentTerms: "100% upfront"
      },
      {
        id: "business",
        name: "Business",
        price: 399,
        currency: "SGD",
        description: "For SMEs that need credibility and leads",
        link:"https://wa.me/6588062313?text=I%20want%20a%20professional%20business%20website.%20Please%20share%20pricing%2C%20timeline%2C%20and%20next%20steps.",
        deliveryTime: "7–10 days",
        features: [
          "3–5 pages",
          "Custom UI",
          "Contact form",
          "SEO fundamentals",
          "Performance optimized",
          "2 revisions"
        ],
        limitations: [
          "No complex backend",
          "No authentication"
        ],
        paymentTerms: "50% upfront, 50% on delivery"
      },
      {
        id: "custom",
        name: "Custom",
        price: 1999,
        currency: "SGD",
        description: "For real web applications and systems",
        link:"https://wa.me/6588062313?text=I%20need%20a%20custom%20website%20solution%20and%20would%20like%20to%20discuss%20requirements%20and%20scope.",
        deliveryTime: "3–6 weeks",
        features: [
          "Custom web app",
          "Auth & roles",
          "Dashboard",
          "APIs & database",
          "Secure deployment"
        ],
        limitations: [
          "Scope locked before build"
        ],
        paymentTerms: "Milestone-based"
      }
    ];
    
  return (
    <section className="py-24 px-6 relative z-10 flex flex-col gap-12">
    <h2 className="font-black text-3xl dark:text-darktext uppercase mb-2 text-center">
      Transparent pricing
    </h2>
  <div className="  grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">

    {pricingPackages.map((pkg) => (
      <div
        key={pkg.id}
        className="bg-slate-950/60 p-8 border border-slate-500 shadow-2xl"
      >
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4 relative ">

<div>


          <h3 className="text-xl font-black text-darktext uppercase ">
            {pkg.name}
          </h3>
          <div className="flex items-end ">
            <span className="text-lg font-bold text-darktext mr-1">
              {pkg.currency}
            </span>
            <span className="text-3xl font-black text-darktext">
              {pkg.price}
            </span>
            <span className="text-lg font-bold text-darktext ml-1">+</span>
          </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-textdark mb-4">
          {pkg.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {pkg.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 dark:text-slate-500"
            >
              <LuCircleCheckBig className="text-darktext" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="flex justify-between items-center text-sm dark:text-slate-500">
          <span>{pkg.deliveryTime}</span>
          <span>{pkg.paymentTerms}</span>
        
        </div>
        
      </div>
    ))}


  </div>
</section>
  )
}

export default _pricing