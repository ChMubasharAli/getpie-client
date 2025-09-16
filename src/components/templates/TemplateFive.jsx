// src/components/templates/EcommerceTemplate.jsx
// E-commerce-themed template modified to include dynamic formData (website_name, business_description, logo) in the header and hero sections.
// Non-header sections (About, Services, FAQ, Footer) are blurred in preview mode using Tailwind's filter blur-sm.
// Original design and content preserved exactly as provided, with only specified changes.

import { Text } from "@mantine/core";
import React from "react";

export default function TemplateFive({ formData = {}, isPreview = false }) {
  // Dynamic data from formData with fallbacks to original content
  const businessName = formData.businessName || "ShopEase";
  const description =
    formData.business_description ||
    "Discover amazing products, unbeatable prices, and exceptional service. Everything you need, delivered right to your doorstep with just a few clicks.";
  const logoSrc = formData.logo
    ? URL.createObjectURL(formData.logo)
    : "/default-logo.jpg"; // Fallback logo image

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <header className="bg-amber-900 shadow-2xl sticky top-0 z-50 border-b-4 border-amber-400">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center group">
              <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 overflow-hidden mr-4 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-12">
                <img
                  src={logoSrc || "/placeholder.svg"}
                  alt="Website Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-2xl font-black text-white tracking-wide">
                {businessName}
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-10">
              {[
                { href: "#ECOMMERCE-HEADER", text: "Home" },
                { href: "#ECOMMERCE-ABOUT", text: "About" },
                { href: "#ECOMMERCE-SERVICES", text: "Services" },
                { href: "#ECOMMERCE-FAQ", text: "FAQ" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="relative text-white hover:text-amber-200 transition-all duration-300 font-bold text-lg group"
                >
                  {item.text}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-amber-400 group-hover:w-full transition-all duration-500 rounded-full"></span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <section
        id="ECOMMERCE-HEADER"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Organic background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-100 to-red-100"></div>
        <div className="absolute top-10 left-20 w-80 h-80 bg-amber-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-orange-300/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-red-300/30 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Section */}
            <div className="space-y-10 animate-slide-in-left">
              <div className="space-y-8">
                <div className="inline-block px-6 py-3 bg-amber-200/80 rounded-full text-amber-900 font-bold text-sm tracking-wide uppercase">
                  Premium Experience
                </div>
                <h1 className="text-7xl lg:text-8xl font-black leading-none">
                  <span className="text-amber-900 block">{businessName}</span>
                </h1>
                <Text
                  lineClamp={4}
                  className="!font-DmSans !text-xl !text-gray-500 !leading-relaxed !text-pretty !max-w-lg"
                >
                  {description}
                </Text>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="group relative px-10 py-5 bg-amber-700 hover:bg-amber-800 text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 overflow-hidden">
                  <span className="relative z-10">Explore Now</span>
                  <div className="absolute inset-0 bg-orange-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
                <button className="px-10 py-5 border-3 border-amber-700 text-amber-900 bg-white/90 rounded-full font-bold text-xl hover:bg-amber-700 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Side - Contact Form with organic design */}
            <div className="relative animate-slide-in-right">
              <div className="bg-white/90 backdrop-blur-xl border-4 border-amber-200 rounded-[3rem] p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-300/30 to-orange-300/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-orange-300/30 to-red-300/30 rounded-full blur-xl"></div>

                <div className="text-center mb-10 relative z-10">
                  <h3 className="text-4xl font-black text-amber-900 mb-4">
                    Let's Connect
                  </h3>
                  <p className="text-amber-700 text-lg font-medium">
                    Ready to start your journey with us?
                  </p>
                </div>

                <form className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-black text-amber-900 mb-3 uppercase tracking-wide"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-6 py-4 bg-amber-50 border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-amber-300 focus:border-amber-400 outline-none transition-all duration-300 hover:bg-white group-hover:shadow-lg font-medium"
                        placeholder="Your first name"
                      />
                    </div>
                    <div className="group">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-black text-amber-900 mb-3 uppercase tracking-wide"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-6 py-4 bg-amber-50 border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-amber-300 focus:border-amber-400 outline-none transition-all duration-300 hover:bg-white group-hover:shadow-lg font-medium"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-black text-amber-900 mb-3 uppercase tracking-wide"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-6 py-4 bg-amber-50 border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-amber-300 focus:border-amber-400 outline-none transition-all duration-300 hover:bg-white group-hover:shadow-lg font-medium"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-sm font-black text-amber-900 mb-3 uppercase tracking-wide"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-6 py-4 bg-amber-50 border-2 border-amber-200 rounded-2xl focus:ring-4 focus:ring-amber-300 focus:border-amber-400 outline-none transition-all duration-300 hover:bg-white group-hover:shadow-lg resize-none font-medium"
                      placeholder="Tell us about your needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-700 hover:bg-amber-800 text-white px-8 py-5 rounded-2xl font-black text-xl transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="ECOMMERCE-ABOUT"
        className={`py-32 bg-gradient-to-br from-orange-100 to-red-100 ${
          isPreview ? "filter blur-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-8 py-4 bg-amber-200/80 rounded-full text-amber-900 font-bold text-lg tracking-wide uppercase mb-8">
              Our Story
            </div>
            <h2 className="text-6xl font-black text-amber-900 leading-tight mb-8">
              Crafting Excellence
              <br />
              <span className="text-orange-700">Since Day One</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border-2 border-amber-200 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <p className="text-2xl text-amber-800 leading-relaxed font-medium mb-6">
                  We are dedicated to providing exceptional products and
                  services that meet your needs. Our commitment to quality,
                  innovation, and customer satisfaction drives everything we do.
                </p>
                <p className="text-xl text-amber-700 leading-relaxed font-medium">
                  With years of experience in the industry, we understand what
                  our customers want and continuously strive to exceed
                  expectations through our comprehensive range of offerings.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8">
                {[
                  {
                    number: "10K+",
                    label: "Happy Customers",
                    color: "from-amber-500 to-orange-500",
                  },
                  {
                    number: "5+",
                    label: "Years Experience",
                    color: "from-orange-500 to-red-500",
                  },
                  {
                    number: "99%",
                    label: "Satisfaction Rate",
                    color: "from-red-500 to-amber-500",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-white/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  >
                    <div
                      className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-sm font-bold text-amber-800 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-orange-400/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
              <img
                src="/ecommerce/aboutImage.jpg"
                alt="Fresh food preparation"
                width={400}
                height={500}
                className="relative w-full h-auto rounded-3xl shadow-2xl hover:scale-105 duration-700 transition-all ease-out border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="ECOMMERCE-SERVICES"
        className={`relative py-32 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 ${
          isPreview ? "filter blur-sm" : ""
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.2),transparent)] opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(249,115,22,0.2),transparent)] opacity-60"></div>

        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="text-center mb-24">
            <div className="inline-block px-8 py-4 bg-amber-200/20 rounded-full text-amber-200 font-bold text-lg tracking-wide uppercase mb-8 border border-amber-400/30">
              Our Process
            </div>
            <h2 className="text-6xl md:text-7xl font-black mb-8">
              <span className="text-amber-200">How We Create</span>
              <br />
              <span className="text-orange-300">Magic Together</span>
            </h2>
            <p className="text-2xl text-amber-100 max-w-4xl mx-auto leading-relaxed font-medium">
              From concept to creation, we follow a fluid process that adapts to
              your unique vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery & Vision",
                desc: "We dive deep into understanding your goals, audience, and the unique story you want to tell through digital experiences.",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Fluid Design Process",
                desc: "Our design flows naturally from research to wireframes to high-fidelity prototypes, ensuring every element serves a purpose.",
                icon: "🎨",
              },
              {
                step: "03",
                title: "Adaptive Development",
                desc: "We build with flexibility in mind, creating solutions that can evolve and grow with your changing needs.",
                icon: "⚡",
              },
              {
                step: "04",
                title: "Continuous Evolution",
                desc: "Launch is just the beginning. We monitor, optimize, and enhance your digital presence for ongoing success.",
                icon: "🚀",
              },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="relative bg-gradient-to-br from-amber-800/80 to-orange-800/80 backdrop-blur-sm p-10 rounded-[2rem] shadow-2xl border-2 border-amber-400/30 hover:border-amber-300/60 transition-all duration-700 hover:shadow-amber-500/20 hover:shadow-3xl group-hover:scale-105 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-2xl"></div>

                  <div className="relative">
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center text-white font-black text-2xl shadow-xl border-2 border-amber-300">
                        {item.step}
                      </div>
                      <div className="text-6xl">{item.icon}</div>
                    </div>
                    <h3 className="text-amber-100 text-3xl md:text-4xl font-black mb-6 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-amber-200 text-xl leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="ECOMMERCE-FAQ"
        className={`py-32 bg-gradient-to-br from-orange-50 to-red-50 ${
          isPreview ? "filter blur-sm" : ""
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-block px-8 py-4 bg-amber-200/80 rounded-full text-amber-900 font-bold text-lg tracking-wide uppercase mb-8">
              Got Questions?
            </div>
            <h2 className="text-6xl font-black mb-8">
              <span className="text-amber-900">Frequently Asked</span>
              <br />
              <span className="text-orange-700">Questions</span>
            </h2>
            <p className="text-2xl text-amber-800 font-medium">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "How do I place an order?",
                answer:
                  "Simply browse our products, add items to your cart, and proceed to checkout. Our streamlined process makes ordering quick and easy. You'll receive confirmation and tracking information via email.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards, PayPal, and other secure payment methods. All transactions are encrypted and processed through secure payment gateways for your protection.",
              },
              {
                question: "How long does delivery take?",
                answer:
                  "Standard delivery typically takes 3-5 business days. Express delivery options are available for faster shipping. Delivery times may vary based on your location and product availability.",
              },
              {
                question: "What is your return policy?",
                answer:
                  "We offer a 30-day return policy for most items. Products must be in original condition with packaging. Contact our support team to initiate a return and receive detailed instructions.",
              },
              {
                question: "How can I track my order?",
                answer:
                  "Once your order ships, you'll receive a tracking number via email. You can use this number to monitor your package's progress on our website or the carrier's tracking page.",
              },
            ].map((faq, index) => (
              <div key={index} className="group">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl border-3 border-amber-200 hover:border-amber-300 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                  <h3 className="text-2xl font-black text-amber-900 mb-6 group-hover:text-orange-700 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-amber-800 text-lg leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer
        className={`relative bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 py-24 ${
          isPreview ? "filter blur-sm" : ""
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(251,191,36,0.15),transparent)] opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(249,115,22,0.15),transparent)] opacity-50"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-amber-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            {/* Company Info */}
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-4 shadow-xl">
                  <span className="text-white font-black text-2xl">S</span>
                </div>
                <span className="text-3xl font-black text-amber-100">
                  ShopEase
                </span>
              </div>
              <p className="text-amber-200 leading-relaxed text-lg font-medium">
                Your trusted online shopping destination. Quality products,
                competitive prices, and exceptional service.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-black text-amber-100 mb-8 uppercase tracking-wide">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {[
                  { href: "ECOMMERCE-HEADER", text: "Home" },
                  { href: "#ECOMMERCE-ABOUT", text: "About Us" },
                  { href: "#ECOMMERCE-SERVICES", text: "Services" },
                  { href: "#ECOMMERCE-FAQ", text: "FAQ" },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-amber-200 hover:text-amber-300 transition-all duration-300 hover:translate-x-2 inline-block text-lg font-medium"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-2xl font-black text-amber-100 mb-8 uppercase tracking-wide">
                Our Services
              </h3>
              <ul className="space-y-4">
                {[
                  "Premium Quality",
                  "Fast Delivery",
                  "24/7 Support",
                  "Easy Returns",
                ].map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-amber-200 hover:text-amber-300 transition-all duration-300 hover:translate-x-2 inline-block text-lg font-medium"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-2xl font-black text-amber-100 mb-8 uppercase tracking-wide">
                Contact Us
              </h3>
              <div className="space-y-4 text-amber-200 text-lg font-medium">
                <p>123 Commerce Street</p>
                <p>Business City, BC 12345</p>
                <p className="hover:text-amber-300 transition-colors duration-300 cursor-pointer">
                  support@shopease.com
                </p>
                <p className="hover:text-amber-300 transition-colors duration-300 cursor-pointer">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-amber-700/50 mt-20 pt-10 text-center">
            <p className="text-amber-200 text-lg font-medium">
              © 2024 ShopEase. All rights reserved. | Privacy Policy | Terms of
              Service
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
