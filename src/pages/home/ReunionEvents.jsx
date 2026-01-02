// src/pages/ReunionEvents.jsx  (Recommended path: /events/reunion)

import React from 'react';
import { Link } from 'react-router-dom';

const ReunionEvents = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Elegant Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Reunions
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-95 leading-relaxed">
            Relive cherished memories, reconnect with batchmates, and celebrate the bonds that time couldn't break.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Upcoming Reunions Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Reunions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join your batchmates for heartfelt gatherings filled with laughter, stories, and lifelong friendships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Reunion 1: Batch of 2005 Silver Jubilee */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1120030770150010"
                  alt="Batch of 2005 alumni smiling and reconnecting outdoors on campus"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-green-800 mb-3">
                  Batch of 2005 – Silver Jubilee Reunion
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Celebrate 20 incredible years since graduation with nostalgia, music, and endless memories.
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📅</span> April 18–19, 2026
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">🕖</span> Full Weekend Program
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📍</span> DIU Main Campus
                  </div>
                </div>
                <Link
                  to="/events/reunion/register-2005"
                  className="mt-8 inline-block w-full text-center bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-xl transition"
                >
                  Register Now
                </Link>
              </div>
            </div>

            {/* Reunion 2: CSE Department Batch 2010–2015 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://i0.wp.com/www.usa.edu/wp-content/uploads/2024/10/alumni-2024-thumbnail.jpg?fit=1920%2C1080&ssl=1"
                  alt="CSE alumni departmental reunion professional networking event"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-green-800 mb-3">
                  CSE Department Reunion (Batches 2010–2015)
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A special gathering for Computer Science & Engineering alumni to network and reminisce.
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📅</span> May 23, 2026
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">🕖</span> 4:00 PM – 10:00 PM
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📍</span> DIU Ashulia Campus
                  </div>
                </div>
                <Link
                  to="/events/reunion/register-cse"
                  className="mt-8 inline-block w-full text-center bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-xl transition"
                >
                  Register Now
                </Link>
              </div>
            </div>

            {/* Reunion 3: Golden Jubilee – Batch of 2000 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://lxmpls.com/wp-content/uploads/2024/06/alumni-event-ideas.jpg"
                  alt="Elegant alumni reunion formal dinner and gathering"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-green-800 mb-3">
                  Golden Jubilee – Pioneering Batch of 2000
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Honor the legacy of our earliest graduates with a grand celebration of achievements and friendship.
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📅</span> June 12–13, 2026
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">🕖</span> Gala Dinner & Activities
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📍</span> DIU Convention Center
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

      {/* Past Reunions Teaser */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Relive Past Reunions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Browse joyful moments, group photos, and highlights from previous batch and departmental reunions.
          </p>
          <Link
            to="/gallery/reunions"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold py-4 px-10 rounded-xl text-lg transition shadow-lg"
          >
            Explore Reunion Gallery
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-emerald-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Planning Your Batch Reunion?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Let us help organize a memorable reunion for your batch or department — from venue to program, we've got you covered.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-green-800 hover:bg-gray-100 font-bold py-4 px-10 rounded-xl text-lg transition shadow-xl"
          >
            Contact the Reunion Team
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ReunionEvents;