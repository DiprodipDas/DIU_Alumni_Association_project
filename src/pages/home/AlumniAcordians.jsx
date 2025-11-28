import React, { useEffect, useState } from "react";

const AlumniAcordians = () => {
  const [current, setCurrent] = useState(0);
  const images = [
    "https://i.ibb.co.com/c4Rg6JJ/freepik-adjust-78685.png",
    "https://i.ibb.co.com/G4tD9tBp/freepik-adjust-78692.jpg",
    "https://i.ibb.co.com/hxGtDXGV/freepik-adjust-78688.png",
    "https://i.ibb.co.com/99hR8HbN/freepik-adjust-78687.png",
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-green-500">
      <div className="max-w-screen container mx-auto py-10 px-5">
        {/* Carousel container */}
        <div className="carousel w-full overflow-hidden rounded-xl relative">
          {images.map((img, index) => (
            <div
              key={index}
              className={`carousel-item w-full transition-all duration-700 ease-in-out ${
                current === index ? "opacity-100" : "opacity-0 absolute"
              }`}
            >
              {/* Background Image */}
              <img
                src={img}
                className="w-full brightness-90 object-cover"
                alt={`Slide ${index + 1}`}
              />

              {/* Overlay Section */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="bg-black/60 px-6 py-4 rounded-lg">
                  <h2 className="text-white text-2xl sm:text-4xl font-bold text-center leading-snug">
                    Welcome to Dhaka International University Alumni Association
                  </h2>
                </div>
              </div>
            </div>
          ))}

          {/* Dot navigation */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index ? "bg-white scale-125" : "bg-gray-300 opacity-60"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniAcordians;
