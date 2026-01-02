// src/pages/DepartmentalReunionEvents.jsx  (Recommended path: /events/departmental-reunion)

import React from 'react';
import { Link } from 'react-router-dom';

const DepartmentalReunionEvents = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Elegant Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Departmental Reunions
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-95 leading-relaxed">
            Reconnect with your department classmates, faculty, and peers who shared your academic journey and passion.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Upcoming Departmental Reunions Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Departmental Reunions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Celebrate your shared discipline, reminisce about lectures and labs, and strengthen professional networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Reunion 1: Civil  Engineering */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://i.ibb.co.com/cc9yGRK2/Whats-App-Image-2025-12-19-at-4-33-12-PM.jpg"
                  alt="Civil Engineering alumni gathered for departmental reunion event"
                  className="w-full h-50 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-green-800 mb-3">
                  Get Together 2026 -Department of Civil Engineering 
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Reconnect with department of Civil Engineering alumni for insightful discussions, mentorship opportunities, and celebration.
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <span className="font-medium ">📅</span> <p className='font-bold'>Event Date :</p> January 16, 2026
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold">💰</span> <p className='font-bold'> Registration Fee :</p> Alumni(500tk per person) , Guest (250tk per person)
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">🛫</span> <p className='font-bold'>Registration Deadline :</p> January 10, 2026
                  </div>
                    <div className="flex items-center gap-3">
                    <span className="font-medium">📍</span> <h3 className='font-bold'> Location :</h3> DIU Civil Engineering Building
                  </div>
                </div>
                <Link
                  to="https://surveyheart.com/form/6943f2cad6001e122e9a7e0d"
                  className="mt-8 inline-block w-full text-center bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-xl transition"
                >
                  Register Now
                </Link>
              </div>
            </div>

            {/* Reunion 2: Faculty of Business Studies */}
            {/* <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://bm.hkust.edu.hk/sites/default/files/inline-images/1_0.jpg"
                  alt="Business school alumni enjoying departmental reunion"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-green-800 mb-3">
                  Business Studies Department Reunion
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Reconnect with BBA and MBA alumni for insightful discussions, mentorship opportunities, and celebration.
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📅</span> February 14, 2026
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">🕖</span> 5:00 PM – 10:00 PM
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📍</span> DIU Ashulia Campus Auditorium
                  </div>
                </div>
                <Link
                  to="/events/departmental-reunion/register-business"
                  className="mt-8 inline-block w-full text-center bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-xl transition"
                >
                  Register Now
                </Link>
              </div>
            </div> */}

            {/* Reunion 3: Faculty of Law */}
            {/* <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://www.cwsl.edu/media/images/news/2025/10/cwsl_alumni_daa_800x452.jpg"
                  alt="Law faculty alumni at formal reunion celebration"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-green-800 mb-3">
                  Faculty of Law Reunion
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  An elegant evening for LLB, LLM, and MHR alumni to discuss legal trends and honor shared achievements.
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📅</span> March 7, 2026
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">🕖</span> Gala Dinner from 7:00 PM
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">📍</span> DIU Convention Center
                  </div>
                </div>
                <button className="mt-8 inline-block w-full text-center bg-gray-300 text-gray-600 font-semibold py-3 px-6 rounded-xl cursor-not-allowed">
                  Registration Opens January 2026
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Past Departmental Reunions Teaser */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Relive Past Departmental Reunions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
            Explore photos, speeches, and memorable moments from previous faculty and department-specific gatherings.
          </p>
          <Link
            to="/gallery/departmental-reunions"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold py-4 px-10 rounded-xl text-lg transition shadow-lg"
          >
            Explore Reunion Gallery
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-emerald-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Organize Your Department Reunion?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Planning a reunion for your faculty or specific program? Our alumni office provides full support — from planning to execution.
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

export default DepartmentalReunionEvents;