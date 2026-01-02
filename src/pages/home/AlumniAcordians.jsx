import React, { useEffect, useState } from "react";

const AlumniAcordians = () => {
  const [current, setCurrent] = useState(0);
  const [showCaution, setShowCaution] = useState(false);

  const images = [
    "https://i.ibb.co.com/bM8zNK8g/20.jpg",
    "https://i.ibb.co.com/p6MJCLdw/vision.jpg",
    "https://i.ibb.co.com/Hf0kV9ng/1.jpg",
    "https://i.ibb.co.com/W42g75CF/13.jpg",
    "https://i.ibb.co.com/C3Kf1nrf/slider33.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Show caution popup only once per session
  useEffect(() => {
    const seen = sessionStorage.getItem("alumniCautionSeen");
    if (!seen) {
      setShowCaution(true);
      sessionStorage.setItem("alumniCautionSeen", "true");
    }
  }, []);

  return (
    <>
      <section className="relative h-[90vh] md:h-screen overflow-hidden bg-black">
        {/* Image Slides */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`DIU Alumni Moment ${index + 1}`}
              className="w-full h-full object-cover brightness-75"
            />
          </div>
        ))}

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Welcome to the
              <span className="block text-green-400 mt-2">
                DIU Alumni Association
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto">
              Connecting 28,000+ proud alumni worldwide — building lifelong bonds, 
              fostering excellence, and giving back to our beloved alma mater.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
              <button className="px-10 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
                Join as Lifetime Member
              </button>
              <button className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition">
                Explore Events
              </button>
            </div>
          </div>
        </div>

        {/* Elegant Dot Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                current === index
                  ? "bg-green-400 w-10"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Caution Popup - Under Development */}
      {showCaution && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/70"
            onClick={() => setShowCaution(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-bounceIn">
            <button
              onClick={() => setShowCaution(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              ×
            </button>

            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-4xl">Warning</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Website Under Development
            </h3>
            <p className="text-gray-600 leading-relaxed">
              This portal is currently being improved with new features.
              <br />
              <span className="font-semibold text-green-600">More exciting updates coming soon!</span>
            </p>

            <button
              onClick={() => setShowCaution(false)}
              className="mt-6 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition"
            >
              Got it, Continue →
            </button>
          </div>
        </div>
      )}

      {/* Simple bounce animation */}
      <style jsx>{`
        @keyframes bounceIn {
          0% { transform: scale(0.8); opacity: 0; }
          60% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounceIn {
          animation: bounceIn 0.6s ease-out;
        }
      `}</style>
    </>
  );
};

export default AlumniAcordians;