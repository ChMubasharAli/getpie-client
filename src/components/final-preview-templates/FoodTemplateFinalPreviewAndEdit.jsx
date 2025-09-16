// src/components/templates/FoodTemplate.jsx
// Food-themed template modified to include dynamic formData (website_name, business_description, logo) in the header and hero sections.
// Non-header sections (About, FAQ, Services, large image section, Footer) are blurred in preview mode using Tailwind's filter blur-sm.
// Original design and content preserved exactly as provided, with only specified changes.

import { Button, Card } from "@mantine/core";
import { Menu } from "lucide-react";
import ImagesSlider from "../ImagesSlider";

export default function FoodTemplate({ formData = {}, isPreview = false }) {
  // Dynamic data from formData with fallbacks to original content
  const websiteName = formData.website_name || "Delicious";
  const description =
    formData.business_description ||
    "Experience the finest flavors crafted with passion and served with love. Our commitment to quality ingredients and exceptional taste makes every bite memorable.";
  const logoSrc = formData.logo
    ? URL.createObjectURL(formData.logo)
    : "/default-logo.jpg"; // Fallback logo image

  return (
    <div className="min-h-screen">
      {/* Header - Clear, dynamic logo and website name */}
      <header className="bg-white shadow-sm sticky top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="text-xl font-QuickSand font-bold text-gray-900">
                {websiteName}
              </span>
            </div>
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#FOOD-HEADER"
                className="font-DmSans text-gray-700 hover:text-orange-500"
              >
                Home
              </a>
              <a
                href="#FOOD-ABOUT"
                className="font-DmSans text-gray-700 hover:text-orange-500"
              >
                About
              </a>
              <a
                href="#FOOD-SERVICES"
                className="font-DmSans text-gray-700 hover:text-orange-500"
              >
                Services
              </a>
              <a
                href="#FOOD-FAQ"
                className="font-DmSans text-gray-700 hover:text-orange-500"
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

      {/* Hero Section - Clear, dynamic content */}
      <section
        id="FOOD-HEADER"
        className="relative bg-white bg-cover bg-center py-20 m-4 rounded-2xl"
        style={{ backgroundImage: "url('/food/heroSectionImage.webp')" }}
      >
        <div className="absolute rounded-2xl inset-0 bg-black/30 p-4" />{" "}
        {/* optional overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-QuickSand lg:text-6xl font-bold text-white mb-6 leading-tight">
                {websiteName}
                <br />
                For Everyone
              </h1>
              <p className="text-lg font-DmSans text-gray-100 mb-8 leading-relaxed">
                {description}
              </p>
              <button className="bg-orange-500 font-DmSans hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg transition-colors duration-200 font-medium">
                Explore Menu
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
                    className="w-full bg-gradient-to-br bg-orange-500 font-DmSans hover:bg-orange-600 text-white px-6 py-4 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
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

      {/* About us Section - Blurred in preview */}
      <section
        id="FOOD-ABOUT"
        className={`py-20 bg-white ${isPreview ? "filter blur-sm" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-QuickSand font-bold text-center text-gray-900 mb-16">
            About Our Business
          </h2>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="/food/about.webp"
                  alt="Fresh food preparation"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-QuickSand font-bold leading-snug text-gray-900 mb-6">
                  A Simple Way to Enjoy Great Food
                </h2>
                <p className="font-DmSans text-gray-600 mb-8 leading-relaxed">
                  We believe great food should be accessible to everyone. Our
                  commitment to fresh ingredients, traditional recipes, and
                  modern techniques ensures every dish meets the highest
                  standards of taste and quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions - Blurred in preview */}
      <section
        id="FOOD-FAQ"
        className={`py-20 bg-orange-50 ${isPreview ? "filter blur-sm" : ""}`}
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

      {/* Large Food Image Section - Blurred in preview */}
      <section
        className={`py-20 bg-gray-100 ${isPreview ? "filter blur-sm" : ""}`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[60vh] rounded-lg">
            <img
              src="/food/bigImage.webp"
              alt="Gourmet food presentation"
              fill
              className="object-cover h-full w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section - Blurred in preview */}
      <section
        id="FOOD-SERVICES"
        className={`py-20 bg-gray-900 ${isPreview ? "filter blur-sm" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-QuickSand text-4xl font-bold text-white">
              Our Services & Products
            </h2>
          </div>

          <ImagesSlider />
        </div>
      </section>

      {/* Footer - Blurred in preview */}
      <footer className={`bg-white py-16 ${isPreview ? "filter blur-sm" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="font-QuickSand text-xl font-bold text-gray-900">
                  Delicious
                </span>
              </div>
              <p className="font-DmSans text-gray-600 mb-4">
                Bringing you the finest culinary experiences with fresh
                ingredients, expert preparation, and exceptional service. Taste
                the difference quality makes.
              </p>
              {/* <div className="flex space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              </div> */}
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-QuickSand text-lg font-bold text-gray-900 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#FOOD-HEADER"
                    className="font-DmSans text-gray-600 hover:text-orange-500"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#FOOD-ABOUT"
                    className="font-DmSans text-gray-600 hover:text-orange-500"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#FOOD-SERVICES"
                    className="font-DmSans text-gray-600 hover:text-orange-500"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#FOOD-FAQ"
                    className="font-DmSans text-gray-600 hover:text-orange-500"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-QuickSand text-lg font-bold text-gray-900 mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="font-DmSans text-gray-600 hover:text-orange-500"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-DmSans text-gray-600 hover:text-orange-500"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-DmSans text-gray-600 hover:text-orange-500"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-DmSans text-gray-600 hover:text-orange-500"
                  >
                    News
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
                <p className="font-DmSans text-gray-600">
                  123 Street Name, City, State 12345
                </p>
                <p className="font-DmSans text-gray-600">info@company.com</p>
                <p className="font-DmSans text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="font-DmSans text-gray-600">
              © 2024 Delicious Food Company. All rights reserved. | Privacy
              Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
