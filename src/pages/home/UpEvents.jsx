import React, { useEffect, useState } from "react";
import { FiCalendar, FiMapPin, FiArrowRight, FiClock } from "react-icons/fi";
import HeadingSection from "../../components/HeadingSection";

const EVENT_DATE = new Date("2026-01-16T18:00:00");
const EVENT_TITLE = "Civil Engineering Alumni Get Together 2026";
const EVENT_LOCATION = "DIU Permanent Campus,Civil Engineering Building";

const UpEvents = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = EVENT_DATE.getTime() - now;

      if (difference <= 0) {
        setTimeLeft({ expired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const day = EVENT_DATE.getDate();
  const year = EVENT_DATE.getFullYear();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-emerald-50 py-16 md:py-24">
      {/* Subtle Wave Background - Fully Responsive */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 1024" preserveAspectRatio="xMidYMid slice">
          <path
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="4"
            d="M0,180 Q360,80 720,160 T1440,180 L1440,1024 L0,1024 Z
               M0,380 Q360,280 720,360 T1440,380
               M0,580 Q360,480 720,560 T1440,580"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Subtle radial glow */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#10b981_0%,_transparent_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <HeadingSection
          heading=""
          subheading="Upcoming Event"
          description=""
        />

        {/* Main Card - Responsive */}
        <div className="relative mt-12 md:mt-16 max-w-5xl mx-auto">
          {/* Hide stars on mobile to keep it clean */}
          <FloatingStars />

          <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-xl lg:shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Date Panel - Full width on mobile */}
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 md:p-10 text-white text-center flex flex-col items-center justify-center">
                <p className="text-xs md:text-sm uppercase tracking-widest opacity-90">January</p>
                <p className="text-7xl md:text-8xl font-black leading-none mt-2 md:mt-3">{day}</p>
                <p className="text-2xl md:text-3xl font-light mt-2 md:mt-3">{year}</p>
                <div className="mt-6 flex items-center gap-2 text-emerald-100 text-sm md:text-base">
                  <FiCalendar className="text-lg md:text-xl" />
                  <span>Friday • 10:00 AM</span>
                </div>
              </div>

              {/* Event Info - Stacked on mobile */}
              <div className="lg:col-span-2 p-8 md:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                    {EVENT_TITLE}
                  </h2>

                  <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 text-gray-600">
                    <div className="flex items-center gap-3">
                      <FiMapPin className="text-emerald-600 text-lg md:text-xl flex-shrink-0" />
                      <span className="font-medium text-sm md:text-base">{EVENT_LOCATION}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FiClock className="text-emerald-600 text-lg md:text-xl flex-shrink-0" />
                      <span className="text-sm md:text-base">10:00 AM – 06:00 PM</span>
                    </div>
                  </div>

                  {/* Countdown - Responsive grid */}
                  <div className="mt-10">
                    {timeLeft.expired ? (
                      <div className="text-2xl md:text-3xl font-bold text-emerald-600 animate-pulse text-center lg:text-left">
                        Happening Now!
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                        {[
                          { value: timeLeft.days, label: "Days" },
                          { value: timeLeft.hours, label: "Hours" },
                          { value: timeLeft.minutes, label: "Minutes" },
                          { value: timeLeft.seconds, label: "Seconds" },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl md:rounded-2xl p-4 md:p-5 text-center shadow-lg"
                          >
                            <div className="text-3xl sm:text-4xl font-black">
                              {item.value?.toString().padStart(2, "0") ?? "00"}
                            </div>
                            <div className="text-xs uppercase tracking-wider mt-1.5 opacity-80">
                              {item.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA Buttons - Full width on mobile */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://surveyheart.com/form/6943f2cad6001e122e9a7e0d"
                    className="group inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base md:text-lg px-8 py-4 md:py-5 rounded-xl md:rounded-2xl shadow-xl hover:shadow-emerald-600/50 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                  >
                    Register Now
                    <FiArrowRight className="text-lg md:text-xl group-hover:translate-x-1 transition" />
                  </a>
                  <a
                    href="https://calendar.google.com"
                    className="inline-flex items-center justify-center gap-3 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-bold text-base md:text-lg px-8 py-4 md:py-5 rounded-xl md:rounded-2xl transition-all duration-300 w-full sm:w-auto text-center"
                  >
                    Add to Calendar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Badge - Responsive positioning */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-2.5 md:px-8 md:py-3 rounded-full font-bold text-sm md:text-lg shadow-2xl whitespace-nowrap">
           Civil Engineering Alumni Get Together 2026
          </div>
        </div>
      </div>
    </section>
  );
};

// Floating Stars - Hidden on mobile
const FloatingStars = () => {
  return (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          className="absolute animate-float opacity-70 hidden lg:block"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 18}%`,
            width: "36px",
            height: "36px",
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${12 + i * 3}s`,
          }}
          viewBox="0 0 24 24"
          fill="#fbbf24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 .587l3.668 7.429L24 9.753l-6 5.847L19.335 24 12 20.02 4.665 24 6 15.6 0 9.753l8.332-1.737z" />
        </svg>
      ))}
    </>
  );
};

export default UpEvents;