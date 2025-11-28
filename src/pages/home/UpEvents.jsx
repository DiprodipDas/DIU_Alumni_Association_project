import React, { useEffect, useState, useMemo } from "react";
import HeadingSection from "../../components/HeadingSection";

// ← Move the date outside + useMemo so it's stable
const EVENT_DATE = new Date("2026-02-25T18:00:00");

const UpEvents = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = EVENT_DATE - now;

      if (diff <= 0) {
        setTimeLeft({ expired: true });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []); // ← empty array because EVENT_DATE never changes

  const month = EVENT_DATE.toLocaleString("default", { month: "short" });
  const day = EVENT_DATE.getDate();

  return (
    <div className="relative overflow-hidden max-w-screen-2xl container mx-auto py-20 px-5">
      <HeadingSection
        heading=""
        subheading="Upcoming Events"
        description="Keep an eye on our website to see the most recent upcoming events"
      />

      <Stars />

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-2xl p-6 md:p-8 mt-10">
        <div className="flex flex-col items-center justify-center w-full md:w-1/3 mb-6 md:mb-0">
          <div className="bg-green-600 text-white rounded-xl shadow-md p-4 w-28 h-28 flex flex-col items-center justify-center">
            <span className="text-sm uppercase tracking-wide">{month}</span>
            <span className="text-4xl font-bold">{day}</span>
          </div>
        </div>

        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
            Alumni Reunion & Networking Event
          </h2>

          {timeLeft.expired ? (
            <p className="text-red-600 font-medium">Event Started!</p>
          ) : (
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <TimeBox label="Days" value={timeLeft.days ?? 0} />
              <TimeBox label="Hours" value={timeLeft.hours ?? 0} />
              <TimeBox label="Minutes" value={timeLeft.minutes ?? 0} />
              <TimeBox label="Seconds" value={timeLeft.seconds ?? 0} />
            </div>
          )}

          <div className="mt-6">
            <a href="#" className="inline-block bg-green-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimeBox = ({ label, value }) => (
  <div className="flex flex-col items-center bg-gray-100 px-4 py-3 rounded-lg shadow-sm min-w-[70px]">
    <span className="text-xl font-bold text-gray-800">{value}</span>
    <span className="text-sm text-gray-500">{label}</span>
  </div>
);

const Stars = () => {
  const colors = ["#fde047", "#facc15", "#fbbf24", "#eab308", "#fef08a"];
  return (
    <>
      {colors.map((color, i) => (
        <svg
          key={`star-${i}`}   // ← unique key
          className="absolute bottom-[-100px] animate-float opacity-80"
          style={{
            left: `${10 + i * 15}%`,
            width: "24px",
            height: "24px",
            fill: color,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${6 + i * 2}s`,
          }}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 .587l3.668 7.429L24 9.753l-6 5.847L19.335 24 12 20.02 4.665 24 6 15.6 0 9.753l8.332-1.737z" />
        </svg>
      ))}
    </>
  );
};

export default UpEvents;