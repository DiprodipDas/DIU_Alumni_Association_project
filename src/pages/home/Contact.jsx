import React from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-16 md:py-24 text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Contact Us
        </h1>
        <p className="max-w-2xl mx-auto text-gray-100 text-base md:text-lg">
          We’d love to hear from you. Reach out for any queries, suggestions, or collaboration opportunities.
        </p>
      </section>

      {/* Contact Details */}
      <section className="max-w-screen-xl mx-auto py-16 px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6">
          <MapPin className="mx-auto text-red-600 w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-green-600">Address</h3>
          <p className="text-gray-600">
            Dhaka International University (DIU) <br />
            House #4, Road #1, Block - F, Banani, Dhaka-1213, Bangladesh
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6">
          <Mail className="mx-auto text-red-600 w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-green-600">Email</h3>
          <p className="text-gray-600">info@diualumni.org</p>
          <p className="text-gray-600">support@diualumni.org</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6">
          <Phone className="mx-auto text-red-600 w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-green-600">Phone</h3>
          <p className="text-gray-600">+880 1712-345678</p>
          <p className="text-gray-600">+880 1303-987654</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6">
          <Clock className="mx-auto text-red-600 w-10 h-10 mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-green-600">Office Hours</h3>
          <p className="text-gray-600">Sunday – Thursday</p>
          <p className="text-gray-600">9:00 AM – 5:00 PM</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-screen-lg mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-6 text-center">
            Send Us a Message
          </h2>

          <form className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none resize-none"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="w-full">
        <iframe
          title="DIU Alumni Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.931162222146!2d90.40507107479873!3d23.785430787274233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7c6b3b23c55%3A0x5ecf5a9a3c0a8c26!2sDhaka%20International%20University!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-none"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
