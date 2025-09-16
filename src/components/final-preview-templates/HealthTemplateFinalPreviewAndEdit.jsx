// src/components/templates/HealthTemplate.jsx
// Health-themed template modified to include dynamic formData (website_name, business_description, logo) in the header section.
// Non-header sections (About, Services, FAQ, Footer) are blurred in preview mode using Tailwind's filter blur-sm.
// Original design and content preserved exactly as provided, with only specified changes.

import { Menu } from "lucide-react";
import React from "react";

export default function HealthTemplate({ formData = {}, isPreview = false }) {
  // Dynamic data from formData with fallbacks to original content
  const websiteName = formData.website_name || "Your Health";
  const description =
    formData.business_description ||
    "Experience compassionate care and professional health services tailored to your unique needs. We're committed to supporting your wellness journey with expertise and dedication.";
  const logoSrc = formData.logo
    ? URL.createObjectURL(formData.logo)
    : "/default-logo.jpg"; // Fallback logo image

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clear, dynamic content */}
      <section
        id="HEALTH-HEADER"
        className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url('/health/bgImage.webp')`,
        }}
      >
        {/* Header section */}
        <header className=" absolute top-1 left-0  w-full  z-10 ">
          <div className="  p-4 sm:px-6 lg:px-8">
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
                  className="font-DmSans text-white hover:text-cyan-300"
                >
                  Home
                </a>
                <a
                  href="#FOOD-ABOUT"
                  className="font-DmSans text-white hover:text-cyan-300"
                >
                  About
                </a>
                <a
                  href="#FOOD-SERVICES"
                  className="font-DmSans text-white hover:text-cyan-300"
                >
                  Services
                </a>
                <a
                  href="#FOOD-FAQ"
                  className="font-DmSans text-white hover:text-cyan-300"
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
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/80 via-blue-900/70 to-teal-800/80"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content with dynamic logo, name, and description */}
            <div className="space-y-8">
              <h1 className="font-QuickSand text-5xl lg:text-7xl font-bold text-cyan-300 leading-tight text-balance">
                {websiteName},
              </h1>
              <p className="font-DmSans text-xl text-gray-200 leading-relaxed text-pretty max-w-lg">
                {description}
              </p>
            </div>

            {/* Right Side - Contact Form (unchanged) */}
            <div className="relative">
              <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="font-QuickSand text-2xl font-bold text-gray-900 mb-2">
                    Get In Touch
                  </h3>
                  <p className="font-DmSans text-gray-600">
                    Send us a message and we'll get back to you soon
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="font-QuickSand block text-sm font-semibold text-gray-900 mb-2"
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
                        className="font-QuickSand block text-sm font-semibold text-gray-900 mb-2"
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
                      className="font-QuickSand block text-sm font-semibold text-gray-900 mb-2"
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
                      className="font-QuickSand block text-sm font-semibold text-gray-900 mb-2"
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
                    className="w-full bg-gradient-to-br from-cyan-900/80 via-blue-900/70 to-teal-800/80 text-white px-6 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
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
        id="HEALTH-ABOUT"
        className={`py-24 bg-gray-50 ${isPreview ? "filter blur-sm" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-QuickSand text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Our Mission
            </h2>
            <p className="font-DmSans text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
        id="HEALTH-SERVICES"
        className={`py-24 bg-white ${isPreview ? "filter blur-sm" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-QuickSand text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Our Services
            </h2>
            <p className="font-DmSans text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From preventive care to specialized treatments, we offer a full
              spectrum of healthcare services designed to meet your unique
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="font-QuickSand text-2xl font-bold text-gray-900 mb-4">
                Primary Care
              </h3>
              <p className="font-DmSans text-gray-600 leading-relaxed mb-6">
                Comprehensive primary healthcare services including routine
                check-ups, preventive screenings, and management of chronic
                conditions with personalized attention to your health goals.
              </p>
              <button className="font-DmSans text-cyan-600 font-medium hover:text-cyan-700 transition-colors duration-200 flex items-center">
                Learn More →
              </button>
            </div>

            {/* Service 2 */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="font-QuickSand text-2xl font-bold text-gray-900 mb-4">
                Diagnostic Services
              </h3>
              <p className="font-DmSans text-gray-600 leading-relaxed mb-6">
                State-of-the-art diagnostic testing and imaging services to
                accurately identify health conditions and develop effective
                treatment plans tailored to your specific needs.
              </p>
              <button className="font-DmSans text-cyan-600 font-medium hover:text-cyan-700 transition-colors duration-200 flex items-center">
                Learn More →
              </button>
            </div>

            {/* Service 3 */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="font-QuickSand text-2xl font-bold text-gray-900 mb-4">
                Wellness Programs
              </h3>
              <p className="font-DmSans text-gray-600 leading-relaxed mb-6">
                Holistic wellness and prevention programs designed to optimize
                your health, including nutrition counseling, fitness planning,
                and lifestyle modification support.
              </p>
              <button className="font-DmSans text-cyan-600 font-medium hover:text-cyan-700 transition-colors duration-200 flex items-center">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Blurred in preview */}
      <section
        id="HEALTH-FAQ"
        className={`py-24 bg-gradient-to-br from-gray-50 to-cyan-50 ${
          isPreview ? "filter blur-sm" : ""
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-QuickSand text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Common Questions
            </h2>
            <p className="font-DmSans text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Find answers to frequently asked questions about our healthcare
              services and policies.
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-DmSans text-cyan-600 font-bold text-sm">
                    1
                  </span>
                </div>
                <div>
                  <h3 className="font-QuickSand text-xl font-bold text-gray-900 mb-3">
                    How do I schedule an appointment?
                  </h3>
                  <p className="font-DmSans text-gray-600 leading-relaxed">
                    You can easily schedule an appointment by calling our office
                    during business hours, using our convenient online booking
                    system available 24/7, or visiting us in person. We offer
                    flexible scheduling options to accommodate your busy
                    lifestyle and urgent healthcare needs.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-DmSans text-cyan-600 font-bold text-sm">
                    2
                  </span>
                </div>
                <div>
                  <h3 className="font-QuickSand text-xl font-bold text-gray-900 mb-3">
                    What insurance plans do you accept?
                  </h3>
                  <p className="font-DmSans text-gray-600 leading-relaxed">
                    We accept most major insurance plans including Medicare,
                    Medicaid, and private insurance providers. Please contact
                    our office with your insurance information, and our
                    dedicated staff will verify your coverage and explain your
                    benefits before your appointment.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-DmSans text-cyan-600 font-bold text-sm">
                    3
                  </span>
                </div>
                <div>
                  <h3 className="font-QuickSand text-xl font-bold text-gray-900 mb-3">
                    What should I bring to my first visit?
                  </h3>
                  <p className="font-DmSans text-gray-600 leading-relaxed">
                    Please bring a valid photo ID, current insurance card,
                    complete list of medications and supplements, relevant
                    medical history, and any recent test results or medical
                    records from previous healthcare providers to ensure
                    comprehensive care.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="font-DmSans text-cyan-600 font-bold text-sm">
                    4
                  </span>
                </div>
                <div>
                  <h3 className="font-QuickSand text-xl font-bold text-gray-900 mb-3">
                    Do you offer telemedicine services?
                  </h3>
                  <p className="font-DmSans text-gray-600 leading-relaxed">
                    Yes, we offer secure telemedicine consultations for
                    appropriate medical conditions, follow-up appointments, and
                    routine check-ins. This convenient option allows you to
                    receive quality healthcare from the comfort of your home
                    while maintaining the same level of professional care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Blurred in preview */}
      <footer
        className={`bg-gray-900 text-white py-16 ${
          isPreview ? "filter blur-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center mr-3">
                  <span className="font-QuickSand text-white font-bold">H</span>
                </div>
                <span className="font-QuickSand text-2xl font-bold">
                  HealthCare
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted healthcare partner, providing compassionate and
                professional medical care with a focus on your wellbeing and
                long-term health.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-QuickSand text-xl font-bold mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#HEALTH-HEADER"
                    className="font-DmSans text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#HEALTH-ABOUT"
                    className="font-DmSans text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#HEALTH-SERVICES"
                    className="font-DmSans text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#HEALTH-FAQ"
                    className="font-DmSans text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-QuickSand text-xl font-bold mb-6">
                Our Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="font-DmSans text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Primary Care
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-DmSans text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Diagnostic Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-DmSans text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Wellness Programs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-DmSans text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    Preventive Care
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-QuickSand text-xl font-bold mb-6">
                Contact Us
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="font-DmSans text-gray-300">
                    123 Health Street, Medical City, MC 12345
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-DmSans text-gray-300">
                    info@healthcare.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-DmSans text-gray-300">
                    +1 (555) 123-CARE
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-DmSans text-gray-300">
                    Mon-Fri: 8AM-6PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="font-DmSans text-gray-400">
              © 2024 HealthCare. All rights reserved. | Privacy Policy | Terms
              of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
