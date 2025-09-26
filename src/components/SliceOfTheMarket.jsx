"use client";

const partnerLogos = [
  {
    id: 2,
    logo: "/google.png",
  },
  {
    id: 2,
    logo: "/fanatics.png",
  },
  {
    id: 3,
    logo: "/adidas.png",
  },
  {
    id: 4,
    logo: "churchChicken.png",
  },
  {
    id: 5,
    logo: "microsoft.png",
  },
];

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

  const Twitter = ({ className = "" }) => (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.953 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.723 0-4.928 2.205-4.928 4.927 0 .39.045.765.127 1.124-4.094-.205-7.725-2.165-10.156-5.144-.424.729-.666 1.577-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.025-1.566-.247-2.229-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.377 4.6 3.418-1.68 1.319-3.809 2.105-6.102 2.105-.397 0-.789-.023-1.175-.069 2.179 1.397 4.768 2.212 7.557 2.212 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.635A9.935 9.935 0 0024 4.59z" />
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
          <div className="flex items-center space-x-3 cursor-pointer  group">
            <div className="relative">
              <div className="relative cursor-pointer overflow-hidden flex h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full p-0.5 text-white font-black text-xl sm:text-2xl md:text-3xl  transition-all duration-500 group-hover:scale-105 group-hover:rotate-6 ">
                <img
                  src={"/roundedLogo.jpg"}
                  alt="Website Logo"
                  className="h-full rounded-full w-full object-cover"
                />
              </div>

              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-cyan-400/40 via-blue-500/40 to-purple-600/40 rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent tracking-tight">
                Pie Pay
              </p>
              <p className="text-xs font-black bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent tracking-tight">
                Get Your Piece
              </p>
              <span></span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {[
              "Who We Serve",
              "GetPie.io",
              "About",
              "Giving Back",
              "Careers",
            ].map((item) => (
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

          <Button className="group cursor-pointer shadow-2xl hover:shadow-cyan-500/30 px-4 py-2 sm:px-6 sm:py-3 md:px-10 md:py-4 text-sm sm:text-base md:text-lg font-black">
            Apply Now
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
              Transforming Technology Excellence
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2 sm:ml-3 md:ml-4 animate-bounce" />
            </Badge>

            <h1 className="mb-8  sm:mb-12 md:mb-16 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl  font-black tracking-tight text-white text-balance leading-tight">
              Shaping the Future of{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
                  The World
                </span>
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-600/30 blur-2xl sm:blur-3xl opacity-60 animate-pulse"></div>
              </span>
            </h1>

            <p className="mb-12 sm:mb-16 md:mb-20 text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto text-pretty leading-relaxed font-light">
              Every moment, Pie Pay brings people, businesses, and financial
              institutions closer together through innovative payment and
              financial services technology. With Pie Pay, the world becomes
              more accessible, and financial dreams become a reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 justify-center mb-16 sm:mb-20 md:mb-24">
              <Button
                size="lg"
                className="group shadow-2xl hover:shadow-cyan-500/30 px-8 py-4 sm:px-12 sm:py-5 md:px-16 md:py-6 text-base sm:text-lg md:text-xl lg:text-2xl font-black border-2 border-white/20 hover:border-white/40"
              >
                <Play className="mr-3 h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 transition-transform duration-300 group-hover:scale-125" />
                See how we help
                <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-90 cursor-pointer sm:group-hover:translate-x-2 " />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About us Section  */}

      <section className="py-20 sm:py-28 md:py-32 lg:py-40 relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 lg:gap-24 items-center">
            {/* Left Section  */}
            <div className=" group relative overflow-hidden shadow-xl md:shadow-2xl shadow-cyan-400/25 transition-all duration-500 hover:scale-105 hover:border-cyan-400/60 h-full bg-slate-900/60 backdrop-blur-sm hover:border-2 hover:sm:border-3 hover:-translate-y-2 sm:hover:-translate-y-4 rounded-2xl sm:rounded-3xl">
              <img
                src={"/getPieAboutImage.webp"}
                alt="Website Logo"
                className="h-full w-full object-cover hover:scale-110 duration-700 ease-in-out transition-all"
              />
            </div>

            {/* Right section  */}
            <div className="space-y-8 md:py-10 sm:space-y-10 md:space-y-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white text-balance">
                About
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 text-pretty leading-relaxed">
                Our all-in-one Clover platform enables businesses to accept
                payments seamlessly, track performance accurately, and drive
                sales effectively. With its user-friendly interface,
                customizable features, and robust analytics, Clover offers a
                streamlined experience that helps businesses grow and thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
                <Button className="group cursor-pointer shadow-xl sm:shadow-2xl hover:shadow-cyan-500/30 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl font-black border-2 border-white/20">
                  <Target className="mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 transition-transform duration-300 group-hover:scale-110" />
                  See Clover
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 transition-transform duration-300 group-hover:translate-x-1 sm:group-hover:translate-x-2" />
                </Button>
              </div>
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
              Life Quality
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white mb-6 sm:mb-8 md:mb-12 text-balance">
              Life at Pie Pay
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto text-pretty leading-relaxed">
              Learn more about the culture and people behind the commerce and
              financial services experiences that move our world
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {[
              {
                icon: Shield,
                title: "Who We Are",
                description:
                  "A purpose-driven, human company focused on our clients’ success.",
                color: "from-cyan-400 to-blue-500",
                bgColor: "from-cyan-400/20 to-blue-500/20",
                borderColor: "border-cyan-400/30 hover:border-cyan-400/60",
                shadowColor: "hover:shadow-cyan-400/25",
              },
              {
                icon: BarChart3,
                title: "Diversity & Inclusion",
                description:
                  "A place where our people are recognized as unique individuals and celebrated as one team.",
                color: "from-purple-400 to-pink-500",
                bgColor: "from-purple-400/20 to-pink-500/20",
                borderColor: "border-purple-400/30 hover:border-purple-400/60",
                shadowColor: "hover:shadow-purple-400/25",
              },

              {
                icon: Users,
                title: "Join Us",
                description:
                  "Join a global leader in commerce, fintech and payments.",
                color: "from-orange-400 to-red-500",
                bgColor: "from-orange-400/20 to-red-500/20",
                borderColor: "border-orange-400/30 hover:border-orange-400/60",
                shadowColor: "hover:shadow-orange-400/25",
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

      {/* Logos Brands Section  Grid */}
      <section className="bg-gradient-to-br from-slate-900/25 via-slate-800/25 to-slate-900/25  text-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 relative ">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 items-center justify-items-center relative">
          {partnerLogos.map((partner) => (
            <div
              key={partner.id}
              className="flex h-44 p-4  group cursor-pointer relative overflow-hidden "
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-full w-full  object-contain   hover:scale-120 duration-500 transition-all  "
              />
            </div>
          ))}
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
                Who We Serve
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 text-pretty leading-relaxed">
                Growing your business in a rapidly changing world demands
                knowledge, persistence, and unwavering determination. Partnering
                with a trusted ally can transform your journey, offering
                invaluable support and expertise. With the right partner, you
                can confidently navigate challenges, seize opportunities, and
                turn your vision into reality. Together, we can build a brighter
                future for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
                <Button className="group cursor-pointer shadow-xl sm:shadow-2xl hover:shadow-cyan-500/30 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl font-black border-2 border-white/20">
                  <Target className="mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 transition-transform duration-300 group-hover:scale-110" />
                  See who we help
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 transition-transform duration-300 group-hover:translate-x-1 sm:group-hover:translate-x-2" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              {[
                {
                  number: "Busines",
                  label: "Small to enterprise",
                  color: "from-emerald-400 to-teal-500",
                  icon: Database,
                },
                {
                  number: "Global",
                  label: "Worldwide reach",
                  color: "from-blue-500 to-indigo-600",
                  icon: TrendingUp,
                },
                {
                  number: "Growth",
                  label: "Scale with us",
                  color: "from-green-400 to-emerald-500",
                  icon: TrendingUp,
                },
                {
                  number: "Secure",
                  label: "Bank-grade security",
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
              Giving Back
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto text-pretty leading-relaxed">
              At Getpie.io, our merchant community grows stronger every day.
              We’re committed to empowering them with the tools and
              opportunities to save money, increase revenue, and thrive in
              today’s market.
            </p>
          </div>

          {/* YouTube Video Embeds Grid */}
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 ">
            {[
              "https://www.youtube.com/embed/n4yFSNCqt7g?si=ibDMDqvmIHxlwY-S",
              "https://www.youtube.com/embed/X8g-ZgKOLxk?si=yoAZkRWMjZtnHElu",
              "https://www.youtube.com/embed/X3Jxb2a5zNU?si=7dH4wEWvboGMe7Kw",
            ].map((link) => (
              <div
                key={link}
                className="group relative overflow-hidden hover:shadow-xl sm:hover:shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105 bg-slate-900/60 backdrop-blur-sm border-2 sm:border-3 border-white/20 hover:border-white/40 hover:-translate-y-2 sm:hover:-translate-y-4 rounded-2xl sm:rounded-3xl "
              >
                <div className="aspect-video  h-full w-full">
                  <iframe
                    src={link}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-lg h-full w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Payment Partners Section */}
      <section className="py-20 sm:py-28 md:py-32 lg:py-40 relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-4xl sm:max-w-5xl md:max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white mb-6 sm:mb-8 md:mb-12 text-balance">
              GetPie.io
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 sm:mb-8 md:mb-10 text-pretty leading-relaxed">
              Work with us and unlock a consistent monthly income stream through
              referrals. With the freedom to refer whenever you choose, you’ll
              have the chance to build a sustainable book of business and
              long-term financial growth.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-12 sm:mb-16 md:mb-20">
              Our program is designed to be simple, transparent, and rewarding.
              Whether you make one referral or many, you’ll always have the
              opportunity to earn while helping others connect with valuable
              solutions.
            </p>
            <Button className="group shadow-xl sm:shadow-2xl hover:shadow-cyan-500/30 px-8 py-4 sm:px-12 sm:py-5 md:px-14 md:py-6 lg:px-16 lg:py-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-black border-2 border-white/20">
              <Users className="mr-3 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 transition-transform duration-300 group-hover:scale-110" />
              Work With Us
              <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 transition-transform duration-300 group-hover:translate-x-1 sm:group-hover:translate-x-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 relative border-t-2 border-white/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Left Section which contains footer logo  */}
            <div className=" h-full">
              <div className="flex items-center space-x-3 cursor-pointer mb-6 sm:mb-8 md:mb-10 lg:mb-12  group">
                <div className="relative ">
                  <div className="relative  cursor-pointer overflow-hidden flex h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full p-0.5 text-white font-black text-xl sm:text-2xl md:text-3xl  transition-all duration-500 group-hover:scale-105 group-hover:rotate-6 ">
                    <img
                      src={"/roundedLogo.jpg"}
                      alt="Website Logo"
                      className="h-full rounded-full w-full object-cover"
                    />
                  </div>

                  <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-cyan-400/40 via-blue-500/40 to-purple-600/40 rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
                </div>
                <div className="flex flex-col items-center justify-center ">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent tracking-tight">
                    Pie Pay
                  </p>
                  <p className="text-xs font-black bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent tracking-tight">
                    Get Your Piece
                  </p>
                  <span></span>
                </div>
              </div>
              <p className="text-slate-300 max-w-xs mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-pretty leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
                Searching for the perfect solution to take your business
                forward? Let our experts guide you.
              </p>
              <div className="flex space-x-4 sm:space-x-6 md:space-x-8">
                {[
                  { icon: Facebook, href: "#", color: "hover:bg-blue-600/30" },
                  { icon: Linkedin, href: "#", color: "hover:bg-blue-700/30" },
                  { icon: Twitter, href: "#", color: "hover:bg-pink-600/30" },
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

            {/* Middle section which contians Quick links */}
            <div className="place-items-center">
              <h3 className="font-black mb-6 sm:mb-8 md:mb-10 text-lg sm:text-xl md:text-2xl text-white">
                Quick Links
              </h3>
              <ul className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-slate-300">
                {[
                  "Who We Serve",
                  "GetPie.io",
                  "About",
                  "Giving Back",
                  "Careers",
                  "Contect Us",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className=" transition-all duration-300 hover:translate-x-2 inline-block text-sm sm:text-base md:text-lg lg:text-xl hover:text-cyan-300 font-semibold"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right section which contains Contact info  */}
            <div className="place-items-center">
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

          <div className="container mx-auto flex items-center justify-between  border-t-2 border-white/20 mt-12 sm:mt-16 md:mt-20 lg:mt-24 pt-8 sm:pt-10 md:pt-12 text-center text-slate-400">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
              &copy; 2023 PiePayments or its affiliates.
            </p>
            <p className="flex items-center gap-3 flex-wrap">
              <span>Privacy Notice</span>
              <span>Trademark Usage Guidelines</span>
              <span>Terms of Use</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
