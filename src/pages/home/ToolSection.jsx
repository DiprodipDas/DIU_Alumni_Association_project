import React, { useState, useEffect, useRef } from 'react';
import HeadingSection from '../../components/HeadingSection';
import { BiSolidGraduation, BiUserCheck, BiUserPlus, BiWorld } from 'react-icons/bi';

const backgroundImage = "https://i.ibb.co.com/4gMh28SG/memories-at-diu-1763484005761-198974989.jpg";

const stats = [
  { icon: BiUserPlus, value: 15029, label: "Current Students", suffix: "" },
  { icon: BiWorld, value: 92, label: "International Students", suffix: "" },
  { icon: BiUserCheck, value: 28218, label: "Proud Alumni Worldwide", suffix: "" },
  { icon: BiSolidGraduation, value: 8, label: "Convocations Held", suffix: "" },
];

const useCountUp = (end, duration = 3000) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef();

  useEffect(() => {
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
      else setCount(end);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [end, duration]);

  return count;
};

const StatCard = ({ icon: Icon, value, label, suffix, inView }) => {
  const count = useCountUp(inView ? value : 0);

  return (
    <div className="group relative p-10 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 
                    transform hover:-translate-y-4 hover:shadow-3xl transition-all duration-700">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/10 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      <div className="relative z-10 text-center">
        <div className="mb-8 inline-flex p-6 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl 
                        shadow-xl transform group-hover:scale-110 transition-transform duration-500">
          <Icon className="text-5xl text-white" />
        </div>
        <h3 className="text-5xl md:text-6xl font-black text-gray-900 mb-3">
          {count.toLocaleString('en-US')}{suffix}
        </h3>
        <p className="text-lg font-semibold text-gray-700 tracking-wide uppercase">{label}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 
                      scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
    </div>
  );
};

const ToolSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* REDISH OVERLAY ON TOP (only for heading area) */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-rose-50/95 via-pink-50/90 to-transparent" />

      {/* DARK OVERLAY FOR STATS AREA */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 pt-96" />

      <div className="relative z-10">
        {/* Heading Section - sits on redish overlay */}
        <div className="py-24 lg:py-32 text-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <HeadingSection
              subheading="OUR LEGACY IN NUMBERS"
              heading="A Community Built on Excellence"
              description=""
              subheadingColor="text-rose-600 font-bold tracking-widest text-lg"
              headingColor="text-gray-900"
              descriptionColor="text-gray-700"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="py-20 lg:py-28 ">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} inView={inView} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center pb-24">
          <button className="group relative inline-flex items-center gap-5 px-16 py-7 bg-white text-rose-700 
                           font-bold text-xl rounded-2xl shadow-2xl hover:shadow-rose-200/70 
                           transform hover:-translate-y-3 transition-all duration-500 overflow-hidden">
            <span className="relative z-10">Explore Our Journey</span>
            <div className="relative z-10 w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center 
                          group-hover:bg-amber-500 transition-colors duration-500">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent 
                          -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToolSection;