"use client";

import React from "react";

export default function Home() {
  // Custom Button Component
  const Button = ({
    children,
    className = "",
    variant = "default",
    size = "default",
    onClick,
    ...props
  }) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-2xl font-bold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400/50";
    const variants = {
      default:
        "bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white shadow-2xl hover:shadow-cyan-500/25 border border-white/10 hover:border-white/20",
      outline:
        "border-2 border-white/20 hover:border-white/40 hover:bg-white/5 bg-transparent text-white backdrop-blur-sm hover:shadow-lg hover:shadow-white/10",
      ghost: "bg-transparent hover:bg-white/5 text-cyan-400 hover:text-white",
    };
    const sizes = {
      default: "px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-3",
      lg: "px-6 py-4 text-sm sm:px-10 sm:py-5 sm:text-lg md:px-12 md:py-6 md:text-xl",
    };

    return (
      <button
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  };

  // Custom Card Component
  const Card = ({ children, className = "" }) => (
    <div className={`rounded-3xl ${className}`}>{children}</div>
  );

  const CardContent = ({ children, className = "" }) => (
    <div className={className}>{children}</div>
  );

  // Custom Badge Component
  const Badge = ({ children, className = "", variant = "default" }) => {
    const variants = {
      default: "bg-cyan-400/10 text-cyan-300 border border-cyan-400/30",
      outline: "border border-cyan-400/30 text-cyan-300 bg-cyan-400/5",
    };

    return (
      <span
        className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-sm ${variants[variant]} ${className} sm:px-5 sm:py-2 sm:text-sm md:px-6 md:py-3 md:text-base`}
      >
        {children}
      </span>
    );
  };

  // Custom Icons (SVG components)
  const ArrowRight = ({ className = "" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );

  const ArrowUpRight = ({ className = "" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 17L17 7M17 7H7M17 7V17"
      />
    </svg>
  );

  const Play = ({ className = "" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
      />
    </svg>
  );

  const Globe = ({ className = "" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  );

  const Facebook = ({ className = "" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );

  const Linkedin = ({ className = "" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  const Instagram = ({ className = "" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.02.43c-.537.233-.99.542-1.44.992-.45.45-.76.903-.992 1.44-.226.5-.348 1.074-.382 2.021C2.175 6.99 2.162 7.397 2.162 11.017s.013 4.027.048 4.975c.034.947.156 1.521.382 2.021.233.537.542.99.992 1.44.45.45.903.76 1.44.992.5.226 1.074.348 2.021.382.948.035 1.355.048 4.975.048s4.027-.013 4.975-.048c.947-.034 1.521-.156 2.021-.382.537-.233.99-.542 1.44-.992.45-.45.76-.903.992-1.44.226-.5.348-1.074.382-2.021.035-.948.048-1.355.048-4.975s-.013-4.027-.048-4.975c-.034-.947-.156-1.521-.382-2.021-.233-.537-.542-.99-.992-1.44-.45-.45-.903-.76-1.44-.992-.5-.226-1.074-.348-2.021-.382C16.044.013 15.637 0 12.017 0zM12.017 2.162c3.204 0 3.584.012 4.85.07.3.012.611.054.918.21.35.18.663.42.953.71.29.29.53.603.71.953.156.307.198.618.21.918.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.012.3-.054.611-.21.918-.18.35-.42.663-.71.953-.29.29-.603.53-.953.71-.307.156-.618.198-.918.21-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-.3-.012-.611-.054-.918-.21-.35-.18-.663-.42-.953-.71-.29-.29-.53-.603-.71-.953-.156-.307-.198-.618-.21-.918-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.012-.3.054-.611.21-.918.18-.35.42-.663.71-.953.29-.29.603-.53.953-.71.307-.156.618-.198.918-.21 1.266-.058 1.646-.07 4.85-.07z" />
      <path d="M12.017 5.838a6.179 6.179 0 1 0 0 12.358 6.179 6.179 0 0 0 0-12.358zM12.017 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
      <circle cx="18.406" cy="5.594" r="1.44" />
    </svg>
  );

  const Shield = ({ className = "" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );

  const Database = ({ className = "" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );

  const BarChart3 = ({ className = "" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  );

  const Users = ({ className = "" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  const TrendingUp = ({ className = "" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
      <polyline points="16,7 22,7 22,13" />
    </svg>
  );

  const Zap = ({ className = "" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
    </svg>
  );

  const Star = ({ className = "" }) => (
    <svg
      className={className}
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2" />
    </svg>
  );

  const CheckCircle = ({ className = "" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const Target = ({ className = "" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );

  const Award = ({ className = "" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
    </svg>
  );

  const Sparkles = ({ className = "" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3l1.5 1.5L5 6 3.5 4.5 5 3zM12 12l1.5 1.5L12 15l-1.5-1.5L12 12zM19 3l1.5 1.5L19 6l-1.5-1.5L19 3zM5 21l1.5-1.5L5 18l-1.5 1.5L5 21zM19 21l1.5-1.5L19 18l-1.5 1.5L19 21z"
      />
    </svg>
  );

  const Rocket = ({ className = "" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );

  const Layers = ({ className = "" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <polygon points="12,2 2,7 12,12 22,7 12,2" />
      <polyline points="2,17 12,22 22,17" />
      <polyline points="2,12 12,17 22,12" />
    </svg>
  );

  const Brain = ({ className = "" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  );

  const Infinity = ({ className = "" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.178 8C19.077 8.55 20 9.4 20 12s-.923 3.45-1.822 4C17.23 16.55 16 16 16 12s1.23-4.55 2.178-4zM6.822 16C5.923 15.45 5 14.6 5 12s.923-3.45 1.822-4C7.77 7.45 9 8 9 12s-1.23 4.55-2.178 4z"
      />
    </svg>
  );

  const Mail = ({ className = "" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

  const Phone = ({ className = "" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const MapPin = ({ className = "" }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 overflow-x-hidden relative">
      {/* Font Classes Applied to Body */}
      <style jsx global>{`
        body {
          font-family: "DM Sans", sans-serif;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        .font-heading {
          font-family: "Quicksand", sans-serif;
        }
      `}</style>

      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/50 to-purple-950/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(59,130,246,0.1),transparent_50%)]"></div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse opacity-70 shadow-2xl shadow-cyan-400/50"></div>
        <div className="absolute top-40 right-10 sm:right-20 w-5 h-5 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-400 to-pink-500 rotate-45 animate-bounce opacity-60 shadow-2xl shadow-purple-400/50"></div>
        <div className="absolute bottom-40 left-10 sm:left-20 w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-pulse delay-1000 opacity-60 shadow-2xl shadow-emerald-400/50"></div>
        <div className="absolute bottom-20 right-20 sm:right-40 w-4 h-4 sm:w-7 sm:h-7 bg-gradient-to-r from-orange-400 to-red-500 rotate-12 animate-bounce delay-500 opacity-70 shadow-2xl shadow-orange-400/50"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse delay-2000 opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 sm:right-1/3 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-pink-400 to-rose-500 rotate-45 animate-bounce delay-1500 opacity-60"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] animate-pulse"></div>
      </div>

      {/* Enhanced Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-slate-950/90 backdrop-blur-3xl supports-[backdrop-filter]:bg-slate-950/70 shadow-2xl shadow-black/20">
        <div className="container mx-auto flex h-16 sm:h-20 md:h-24 items-center justify-between px-4 sm:px-6 md:px-8">
          <div className="flex items-center space-x-3 sm:space-x-6 group">
            <div className="relative">
              <div className="flex h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-white font-black text-xl sm:text-2xl md:text-3xl shadow-2xl group-hover:shadow-cyan-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 border-2 border-white/20">
                N
              </div>
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-br from-cyan-400/30 via-blue-500/30 to-purple-600/30 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-cyan-400/40 via-blue-500/40 to-purple-600/40 rounded-2xl sm:rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
            <span className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent tracking-tight">
              NOETIC
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {["Services", "About Us", "Insights", "Careers"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="relative text-base lg:text-lg font-bold text-slate-300 hover:text-white transition-all duration-300 group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 blur-sm transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          <Button className="group shadow-2xl hover:shadow-cyan-500/30 px-4 py-2 sm:px-6 sm:py-3 md:px-10 md:py-4 text-sm sm:text-base md:text-lg font-black">
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:translate-x-1 sm:group-hover:translate-x-2" />
          </Button>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-28 md:py-32 lg:py-40">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-gradient-to-br from-purple-500/30 to-pink-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="mx-auto max-w-7xl text-center">
            <Badge className="mb-8 sm:mb-12 md:mb-16 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-xl font-bold rounded-full backdrop-blur-sm border-2 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-400/25 transition-all duration-500 hover:scale-105">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 md:mr-4 animate-pulse" />
              Transforming Healthcare Technology Excellence
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2 sm:ml-3 md:ml-4 animate-bounce" />
            </Badge>

            <h1 className="mb-8 sm:mb-12 md:mb-16 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[12rem] font-black tracking-tight text-white text-balance leading-tight sm:leading-snug md:leading-[0.85]">
              Get in touch with our{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem]">
                  expert team
                </span>
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-600/30 blur-2xl sm:blur-3xl opacity-60 animate-pulse"></div>
              </span>
            </h1>

            <p className="mb-12 sm:mb-16 md:mb-20 text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto text-pretty leading-relaxed font-light">
              We're here to help you achieve your business goals with our
              cutting-edge solutions and unparalleled expertise in healthcare
              technology transformation that drives exceptional results and
              innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 justify-center mb-16 sm:mb-20 md:mb-24">
              <Button
                size="lg"
                className="group shadow-2xl hover:shadow-cyan-500/30 px-8 py-4 sm:px-12 sm:py-5 md:px-16 md:py-6 text-base sm:text-lg md:text-xl lg:text-2xl font-black border-2 border-white/20 hover:border-white/40"
              >
                <Play className="mr-3 h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 transition-transform duration-300 group-hover:scale-125" />
                Talk to Us
                <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 transition-transform duration-300 group-hover:translate-x-1 sm:group-hover:translate-x-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 sm:px-12 sm:py-5 md:px-16 md:py-6 text-base sm:text-lg md:text-xl lg:text-2xl font-black hover:shadow-2xl hover:shadow-white/20 bg-transparent"
              >
                Learn More
                <Globe className="ml-3 h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />
              </Button>
            </div>

            <div className="flex justify-center space-x-6 sm:space-x-8 md:space-x-12">
              {[
                {
                  icon: Facebook,
                  href: "#",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: Linkedin,
                  href: "#",
                  color: "from-blue-600 to-indigo-600",
                },
                {
                  icon: Instagram,
                  href: "#",
                  color: "from-pink-500 to-purple-600",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group relative p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 sm:hover:scale-125 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 shadow-2xl hover:shadow-white/20"
                >
                  <social.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-slate-300 group-hover:text-white transition-colors duration-300" />
                  <div
                    className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                  ></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section
        id="services"
        className="py-20 sm:py-28 md:py-32 lg:py-40 relative"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16 sm:mb-24 md:mb-32">
            <Badge className="mb-6 sm:mb-8 md:mb-12 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-xl rounded-full backdrop-blur-sm border-2">
              Our Premium Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white mb-6 sm:mb-8 md:mb-12 text-balance">
              What do we offer?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto text-pretty leading-relaxed">
              Discover our comprehensive suite of services designed to meet the
              unique needs of the modern competitive healthcare industry with
              cutting-edge innovation and unmatched expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {[
              {
                icon: Shield,
                title: "Compliance Care",
                description:
                  "Comprehensive compliance solutions to ensure your healthcare operations meet all regulatory requirements with automated monitoring and real-time alerts.",
                color: "from-cyan-400 to-blue-500",
                bgColor: "from-cyan-400/20 to-blue-500/20",
                borderColor: "border-cyan-400/30 hover:border-cyan-400/60",
                shadowColor: "hover:shadow-cyan-400/25",
              },
              {
                icon: BarChart3,
                title: "E-Billing",
                description:
                  "Streamlined electronic billing systems that improve accuracy and reduce processing time with AI-powered automation and intelligent error detection.",
                color: "from-purple-400 to-pink-500",
                bgColor: "from-purple-400/20 to-pink-500/20",
                borderColor: "border-purple-400/30 hover:border-purple-400/60",
                shadowColor: "hover:shadow-purple-400/25",
              },
              {
                icon: Database,
                title: "Data Solutions",
                description:
                  "Advanced data management and analytics to drive informed decision-making with real-time insights, predictive modeling, and comprehensive reporting.",
                color: "from-emerald-400 to-teal-500",
                bgColor: "from-emerald-400/20 to-teal-500/20",
                borderColor:
                  "border-emerald-400/30 hover:border-emerald-400/60",
                shadowColor: "hover:shadow-emerald-400/25",
              },
              {
                icon: Users,
                title: "Consulting",
                description:
                  "Expert consulting services to optimize your healthcare technology infrastructure with strategic planning, implementation guidance, and ongoing support.",
                color: "from-orange-400 to-red-500",
                bgColor: "from-orange-400/20 to-red-500/20",
                borderColor: "border-orange-400/30 hover:border-orange-400/60",
                shadowColor: "hover:shadow-orange-400/25",
              },
              {
                icon: TrendingUp,
                title: "Analytics",
                description:
                  "Powerful analytics tools to gain insights and improve operational efficiency with machine learning, business intelligence, and advanced visualization.",
                color: "from-indigo-400 to-purple-500",
                bgColor: "from-indigo-400/20 to-purple-500/20",
                borderColor: "border-indigo-400/30 hover:border-indigo-400/60",
                shadowColor: "hover:shadow-indigo-400/25",
              },
              {
                icon: Zap,
                title: "Integration",
                description:
                  "Seamless system integration to connect all your healthcare technology platforms with enterprise-grade security, scalability, and reliability.",
                color: "from-yellow-400 to-orange-500",
                bgColor: "from-yellow-400/20 to-orange-500/20",
                borderColor: "border-yellow-400/30 hover:border-yellow-400/60",
                shadowColor: "hover:shadow-yellow-400/25",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden hover:shadow-xl sm:hover:shadow-2xl ${service.shadowColor} transition-all duration-500 hover:scale-105 ${service.borderColor} bg-slate-900/60 backdrop-blur-sm border-2 sm:border-3 hover:-translate-y-2 sm:hover:-translate-y-4 rounded-2xl sm:rounded-3xl`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12 relative z-10">
                  <div
                    className={`flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br ${service.color} rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 md:mb-10 group-hover:scale-110 transition-transform duration-300 shadow-xl sm:shadow-2xl group-hover:shadow-lg border-2 border-white/20`}
                  >
                    <service.icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-4 sm:mb-6 md:mb-8 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-pretty leading-relaxed mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg lg:text-xl">
                    {service.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-cyan-400 hover:text-white transition-colors duration-300 font-black group/btn text-sm sm:text-base md:text-lg lg:text-xl"
                  >
                    Learn more
                    <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 sm:group-hover/btn:translate-x-2 sm:group-hover/btn:-translate-y-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <section className="py-20 sm:py-28 md:py-32 lg:py-40 relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24 items-center">
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              <Badge className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-xl rounded-full backdrop-blur-sm border-2">
                Why Choose Excellence
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white text-balance">
                Why Noetic?
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 text-pretty leading-relaxed">
                We work closely with our partners to maximize their success by
                streamlining their digital solutions and workflows, while taking
                care of their most critical business operations with unmatched
                expertise and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
                <Button className="group shadow-xl sm:shadow-2xl hover:shadow-cyan-500/30 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl font-black border-2 border-white/20">
                  <Target className="mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 transition-transform duration-300 group-hover:scale-110" />
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 transition-transform duration-300 group-hover:translate-x-1 sm:group-hover:translate-x-2" />
                </Button>
                <Button
                  variant="outline"
                  className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl font-black hover:shadow-xl sm:hover:shadow-2xl hover:shadow-white/20 bg-transparent"
                >
                  <Award className="mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8" />
                  View Case Studies
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              {[
                {
                  number: "440M+",
                  label: "Records Processed",
                  color: "from-emerald-400 to-teal-500",
                  icon: Database,
                },
                {
                  number: "178M+",
                  label: "Transactions",
                  color: "from-blue-500 to-indigo-600",
                  icon: TrendingUp,
                },
                {
                  number: "63M+",
                  label: "Claims Processed",
                  color: "from-green-400 to-emerald-500",
                  icon: CheckCircle,
                },
                {
                  number: "99.9%",
                  label: "Uptime",
                  color: "from-purple-500 to-pink-600",
                  icon: Shield,
                },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden hover:shadow-xl sm:hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 bg-slate-900/60 backdrop-blur-sm border-2 sm:border-3 border-white/20 hover:border-white/40 hover:-translate-y-2 sm:hover:-translate-y-4 rounded-2xl sm:rounded-3xl"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>
                  <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-center relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${stat.color} text-white mb-4 sm:mb-6 md:mb-8 lg:mb-10 group-hover:scale-110 transition-transform duration-300 shadow-xl sm:shadow-2xl border-2 border-white/20`}
                    >
                      <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12" />
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-2 sm:mb-3 md:mb-4 lg:mb-6 group-hover:text-cyan-300 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-slate-300 font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-20 sm:py-28 md:py-32 lg:py-40 relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16 sm:mb-24 md:mb-32">
            <Badge className="mb-6 sm:mb-8 md:mb-12 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-xl rounded-full backdrop-blur-sm border-2">
              Our Strategic Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white mb-6 sm:mb-8 md:mb-12 text-balance">
              How we work?
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto text-pretty leading-relaxed">
              With seamless partnerships, Noetic has established itself as a
              dominant market player. We work closely with digital solutions to
              maximize revenue while implementing smart billing systems and
              innovative technology.
            </p>
          </div>

          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {[
                {
                  title: "Content Provider",
                  description:
                    "Partner with healthcare providers for comprehensive solutions and strategic alignment",
                  step: "01",
                  color: "from-cyan-400 to-blue-500",
                  icon: Users,
                },
                {
                  title: "In-house Services",
                  description:
                    "Comprehensive internal solutions with expert teams and cutting-edge technology",
                  step: "02",
                  color: "from-purple-400 to-pink-500",
                  icon: Layers,
                },
                {
                  title: "Smart Billing",
                  description:
                    "Intelligent billing systems with AI automation and predictive analytics",
                  step: "03",
                  color: "from-emerald-400 to-teal-500",
                  icon: Brain,
                },
                {
                  title: "Service Delivery",
                  description:
                    "Reliable service implementation with 24/7 support and monitoring",
                  step: "04",
                  color: "from-orange-400 to-red-500",
                  icon: Rocket,
                },
                {
                  title: "Connectivity",
                  description:
                    "Seamless system integration across all platforms with enterprise security",
                  step: "05",
                  color: "from-indigo-400 to-purple-500",
                  icon: Infinity,
                },
                {
                  title: "Revenue",
                  description:
                    "Maximized financial outcomes with strategic optimization and growth",
                  step: "06",
                  color: "from-yellow-400 to-orange-500",
                  icon: TrendingUp,
                },
              ].map((process, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden hover:shadow-xl sm:hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 bg-slate-900/60 backdrop-blur-sm border-2 sm:border-3 border-white/20 hover:border-white/40 hover:-translate-y-2 sm:hover:-translate-y-4 rounded-2xl sm:rounded-3xl"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${process.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>
                  <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12 relative z-10">
                    <div
                      className={`absolute -top-4 -left-4 sm:-top-6 sm:-left-6 md:-top-8 md:-left-8 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br ${process.color} text-white rounded-2xl sm:rounded-3xl flex items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-black shadow-xl sm:shadow-2xl group-hover:scale-110 transition-transform duration-300 border-2 sm:border-3 md:border-4 border-slate-900`}
                    >
                      {process.step}
                    </div>
                    <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
                      <div className="flex items-center mb-4 sm:mb-6 md:mb-8">
                        <process.icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-cyan-400 mr-3 sm:mr-4 md:mr-6" />
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white group-hover:text-cyan-300 transition-colors duration-300">
                          {process.title}
                        </h3>
                      </div>
                      <p className="text-slate-300 text-pretty leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
                        {process.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Payment Partners Section */}
      <section className="py-20 sm:py-28 md:py-32 lg:py-40 relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl sm:max-w-5xl md:max-w-6xl mx-auto text-center">
            <Badge className="mb-6 sm:mb-8 md:mb-12 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-xl rounded-full backdrop-blur-sm border-2">
              Trusted Global Partners
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white mb-6 sm:mb-8 md:mb-12 text-balance">
              Our Payment Partners
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 sm:mb-8 md:mb-10 text-pretty leading-relaxed">
              With our trusted partners, we ensure your clients receive seamless
              and safe transactions with enterprise-grade security and
              reliability that exceeds industry standards and regulatory
              requirements.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-12 sm:mb-16 md:mb-20">
              From traditional card-based payment systems to modern digital
              wallets and cryptocurrency solutions, we have comprehensive
              coverage with global reach and local expertise.
            </p>
            <Button className="group shadow-xl sm:shadow-2xl hover:shadow-cyan-500/30 px-8 py-4 sm:px-12 sm:py-5 md:px-14 md:py-6 lg:px-16 lg:py-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black border-2 border-white/20">
              <Users className="mr-3 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 transition-transform duration-300 group-hover:scale-110" />
              Work With Us
              <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 transition-transform duration-300 group-hover:translate-x-1 sm:group-hover:translate-x-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Client Testimonial */}
      <section className="py-20 sm:py-28 md:py-32 lg:py-40 relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <Badge className="mb-6 sm:mb-8 md:mb-12 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-xl rounded-full backdrop-blur-sm border-2">
              Client Success Stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white mb-4 sm:mb-6 md:mb-8">
              Client Testimonial
            </h2>
          </div>

          <div className="max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto">
            <Card className="group relative overflow-hidden hover:shadow-xl sm:hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 bg-slate-900/60 backdrop-blur-sm border-2 sm:border-3 border-white/20 hover:border-white/40 p-6 sm:p-10 md:p-14 lg:p-16 xl:p-20 rounded-2xl sm:rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="text-center relative z-10 p-0">
                <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 fill-yellow-400 text-yellow-400 mx-1 sm:mx-2 md:mx-3 animate-pulse"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-200 mb-8 sm:mb-12 md:mb-16 italic text-pretty leading-relaxed font-light">
                  "We have worked with Noetic on various MIS projects and they
                  always delivered on time and to our high standards, giving us
                  extra value when needed. Their expertise and innovation are
                  truly unmatched in the industry."
                </blockquote>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 lg:space-x-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center shadow-xl sm:shadow-2xl">
                    <Users className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">
                      Noetic Director
                    </div>
                    <div className="text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl">
                      Managing Director - Noetic/Noetic Minds
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced News Section */}
      <section className="py-20 sm:py-28 md:py-32 lg:py-40 relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16 sm:mb-24 md:mb-32">
            <Badge className="mb-6 sm:mb-8 md:mb-12 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-xl rounded-full backdrop-blur-sm border-2">
              Latest Industry Updates
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white mb-4 sm:mb-6 md:mb-8">
              Noetic News
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {[
              {
                title: "Noetic Minds Delivery Hub",
                description:
                  "Exploring our latest delivery hub innovations and capabilities that are transforming healthcare technology and setting new industry standards.",
                image: "/modern-office-technology-hub.jpg",
                category: "Innovation",
                readTime: "5 min read",
                color: "from-cyan-400 to-blue-500",
              },
              {
                title:
                  "Investing in change and transforming lives through technology",
                description:
                  "How we're making a difference in healthcare through innovative solutions, strategic partnerships, and cutting-edge technology implementations.",
                image: "/healthcare-technology-transformation.jpg",
                category: "Impact",
                readTime: "7 min read",
                color: "from-purple-400 to-pink-500",
              },
              {
                title: "We helped clients save $2.5m during the first 6 months",
                description:
                  "Case study on our cost-saving solutions and their measurable impact on client operations, efficiency improvements, and bottom-line results.",
                image: "/business-growth-financial-success.jpg",
                category: "Success Story",
                readTime: "4 min read",
                color: "from-emerald-400 to-teal-500",
              },
            ].map((article, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden hover:shadow-xl sm:hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 bg-slate-900/60 backdrop-blur-sm border-2 sm:border-3 border-white/20 hover:border-white/40 hover:-translate-y-2 sm:hover:-translate-y-4 rounded-2xl sm:rounded-3xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-700 relative overflow-hidden">
                    <img
                      src={
                        article.image ||
                        "/placeholder.svg?height=400&width=600&query=modern technology office"
                      }
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8">
                      <Badge
                        className={`bg-gradient-to-r ${article.color} text-white px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-3 rounded-full text-xs sm:text-sm md:text-base font-black border-0`}
                      >
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 relative z-10">
                  <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-400 font-bold">
                      {article.readTime}
                    </span>
                    <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:group-hover:translate-x-2 sm:group-hover:-translate-y-2" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-4 sm:mb-6 md:mb-8 text-balance group-hover:text-cyan-300 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-slate-300 text-pretty leading-relaxed mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg lg:text-xl">
                    {article.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-cyan-400 hover:text-white transition-colors duration-300 font-black group/btn text-sm sm:text-base md:text-lg lg:text-xl"
                  >
                    Read More
                    <ArrowUpRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 sm:group-hover/btn:translate-x-2 sm:group-hover/btn:-translate-y-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 relative border-t-2 border-white/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-4 sm:space-x-6 group mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                <div className="relative">
                  <div className="flex h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-white font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl shadow-xl sm:shadow-2xl group-hover:shadow-cyan-500/30 transition-all duration-500 group-hover:scale-110 border-2 border-white/20">
                    N
                  </div>
                  <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-br from-cyan-400/30 via-blue-500/30 to-purple-600/30 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
                <span className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                  NOETIC
                </span>
              </div>
              <p className="text-slate-300 mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-pretty leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
                Get in touch with our expert team for innovative healthcare
                technology solutions that transform your business operations and
                drive exceptional results.
              </p>
              <div className="flex space-x-4 sm:space-x-6 md:space-x-8">
                {[
                  { icon: Facebook, href: "#", color: "hover:bg-blue-600/30" },
                  { icon: Linkedin, href: "#", color: "hover:bg-blue-700/30" },
                  { icon: Instagram, href: "#", color: "hover:bg-pink-600/30" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`group relative p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-white/10 ${social.color} transition-all duration-300 hover:scale-110 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 shadow-xl sm:shadow-2xl hover:shadow-white/20`}
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-slate-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-black mb-6 sm:mb-8 md:mb-10 text-lg sm:text-xl md:text-2xl text-white">
                Services
              </h3>
              <ul className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-slate-300">
                {[
                  "Compliance Care",
                  "E-Billing",
                  "Data Solutions",
                  "Consulting",
                  "Analytics",
                  "Integration",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm sm:text-base md:text-lg lg:text-xl hover:text-cyan-300 font-semibold"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-black mb-6 sm:mb-8 md:mb-10 text-lg sm:text-xl md:text-2xl text-white">
                Company
              </h3>
              <ul className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-slate-300">
                {[
                  "About Us",
                  "Careers",
                  "News",
                  "Contact",
                  "Privacy Policy",
                  "Terms of Service",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block text-sm sm:text-base md:text-lg lg:text-xl hover:text-cyan-300 font-semibold"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-black mb-6 sm:mb-8 md:mb-10 text-lg sm:text-xl md:text-2xl text-white">
                Contact Info
              </h3>
              <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 text-slate-300">
                <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 group">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-white transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
                    info@noetic.com
                  </span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 group">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-white transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 group">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:text-white transition-colors duration-300 text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
                    New York, NY
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-white/20 mt-12 sm:mt-16 md:mt-20 lg:mt-24 pt-8 sm:pt-10 md:pt-12 text-center text-slate-400">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
              &copy; 2024 Noetic Technologies. All rights reserved. Transforming
              healthcare through innovation and excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
