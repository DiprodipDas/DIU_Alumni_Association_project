import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Globe, HeartHandshake, GraduationCap, Sparkles, ChevronRight } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Hero — Pure Elegance & National Pride */}
      {/* Hero — Stunning Photo Background (Your Chosen Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full-screen Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://i.ibb.co.com/HL5K26Sv/memories-at-diu-1764669933044-914878920.jpg"
            alt="DIU Memories — Proud Graduates"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Dark Scrim for Perfect Text Readability + Subtle Emerald Tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

        {/* Optional: Very subtle golden glow at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-amber-600/20 to-transparent opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <p className="text-amber-300 font-medium tracking-widest uppercase text-sm md:text-base mb-6">
            Proudly DIU • Est. 1995
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold leading-tight">
            <span className="block text-white drop-shadow-2xl">Dhaka International</span>
            <span className="block text-amber-400 drop-shadow-2xl">University</span>
            <span className="block text-emerald-300 drop-shadow-2xl">Alumni Association</span>
          </h1>
          <p className="mt-10 text-xl md:text-2xl font-light text-emerald-100 max-w-4xl mx-auto leading-relaxed opacity-95">
            Where excellence meets legacy. Where graduates become global leaders.<br />
            Where the spirit of Bangladesh shines through every success story.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/membership"
              className="group relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10">Join the Legacy</span>
              <Sparkles className="w-7 h-7 relative z-10 group-hover:rotate-12 transition" />
              <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </Link>

            <Link
              to="/directory"
              className="inline-flex items-center bg-emerald-600 gap-3 px-10 py-6 border-2 border-white/40 hover:border-emerald-700 text-white font-bold text-xl rounded-full backdrop-blur-xl hover:bg-amber-400 hover:text-black  transition-all duration-300"
            >
              Meet Our Global Family
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Bottom Wave — Keeps flow into next section */}
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1440 220" className="fill-white">
            <path d="M0,100 Q360,20 720,80 T1440,100 L1440,220 L0,220 Z" opacity="0.9" />
            <path d="M0,140 Q360,60 720,120 T1440,140 L1440,220 L0,220 Z" opacity="0.6" />
          </svg>
        </div>
      </section>

      {/* Legacy Section — Timeless Beauty */}
      {/* Legacy Section — With Pricing-style Elegant Wave + Glow Background */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-emerald-50 py-32">
        {/* Subtle Wave Lines — Identical to Pricing */}
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

        {/* Soft Emerald Radial Glow — Identical to Pricing */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#10b981_0%,_transparent_70%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                A Legacy That <span className="text-emerald-700">Transcends</span> Time
              </h2>
              <div className="mt-10 space-y-8 text-lg text-gray-600 leading-relaxed">
                <p>
                  For nearly three decades, <strong className="text-emerald-700">Dhaka International University</strong> has nurtured dreamers into doers, students into leaders, and visionaries into nation-builders.
                </p>
                <p>
                  Today, our alumni stand at the forefront of technology, business, law, arts, and public service — not just in Bangladesh, but across the world.
                </p>
                <p className="text-emerald-700 font-semibold text-xl">
                  This is not just an alumni association.<br />
                  This is a movement. This is family. This is <em>home</em>.
                </p>
              </div>

              <div className="mt-12 hidden md:grid grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-5xl font-bold text-emerald-700">30,000+</p>
                  <p className="text-gray-600 font-medium mt-2">Graduates</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-amber-600">1</p>
                  <p className="text-gray-600 font-medium mt-2">Family</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-red-600">∞</p>
                  <p className="text-gray-600 font-medium mt-2">Impact</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl ring-8 ring-emerald-100/50">
                <img
                  src="https://api.diu.ac//images/diuac/slider/1709190107_4GfP3YkxQw.jpg"
                  alt="DIU Campus"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              </div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-3xl font-bold drop-shadow-lg">Permanent Campus</p>
                <p className="text-lg opacity-90">Satarkul, Badda, Dhaka</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision — Luxurious Cards */}
      <section className="py-32 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Guided by <span className="text-emerald-700">Purpose</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="group relative bg-gradient-to-br from-emerald-600 to-emerald-800 text-white rounded-3xl p-12 shadow-2xl hover:shadow-emerald-600/40 transition-all duration-700 overflow-hidden">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl"></div>
              <div className="relative z-10">
                <Target className="w-16 h-16 mb-6 text-amber-400" />
                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-lg leading-relaxed text-emerald-100">
                  To nurture a lifelong, unbreakable bond between DIU and its alumni — fostering mentorship, professional excellence, and collective pride in our shared Bangladeshi heritage.
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Vision */}
            <div className="group relative bg-gradient-to-br from-amber-600 to-red-700 text-white rounded-3xl p-12 shadow-2xl hover:shadow-amber-600/40 transition-all duration-700 overflow-hidden">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl"></div>
              <div className="relative z-10">
                <Globe className="w-16 h-16 mb-6 text-emerald-300" />
                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-lg leading-relaxed text-amber-100">
                  A world where every DIU graduate stands tall as a beacon of knowledge, integrity, and national pride — leading change from Dhaka to Dubai, London to Los Angeles.
                </p>
              </div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Excellence */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Six Pillars of <span className="text-amber-400">Excellence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-16">
            The foundation upon which our global community stands — strong, proud, and eternal.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Users, title: "Brotherhood", color: "emerald" },
              { icon: HeartHandshake, title: "Mentorship", color: "amber" },
              { icon: GraduationCap, title: "Knowledge", color: "red" },
              { icon: Globe, title: "Global Reach", color: "emerald" },
              { icon: Target, title: "Impact", color: "amber" },
              { icon: Sparkles, title: "Legacy", color: "red" },
            ].map(({ icon: Icon, title, color }, i) => (
              <div
                key={i}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-500"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-${color}-500 to-${color}-700 flex items-center justify-center shadow-xl group-hover:scale-110 transition`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold">{title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action — Emotional Masterpiece */}
      {/* Final Call to Action — Now with Your Emotional Photo Background */}
      {/* Final Call to Action — Dreamy Full-Blurred Background */}
      {/* Final Call to Action — Refined, Elegant & Soul-Touching */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        {/* Dreamy Full-Blurred Background */}
        <div className="absolute inset-0">
          <img
            src="https://i.ibb.co.com/XZWHWrFx/memories-at-diu-1764599815266-589575766.jpg"
            alt="DIU Alumni — Forever Connected"
            className="w-full h-full object-cover object-center blur-3xl scale-110"
          />
        </div>

        {/* Soft Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

        {/* Gentle Red Sun Pulse — Bangladesh in the Heart */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <div className="w-[1000px] h-[1000px] bg-red-600 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        {/* Refined & Emotional Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
            The Best Part of DIU<br />
            <span className="text-amber-400 drop-shadow-2xl">Never Ends</span>
          </h2>

          <p className="mt-10 text-lg md:text-2xl font-light text-emerald-100 max-w-3xl mx-auto leading-relaxed opacity-95">
            You didn’t just graduate from a university.<br />
            <span className="text-amber-200 font-medium">You became part of a family that lives forever.</span>
          </p>

          {/* Elegant, Perfectly Sized CTA Button */}
          <div className="mt-12">
            <Link
              to="/membership"
              className="group relative inline-flex items-center gap-4 px-14 py-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-amber-500/60 transform hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              <GraduationCap className="w-8 h-8 group-hover:scale-110 transition" />
              <span className="relative z-10">Become a Lifetime Member Today</span>
              <GraduationCap className="w-8 h-8 group-hover:scale-110 transition" />
              <div className="absolute inset-0 bg-white/25 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-full"></div>
            </Link>
          </div>

          {/* <p className="mt-12 text-xl md:text-2xl font-medium text-emerald-300 tracking-wide">
            Proudly DIU. Proudly Bangladeshi. Proudly <span className="text-amber-400">Yours</span>.
          </p> */}
        </div>
      </section>
    </>
  );
};

export default About;