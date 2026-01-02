// src/pages/IftaarEvents.jsx  (Recommended path: /events/iftaar-event)

import React from 'react';
import { Link } from 'react-router-dom';

const IftaarEvents = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Elegant Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Iftaar Events
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-95 leading-relaxed">
            Come together in the spirit of Ramadan to break fast, share blessings, and strengthen our alumni community with warmth and gratitude.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Upcoming Iftaar Events Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Iftaar Gatherings</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join fellow DIU alumni for meaningful evenings of reflection, delicious traditional meals, and heartfelt connections during the holy month.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Event 1: Grand Alumni Iftaar */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://dailynorthwestern.com/wp-content/uploads/2022/04/RAMADAN_sama_008.jpg"
                  alt="DIU alumni community breaking fast together at grand Iftaar event"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-green-800 mb-3">
                  Grand Alumni Iftaar 2026
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A beautiful evening uniting alumni from all batches for Maghrib prayer, traditional iftaar, and inspiring talks.
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📅</span> March 20, 2026 (15 Ramadan)
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">🕖</span> Maghrib – 9:00 PM
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📍</span> DIU Main Campus Auditorium
                  </div>
                </div>
                <Link
                  to="/events/iftaar-event/register-grand"
                  className="mt-8 inline-block w-full text-center bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-xl transition"
                >
                  Register Now
                </Link>
              </div>
            </div>

            {/* Event 2: Departmental Iftaar Series */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://www.qatar.georgetown.edu/wp-content/uploads/2025/03/2025_03_12-GUQ_Dean-iftar-and-garangao-9-edited-scaled.jpg"
                  alt="Alumni and faculty sharing iftaar in a warm departmental setting"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-green-800 mb-3">
                  Departmental Iftaar Series
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Intimate gatherings hosted by various faculties — reconnect with your department classmates and mentors.
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📅</span> Throughout Ramadan 2026
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">🕖</span> Maghrib onwards
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📍</span> Respective Faculty Buildings
                  </div>
                </div>
                <Link
                  to="/events/iftaar-event/register-departmental"
                  className="mt-8 inline-block w-full text-center bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-xl transition"
                >
                  Register Interest
                </Link>
              </div>
            </div>

            {/* Event 3: Family & Friends Iftaar */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://giu.edu.pk/front/images/new-giu/news-events/CK/1_1712288171.JPG"
                  alt="Joyful alumni family iftaar with children and community"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-green-800 mb-3">
                  Family Alumni Iftaar
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Bring your family for a wholesome iftaar filled with food, games for children, and community spirit.
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📅</span> March 28, 2026 (23 Ramadan)
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">🕖</span> Maghrib – 10:00 PM
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📍</span> DIU Ashulia Campus Grounds
                  </div>
                </div>
                <button className="mt-8 inline-block w-full text-center bg-gray-300 text-gray-600 font-semibold py-3 px-6 rounded-xl cursor-not-allowed">
                  Registration Opens February 2026
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Iftaar Events Teaser */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Memories from Past Iftaar Gatherings</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Relive the joy, spirituality, and togetherness from previous Ramadan iftaar events hosted for our alumni family.
          </p>
          <Link
            to="/gallery/iftaar-events"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold py-4 px-10 rounded-xl text-lg transition shadow-lg"
          >
            Explore Iftaar Gallery
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-emerald-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Host or Sponsor an Iftaar?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Interested in organizing a departmental iftaar or contributing to our community gatherings? We welcome your support and ideas.
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

export default IftaarEvents;