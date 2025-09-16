// src/components/templates/SpatialExplorationTemplate.jsx
// Spatial-themed template modified to include dynamic formData (website_name, business_description, logo) in the hero section.
// Non-hero sections (About, FAQ, Products, Footer) are blurred in preview mode using Tailwind's filter blur-sm.
// Original design, content, and functionality (including "use client", useState, and toggleFaq) preserved exactly as provided, with only specified changes.

"use client";

import {
  ChevronDown,
  Heart,
  Menu,
  SquareChevronDown,
  Waves,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function SpatialTemplate({ formData = {}, isPreview = false }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Dynamic data from formData with fallbacks to original content
  const websiteName = formData.website_name || "Explore Dimensions";
  const description =
    formData.business_description ||
    "Navigate through spatial dimensions of digital innovation where every interaction creates new possibilities.";
  const logoSrc = formData.logo
    ? URL.createObjectURL(formData.logo)
    : "/default-logo.jpg"; // Fallback logo image

  return (
    <div className="min-h-screen bg-slate-100 relative overflow-x-hidden font-DmSans">
      {/* Hero Section - Clear, dynamic content */}
      <section className="py-24 relative flex items-center justify-center overflow-hidden">
        <header className=" absolute top-1 left-0  w-full  z-10 ">
          <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center  py-2">
              {/* Logo */}
              <div className="flex items-center">
                <div className="relative w-10 h-10 rounded-2xl bg-center overflow-hidden mr-2 bg-white ">
                  <img
                    src={logoSrc}
                    alt="Website Logo"
                    className=" h-full w-full object-cover"
                  />
                </div>
                <span className="text-xl font-QuickSand font-bold text-blue-900">
                  {websiteName}
                </span>
              </div>
              {/* Navigation */}
              <nav className="hidden md:flex space-x-8">
                <a
                  href="#FOOD-HEADER"
                  className="font-DmSans text-blue-900 hover:text-blue-950"
                >
                  Home
                </a>
                <a
                  href="#FOOD-ABOUT"
                  className="font-DmSans text-blue-900 hover:text-blue-950"
                >
                  About
                </a>
                <a
                  href="#FOOD-SERVICES"
                  className="font-DmSans text-blue-900 hover:text-blue-950"
                >
                  Services
                </a>
                <a
                  href="#FOOD-FAQ"
                  className="font-DmSans text-blue-900 hover:text-blue-950"
                >
                  FAQ
                </a>
              </nav>

              {/* Hamburger Menu */}
              <div className="md:hidden">
                <Menu color="black" size={30} />
              </div>
              {/* Contact & CTA */}
            </div>
          </div>
        </header>
        <div className="container mx-auto px-4 md:px-8 relative z-10 py-12">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#7e22ce] leading-tight font-QuickSand">
                  <span className="block">{websiteName}</span>
                </h1>

                <p className="text-xl md:text-2xl text-[#334155] text-pretty leading-relaxed max-w-3xl">
                  {description}
                </p>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-purple-100">
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold text-[#7e22ce] font-QuickSand">
                      Let's Connect
                    </h3>
                    <p className="text-[#334155] font-DmSans">
                      Let's explore possibilities together
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        placeholder="First name"
                        className="rounded-xl h-12 border border-purple-200 px-4 text-[#334155] placeholder:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 font-DmSans"
                      />
                      <input
                        placeholder="Last name"
                        className="rounded-xl h-12 border border-purple-200 px-4 text-[#334155] placeholder:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 font-DmSans"
                      />
                    </div>
                    <input
                      placeholder="Email"
                      className="w-full rounded-xl h-12 border border-purple-200 px-4 text-[#334155] placeholder:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 font-DmSans"
                    />
                    <textarea
                      placeholder="Your Message"
                      className="w-full rounded-xl min-h-[100px] border border-purple-200 px-4 py-3 text-[#334155] placeholder:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none font-DmSans"
                    />
                    <button className="w-full h-12 rounded-xl bg-[#7e22ce] hover:bg-purple-800 text-white font-semibold transition-colors font-DmSans">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Blurred in preview */}
      <section
        id="about"
        className={`relative ${isPreview ? "filter blur-sm" : ""}`}
      >
        <div className="container mx-auto px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-pink-50 shadow-md rounded-[3rem]"></div>

            <div className="relative z-10 py-24 px-12">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <h2 className="text-5xl font-bold text-blue-900 text-balance">
                    We Shape Digital
                    <span className="block">Experiences</span>
                  </h2>
                  <p className="text-xl text-blue-700 text-pretty leading-relaxed">
                    Through fluid design principles and innovative thinking, we
                    craft digital experiences that flow naturally with human
                    behavior and exceed expectations.
                  </p>
                </div>

                <div className="relative">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-3xl shadow-lg">
                        <Zap className="w-12 h-12 text-purple-500 mb-4" />
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">
                          Lightning Fast
                        </h3>
                        <p className="text-blue-700">
                          Optimized for speed and performance
                        </p>
                      </div>
                    </div>
                    <div className="space-y-6 pt-12">
                      <div className="bg-white p-6 rounded-3xl shadow-lg">
                        <Heart className="w-12 h-12 text-purple-500 mb-4" />
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">
                          User Centered
                        </h3>
                        <p className="text-blue-700">
                          Designed with empathy and care
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Blurred in preview */}
      <section
        id="faq"
        className={`py-16 md:py-32 relative ${
          isPreview ? "filter blur-sm" : ""
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-24 space-y-4 md:space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 font-QuickSand">
              Dimensional Q&A
            </h2>
            <p className="text-lg md:text-xl text-blue-700 max-w-4xl mx-auto font-DmSans">
              Navigate through common questions across multiple dimensions
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {[
              {
                question: "How does spatial design enhance user experience?",
                answer:
                  "Spatial design creates depth and context that mirrors how humans naturally perceive and interact with the world, making digital experiences more intuitive and engaging.",
              },
              {
                question: "What makes your dimensional approach unique?",
                answer:
                  "We don't just design interfaces; we architect spatial experiences that exist in multiple dimensions, creating depth, meaning, and connection beyond traditional flat design.",
              },
              {
                question: "Can spatial experiences work on all devices?",
                answer:
                  "Yes, our spatial design principles adapt across devices, from mobile screens to VR headsets, ensuring consistent dimensional experiences regardless of the platform.",
              },
            ].map((faq, index) => (
              <div key={index}>
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-50/50 rounded-2xl md:rounded-3xl"></div>
                  <button
                    onClick={() => toggleFaq(index)}
                    className="relative z-10 flex w-full items-center justify-between rounded-2xl md:rounded-3xl bg-white p-6 md:p-8 text-left hover:bg-blue-50 transition-colors shadow-md border border-blue-100"
                  >
                    <span className="font-semibold text-lg md:text-xl text-blue-900 pr-4 md:pr-6 font-DmSans">
                      {faq.question}
                    </span>
                    <span
                      className={`text-xl md:text-2xl transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown />
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="relative z-10 px-6 md:px-8 py-4 md:py-6 text-blue-700 text-base md:text-lg leading-relaxed font-DmSans">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section - Blurred in preview */}
      <section
        id="products"
        className={`py-16 md:py-32 relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 ${
          isPreview ? "filter blur-sm" : ""
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-24 space-y-4 md:space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 text-balance font-QuickSand">
              Dimensional Products
            </h2>
            <p className="text-lg md:text-xl text-blue-700 max-w-4xl mx-auto text-pretty font-DmSans">
              Each product exists in its own spatial dimension, offering unique
              perspectives and capabilities
            </p>
          </div>

          <div className="space-y-16 md:space-y-32">
            {[
              {
                title: "Spatial Designer",
                desc: "Create multi-dimensional user interfaces that respond to depth, perspective, and spatial relationships",
                dimension: "X-Axis",
                emoji: "🎨",
                imageUrl: "/spatial/blue.webp",
              },
              {
                title: "Dimension Engine",
                desc: "Power your applications with spatial computing capabilities and three-dimensional data processing",
                dimension: "Y-Axis",
                emoji: "⚡",
                imageUrl: "/spatial/pink.webp",
              },
              {
                title: "Reality Bridge",
                desc: "Connect physical and digital worlds through augmented spatial experiences and immersive interactions",
                dimension: "Z-Axis",
                emoji: "🌉",
                imageUrl: "/spatial/teal.webp",
              },
            ].map((product, index) => (
              <div
                key={product.title}
                className={`relative ${
                  index % 2 === 1 ? "md:ml-auto" : "md:mr-auto"
                } max-w-full md:max-w-5xl`}
              >
                <div className="absolute inset-0 bg-white/50 rounded-2xl md:rounded-3xl shadow-lg"></div>
                <div className="relative z-10 p-6 md:p-12 lg:p-16 space-y-6 md:space-y-8">
                  <div
                    className={`flex flex-col ${
                      index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                    } gap-8 md:gap-16 items-center`}
                  >
                    <div className="flex-1 space-y-4 md:space-y-6">
                      <div className="text-sm font-bold text-blue-600 tracking-wider uppercase font-DmSans">
                        {product.dimension}
                      </div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 font-QuickSand">
                        {product.title}
                      </h3>
                      <p className="text-lg md:text-xl text-blue-700 text-pretty leading-relaxed font-DmSans">
                        {product.desc}
                      </p>
                      <button className="rounded-full px-6 py-3 md:px-8 md:py-4 text-base md:text-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors inline-flex items-center font-medium font-DmSans">
                        Explore Dimension{" "}
                        <span className="ml-2 text-xl">→</span>
                      </button>
                    </div>
                    <div className="flex-1 w-full">
                      <div className={`w-full relative h-48 md:h-64 lg:h-80 `}>
                        <img
                          src={product.imageUrl}
                          alt="Fresh food preparation"
                          className={`${
                            index % 2 === 0
                              ? "rounded-tr-[150px] rounded-bl-[150px]"
                              : "rounded-2xl"
                          } w-full h-full  shadow-lg duration-500 transition-all ease-in-out`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Blurred in preview */}
      <footer
        className={`relative py-16 md:py-24 bg-gradient-to-br from-blue-800 to-indigo-900 text-white overflow-hidden ${
          isPreview ? "filter blur-sm" : ""
        }`}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 via-indigo-400 to-cyan-400"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold font-QuickSand">
                SpatialCorp
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed font-DmSans">
                Exploring infinite dimensions of digital possibility.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-xl font-QuickSand">Products</h4>
              <div className="space-y-2 text-blue-200 text-lg font-DmSans">
                <div>Spatial Designer</div>
                <div>Dimension Engine</div>
                <div>Reality Bridge</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-xl font-QuickSand">Dimensions</h4>
              <div className="space-y-2 text-blue-200 text-lg font-DmSans">
                <div>About Space</div>
                <div>Join Our Dimension</div>
                <div>Contact Portal</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-xl font-QuickSand">Coordinates</h4>
              <div className="space-y-2 text-blue-200 text-lg font-DmSans">
                <div>hello@spatialcorp.com</div>
                <div>+1 (555) 3D-SPACE</div>
                <div>
                  789 Dimension Drive
                  <br />
                  Spatial City, Universe 1
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-700 mt-12 md:mt-20 pt-8 md:pt-16 text-center text-blue-300">
            <p className="text-lg font-DmSans">
              &copy; 2024 SpatialCorp. Exploring dimensions beyond imagination.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
