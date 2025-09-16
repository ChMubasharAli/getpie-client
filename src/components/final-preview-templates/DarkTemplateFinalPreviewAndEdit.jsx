// src/components/templates/TemplateTwo.jsx
// Digital-themed template modified to include dynamic formData (website_name, business_description, logo) in the hero section.
// Non-hero sections (About, Services, FAQ, Footer) are blurred in preview mode using Tailwind's filter blur-sm.
// Original design, content, and functionality (including useState and toggleFaq) preserved exactly as provided, with only specified changes.

import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";

export default function DarkTemplate({ formData = {}, isPreview = false }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Dynamic data from formData with fallbacks to original content
  const websiteName = formData.website_name || "Flow Beyond Boundaries";
  const description =
    formData.business_description ||
    "Experience the future of digital innovation through fluid design and boundless creativity.";
  const logoSrc = formData.logo
    ? URL.createObjectURL(formData.logo)
    : "/default-logo.jpg"; // Fallback logo image

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-x-hidden">
      <main>
        {/* Hero Section - Clear, dynamic content */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-10 px-4 md:px-8">
          <header className=" absolute top-1 left-0  w-full  z-10 ">
            <div className=" p-4 sm:px-6 lg:px-8">
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
                  <span className="text-xl font-QuickSand font-bold text-white">
                    {websiteName}
                  </span>
                </div>
                {/* Navigation */}
                <nav className="hidden md:flex space-x-8">
                  <a
                    href="#FOOD-HEADER"
                    className="font-DmSans text-white hover:text-rose-500 transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="#FOOD-ABOUT"
                    className="font-DmSans text-white hover:text-rose-500 transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#FOOD-SERVICES"
                    className="font-DmSans text-white hover:text-rose-500 transition-colors"
                  >
                    Services
                  </a>
                  <a
                    href="#FOOD-FAQ"
                    className="font-DmSans text-white hover:text-rose-500 transition-colors"
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
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-4 md:right-20 w-48 h-48 md:w-96 md:h-96 bg-rose-600 rounded-full"></div>
            <div className="absolute bottom-40 left-4 md:left-10 w-32 h-32 md:w-64 md:h-64 bg-pink-500 rounded-full"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                <div className="relative">
                  <h1 className="font-QuickSand text-rose-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                    {websiteName}
                  </h1>
                  <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 bg-pink-500/20 rounded-full"></div>
                </div>

                <p className="font-DmSans text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="relative mt-12 lg:mt-0">
                <div className="bg-gray-800/90 backdrop-blur-lg p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl border border-gray-700">
                  <div className="space-y-6">
                    <div className="text-center space-y-2">
                      <h3 className="font-QuickSand text-2xl font-bold text-rose-500">
                        Let's Connect
                      </h3>
                      <p className="font-DmSans text-gray-400">
                        Let's create something extraordinary together
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          placeholder="First Name"
                          className="rounded-xl placeholder:font-DmSans md:rounded-2xl h-12 bg-gray-800 border border-gray-700 px-4 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                        />
                        <input
                          placeholder="Last Name"
                          className="rounded-xl placeholder:font-DmSans md:rounded-2xl h-12 bg-gray-800 border border-gray-700 px-4 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                        />
                      </div>
                      <input
                        placeholder="Email Address"
                        className="w-full rounded-xl placeholder:font-DmSans md:rounded-2xl h-12 bg-gray-800 border border-gray-700 px-4 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                      <textarea
                        placeholder="Your Vision..."
                        className="w-full rounded-xl placeholder:font-DmSans md:rounded-2xl min-h-[120px] bg-gray-800 border border-gray-700 px-4 py-3 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
                      />
                      <button className="w-full font-QuickSand h-12 rounded-xl md:rounded-2xl bg-rose-600 hover:bg-rose-700 text-white text-lg font-semibold transition-colors">
                        Start the Journey
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
          className={`relative bg-gray-800/30 py-16 md:py-32 px-4 md:px-8 ${
            isPreview ? "filter blur-sm" : ""
          }`}
        >
          <div className="container mx-auto">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="font-QuickSand text-rose-500 text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                Our Goal
              </h2>
              <p className="font-DmSans text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                To provide comprehensive, compassionate healthcare that empowers
                our patients to achieve their best possible health outcomes. We
                believe in treating not just symptoms, but the whole person,
                fostering long-term wellness through personalized care and
                innovative medical solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section - Blurred in preview */}
        <section
          id="services"
          className={`py-16 md:py-32 relative overflow-hidden px-4 md:px-8 ${
            isPreview ? "filter blur-sm" : ""
          }`}
        >
          <div className="container mx-auto">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="font-QuickSand text-rose-500 text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                Our Fluid Services
              </h2>
              <p className="font-DmSans text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Each service flows seamlessly into the next, creating a
                comprehensive digital ecosystem
              </p>
            </div>

            <div className="space-y-16 md:space-y-32">
              {[
                {
                  title: "Digital Flow Design",
                  desc: "Creating intuitive user experiences that feel natural and effortless",
                  icon: "🌊",
                  imgUrl: "/dark/one.webp",
                },
                {
                  title: "Adaptive Development",
                  desc: "Building flexible solutions that evolve with your business needs",
                  icon: "⚡",
                  imgUrl: "/dark/two.webp",
                },
                {
                  title: "Continuous Innovation",
                  desc: "Ongoing optimization and enhancement of your digital presence",
                  icon: "🚀",
                  imgUrl: "/dark/three.webp",
                },
              ].map((service, index) => (
                <div
                  key={service.title}
                  className={`flex flex-col ${
                    index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                  } gap-8 md:gap-16 items-center`}
                >
                  <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
                    <div className="text-5xl md:text-6xl mb-4">
                      {service.icon}
                    </div>
                    <h3 className="font-QuickSand text-2xl md:text-4xl font-bold">
                      {service.title}
                    </h3>
                    <p className="font-DmSans text-lg md:text-xl text-gray-300 leading-relaxed">
                      {service.desc}
                    </p>
                    <button className="rounded-full px-6 py-2 md:px-8 md:py-3 border border-gray-700 hover:bg-gray-800 bg-transparent transition-colors inline-flex items-center font-medium mx-auto md:mx-0">
                      Learn More <span className="ml-2">→</span>
                    </button>
                  </div>
                  <div className="flex-1 w-full h-64">
                    <div
                      className={`w-full h-64 bg-white rounded-[3rem] transform ${
                        index % 2 === 0 ? "rotate-6" : "-rotate-6"
                      } hover:rotate-0 transition-transform duration-500`}
                    >
                      <img
                        src={service.imgUrl}
                        alt="Fresh food preparation"
                        className="w-full h-full rounded-2xl shadow-lg duration-500 transition-all ease-in-out"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Blurred in preview */}
        <section
          id="faq"
          className={`py-16 md:py-32 bg-gray-800/30 relative px-4 md:px-8 ${
            isPreview ? "filter blur-sm" : ""
          }`}
        >
          <div className="container mx-auto">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="font-QuickSand text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                Questions & Answers
              </h2>
              <p className="font-DmSans text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Everything flows better with clarity
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
              {[
                {
                  question: "How does your fluid design approach differ?",
                  answer:
                    "Our fluid design philosophy focuses on creating seamless, intuitive experiences that adapt naturally to user behavior, rather than forcing users to adapt to rigid interfaces.",
                },
                {
                  question: "What makes your development process unique?",
                  answer:
                    "We use an iterative, flow-based development process that allows for continuous refinement and adaptation, ensuring the final product exceeds expectations.",
                },
                {
                  question: "How do you ensure long-term success?",
                  answer:
                    "Through continuous monitoring, optimization, and evolution of your digital presence, we ensure your solutions remain effective and relevant over time.",
                },
              ].map((faq, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center cursor-pointer justify-between rounded-xl md:rounded-3xl bg-gray-800 p-4 md:p-8 text-left hover:bg-gray-700 transition-colors shadow-lg"
                  >
                    <span className="font-QuickSand font-semibold text-lg md:text-xl pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`font-DmSans text-xl md:text-2xl transition-transform duration-700 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown />
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="font-DmSans px-4 md:px-8 py-4 md:py-6 text-gray-300 text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer - Blurred in preview */}
        <footer
          className={`relative py-16 md:py-24 bg-gradient-to-br from-gray-800 to-gray-900 text-white overflow-hidden px-4 md:px-8 border-t border-gray-700 ${
            isPreview ? "filter blur-sm" : ""
          }`}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-rose-600/30 rounded-full"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-pink-500/30 rounded-full"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              <div className="space-y-4 md:space-y-6">
                <h3 className="font-QuickSand text-2xl md:text-3xl font-bold text-rose-500">
                  FluidCorp
                </h3>
                <p className="font-DmSans text-gray-300 text-base md:text-lg">
                  Flowing beyond boundaries to create extraordinary digital
                  experiences.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-QuickSand font-bold text-lg md:text-xl text-rose-500">
                  Services
                </h4>
                <div className="font-DmSans space-y-2 text-gray-300">
                  <div>Digital Flow Design</div>
                  <div>Adaptive Development</div>
                  <div>Continuous Innovation</div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-QuickSand font-bold text-lg md:text-xl text-rose-500">
                  Company
                </h4>
                <div className="font-DmSans space-y-2 text-gray-300">
                  <div>About Flow</div>
                  <div>Join Our Current</div>
                  <div>Contact</div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-QuickSand font-bold text-lg md:text-xl text-rose-500">
                  Connect
                </h4>
                <div className="font-DmSans space-y-2 text-gray-300 text-base md:text-lg">
                  <div>hello@fluidcorp.com</div>
                  <div>+1 (555) 123-FLOW</div>
                  <div>
                    123 Innovation Stream
                    <br />
                    Digital Rapids
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-12 md:mt-16 pt-8 md:pt-12 text-center text-gray-400">
              <p className="font-DmSans text-base md:text-lg">
                &copy; 2024 FluidCorp. Flowing forward together.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
