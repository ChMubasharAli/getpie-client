import { Link } from "react-router-dom";

export default function AdminHome() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      {/* Logo Section  */}
      <header className=" absolute top-1 left-0  w-full  z-10 ">
        <div className="  p-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center  py-2">
            {/* Logo */}

            <div className="relative h-10 md:h-20 rounded-2xl bg-center overflow-hidden  ">
              <img
                src={"/logoImage.jpg"}
                alt="Website Logo"
                className=" h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>
      {/* Main Heading */}
      <h1 className="text-4xl font-QuickSand sm:text-6xl text-shadow-lg lg:text-7xl font-extrabold text-heading drop-shadow-md">
        Welcome Back
      </h1>

      {/* Subheading */}
      <p className="mt-6 font-QuickSand text-base sm:text-xl lg:text-2xl text-gray-900 max-w-2xl font-medium leading-relaxed tracking-wide">
        Welcome to your Admin Dashboard, the central hub for managing your
        business. Get started today and take control of your business journey
        with ease.
      </p>

      {/* Create Business Profile Button */}
      <Link to="/stepForm">
        <button className="mt-8 bg-green-500 hover:bg-green-600 cursor-pointer text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all">
          Create Business Profile
        </button>
      </Link>
    </div>
  );
}
