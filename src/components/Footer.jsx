import React from "react";
import {
  Facebook,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-950 text-gray-300 overflow-hidden">
      {/* Subtle Emerald Glow + Wave Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#footerWave)"
            d="M0,100 Q360,50 720,100 T1440,100 L1440,600 L0,600 Z"
          />
          <defs>
            <linearGradient id="footerWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">
              DIU <span className="text-emerald-500">Alumni</span> Association
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-md">
              A global community of distinguished graduates committed to
              excellence, leadership, and lifelong connection with Dhaka
              International University.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-emerald-500" />
                <span>
                  Satarkul, Badda, Dhaka-1212, <br /> Bangladesh
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-emerald-500" />
                <a
                  href="mailto:alumni@diu.bd"
                  className="hover:text-emerald-400 transition"
                >
                  alumni@diu.bd
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-emerald-500" />
                <span>+880 123 456 7890</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Events",
                "Membership",
                "Career Portal",
                "Alumni Directory",
                "News & Stories",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              {[
                "Mentorship Program",
                "Scholarships",
                "Job Board",
                "Alumni Benefits",
                "Give Back",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-emerald-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Google Map (Premium Look - FIXED TO EXACT LOCATION) */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6">
              DIU Permanent Campus
            </h3>

            <div className="rounded-xl overflow-hidden shadow-xl ring-2 ring-emerald-500/20 hover:ring-emerald-400/40 transition-all duration-300">
              <iframe
                title="Dhaka International University Permanent Campus"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6986998792427!2d90.44456977589805!3d23.793741287110127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c775164bf631%3A0x97f48a5be913a9fc!2sDhaka%20International%20University!5e0!3m2!1sen!2sbd!4v1764756254017!5m2!1sen!2sbd"
                width="100%"
                height="220"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              © {currentYear} All rights reserved by -
              <span className="text-red-600 font-medium ml-2">
                 IT TEAM-DIU
              </span>
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;