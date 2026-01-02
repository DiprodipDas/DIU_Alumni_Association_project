import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeadingSection from "../../components/HeadingSection";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Faruk Hasan",
    title: "Software Developer",
    company: "DIU",
    text: "Excellent support! I really love this tool. Hope it becomes even more efficient soon.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    department: "Computer Science & Engineering",
    batch: "15th Batch",
  },
  {
    name: "Rezowana Sammy",
    title: "Software Developer",
    company: "Qtech Solution Ltd.",
    text: "A wonderful initiative! The design and usability are top-notch.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    department: "Computer Science & Engineering",
    batch: "15th Batch",
  },
  {
    name: "Afroza Sultana",
    title: "Frontend Engineer",
    company: "Pathao",
    text: "The alumni network platform has connected me to so many opportunities.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    department: "Computer Science & Engineering",
    batch: "15th Batch",
  },
  {
    name: "Diprodip Das",
    title: "DevOps Engineer",
    company: "Samsung R&D",
    text: "Webcode is doing great. Their vision is clear. I'm truly satisfied with their support.",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    department: "Computer Science & Engineering",
    batch: "15th Batch",
  },
  {
    name: "Bilash Ahmed",
    title: "Network Engineer",
    company: "Brac IT",
    text: "I've used this tool since 2019. It provides great support. Wishing all the best to the team.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    department: "Computer Science & Engineering",
    batch: "15th Batch",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[index];

  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      {/* DEEPEST PURE WHITE GLOW — MULTI-LAYERED & INTENSE */}
      <div className="absolute inset-x-0 top-0 h-[600px] lg:h-screen pointer-events-none z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-white/85 blur-3xl rounded-full" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 bg-white/70 blur-3xl rounded-full" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-8xl h-72 bg-white/60 blur-3xl rounded-full" />
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-white/75 via-white/30 to-transparent blur-3xl" />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-white/50 blur-3xl rounded-full" />
      </div>

      {/* Campus Background */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/HTzJvLV2/campus1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Elegant heading */}
        <div className="text-center mb-20 lg:mb-28">
          <HeadingSection
            subheading="ALUMNI VOICES"
            heading="Legends of Tomorrow"
            description="Graduates who continue to inspire and lead worldwide."
            subheadingColor="text-white/90 font-medium tracking-widest text-xs uppercase"
            headingColor="text-white"
            descriptionColor="text-gray-100"
          />
        </div>

        {/* Perfect card */}
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full max-w-2xl lg:max-w-3xl"
            >
              <div className="relative bg-white/96 backdrop-blur-3xl rounded-3xl p-10 lg:p-14 shadow-2xl border border-white/40">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 rounded-3xl pointer-events-none" />

                <FaQuoteLeft className="absolute top-8 left-10 text-6xl text-white/20" />

                <blockquote className="relative text-xl lg:text-2xl xl:text-3xl font-light text-gray-800 italic leading-relaxed text-center mb-12 tracking-wide">
                  "{t.text}"
                </blockquote>

                <div className="flex flex-col items-center gap-7">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-white/70 blur-3xl scale-125 -z-10" />
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-24 h-24 lg:w-28 lg:h-28 rounded-full object-cover border-6 border-white shadow-2xl"
                    />
                  </div>

                  <div className="text-center space-y-3">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {t.name}
                    </h3>
                    <p className="text-lg lg:text-xl text-gray-700 font-medium">
                      {t.title} — {t.company}
                    </p>
                    <p className="text-base text-gray-600 font-medium">
                      {t.department} · {t.batch}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Clean dots */}
        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all duration-600 rounded-full ${
                i === index
                  ? "w-16 h-2 bg-white shadow-lg shadow-white/50"
                  : "w-2 h-2 bg-white/40 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;