import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // ✅ required CSS
import "slick-carousel/slick/slick-theme.css"; // ✅ required CSS

export default function ImagesSlider() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 8000, // duration of animation (bigger = slower movement)
    autoplaySpeed: 0, // no delay between slides
    cssEase: "linear", // makes it move smoothly
    slidesToShow: 3, // number of slides visible
    slidesToScroll: 1,
    arrows: false, // hide prev/next controls
    pauseOnHover: true, // pause when hovering over slide
    responsive: [
      {
        breakpoint: 1024, // ≤ 1024px (tablet)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768, // ≤ 768px (mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // hide arrows on mobile
          dots: true, // keep dots
        },
      },
    ],
  };

  return (
    <div className="mx-auto px-4 my-slick rounded-lg">
      {/* -mx-3 removes extra padding on both sides */}
      <div className="-mx-3">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div key={index} className="px-3">
              {" "}
              {/* spacing between slides */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-orange-500 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="font-DmSans text-gray-600 mb-6">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-QuickSand font-bold text-gray-900">
                      John Doe
                    </h4>
                    <p className="font-DmSans text-gray-600 text-sm">
                      Customer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
