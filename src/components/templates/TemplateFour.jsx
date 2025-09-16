// src/components/templates/FoodTemplate.jsx
// Food-themed template modified to include dynamic formData (website_name, business_description, logo) in the header and hero sections.
// Non-header sections (About, FAQ, Services, large image section, Footer) are blurred in preview mode using Tailwind's filter blur-sm.
// Original design and content preserved exactly as provided, with only specified changes.

import { Text } from "@mantine/core";
import {
  Menu,
  CheckCircle,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

export default function TemplateFour({ formData = {}, isPreview = false }) {
  // Dynamic data from formData with fallbacks to original content
  const businessName = formData.businessName || "Delicious";
  const description =
    formData.business_description ||
    "Experience the finest flavors crafted with passion and served with love. Our commitment to quality ingredients and exceptional taste makes every bite memorable.";
  const logoSrc = formData.logo
    ? URL.createObjectURL(formData.logo)
    : "/default-logo.jpg"; // Fallback logo image

  // V0 DATA  START

  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      id: 1,
      title: "Gourmet Catering",
      description:
        "Premium catering services for special events and corporate functions",
      image: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg",
      features: ["Custom Menus", "Professional Service", "Fresh Ingredients"],
    },
    {
      id: 2,
      title: "Private Chef Services",
      description:
        "Personalized culinary experiences in the comfort of your home",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      features: [
        "Personalized Menus",
        "In-Home Service",
        "Special Dietary Options",
      ],
    },
    {
      id: 3,
      title: "Cooking Classes",
      description:
        "Learn from professional chefs and master new culinary techniques",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      features: ["Expert Instruction", "Hands-on Learning", "All Skill Levels"],
    },
    {
      id: 4,
      title: "Meal Prep Services",
      description:
        "Healthy, delicious meals prepared fresh and delivered weekly",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      features: ["Weekly Delivery", "Nutritious Options", "Custom Portions"],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // V0 DATA ENDS HERE

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 left-0 z-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center group">
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#68113C]  via-[#E74C75] to-[#68113C] overflow-hidden mr-3 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <img
                  src={logoSrc || "/placeholder.svg"}
                  alt="Website Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                {businessName}
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#FOOD-HEADER"
                className="text-slate-700 hover:text-indigo-600 font-medium transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </a>
              <a
                href="#FOOD-ABOUT"
                className="text-slate-700 hover:text-indigo-600 font-medium transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </a>
              <a
                href="#FOOD-SERVICES"
                className="text-slate-700 hover:text-indigo-600 font-medium transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                Services
              </a>
              <a
                href="#FOOD-FAQ"
                className="text-slate-700 hover:text-indigo-600 font-medium transition-all duration-300 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                FAQ
              </a>
            </nav>
            <div className="md:hidden">
              <Menu
                className="text-slate-700 hover:text-indigo-600 transition-colors duration-300"
                size={30}
              />
            </div>
          </div>
        </div>
      </header>

      <section
        id="FOOD-HEADER"
        className="relative  bg-gradient-to-br from-[#68113C]  via-[#E74C75] to-[#68113C] py-24 m-6 rounded-3xl overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-6 animate-bounce-subtle">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                Premium Quality Experience
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                {businessName}
              </h1>
              <Text
                lineClamp={4}
                className="!font-DmSans !text-xl !text-gray-200 !leading-relaxed !text-pretty !max-w-lg"
              >
                {description}
              </Text>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Get In Touch
                  </h3>
                  <p className="text-slate-200">
                    Send us a message and we'll get back to you soon
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="group">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-semibold text-white mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-4 bg-white/90 backdrop-blur-sm border-0 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-300 placeholder:text-slate-500 hover:bg-white group-hover:shadow-lg"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="group">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-semibold text-white mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-4 bg-white/90 backdrop-blur-sm border-0 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-300 placeholder:text-slate-500 hover:bg-white group-hover:shadow-lg"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-4 bg-white/90 backdrop-blur-sm border-0 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-300 placeholder:text-slate-500 hover:bg-white group-hover:shadow-lg"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-white mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-4 bg-white/90 backdrop-blur-sm border-0 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-300 placeholder:text-slate-500 hover:bg-white group-hover:shadow-lg resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="FOOD-ABOUT"
        className={`py-24 bg-white ${isPreview ? "filter blur-sm" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
              About Our Business
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-800 to-[#E74C75] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img
                src="/food/about.webp"
                alt="Fresh food preparation"
                width={400}
                height={400}
                className="relative w-full h-auto rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-800 leading-tight">
                A Simple Way to Enjoy
                <span className="bg-gradient-to-r from-rose-800 to-[#E74C75] bg-clip-text text-transparent">
                  {" "}
                  Great Food
                </span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe great food should be accessible to everyone. Our
                commitment to fresh ingredients, traditional recipes, and modern
                techniques ensures every dish meets the highest standards of
                taste and quality.
              </p>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-slate-700 font-medium">
                  Premium Quality Ingredients
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-slate-700 font-medium">
                  Expert Culinary Techniques
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-slate-700 font-medium">
                  Exceptional Customer Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="FOOD-FAQ"
        className={`py-24 bg-slate-50 ${isPreview ? "filter blur-sm" : ""}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Find answers to common questions about our services
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-800 to-[#E74C75] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-indigo-200 group">
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                How do I place an order?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Simply browse our products, add items to your cart, and proceed
                to checkout. Our streamlined process makes ordering quick and
                easy. You'll receive confirmation and tracking information via
                email.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-indigo-200 group">
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                What payment methods do you accept?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We accept all major credit cards, PayPal, and other secure
                payment methods. All transactions are encrypted and processed
                through secure payment gateways for your protection.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-indigo-200 group">
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                How long does delivery take?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Standard delivery typically takes 3-5 business days. Express
                delivery options are available for faster shipping. Delivery
                times may vary based on your location and product availability.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-indigo-200 group">
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                What is your return policy?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We offer a 30-day return policy for most items. Products must be
                in original condition with packaging. Contact our support team
                to initiate a return and receive detailed instructions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-indigo-200 group">
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                How can I track my order?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Once your order ships, you'll receive a tracking number via
                email. You can use this number to monitor your package's
                progress on our website or the carrier's tracking page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`py-24 bg-slate-100 ${isPreview ? "filter blur-sm" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[70vh] rounded-3xl overflow-hidden group">
            <img
              src="/food/bigImage.webp"
              alt="Gourmet food presentation"
              className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-4xl font-bold mb-2">Culinary Excellence</h3>
              <p className="text-xl text-slate-200">
                Where passion meets perfection
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="FOOD-SERVICES"
        className={`py-24 bg-slate-900 ${isPreview ? "filter blur-sm" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-6">
              Our Services & Products
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-700 to-[#E74C75] mx-auto rounded-full"></div>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service) => (
                  <div key={service.id} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                      <div className="relative overflow-hidden">
                        <img
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                      </div>
                      <div className="p-12 flex flex-col justify-center bg-gradient-to-br from-slate-50 to-white">
                        <h3 className="text-4xl font-bold text-slate-800 mb-6">
                          {service.title}
                        </h3>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="space-y-3 mb-8">
                          {service.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mr-3"></div>
                              <span className="text-slate-700 font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                        <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl self-start">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-slate-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-slate-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center mt-8 space-x-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-600 scale-125"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="mt-6 w-full bg-slate-200 rounded-full h-1 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 transition-all duration-500 ease-out"
                style={{
                  width: `${((currentSlide + 1) / services.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <footer className={`bg-white py-20 ${isPreview ? "filter blur-sm" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mr-3 shadow-lg">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  Delicious
                </span>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed max-w-md">
                Bringing you the finest culinary experiences with fresh
                ingredients, expert preparation, and exceptional service. Taste
                the difference quality makes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#FOOD-HEADER"
                    className="text-slate-600 hover:text-indigo-600 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#FOOD-ABOUT"
                    className="text-slate-600 hover:text-indigo-600 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#FOOD-SERVICES"
                    className="text-slate-600 hover:text-indigo-600 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#FOOD-FAQ"
                    className="text-slate-600 hover:text-indigo-600 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-6">
                Contact Us
              </h3>
              <div className="space-y-3">
                <p className="text-slate-600 hover:text-indigo-600 transition-colors duration-300">
                  123 Street Name, City, State 12345
                </p>
                <p className="text-slate-600 hover:text-indigo-600 transition-colors duration-300">
                  info@company.com
                </p>
                <p className="text-slate-600 hover:text-indigo-600 transition-colors duration-300">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 mt-16 pt-8 text-center">
            <p className="text-slate-600">
              © 2024 Delicious Food Company. All rights reserved. |
              <span className="hover:text-indigo-600 transition-colors duration-300 cursor-pointer">
                {" "}
                Privacy Policy
              </span>{" "}
              |
              <span className="hover:text-indigo-600 transition-colors duration-300 cursor-pointer">
                {" "}
                Terms of Service
              </span>
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.2s both;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
