import React from "react"
import { LuCircleCheckBig } from "react-icons/lu"

const Pricing = () => {
  const pricingPackages = [
    {
      id: "launch",
      name: "Launch",
      price: 199,
      currency: "SGD",
      description: "For early-stage businesses ready to capture leads fast",
      deliveryTime: "3–5 days",
      features: [
        "High-conversion landing page",
        "Clear call-to-action",
        "Mobile-first design",
        "WhatsApp / contact integration",
        "Basic SEO setup",
        "Deployment included",
        "1 revision"
      ],
      paymentTerms: "100% upfront"
    },
    {
      id: "business",
      name: "Business",
      price: 399,
      currency: "SGD",
      description: "For businesses that want credibility and consistent inquiries",
      deliveryTime: "7–10 days",
      features: [
        "3–5 page conversion-focused website",
        "Trust & credibility sections",
        "Lead capture forms",
        "SEO fundamentals",
        "Performance optimization",
        "2 revisions"
      ],
      paymentTerms: "50% upfront, 50% on delivery",
      highlight: true
    },
    {
      id: "custom",
      name: "Custom",
      price: 1999,
      currency: "SGD",
      description: "For serious businesses building systems, not just websites",
      deliveryTime: "3–6 weeks",
      features: [
        "Custom web application",
        "Authentication & roles",
        "Dashboards & workflows",
        "APIs & database",
        "Secure production deployment"
      ],
      paymentTerms: "Milestone-based"
    }
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="font-black text-3xl uppercase mb-3">
          Transparent pricing
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Choose the level that matches your business stage. Scale when ready.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPackages.map((pkg) => (
          <div
            key={pkg.id}
            className={`p-8 border rounded-2xl transition-all
              bg-white dark:bg-transparent
              border-slate-200 dark:border-darktext/40
              ${pkg.highlight ? "ring-2 ring-darktext" : ""}
            `}
          >
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl font-black uppercase mb-2">
                {pkg.name}
              </h3>

              <div className="flex items-end gap-1 mb-2">
                <span className="text-sm font-bold">
                  {pkg.currency}
                </span>
                <span className="text-3xl font-black">
                  {pkg.price}
                </span>
                <span className="text-sm font-bold">+</span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400">
                {pkg.description}
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-6">
              {pkg.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-500"
                >
                  <LuCircleCheckBig className="text-darktext mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>{pkg.deliveryTime}</span>
              <span>{pkg.paymentTerms}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
