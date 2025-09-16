// src/components/templates/HealthTemplate.jsx
// Health-themed template modified to include dynamic formData (website_name, business_description, logo) in the header section.
// Non-header sections (About, Services, FAQ, Footer) are blurred in preview mode using Tailwind's filter blur-sm.
// Original design and content preserved exactly as provided, with only specified changes.

import { Text } from "@mantine/core";
import { Menu, Heart, Clock, Zap, Target, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

export default function TemplateOne({ formData = {}, isPreview = false }) {
  // Dynamic data from formData with fallbacks to original content
  const businessName = formData.businessName || "";
  const description =
    formData.business_description ||
    "Experience compassionate care and professional health services tailored to your unique needs. We're committed to supporting your wellness journey with expertise and dedication.";
  const logoSrc = formData.logo
    ? URL.createObjectURL(formData.logo)
    : "/default-logo.jpg"; // Fallback logo image

  // V0 DATA START HERE ------------------------------------------------------------

  // Animation states
  const [isVisible, setIsVisible] = useState({});
  const [_, setActiveService] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Zap,
      title: "Rapid Solutions",
      description:
        "24/7 fast-response business solutions with cutting-edge technology and expert professionals ready to handle any critical business challenge.",
      color: "from-primary to-destructive",
    },
    {
      icon: Target,
      title: "Precision Strategy",
      description:
        "Advanced analytics and strategic solutions using AI-powered insights and personalized approaches for optimal business outcomes.",
      color: "from-accent to-secondary",
    },
    {
      icon: Rocket,
      title: "Future Growth",
      description:
        "Revolutionary business programs combining technology, data analysis, and predictive modeling for next-generation success.",
      color: "from-secondary to-primary",
    },
  ];

  const faqs = [
    {
      question: "How do I access your digital platform?",
      answer:
        "Our revolutionary digital platform is accessible 24/7 through our secure web portal and mobile app. Simply create an account and verify your identity to access personalized dashboards, AI-powered insights, and direct communication with our team.",
    },
    {
      question: "What makes your approach different?",
      answer:
        "We combine traditional business expertise with cutting-edge technology including AI analytics, predictive modeling, and personalized solution algorithms. Our approach focuses on prevention and optimization rather than just problem-solving.",
    },
    {
      question: "Do you offer virtual consultation sessions?",
      answer:
        "Yes, we're pioneers in virtual consultation and collaboration. Our immersive sessions help with strategy development, problem-solving, team collaboration, and business optimization using state-of-the-art technology.",
    },
    {
      question: "How does your AI business monitoring work?",
      answer:
        "Our AI continuously analyzes your business data from various sources, performance metrics, and market factors to predict potential issues before they occur. You'll receive personalized recommendations and early warnings to maintain optimal performance.",
    },
  ];
  //V0 DATA ENDS HERE ------------------------------------------------------------

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <section
        id="BUSINESS-HEADER"
        className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-green-50 to-green-100"
      >
        {/* Dynamic background elements that follow mouse */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-green-700/20 to-lime-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
            style={{
              left: `${mousePosition.x * 0.02}px`,
              top: `${mousePosition.y * 0.02}px`,
            }}
          ></div>
          <div
            className="absolute w-72 h-72 bg-gradient-to-r from-gray-700/30 to-green-700/30 rounded-full blur-2xl transition-all duration-700 ease-out"
            style={{
              right: `${(window.innerWidth - mousePosition.x) * 0.03}px`,
              bottom: `${(window.innerHeight - mousePosition.y) * 0.03}px`,
            }}
          ></div>
          {/* Geometric shapes */}
          <div className="absolute top-20 right-20 w-32 h-32 border-4 border-green-700/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-lime-500/20 transform rotate-12 animate-pulse"></div>
        </div>

        <header className="absolute top-0 left-0 w-full z-20 bg-gray-700/95 backdrop-blur-xl border-b-4 border-green-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              {/* Logo with neon effect */}
              <div className="flex items-center group">
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-green-700 to-lime-500 overflow-hidden mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-700/50">
                  <img
                    src={logoSrc || "/placeholder.svg"}
                    alt="Website Logo"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-3xl font-black text-white tracking-tight group-hover:text-lime-500 transition-colors duration-300">
                  {businessName}
                </span>
              </div>

              {/* Navigation with bold styling */}
              <nav className="hidden md:flex space-x-8">
                {["Home", "About", "Services", "FAQ"].map((item, index) => (
                  <a
                    key={item}
                    href={`#BUSINESS-${item.toUpperCase()}`}
                    className="relative text-white hover:text-lime-500 transition-all duration-300 font-bold text-lg group uppercase tracking-wide"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item}
                    <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-green-700 to-lime-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </nav>

              <div className="md:hidden">
                <Menu className="w-8 h-8 text-white hover:text-lime-500 transition-colors duration-300" />
              </div>
            </div>
          </div>
        </header>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="grid grid-cols-12 gap-8 items-center min-h-[80vh]">
            {/* Left Side - Hero Content (spans 7 columns) */}
            <div
              className="col-span-12 lg:col-span-7 space-y-8 animate-fade-in-up relative z-10"
              data-animate
              id="hero-content"
            >
              <div className="space-y-6">
                {/* Large impact text */}
                <h1 className="text-7xl lg:text-8xl font-black leading-none">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-lime-500 to-gray-700 animate-pulse">
                    {businessName || "Your Business"}
                  </span>
                </h1>

                {/* Geometric accent */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-2 bg-gradient-to-r from-green-700 to-lime-500"></div>
                  <div className="w-8 h-8 border-4 border-green-700 rotate-45"></div>
                  <div className="w-24 h-1 bg-gradient-to-r from-lime-500 to-gray-700"></div>
                </div>
              </div>

              <Text
                lineClamp={4}
                className="!font-DmSans !text-xl !text-gray-600 !leading-relaxed !text-pretty !max-w-lg"
              >
                {description}
              </Text>

              {/* Bold CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <button className="px-12 py-6 bg-green-700 text-white rounded-none font-black text-xl hover:scale-105 hover:shadow-2xl hover:shadow-green-700/50 transition-all duration-300 uppercase tracking-wider border-4 border-transparent hover:border-lime-500">
                  START NOW
                </button>
                <button className="px-12 py-6 border-4 border-green-700 text-green-700 rounded-none font-black text-xl hover:bg-green-700 hover:text-white transition-all duration-300 uppercase tracking-wider hover:scale-105">
                  EXPLORE
                </button>
              </div>
            </div>

            {/* Right Side - Floating Contact Form (spans 5 columns, overlapping) */}
            <div
              className="col-span-12 lg:col-span-5 lg:col-start-8 animate-fade-in-up delay-300 relative z-20"
              data-animate
              id="contact-form"
            >
              <div className="bg-gradient-to-br from-green-50/90 to-green-100/90 backdrop-blur-xl border-4 border-lime-500 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-rotate-1">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-700 to-lime-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-700 mb-2 uppercase">
                    Connect
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Join the business revolution
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        className="w-full px-6 py-4 bg-white/50 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-700/30 focus:border-green-700 transition-all duration-300 font-medium placeholder-gray-600"
                        placeholder="First Name"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="w-full px-6 py-4 bg-white/50 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-700/30 focus:border-green-700 transition-all duration-300 font-medium placeholder-gray-600"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <input
                    type="email"
                    className="w-full px-6 py-4 bg-white/50 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-700/30 focus:border-green-700 transition-all duration-300 font-medium placeholder-gray-600"
                    placeholder="Email Address"
                  />

                  <textarea
                    rows={4}
                    className="w-full px-6 py-4 bg-white/50 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-700/30 focus:border-green-700 transition-all duration-300 font-medium placeholder-gray-600 resize-none"
                    placeholder="Tell us about your business goals..."
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-green-700 text-white px-8 py-5 rounded-xl font-black text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 uppercase tracking-wide border-2 border-transparent hover:border-lime-500"
                  >
                    Launch Journey
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="BUSINESS-ABOUT"
        className={`py-32 bg-gradient-to-br from-green-700/10 to-lime-500/5 transform -skew-y-2 ${
          isPreview ? "filter blur-sm" : ""
        }`}
        data-animate
      >
        <div className="transform skew-y-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-16 items-center">
              <div className="col-span-12 lg:col-span-8">
                <div
                  className={`transition-all duration-1000 ${
                    isVisible["BUSINESS-ABOUT"]
                      ? "animate-fade-in-up"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-700 to-lime-500 rounded-full flex items-center justify-center">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h2 className="text-6xl font-black text-gray-700 uppercase tracking-tight">
                        Mission
                      </h2>
                      <div className="w-32 h-2 bg-gradient-to-r from-green-700 to-lime-500 mt-2"></div>
                    </div>
                  </div>
                  <p className="text-2xl text-gray-600 leading-relaxed font-light">
                    We're revolutionizing business through{" "}
                    <span className="text-green-700 font-bold">
                      artificial intelligence
                    </span>
                    ,
                    <span className="text-lime-500 font-bold">
                      {" "}
                      advanced technology
                    </span>
                    , and
                    <span className="text-gray-700 font-bold">
                      {" "}
                      human expertise
                    </span>
                    . Our mission is to predict, prevent, and optimize business
                    outcomes before problems arise.
                  </p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-r from-lime-500/20 to-green-700/20 rounded-full blur-3xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-8 border-green-700 rounded-full animate-spin-slow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="BUSINESS-SERVICES"
        className={`py-32 bg-white ${isPreview ? "filter blur-sm" : ""}`}
        data-animate
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible["BUSINESS-SERVICES"]
                ? "animate-fade-in-up"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-7xl font-black text-gray-700 mb-8 uppercase tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-lime-500">
                Services
              </span>
            </h2>
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="w-24 h-2 bg-gradient-to-r from-green-700 to-lime-500"></div>
              <div className="w-12 h-12 border-4 border-green-700 rotate-45"></div>
              <div className="w-24 h-2 bg-gradient-to-r from-lime-500 to-gray-700"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colorMap = {
                "from-primary to-destructive": "from-green-700 to-rose-700",
                "from-accent to-secondary": "from-lime-500 to-gray-700",
                "from-secondary to-primary": "from-gray-700 to-green-700",
              };
              const gradientColor = colorMap[service.color] || service.color;

              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 hover:scale-105 ${
                    isVisible["BUSINESS-SERVICES"]
                      ? "animate-fade-in-up"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ animationDelay: `${index * 300}ms` }}
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  {/* Hexagonal background */}
                  <div className="relative">
                    <div
                      className={`w-full h-96 bg-gradient-to-br ${gradientColor} rounded-3xl transform rotate-3 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}
                    ></div>
                    <div className="absolute inset-4 bg-green-50/95 backdrop-blur-xl rounded-2xl p-8 flex flex-col justify-center items-center text-center">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${gradientColor} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-black text-gray-700 mb-4 uppercase tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                        {service.description}
                      </p>
                      <button className="px-8 py-3 border-2 border-green-700 text-green-700 font-bold hover:bg-green-700 hover:text-white transition-all duration-300 uppercase tracking-wide rounded-xl">
                        Activate
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="BUSINESS-FAQ"
        className={`py-32 bg-gray-800 ${isPreview ? "filter blur-sm" : ""}`}
        data-animate
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible["BUSINESS-FAQ"]
                ? "animate-fade-in-up"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-7xl font-black text-white mb-8 uppercase tracking-tight">
              FAQ
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-green-700 to-lime-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-xl border-2 border-lime-500/30 rounded-2xl overflow-hidden transition-all duration-500 hover:border-lime-500 ${
                  isVisible["BUSINESS-FAQ"]
                    ? "animate-fade-in-up"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <button
                  className="w-full p-8 text-left hover:bg-lime-500/10 transition-all duration-300"
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-700 to-lime-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-wide">
                        {faq.question}
                      </h3>
                      <div
                        className={`transition-all duration-500 overflow-hidden ${
                          activeFaq === index
                            ? "max-h-96 opacity-100 mt-6"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-white/80 leading-relaxed text-lg font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`transition-transform duration-300 ${
                        activeFaq === index ? "rotate-45" : ""
                      }`}
                    >
                      <div className="w-8 h-8 border-2 border-lime-500 rounded-full flex items-center justify-center">
                        <span className="text-lime-500 text-2xl font-light">
                          +
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer
        className={`bg-gray-800 py-20 ${isPreview ? "filter blur-sm" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-700 to-lime-500 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <span className="text-4xl font-black text-white uppercase tracking-tight">
                  {businessName}
                </span>
              </div>
              <p className="text-white/70 mb-8 leading-relaxed text-lg font-medium max-w-md">
                Pioneering the future of business through revolutionary
                technology and client-centered solutions.
              </p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-green-700/20 rounded-full"></div>
                <div className="w-12 h-12 bg-lime-500/20 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-700/20 rounded-full"></div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-wide">
                Navigate
              </h3>
              <ul className="space-y-4">
                {["Home", "About", "Services", "FAQ"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#BUSINESS-${item.toUpperCase()}`}
                      className="text-white/70 hover:text-lime-500 transition-colors duration-200 font-bold text-lg uppercase tracking-wide"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-wide">
                Connect
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-lime-500" />
                  <span className="text-white/70 font-medium">
                    24/7 Available
                  </span>
                </div>
                <div className="text-white/70 font-medium">
                  Business Solutions Center
                </div>
                <div className="text-white/70 font-medium">
                  contact@bizpro.com
                </div>
                <div className="text-white/70 font-medium">+1 (555) BIZPRO</div>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-lime-500/30 mt-16 pt-8 text-center">
            <p className="text-white/50 font-medium text-lg">
              © 2024 {businessName}. Revolutionizing Business.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
