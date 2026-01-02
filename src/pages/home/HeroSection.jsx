import React, { useState, useEffect, useRef } from 'react';
import { FiArrowRight, FiX, FiPlay } from "react-icons/fi";
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/banner2.jpg';

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [typedText, setTypedText] = useState("");
  
  // This is the real fix
  const mountedRef = useRef(false);
  const intervalRef = useRef(null);

  const fullText = "28,000+ Proud Alumni Worldwide";

  useEffect(() => {
    // Only run once when component first mounts
    if (mountedRef.current) return;
    mountedRef.current = true;

    let index = 0;
    setTypedText(""); // reset

    intervalRef.current = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(intervalRef.current);
      }
    }, 80);

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []); // ← Empty array = runs only once!

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      {/* Your beautiful responsive hero – unchanged */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob hidden md:block"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animation-delay-2000 animate-blob hidden md:block"></div>
          <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animation-delay-4000 animate-blob hidden md:block"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8">
              {/* THIS BADGE IS NOW 100% STABLE */}
              <div className="inline-flex items-center gap-3 bg-black/90 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-bold shadow-2xl">
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping"></span>
                <span className="tracking-wider font-mono whitespace-nowrap">
                  {typedText}
                  <span className="animate-pulse ml-1">|</span>
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-tight">
                One University.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600">
                  One Global Family
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Reunions that feel like coming home. Careers that soar higher. 
                A network that opens doors — forever.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                <Link to="/upevents" className="w-full sm:w-auto">
                  <button className="group relative w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-base sm:text-lg rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Join the Next Event <FiArrowRight className="group-hover:translate-x-2 transition" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
                </Link>

                <button 
                  onClick={openModal}
                  className="flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 border-2 border-emerald-600 text-emerald-600 font-bold text-base sm:text-lg rounded-2xl hover:bg-emerald-600 hover:text-white transition-all duration-300"
                >
                  <FiPlay className="text-xl sm:text-2xl" /> Watch Our Journey
                </button>
              </div>

              <div className="flex flex-wrap gap-4 sm:gap-8 justify-center lg:justify-start pt-6 text-sm sm:text-base text-gray-600">
                <span>15+ Countries</span>
                <span>500+ Events</span>
                <span>Lifetime Membership</span>
              </div>
            </div>

            {/* RIGHT – Image */}
            <div className="relative group">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-4 sm:ring-8 ring-white/60">
                <img
                  src={bannerImg}
                  alt="DIU alumni celebrating together"
                  loading="lazy"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <button onClick={openModal} className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75"></div>
                    <div className="relative bg-white p-5 sm:p-8 rounded-full shadow-2xl hover:scale-110 transition-all duration-300">
                      <FiPlay className="text-emerald-600 text-4xl sm:text-6xl ml-1 sm:ml-2" />
                    </div>
                  </div>
                </button>
                <div className="absolute top-4 sm:top-8 -left-2 sm:-left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-tr-2xl rounded-br-2xl font-bold text-sm sm:text-lg shadow-2xl transform rotate-[-3deg]">
                  Featured Story 2025
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-1 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-4 border-emerald-600 rounded-full flex justify-center">
            <div className="w-2 h-4 bg-emerald-600 rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Modal – unchanged */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="relative w-full max-w-5xl bg-black rounded-2xl sm:rounded-3xl shadow-5xl overflow-hidden">
            <button onClick={closeModal} className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 backdrop-blur p-3 sm:p-4 rounded-full transition">
              <FiX className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/eksTu9IFnXE?autoplay=1&rel=0&modestbranding=1"
                title="DIU Alumni – Our Journey"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;