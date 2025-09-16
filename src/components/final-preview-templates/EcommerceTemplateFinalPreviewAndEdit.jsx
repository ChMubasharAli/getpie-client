// src/components/templates/EcommerceTemplate.jsx
// E-commerce-themed template modified to include dynamic formData (website_name, business_description, logo) in the header and hero sections.
// Non-header sections (About, Services, FAQ, Footer) are blurred in preview mode using Tailwind's filter blur-sm.
// Original design and content preserved exactly as provided, with only specified changes.

import React from "react";

export default function EcommerceTemplate({
  formData = {},
  isPreview = false,
}) {
  // Dynamic data from formData with fallbacks to original content
  const websiteName = formData.website_name || "ShopEase";
  const description =
    formData.business_description ||
    "Discover amazing products, unbeatable prices, and exceptional service. Everything you need, delivered right to your doorstep with just a few clicks.";
  const logoSrc = formData.logo
    ? URL.createObjectURL(formData.logo)
    : "/default-logo.jpg"; // Fallback logo image

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Clear, dynamic logo and website name */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative w-10 h-10 rounded-2xl bg-center overflow-hidden mr-2 bg-white ">
                <img
                  src={logoSrc}
                  alt="Website Logo"
                  className=" h-full w-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-gray-900">
                {websiteName}
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#ECOMMERCE-HEADER"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#ECOMMERCE-ABOUT"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                About
              </a>
              <a
                href="#ECOMMERCE-SERVICES"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#ECOMMERCE-FAQ"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                FAQ
              </a>
            </nav>

            {/* CTA */}
          </div>
        </div>
      </header>

      {/* Hero Section - Clear, dynamic content */}
      <section
        id="ECOMMERCE-HEADER"
        className="relative bg-cover bg-center py-20"
        style={{ backgroundImage: "url('/ecommerce/heroSectionImage.webp')" }}
      >
        <div className="absolute inset-0 bg-black/30 p-4" />{" "}
        {/* optional overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <div>
              <h1 className="text-5xl font-QuickSand lg:text-6xl font-bold text-white mb-6 leading-tight">
                {websiteName}
                <br />
                Experience
              </h1>
              <p className="text-lg font-DmSans text-gray-100 mb-8 leading-relaxed">
                {description}
              </p>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium">
                Shop now
              </button>
            </div>

            {/* Right Side - Contact Form */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="font-QuickSand text-2xl font-bold text-white mb-2">
                    Get In Touch
                  </h3>
                  <p className="font-DmSans text-gray-300">
                    Send us a message and we'll get back to you soon
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="font-QuickSand block text-sm font-semibold text-white mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full font-DmSans px-4 py-3 bg-white border border-gray-300 placeholder:text-sm placeholder:font-DmSans rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-none focus:outline-none transition-all duration-200"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="font-QuickSand block text-sm font-semibold text-white mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full font-DmSans px-4 py-3 bg-white border border-gray-300 placeholder:text-sm placeholder:font-DmSans rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-none focus:outline-none transition-all duration-200"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="font-QuickSand block text-sm font-semibold text-white mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full font-DmSans px-4 py-3 bg-white border border-gray-300 placeholder:text-sm placeholder:font-DmSans rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-none focus:outline-none transition-all duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="font-QuickSand block text-sm font-semibold text-white mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full font-DmSans px-4 py-3 bg-white border border-gray-300 placeholder:text-sm placeholder:font-DmSans rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-none focus:outline-none transition-all duration-200"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-br bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Blurred in preview */}
      <section
        id="ECOMMERCE-ABOUT"
        className={`py-20 bg-white ${isPreview ? "filter blur-sm" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/ecommerce/aboutImage.jpg"
                alt="Fresh food preparation"
                width={400}
                height={400}
                className="w-full h-auto rounded-2xl shadow-lg hover:scale-105 duration-500 transition-all ease-in-out"
              />
            </div>
            <div>
              <h2 className="font-QuickSand text-4xl font-bold text-gray-900 mb-6 text-balance">
                About Our Business
              </h2>
              <p className="font-DmSans text-lg text-gray-600 mb-6 leading-relaxed">
                We are dedicated to providing exceptional products and services
                that meet your needs. Our commitment to quality, innovation, and
                customer satisfaction drives everything we do.
              </p>
              <p className="font-DmSans text-lg text-gray-600 mb-8 leading-relaxed">
                With years of experience in the industry, we understand what our
                customers want and continuously strive to exceed expectations
                through our comprehensive range of offerings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Blurred in preview */}
      <section
        id="ECOMMERCE-SERVICES"
        className={`relative py-16 bg-gray-900 md:py-32 px-4 md:px-8 ${
          isPreview ? "filter blur-sm" : ""
        }`}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-QuickSand text-rose-500 text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Our Creative Journey
            </h2>
            <p className="font-DmSans text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to creation, we follow a fluid process that adapts to
              your unique vision
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-rose-600/20"></div>

            <div className="space-y-12 md:space-y-24 ml-8 md:ml-0">
              {[
                {
                  step: "01",
                  title: "Discovery & Vision",
                  desc: "We dive deep into understanding your goals, audience, and the unique story you want to tell through digital experiences.",
                  side: "left",
                },
                {
                  step: "02",
                  title: "Fluid Design Process",
                  desc: "Our design flows naturally from research to wireframes to high-fidelity prototypes, ensuring every element serves a purpose.",
                  side: "right",
                },
                {
                  step: "03",
                  title: "Adaptive Development",
                  desc: "We build with flexibility in mind, creating solutions that can evolve and grow with your changing needs.",
                  side: "left",
                },
                {
                  step: "04",
                  title: "Continuous Evolution",
                  desc: "Launch is just the beginning. We monitor, optimize, and enhance your digital presence for ongoing success.",
                  side: "right",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex ${
                    item.side === "right" ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 px-4 md:px-8">
                    <div
                      className={`bg-gray-800 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg border border-gray-700 ${
                        item.side === "right" ? "md:ml-8" : "md:mr-8"
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="font-QuickSand w-10 h-10 md:w-12 md:h-12 bg-rose-600 rounded-full flex items-center justify-center text-white font-bold">
                          {item.step}
                        </div>
                        <h3 className="font-QuickSand text-white md:text-2xl font-bold">
                          {item.title}
                        </h3>
                      </div>
                      <p className="font-DmSans text-gray-300 md:text-lg leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 md:w-6 md:h-6 bg-rose-600 hidden md:block rounded-full border-4 border-gray-900 shadow-lg mt-6 md:mt-0"></div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Blurred in preview */}
      <section
        id="ECOMMERCE-FAQ"
        className={`py-20 bg-white ${isPreview ? "filter blur-sm" : ""}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-QuickSand text-4xl font-bold text-gray-900 mb-4 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="font-DmSans text-lg text-gray-600">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="font-QuickSand text-lg font-bold text-gray-900 mb-3">
                How do I place an order?
              </h3>
              <p className="font-DmSans text-gray-600 leading-relaxed">
                Simply browse our products, add items to your cart, and proceed
                to checkout. Our streamlined process makes ordering quick and
                easy. You'll receive confirmation and tracking information via
                email.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="font-QuickSand text-lg font-bold text-gray-900 mb-3">
                What payment methods do you accept?
              </h3>
              <p className="font-DmSans text-gray-600 leading-relaxed">
                We accept all major credit cards, PayPal, and other secure
                payment methods. All transactions are encrypted and processed
                through secure payment gateways for your protection.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="font-QuickSand text-lg font-bold text-gray-900 mb-3">
                How long does delivery take?
              </h3>
              <p className="font-DmSans text-gray-600 leading-relaxed">
                Standard delivery typically takes 3-5 business days. Express
                delivery options are available for faster shipping. Delivery
                times may vary based on your location and product availability.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="font-QuickSand text-lg font-bold text-gray-900 mb-3">
                What is your return policy?
              </h3>
              <p className="font-DmSans text-gray-600 leading-relaxed">
                We offer a 30-day return policy for most items. Products must be
                in original condition with packaging. Contact our support team
                to initiate a return and receive detailed instructions.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-md">
              <h3 className="font-QuickSand text-lg font-bold text-gray-900 mb-3">
                How can I track my order?
              </h3>
              <p className="font-DmSans text-gray-600 leading-relaxed">
                Once your order ships, you'll receive a tracking number via
                email. You can use this number to monitor your package's
                progress on our website or the carrier's tracking page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Blurred in preview */}
      <footer
        className={`bg-white py-16 border-t border-gray-200 ${
          isPreview ? "filter blur-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="font-QuickSand text-white font-bold text-sm">
                    S
                  </span>
                </div>
                <span className="font-QuickSand text-xl font-bold text-gray-900">
                  ShopEase
                </span>
              </div>
              <p className="font-DmSans text-gray-600 mb-4">
                Your trusted online shopping destination. Quality products,
                competitive prices, and exceptional service.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-QuickSand text-lg font-bold text-gray-900 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="ECOMMERCE-HEADER"
                    className="font-DmSans text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#ECOMMERCE-ABOUT"
                    className="font-DmSans text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#ECOMMERCE-SERVICES"
                    className="font-DmSans text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#ECOMMERCE-FAQ"
                    className="font-DmSans text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-QuickSand text-lg font-bold text-gray-900 mb-4">
                Our Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="font-DmSans text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    Premium Quality
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-DmSans text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    Fast Delivery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-DmSans text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    24/7 Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-DmSans text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    Easy Returns
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-QuickSand text-lg font-bold text-gray-900 mb-4">
                Contact Us
              </h3>
              <div className="space-y-2">
                <p className="font-DmSans text-gray-600">123 Commerce Street</p>
                <p className="font-DmSans text-gray-600">
                  Business City, BC 12345
                </p>
                <p className="font-DmSans text-gray-600">
                  support@shopease.com
                </p>
                <p className="font-DmSans text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="font-DmSans text-gray-600">
              © 2024 ShopEase. All rights reserved. | Privacy Policy | Terms of
              Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
