// src/pages/AlumniEvents.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const AlumniEvents = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Elegant Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Alumni Events
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-95 leading-relaxed">
            Reconnect with old friends, build new networks, and create lasting memories at our thoughtfully curated alumni gatherings.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us for inspiring gatherings designed exclusively for the DIU alumni community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Event 1: Grand Alumni Reunion */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://stageclip.com/wp-content/uploads/2024/05/Firefly-young-professionals-talking-at-an-event-on-a-university-campus-underneath-a-large-tent-with-1.png"
                  alt="Grand Alumni Reunion 2026 – Elegant evening networking under tent lights"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-green-800 mb-3">
                  Grand Alumni Reunion 2026
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  An elegant evening of nostalgia, fine dining, and meaningful connections with alumni from every batch.
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📅</span> January 15, 2026
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">🕖</span> 6:00 PM – 11:00 PM
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📍</span> DIU Main Campus Grand Auditorium
                  </div>
                </div>
                <Link
                  to="/events/alumni-events/register-reunion"
                  className="mt-8 inline-block w-full text-center bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-xl transition"
                >
                  Register Now
                </Link>
              </div>
            </div>

            {/* Event 2: Career Networking Night */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://www.metropolia.fi/sites/default/files/images/20241107_173422.jpg"
                  alt="Alumni Career Networking Night – Professional discussions in conference setting"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-green-800 mb-3">
                  Alumni Career Networking Night
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Engage with industry leaders, mentors, and peers in an intimate professional setting.
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📅</span> February 20, 2026
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">🕖</span> 5:00 PM onwards
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📍</span> Ashulia Campus Conference Hall
                  </div>
                </div>
                <Link
                  to="/events/alumni-events/register-career"
                  className="mt-8 inline-block w-full text-center bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-xl transition"
                >
                  Register Interest
                </Link>
              </div>
            </div>

            {/* Event 3: Annual Alumni Gala Dinner */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://davidson-gundy.utdallas.edu/files/2022/06/Alumni-Gala-2022-04.jpg"
                  alt="Annual Alumni Gala Dinner – Formal elegant celebration"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-green-800 mb-3">
                  Annual Alumni Gala Dinner
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A sophisticated black-tie evening celebrating achievements and strengthening lifelong bonds.
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📅</span> March 28, 2026
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">🕖</span> 7:00 PM – Midnight
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📍</span> DIU Convention Center
                  </div>
                </div>
                <button className="mt-8 inline-block w-full text-center bg-gray-300 text-gray-600 font-semibold py-3 px-6 rounded-xl cursor-not-allowed">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Teaser */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Relive Cherished Moments</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Browse highlights and galleries from our past reunions, gala dinners, career talks, and cultural gatherings.
          </p>
          <Link
            to="/gallery/alumni-events"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold py-4 px-10 rounded-xl text-lg transition shadow-lg"
          >
            Explore Event Gallery
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-emerald-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Organize Your Own Event</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Whether it's a departmental reunion, professional seminar, or cultural celebration — our alumni office is here to help bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-green-800 hover:bg-gray-100 font-bold py-4 px-10 rounded-xl text-lg transition shadow-xl"
          >
            Contact the Events Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AlumniEvents;