import { Text } from "@mantine/core";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const services = [
  {
    icon: "📊", // Brand Identity icon placeholder
    title: "Brand Identity",
    description:
      "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
  },
  {
    icon: "🎨", // Illustration icon placeholder
    title: "Illustration",
    description:
      "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
  },
  {
    icon: "📢", // Marketing icon placeholder
    title: "Marketing",
    description:
      "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
  },
  {
    icon: "💻", // Web Design icon placeholder
    title: "Web Design",
    description:
      "Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.",
  },
];

const portfolioItems = [
  "https://images.pexels.com/photos/1216345/pexels-photo-1216345.jpeg",
  "https://images.pexels.com/photos/4091219/pexels-photo-4091219.jpeg",
  "https://images.unsplash.com/photo-1757664171295-4fd313cd6bd1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.pexels.com/photos/29252875/pexels-photo-29252875.jpeg",
];

export default function TemplateSix({
  formData: UserData = {},
  isPreview = false,
}) {
  // Dynamic data from formData with fallbacks to original content
  const businessName = UserData.businessName || "";
  const description =
    UserData.business_description ||
    "Experience compassionate care and professional health services tailored to your unique needs. We're committed to supporting your wellness journey with expertise and dedication.";
  const logoSrc = UserData.logo
    ? URL.createObjectURL(UserData.logo)
    : "/default-logo.jpg"; // Fallback logo image

  const [userFormData, setUserFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [openFAQ, setOpenFAQ] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "FAQ", href: "#faq" },
    { name: "CONTACT", href: "#contact" },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of creative services including brand identity design, web development, digital marketing, illustration, and user experience design. Our team specializes in creating cohesive digital experiences that drive results and elevate your brand presence in the market.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while comprehensive branding projects can take 6-8 weeks. We always provide detailed timelines during our initial consultation and keep you updated throughout the entire process.",
    },
    {
      question: "Do you work with startups or only established businesses?",
      answer:
        "We work with businesses of all sizes, from innovative startups to established enterprises. Our scalable approach allows us to tailor our services to match your budget, timeline, and growth objectives, ensuring you get maximum value regardless of your company's stage.",
    },
    {
      question: "What is your design process like?",
      answer:
        "Our design process is collaborative and transparent. We start with discovery and research, move through concept development and design iterations, then finalize with implementation and launch. You'll be involved at every step, with regular check-ins and opportunities for feedback.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Absolutely! We believe in long-term partnerships with our clients. We offer ongoing support packages that include maintenance, updates, performance monitoring, and strategic consultations to ensure your digital presence continues to evolve with your business needs.",
    },
    {
      question: "How do you handle project pricing?",
      answer:
        "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. After understanding your specific needs and requirements, we provide transparent, detailed proposals with no hidden costs. We believe in fair pricing that reflects the value we deliver.",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", userFormData);
    setUserFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);
  return (
    <>
      {/* Hero Section  */}

      <div className="h-screen bg-gray-900 relative overflow-hidden">
        {/* Background with leaf overlay effect */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: `url(/six/heroBackgroundImag.jpg)`,
          }}
        />

        {/* Header */}
        <header className="relative z-10 flex justify-between items-center p-6 lg:p-8">
          <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-blue-800 to-gray-900 overflow-hidden mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-700/50">
            <img
              src={logoSrc || "/placeholder.svg"}
              alt="Website Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <button
            className="flex cursor-pointer items-center space-x-2 text-green-400 font-DmSans text-sm lg:text-base tracking-wider z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span>MENU</span>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </header>

        {/* Sidebar Code starts from here  */}
        {/* Sidebar Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-gray-800 transform transition-transform duration-300 ease-in-out z-40 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <div className="font-QuickSand text-green-400 text-2xl font-bold">
                {businessName}
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 py-8">
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleMenuClick(item.href)}
                      className="w-full text-left px-6 py-4 font-DmSans text-gray-300 hover:text-green-400 hover:bg-gray-700 transition-all duration-200 text-sm tracking-wider"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Sidebar Footer */}
            <div className="p-6 border-t border-gray-700">
              <p className="font-DmSans text-gray-400 text-sm mb-4">
                Follow Us
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  <BsFacebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  <BsTwitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  <BsInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/90 z-30 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Sidebar Code Ends here  */}

        {/* Main Content */}
        <main className="relative z-10 h-full  flex flex-col justify-center items-center  px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-5xl ">
            {/* Welcome Text */}
            <p className="font-DmSans text-gray-400 text-sm lg:text-base tracking-widest uppercase mb-6 lg:mb-8">
              WELCOME TO {businessName}
            </p>

            {/* Main Heading */}
            <Text
              lineClamp={4}
              className="!font-QuickSand !text-white !text-3xl md:!text-5xl lg:!text-6xl 2xl:!text-7xl !font-bold  !leading-normal !mb-12 lg:!mb-16"
            >
              {description}
            </Text>

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <button className="border-2 border-white text-white font-DmSans px-8 py-4 text-sm tracking-wider uppercase hover:bg-white hover:text-gray-900 transition-all duration-300">
                START A PROJECT
              </button>
              <button className="border-2 border-white text-white font-DmSans px-8 py-4 text-sm tracking-wider uppercase hover:bg-white hover:text-gray-900 transition-all duration-300">
                MORE ABOUT US
              </button>
            </div> */}
          </div>
        </main>

        {/* Social Media Icons - Right Side */}
        <div className="hidden lg:absolute lg:block right-4 lg:right-6 top-1/2 transform -translate-y-1/2 z-20">
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:border-green-400 hover:text-green-400 transition-all duration-300"
            >
              <BsFacebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:border-green-400 hover:text-green-400 transition-all duration-300"
            >
              <BsTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:border-green-400 hover:text-green-400 transition-all duration-300"
            >
              <BsInstagram className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:border-green-400 hover:text-green-400 transition-all duration-300"
            >
              <BsLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
      </div>

      {/* Contact us Section */}

      <section
        className={`bg-gray-900 py-16 lg:py-24 relative overflow-hidden ${
          isPreview ? "filter blur-sm" : ""
        }`}
      >
        {/* Background Pattern with circles */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url('/six/contactUsBackgroundImage.jpg')`,
          }}
        />

        <div className="max-w-7xl  mx-auto px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="font-DmSans text-green-400 text-sm lg:text-base tracking-widest uppercase mb-6 lg:mb-8">
              CONTACT US
            </p>

            <h2 className="font-QuickSand text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight max-w-5xl mx-auto">
              Reach out for a new project
            </h2>
          </div>

          <div className="grid grid-cols-1    max-w-3xl mx-auto">
            {/* Contact Form */}
            <div>
              <h3 className="font-DmSans text-white text-sm tracking-widest uppercase mb-8">
                SEND US A MESSAGE
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 ">
                {/* First Name Field */}
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={userFormData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-500 py-4 px-0 focus:border-green-400 focus:outline-none transition-colors duration-300 font-DmSans"
                    required
                  />
                </div>

                {/* Last Name Field  */}
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={userFormData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-500 py-4 px-0 focus:border-green-400 focus:outline-none transition-colors duration-300 font-DmSans"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={userFormData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-500 py-4 px-0 focus:border-green-400 focus:outline-none transition-colors duration-300 font-DmSans"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={userFormData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-500 py-4 px-0 focus:border-green-400 focus:outline-none transition-colors duration-300 resize-none font-DmSans"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white font-DmSans py-4 px-8 text-sm tracking-wider uppercase hover:bg-green-600 transition-colors duration-300"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}

      <section
        className={`bg-green-500 py-16 lg:py-24 ${
          isPreview ? "filter blur-sm" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          {/* Header */}
          <div className="mb-12 lg:mb-16">
            <p className="font-DmSans text-gray-800 text-sm lg:text-base tracking-widest uppercase mb-6 lg:mb-8">
              HELLO THERE
            </p>

            <h2 className="font-QuickSand text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 lg:mb-8">
              We Are Glint
            </h2>

            <div className="h-[0.5px] max-w-2xs mx-auto bg-white mb-12 lg:mb-16"></div>

            <div className="max-w-4xl mx-auto">
              <p className="font-DmSans text-gray-800 text-base lg:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt.
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Awards Received */}
            <div className="text-center border-r border-white">
              <div className="font-QuickSand text-white text-5xl sm:text-6xl lg:text-7xl font-semibold mb-3 lg:mb-4">
                127
              </div>
              <p className="font-DmSans text-gray-800 text-sm lg:text-base font-medium">
                Awards Received
              </p>
            </div>

            {/* Cups of Coffee */}
            <div className="text-center border-r border-white">
              <div className="font-QuickSand text-white text-5xl sm:text-6xl lg:text-7xl font-semibold mb-3 lg:mb-4">
                1505
              </div>
              <p className="font-DmSans text-gray-800 text-sm lg:text-base font-medium">
                Cups of Coffee
              </p>
            </div>

            {/* Projects Completed */}
            <div className="text-center border-r border-white">
              <div className="font-QuickSand text-white text-5xl sm:text-6xl lg:text-7xl font-semibold mb-3 lg:mb-4">
                109
              </div>
              <p className="font-DmSans text-gray-800 text-sm lg:text-base font-medium">
                Projects Completed
              </p>
            </div>

            {/* Happy Clients */}
            <div className="text-center border-r border-white">
              <div className="font-QuickSand text-white text-5xl sm:text-6xl lg:text-7xl font-semibold mb-3 lg:mb-4">
                102
              </div>
              <p className="font-DmSans text-gray-800 text-sm lg:text-base font-medium">
                Happy Clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}

      <section
        className={`bg-gray-50 py-16 lg:py-24 ${
          isPreview ? "filter blur-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="font-DmSans text-green-500 text-sm lg:text-base tracking-widest uppercase mb-6 lg:mb-8">
              WHAT WE DO
            </p>

            <h2 className="font-QuickSand text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight max-w-5xl mx-auto">
              We've got everything you need to launch and grow your business
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center text-white text-2xl">
                    {/* Simple geometric icon representations */}
                    {index === 0 && (
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 16V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
                        <path d="M7 8l4 4 4-4" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    )}
                    {index === 3 && (
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <path d="M12 17h.01" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-QuickSand text-gray-900 text-2xl lg:text-3xl font-medium mb-4">
                    {service.title}
                  </h3>
                  <p className="font-DmSans text-gray-600 text-base lg:text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}

      <section
        className={`bg-gray-900  py-16 lg:py-24 relative ${
          isPreview ? "filter blur-sm" : ""
        }`}
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(/six/heroBackgroundImag.jpg)`,
          }}
        />

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <p className="font-DmSans text-green-400 text-sm lg:text-base tracking-widest uppercase mb-6 lg:mb-8">
            RECENT WORKS
          </p>

          <h2 className="font-QuickSand text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight max-w-5xl mx-auto">
            We love what we do, check out some of our latest works
          </h2>
        </div>
      </section>

      {/* Portfolio Grid */}
      <div
        className={`grid grid-cols-1 -mt-24 md:grid-cols-2 gap-x-1 px-2  max-w-6xl mx-auto ${
          isPreview ? "filter blur-sm" : ""
        }`}
      >
        {/* left side  */}
        <div className="space-y-1">
          <div
            className={`relative overflow-hidden group cursor-pointer h-[300px] md:h-[500px]`}
          >
            <img
              src={portfolioItems[0]}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div
            className={`relative overflow-hidden group cursor-pointer h-[500px] md:h-[700px]`}
          >
            <img
              src={portfolioItems[1]}
              alt="Portfolio Item"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* right side  */}
        <div className="space-y-1">
          <div
            className={`relative cursor-pointer overflow-hidden group  h-[500px] md:h-[700px]`}
          >
            <img
              src={portfolioItems[2]}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div
            className={`relative overflow-hidden group h-[300px] md:h-[500px]`}
          >
            <img
              src={portfolioItems[3]}
              alt="Portfolio Item"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}

      <section
        className={`bg-gray-50 py-16 lg:py-24 ${
          isPreview ? "filter blur-sm" : ""
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="font-DmSans text-green-500 text-sm lg:text-base tracking-widest uppercase mb-6 lg:mb-8">
              FREQUENTLY ASKED
            </p>

            <h2 className="font-QuickSand text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
              Questions & Answers
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 lg:px-8 py-6 text-left flex justify-between items-center focus:outline-none group"
                >
                  <h3 className="font-QuickSand text-gray-900 text-lg lg:text-xl font-medium pr-4 group-hover:text-green-500 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <div
                      className={`w-8 h-8 rounded-full border-2 border-green-500 flex items-center justify-center transition-all duration-300 ${
                        openFAQ === index
                          ? "bg-green-500 rotate-180"
                          : "bg-white"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 transition-colors duration-300 ${
                          openFAQ === index ? "text-white" : "text-green-500"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFAQ === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 lg:px-8 pb-6">
                    <p className="font-DmSans text-gray-600 text-base lg:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section  */}

      <footer
        className={`bg-gray-900 py-16 lg:py-20 ${
          isPreview ? "filter blur-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* Left Column - Company Info */}
            <div className="max-w-md">
              <div className="font-QuickSand text-green-500 text-3xl lg:text-4xl font-bold mb-8">
                Glint.
              </div>

              <p className="font-DmSans text-gray-400 text-base lg:text-lg leading-relaxed">
                Proin eget tortor risus. Mauris blandit aliquet elit, eget
                tincidunt nibh pulvinar a. Praesent sapien massa, convallis a
                pellentesque nec, egestas non nisl. Mauris blandit aliquet elit,
                eget tincidunt nibh pulvinar a. Nulla porttitor accumsan
                tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas
                autem necessitatibus vitae aut.
              </p>
            </div>

            {/* Right Column - Newsletter */}
            <div className="max-w-md">
              <h3 className="font-QuickSand text-white text-2xl lg:text-3xl font-medium mb-6">
                Get Notified
              </h3>

              <p className="font-DmSans text-gray-400 text-base lg:text-lg leading-relaxed mb-8">
                Quia quo qui sed odit. Quaerat voluptas autem necessitatibus
                vitae aut non alias sed quia. Ut itaque enim optio ut excepturi
                deserunt iusto porro.
              </p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
              <p className="font-DmSans text-gray-500 text-sm">
                © Copyright Glint 2022
              </p>
              <p className="font-DmSans text-gray-500 text-sm mt-2 sm:mt-0">
                Site Template by{" "}
                <span className="text-white hover:text-green-400 transition-colors duration-300">
                  Colorlib
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
