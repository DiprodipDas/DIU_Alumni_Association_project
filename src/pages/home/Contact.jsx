import React from "react";
import { Mail, MapPin, Phone, Clock, Send, Sparkles } from "lucide-react";

const Contact = () => {
  return (
    <>
      {/* Hero — Majestic & Emotional */}
      {/* Hero — Emotional Alumni Photo Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full-screen Emotional Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://i.ibb.co.com/ymJj8TWC/1654170142-BUNNFms-D2-T.jpg"
            alt="DIU Family — Always Here For You"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Perfect Dark Overlay for Text Readability + National Warmth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

        {/* Subtle Red Sun Pulse — Bangladesh Soul (very gentle) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
          <div className="w-[900px] h-[900px] bg-red-600 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        {/* Content — Pure Emotion */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <p className="text-amber-300 font-light tracking-widest uppercase text-sm md:text-base mb-8">
            Always Here For You
          </p>
          <h1 className="text-6xl md:text-6xl lg:text-6xl font-bold leading-none">
            <span className="block text-white drop-shadow-2xl">Get in</span>
            <span className="block bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent drop-shadow-2xl">
              Touch
            </span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl lg:text-2xl font-light text-emerald-100 max-w-4xl mx-auto leading-relaxed opacity-95">
            Your voice matters. Your story belongs here.<br />
            {/* <span className="text-amber-200 font-medium">Reach out — we’re family.</span> */}
          </p>
        </div>

        {/* Elegant Wave to Next Section */}
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1440 260" className="fill-amber-50">
            <path d="M0,120 Q360,40 720,100 T1440,120 L1440,260 L0,260 Z" opacity="0.9" />
            <path d="M0,180 Q360,100 720,150 T1440,180 L1440,260 L0,260 Z" opacity="0.6" fill="#f9fafb" />
          </svg>
        </div>
      </section>

      {/* Contact Info Cards — Luxurious Glassmorphism */}
      <section className="py-32 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              We’re Here <span className="text-emerald-700">For You</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you have a question, suggestion, or just want to reconnect — our door is always open.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                color: "emerald",
                details: (
                  <>
                    DIU Alumni Association<br />
                    Satartkul, Badda, Dhaka-1212<br />
                    <span className="text-amber-600 font-medium">Bangladesh</span>
                  </>
                ),
              },
              {
                icon: Mail,
                title: "Email Us",
                color: "amber",
                details: (
                  <>
                    <span className="text-emerald-700 font-medium">info@diualumni.org</span><br />
                    <span className="text-gray-600">support@diualumni.org</span>
                  </>
                ),
              },
              {
                icon: Phone,
                title: "Call Us",
                color: "red",
                details: (
                  <>
                    +880 1712-345678<br />
                    <span className="text-gray-600">+880 1303-987654</span>
                  </>
                ),
              },
              {
                icon: Clock,
                title: "Office Hours",
                color: "emerald",
                details: (
                  <>
                    <span className="font-medium">Sunday – Thursday</span><br />
                    9:00 AM – 5:00 PM<br />
                    <span className="text-sm text-gray-500">(Bangladesh Time)</span>
                  </>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white/80 backdrop-blur-2xl rounded-3xl p-10 shadow-xl hover:shadow-2xl border border-white/50 hover:border-amber-200 transition-all duration-700 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.color}-500/10 rounded-bl-full blur-2xl`}></div>
                <div className="relative z-10 text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-${item.color}-600 to-${item.color}-700 flex items-center justify-center shadow-xl group-hover:scale-110 transition`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <div className="text-gray-700 leading-relaxed text-lg">
                    {item.details}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Google Map — Full Width Elegance */}
      {/* Google Map — Exact Pinned Location */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10 pointer-events-none"></div>

        {/* Your Exact DIU Permanent Campus Map */}
        <iframe
          title="Dhaka International University – Permanent Campus (Satarkul, Badda)"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6986998792427!2d90.44456977589805!3d23.793741287110127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c775164bf631%3A0x97f48a5be913a9fc!2sDhaka%20International%20University!5e0!3m2!1sen!2sbd!4v1764756254017!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
        ></iframe>

        {/* Floating Card — Visible ONLY on Large Devices (lg: 1024px+) */}
        <div className="hidden lg:block absolute bottom-8 left-10 z-20 bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-emerald-100 max-w-md">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="w-8 h-8 text-emerald-600" />
            <h3 className="text-3xl font-bold text-emerald-800">
              Permanent Campus
            </h3>
          </div>
          <p className="text-gray-700 font-medium leading-relaxed">
            Satarkul, Badda, Dhaka-1212<br />
            <span className="text-red-600 font-bold">Bangladesh</span>
          </p>
        </div>
      </section>


      {/* Contact Form — Pure Elegance */}
      {/* Contact Form — Matching Pricing Background */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-emerald-50 py-32">
        {/* Same Elegant Wave Background as Pricing */}
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

        {/* Same Soft Emerald Radial Glow as Pricing */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#10b981_0%,_transparent_70%)]" />
        </div>

        {/* Form Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Send Us a <span className="text-amber-600">Message</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600">
              Every message is read with care. We respond within 24 hours.
            </p>
          </div>

          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 md:p-16 border border-white/50">
            <form className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="relative">
                  <label className="block text-gray-700 font-semibold mb-3 text-lg">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 outline-none text-lg transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <label className="block text-gray-700 font-semibold mb-3 text-lg">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 outline-none text-lg transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-3 text-lg">Your Message</label>
                <textarea
                  rows="6"
                  placeholder="Write your thoughts here... We’re listening."
                  className="w-full px-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 outline-none text-lg resize-none transition-all duration-300"
                ></textarea>
              </div>

              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center gap-3 w-full max-w-md mx-auto
               px-12 py-6 md:px-16 md:py-7 
               text-lg md:text-xl 
               bg-gradient-to-r from-emerald-600 to-emerald-700 
               hover:from-emerald-700 hover:to-emerald-800 
               text-white font-bold rounded-full 
               shadow-2xl hover:shadow-emerald-600/40 
               transform hover:scale-105 transition-all duration-500 overflow-hidden"
                >
                  <Send className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-1 transition" />
                  <span>Send Message</span>
                  <Sparkles className="w-6 h-6 md:w-7 md:h-7 opacity-70" />
                  <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>




      {/* Final CTA */}
      <section className="py-32 text-white text-center relative overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://i.ibb.co.com/n8gvB8vS/1738472516-7v-Hf-MEj-E3p.jpg"
            alt="DIU Alumni Family"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Fixed: Light overlay so the photo is visible */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-green-900/20 pointer-events-none"></div>

        {/* Your original content — unchanged */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            You Are Never Far From <span className="text-amber-400">Home</span>
          </h2>
          <p className="text-2xl font-light text-emerald-300 mb-12">
            No matter where life takes you — DIU and your alumni family are always here.
          </p>
          <p className="text-lg text-amber-400 italic">
            Once a DIUan — Always Connected
          </p>
        </div>
      </section>

      {/* Subtle Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 16s ease-in-out infinite;
        }
        .delay-1000 { animation-delay: 3s; }
      `}</style>
    </>
  );
};

export default Contact;