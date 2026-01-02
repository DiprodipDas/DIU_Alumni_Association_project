import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, Building2, Filter, Sparkles } from "lucide-react";

const allMemories = [
  // CSE
  { id: 1, dept: "CSE", title: "CSE Reunion 2024", date: "12 Oct 2024", attendees: "380+", image: "https://images.unsplash.com/photo-1523050858586-58fb9572d32f?w=1600&q=90" },
  { id: 2, dept: "CSE", title: "Tech Fest 2023", date: "5 Mar 2023", attendees: "420+", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=90" },

  // EEE
  { id: 3, dept: "EEE", title: "EEE Industrial Tour", date: "18 Nov 2023", attendees: "180+", image: "https://images.unsplash.com/photo-1581092580490-4d703a53e7fb?w=1600&q=90" },
  { id: 4, dept: "EEE", title: "Power Symposium 2024", date: "22 Feb 2024", attendees: "150+", image: "https://images.unsplash.com/photo-1581093588401-fbb62a0814a1?w=1600&q=90" },

  // BBA
  { id: 5, dept: "BBA", title: "Business Leadership Summit", date: "10 Jan 2024", attendees: "320+", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&q=90" },
  { id: 6, dept: "BBA", title: "BBA Alumni Gala Night", date: "8 Dec 2023", attendees: "450+", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=90" },

  // English
  { id: 7, dept: "English", title: "Literary Fest 2024", date: "15 Apr 2024", attendees: "220+", image: "https://images.unsplash.com/photo-1456518583163-03c0e894c0aa?w=1600&q=90" },
  { id: 8, dept: "English", title: "Poetry & Drama Night", date: "20 Nov 2023", attendees: "190+", image: "https://images.unsplash.com/photo-1519389950477-6277e79e2008?w=1600&q=90" },

  // Law
  { id: 9, dept: "Law", title: "National Moot Court 2024", date: "5 May 2024", attendees: "280+", image: "https://images.unsplash.com/photo-1589820287818-923f9e0b5e7b?w=1600&q=90" },
  { id: 10, dept: "Law", title: "Law Alumni Conclave", date: "18 Sep 2023", attendees: "200+", image: "https://images.unsplash.com/photo-1589391886645-d6845b3d2e9c?w=1600&q=90" },
];

const departments = ["All", "CSE", "EEE", "BBA", "English", "Law"];

const AlumniGallery = () => {
  const [selectedDept, setSelectedDept] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredMemories = selectedDept === "All"
    ? allMemories
    : allMemories.filter(m => m.dept === selectedDept);

  return (
    <section className="relative bg-gray-50 py-24 overflow-hidden">
      {/* Floating Emerald Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 -left-40 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-teal-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-4">
            <Sparkles className="w-5 h-5" />
            Cherished Moments
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Alumni <span className="text-emerald-600">Gallery</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Explore unforgettable memories from your department and beyond
          </p>
        </motion.div>

        {/* Department Filter Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {departments.map((dept) => (
            <motion.button
              key={dept}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedDept(dept)}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg ${
                selectedDept === dept
                  ? "bg-emerald-600 text-white shadow-emerald-600/30"
                  : "bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200"
              }`}
            >
              {dept === "All" ? <Filter className="w-5 h-5" /> : <Building2 className="w-5 h-5" />}
              {dept === "All" ? "All Departments" : dept}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedDept}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredMemories.map((memory, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.08 }}
                key={memory.id}
                onMouseEnter={() => setHoveredCard(memory.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative h-96 rounded-3xl overflow-hidden shadow-xl cursor-pointer"
              >
                {/* Image */}
                <motion.img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-full object-cover"
                  animate={{ scale: hoveredCard === memory.id ? 1.12 : 1 }}
                  transition={{ duration: 0.8 }}
                />

                {/* Overlay & Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <motion.div
                  animate={{
                    boxShadow: hoveredCard === memory.id
                      ? "0 0 80px rgba(16, 185, 129, 0.7)"
                      : "0 0 0px transparent"
                  }}
                  className="absolute inset-0 rounded-3xl ring-4 ring-emerald-500/0 group-hover:ring-emerald-500/40 transition-all duration-500"
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <span className="inline-block px-4 py-1 bg-emerald-600/90 backdrop-blur rounded-full text-sm font-bold mb-3">
                    {memory.dept}
                  </span>
                  <h3 className="text-2xl font-bold mb-3">{memory.title}</h3>
                  <div className="flex items-center gap-6 text-sm opacity-90">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-emerald-400" />
                      {memory.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald-400" />
                      {memory.attendees}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Memories Message */}
        {filteredMemories.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-gray-500 font-medium">
              No memories yet for <span className="text-emerald-600">{selectedDept}</span>
            </p>
            <p className="text-gray-400 mt-3">More amazing moments coming soon!</p>
          </motion.div>
        )}

        {/* CTA */}
        <div className="text-center mt-20">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-600 text-white font-semibold rounded-full shadow-xl hover:bg-emerald-700 transition-all"
          >
            Share Your Memory
            <Sparkles className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default AlumniGallery;