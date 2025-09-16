import { useState } from "react";
import { ChevronDown, Menu, ArrowRight, Star, Zap } from "lucide-react";
import { Text } from "@mantine/core";

export default function TemplateThree({ formData = {}, isPreview = false }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Dynamic data from formData with fallbacks to original content
  const businessName = formData.businessName || "Flow Beyond Boundaries";
  const description =
    formData.business_description ||
    "Experience the future of digital innovation through fluid design and boundless creativity.";
  const logoSrc = formData.logo
    ? URL.createObjectURL(formData.logo)
    : "/default-logo.jpg"; // Fallback logo image

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-zinc-900 to-stone-950 text-white overflow-x-hidden">
      <main>
        {/* Hero Section - Clear, dynamic content */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-10 px-4 md:px-8">
          <header className="absolute top-0 left-0 w-full z-10 bg-neutral-900/80 backdrop-blur-xl border-b border-teal-500/20">
            <div className="p-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-3">
                {/* Logo */}
                <div className="flex items-center group cursor-pointer">
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 overflow-hidden mr-4 shadow-2xl group-hover:shadow-teal-500/30 transition-all duration-500 group-hover:scale-105">
                    <img
                      src={logoSrc}
                      alt="Website Logo"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {businessName}
                  </span>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-10">
                  {[
                    { name: "Home", href: "#FOOD-HEADER" },
                    { name: "About", href: "#FOOD-ABOUT" },
                    { name: "Services", href: "#FOOD-SERVICES" },
                    { name: "FAQ", href: "#FOOD-FAQ" },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="relative text-neutral-300 hover:text-teal-400 transition-all duration-300 font-semibold text-lg group"
                    >
                      {item.name}
                      <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 group-hover:w-full transition-all duration-500"></span>
                    </a>
                  ))}
                </nav>

                {/* Hamburger Menu */}
              </div>
            </div>
          </header>

          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-10 w-96 h-96 bg-gradient-to-br from-teal-500/30 via-cyan-500/20 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-gradient-to-br from-blue-500/20 via-cyan-500/30 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="space-y-8 md:space-y-12 text-center lg:text-left">
                <div className="relative">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl  font-black leading-tight bg-gradient-to-br from-teal-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
                    {businessName}
                  </h1>
                  <div className="absolute -top-6 -right-6 w-12 h-12 md:w-16 md:h-16">
                    <Star
                      className="w-full h-full text-teal-400 animate-spin"
                      style={{ animationDuration: "3s" }}
                    />
                  </div>
                </div>

                <Text
                  lineClamp={4}
                  className="!font-DmSans !text-xl !text-gray-200 !leading-relaxed !text-pretty !max-w-lg"
                >
                  {description}
                </Text>

                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
                  <button className="group px-8 py-4 bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 rounded-2xl font-bold text-lg text-white shadow-2xl hover:shadow-teal-500/40 transition-all duration-500 hover:scale-105">
                    <span className="flex items-center justify-center">
                      Get Started
                      <Zap className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  <button className="px-8 py-4 border-2 border-teal-500/50 text-teal-400 rounded-2xl font-semibold text-lg hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="relative mt-12 lg:mt-0">
                <div className="bg-gradient-to-br from-neutral-800/90 via-zinc-800/90 to-stone-800/90 backdrop-blur-2xl p-8 md:p-10 rounded-3xl shadow-2xl border border-teal-500/20 hover:border-teal-500/40 transition-all duration-500 hover:shadow-teal-500/20">
                  <div className="space-y-8">
                    <div className="text-center space-y-3">
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        Let's Connect
                      </h3>
                      <p className="text-white text-lg">
                        Let's create something extraordinary together
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          placeholder="First Name"
                          className="rounded-2xl h-14 bg-neutral-900/60 backdrop-blur-sm border border-neutral-700 px-5 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500/60 focus:border-teal-500/60 hover:bg-neutral-900/80 transition-all duration-300 text-lg"
                        />
                        <input
                          placeholder="Last Name"
                          className="rounded-2xl h-14 bg-neutral-900/60 backdrop-blur-sm border border-neutral-700 px-5 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500/60 focus:border-teal-500/60 hover:bg-neutral-900/80 transition-all duration-300 text-lg"
                        />
                      </div>
                      <input
                        placeholder="Email Address"
                        className="w-full rounded-2xl h-14 bg-neutral-900/60 backdrop-blur-sm border border-neutral-700 px-5 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500/60 focus:border-teal-500/60 hover:bg-neutral-900/80 transition-all duration-300 text-lg"
                      />
                      <textarea
                        placeholder="Your Vision..."
                        className="w-full rounded-2xl min-h-[140px] bg-neutral-900/60 backdrop-blur-sm border border-neutral-700 px-5 py-4 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500/60 focus:border-teal-500/60 hover:bg-neutral-900/80 transition-all duration-300 resize-none text-lg"
                      />
                      <button className="w-full h-16 rounded-2xl bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 hover:from-teal-600 hover:via-teal-700 hover:to-cyan-700 text-white text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-teal-500/40 flex items-center justify-center group hover:scale-[1.02]">
                        Start the Journey
                        <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
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
          className={`relative bg-gradient-to-r from-neutral-900/50 to-zinc-900/50 backdrop-blur-sm py-20 md:py-32 px-4 md:px-8 border-y border-amber-500/10 ${
            isPreview ? "filter blur-sm" : ""
          }`}
        >
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <div className="inline-block mb-6">
                <span className="px-6 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full text-teal-400 font-semibold text-lg border border-teal-500/30">
                  Our Mission
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                Our Goal
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed font-light">
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
          className={`py-20 md:py-32 relative overflow-hidden px-4 md:px-8 ${
            isPreview ? "filter blur-sm" : ""
          }`}
        >
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <div className="inline-block mb-6">
                <span className="px-6 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full text-teal-400 font-semibold text-lg border border-teal-500/30">
                  What We Offer
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                Our Fluid Services
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto font-light">
                Each service flows seamlessly into the next, creating a
                comprehensive digital ecosystem
              </p>
            </div>

            <div className="space-y-24 md:space-y-32">
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
                  } gap-12 md:gap-20 items-center group`}
                >
                  <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left">
                    <div className="text-6xl md:text-7xl mb-6 filter drop-shadow-2xl">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-neutral-200 group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 inline-block leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-light max-w-lg">
                      {service.desc}
                    </p>
                    <button className="group px-8 py-4 bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-600 rounded-2xl font-bold text-lg text-white shadow-2xl hover:shadow-teal-500/40 transition-all duration-500 hover:scale-105">
                      <span className="flex items-center justify-center">
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </button>
                  </div>
                  <div className="flex-1 w-full">
                    <div
                      className={`relative w-full h-80 transform ${
                        index % 2 === 0 ? "rotate-2" : "-rotate-2"
                      } hover:rotate-0 transition-all duration-700 group-hover:scale-105`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-cyan-500/20 rounded-3xl blur-xl"></div>
                      <div className="relative w-full h-full bg-neutral-800 rounded-3xl overflow-hidden shadow-2xl shadow-teal-600/80 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500">
                        <img
                          src={service.imgUrl}
                          alt="Service illustration"
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent"></div>
                      </div>
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
          className={`py-20 md:py-32 bg-gradient-to-r from-neutral-900/50 to-zinc-900/50 backdrop-blur-sm relative px-4 md:px-8 border-y border-teal-500/10 ${
            isPreview ? "filter blur-sm" : ""
          }`}
        >
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <div className="inline-block mb-6">
                <span className="px-6 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full text-teal-400 font-semibold text-lg border border-teal-500/30">
                  FAQ
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                Questions & Answers
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto font-light">
                Everything flows better with clarity
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
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
                <div key={index} className="group">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center cursor-pointer justify-between rounded-2xl md:rounded-3xl bg-gradient-to-r from-neutral-800/60 to-zinc-800/60 backdrop-blur-sm p-6 md:p-10 text-left hover:from-neutral-800/80 hover:to-zinc-800/80 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 shadow-lg border border-teal-500/20 hover:border-teal-500/40"
                  >
                    <span className="font-bold text-xl md:text-2xl pr-6 text-white group-hover:text-teal-400 transition-colors duration-300">
                      {faq.question}
                    </span>
                    <span
                      className={`text-2xl md:text-3xl transition-all duration-500 text-teal-400 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown />
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 md:px-10 py-6 md:py-8 text-white text-lg md:text-xl leading-relaxed bg-gradient-to-r from-neutral-800/40 to-zinc-800/40 backdrop-blur-sm rounded-b-2xl border-l border-r border-b border-teal-500/20 animate-fade-in font-light">
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
          className={`relative py-20 md:py-28 bg-gradient-to-br from-neutral-950 via-zinc-950 to-stone-950 text-white overflow-hidden px-4 md:px-8 ${
            isPreview ? "filter blur-sm" : ""
          }`}
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-teal-500/30 to-cyan-500/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-teal-500/30 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
              <div className="space-y-6 md:space-y-8">
                <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  FluidCorp
                </h3>
                <p className="text-neutral-300 text-lg md:text-xl leading-relaxed font-light">
                  Flowing beyond boundaries to create extraordinary digital
                  experiences.
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="font-black text-xl md:text-2xl text-teal-400">
                  Services
                </h4>
                <div className="space-y-3 text-neutral-300 text-lg">
                  <div className="hover:text-teal-400 transition-colors duration-300 cursor-pointer font-light">
                    Digital Flow Design
                  </div>
                  <div className="hover:text-teal-400 transition-colors duration-300 cursor-pointer font-light">
                    Adaptive Development
                  </div>
                  <div className="hover:text-teal-400 transition-colors duration-300 cursor-pointer font-light">
                    Continuous Innovation
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-black text-xl md:text-2xl text-teal-400">
                  Company
                </h4>
                <div className="space-y-3 text-neutral-300 text-lg">
                  <div className="hover:text-teal-400 transition-colors duration-300 cursor-pointer font-light">
                    About Flow
                  </div>
                  <div className="hover:text-teal-400 transition-colors duration-300 cursor-pointer font-light">
                    Join Our Current
                  </div>
                  <div className="hover:text-teal-400 transition-colors duration-300 cursor-pointer font-light">
                    Contact
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-black text-xl md:text-2xl text-teal-400">
                  Connect
                </h4>
                <div className="space-y-3 text-neutral-300 text-lg font-light">
                  <div className="hover:text-teal-400 transition-colors duration-300">
                    hello@fluidcorp.com
                  </div>
                  <div className="hover:text-teal-400 transition-colors duration-300">
                    +1 (555) 123-FLOW
                  </div>
                  <div className="hover:text-teal-400 transition-colors duration-300">
                    123 Innovation Stream
                    <br />
                    Digital Rapids
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-700 mt-16 md:mt-20 pt-10 md:pt-12 text-center text-neutral-400">
              <p className="text-lg md:text-xl font-light">
                &copy; 2024 FluidCorp. Flowing forward together.
              </p>
            </div>
          </div>
        </footer>
      </main>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
