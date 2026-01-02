// src/pages/CareerEvents.jsx  (Recommended path: /events/career-events)

import React from 'react';
import { Link } from 'react-router-dom';

const CareerEvents = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Elegant Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Career Events
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-95 leading-relaxed">
            Advance your professional journey with exclusive networking opportunities, job fairs, mentorship sessions, and industry insights tailored for DIU alumni.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Upcoming Career Events Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Career Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with employers, industry leaders, and fellow alumni to explore new opportunities and grow your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Event 1: DIU Alumni Career Fair */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://www.longwood.edu/media/top-tier/news/2024/Alumni-Networking-123-fixed-cropped-2-1134x605.jpg"
                  alt="Alumni networking professionally at a career fair event"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-green-800 mb-3">
                  DIU Alumni Career Fair 2026
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Meet top employers, explore job openings, and network in a dynamic environment designed for alumni success.
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📅</span> March 15, 2026
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">🕖</span> 10:00 AM – 4:00 PM
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📍</span> DIU Main Campus Convention Hall
                  </div>
                </div>
                <Link
                  to="/events/career-events/register-fair"
                  className="mt-8 inline-block w-full text-center bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-xl transition"
                >
                  Register Now
                </Link>
              </div>
            </div>

            {/* Event 2: Alumni Mentorship & Panel Discussion */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://www.shc.psu.edu/img/life/career/sda_discussion.jpg"
                  alt="Alumni panel discussion on career development and mentorship"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-green-800 mb-3">
                  Leadership & Mentorship Panel
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Hear from successful DIU alumni leaders and gain personalized career advice in interactive breakout sessions.
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📅</span> April 10, 2026
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">🕖</span> 6:00 PM – 9:00 PM
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📍</span> DIU Ashulia Campus Auditorium
                  </div>
                </div>
                <Link
                  to="/events/career-events/register-panel"
                  className="mt-8 inline-block w-full text-center bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-xl transition"
                >
                  Register Now
                </Link>
              </div>
            </div>

            {/* Event 3: Career Development Workshop Series */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://www.alumni.upenn.edu/s/1587/images/content_images/AI_in_the_Workforce_Feature_638739215123884514.jpg"
                  alt="Professional alumni attending career workshop on modern workforce trends"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-green-800 mb-3">
                  Emerging Trends in Tech & Business Workshop
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Hands-on sessions on AI, entrepreneurship, and career pivoting led by industry experts and alumni.
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📅</span> May 22, 2026
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">🕖</span> 9:00 AM – 5:00 PM
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📍</span> DIU Main Campus Seminar Rooms
                  </div>
                </div>
                <button className="mt-8 inline-block w-full text-center bg-gray-300 text-gray-600 font-semibold py-3 px-6 rounded-xl cursor-not-allowed">
                  Registration Opens Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Career Events Teaser */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Highlights from Past Career Events</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            View success stories, employer partnerships, and key moments from previous job fairs, panels, and workshops.
          </p>
          <Link
            to="/gallery/career-events"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold py-4 px-10 rounded-xl text-lg transition shadow-lg"
          >
            Explore Career Gallery
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-emerald-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Partner with Us for Career Events</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Companies and recruiters: Collaborate with DIU Alumni Association to access top talent. Alumni: Suggest or host a career-focused event.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-green-800 hover:bg-gray-100 font-bold py-4 px-10 rounded-xl text-lg transition shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CareerEvents;