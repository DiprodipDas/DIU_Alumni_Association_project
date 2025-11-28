import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-500 text-white py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Dhaka International University Alumni Association
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-100">
            Connecting generations of Dhaka International University graduates through unity,
            collaboration, and lifelong engagement.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-screen-xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://api.diu.ac//images/diuac/slider/1709190107_4GfP3YkxQw.jpg"
            alt="DIU Alumni"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-600">
            About the Association
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The <strong>Dhaka International University Alumni Association (DIUAA)</strong> is a
            vibrant community that unites all graduates of Dhaka International University under one
            platform. The association strives to strengthen the bond among alumni, current students,
            and the university through networking, mentorship, and social initiatives.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Established with the spirit of unity and development, DIUAA aims to create
            opportunities for professional collaboration, personal growth, and contributions to the
            greater society.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-blue-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-red-600 mb-3">🎯 Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To foster lifelong relationships between Dhaka International University and its alumni
              by providing a platform that encourages communication, collaboration, and
              contribution. The association promotes the exchange of knowledge and experience for
              the betterment of the community and the university.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-red-600 mb-3">🌍 Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To build a globally connected network of DIU graduates who inspire each other,
              contribute to the development of society, and uphold the values and legacy of Dhaka
              International University.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="max-w-screen-xl mx-auto py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-6">
          Our Objectives
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-10">
          The DIU Alumni Association is committed to creating opportunities, promoting engagement,
          and celebrating the success of its members. Our objectives include:
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Create a strong network of DIU graduates across the globe.",
            "Support professional development and mentoring programs.",
            "Organize reunions, seminars, and cultural events.",
            "Encourage alumni contributions to university development.",
            "Recognize outstanding alumni achievements.",
            "Build partnerships with industries and organizations.",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-green-600"
            >
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16 text-center px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Be a Part of the DIU Alumni Community
        </h2>
        <p className="max-w-2xl mx-auto text-gray-200 mb-8">
          Stay connected, get involved, and make a difference in shaping the future of our
          university and the next generation of students.
        </p>
        <a
          href="/membership"
          className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Join Now
        </a>
      </section>
    </div>
  );
};

export default About;
