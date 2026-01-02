import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    image: "https://diu.ac/assets/images/foun.jpg",
    name: "Late Alhaj Professor Dr. A.B.M. Mafizul Islam Patwari",
    role: "Founder Chairman",
    bio: "Visionary founder of Daffodil International University, dedicated his life to advancing education and innovation in Bangladesh. His legacy continues to inspire generations of students and educators.",
    achievements: [
      "Established DIU as a leading private university in Bangladesh",
      "Pioneered industry-academia collaboration in higher education",
      "Recipient of numerous national awards for contributions to education"
    ]
  },
  {
    id: 2,
    image: "https://api.diu.ac/images/profile_photo_file_245.jpg",
    name: "Shameem Haider Patwary",
    role: "Chairman, Board of Trustees",
    bio: "Leading the Board of Trustees with strategic vision and unwavering commitment to excellence in higher education. Under his guidance, DIU has achieved remarkable growth and international recognition.",
    achievements: [
      "Expanded DIU's infrastructure and academic programs",
      "Strengthened global partnerships and collaborations",
      "Championed innovation and entrepreneurship initiatives"
    ]
  },
  {
    id: 3,
    image: "https://api.diu.ac/images/profile_photo_file_46.jpeg",
    name: "Dr. S. Quadir Patwari",
    role: "Vice-Chairman, Board of Trustees",
    bio: "A distinguished leader providing strategic guidance and oversight to ensure the university's continued growth, academic excellence, and institutional integrity.",
    achievements: [
      "Played key role in policy development and governance",
      "Mentored numerous academic and administrative initiatives",
      "Contributed to DIU's ranking improvements nationally"
    ]
  },
  {
    id: 4,
    image: "https://api.diu.ac/images/profile_photo_file_1049.jpg",
    name: "Dr. Zahidul Islam",
    role: "Vice-Chancellor",
    bio: "Academic leader driving innovation, research excellence, and quality education across all programs at DIU. Committed to fostering a culture of critical thinking and global competence.",
    achievements: [
      "Enhanced research output and publication quality",
      "Introduced modern pedagogical approaches",
      "Strengthened industry-academia linkages"
    ]
  },
  {
    id: 5,
    image: "https://api.diu.ac/images/profile_image_upload_222.jpg",
    name: "Md. Masud Parvej Patoari",
    role: "Joint Director, IT & Admission",
    bio: "Overseeing IT infrastructure and admission processes to ensure seamless operations, digital transformation, and exceptional student experience from application to graduation.",
    achievements: [
      "Implemented state-of-the-art digital admission system",
      "Modernized campus IT infrastructure",
      "Enhanced cybersecurity and data management systems"
    ]
  },
];

const LeadershipDetail = () => {
  const { id } = useParams();
  const member = teamMembers.find(m => m.id === parseInt(id));

  if (!member) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gray-50 flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Member Not Found</h2>
          <Link to="/leadership" className="text-emerald-600 hover:text-emerald-700 font-medium">
            ← Return to Leadership Panel
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Full Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/MDgjN20p/s11.jpg')`,
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Back Button */}
      <section className="relative py-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6"
        >
          <Link
            to="/leadership"
            className="inline-flex items-center gap-3 text-white/90 hover:text-white transition group"
          >
            <FaArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition" />
            <span className="font-medium">Back to Leadership Panel</span>
          </Link>
        </motion.div>
      </section>

      {/* Compact Profile Card */}
      <section className="relative z-20 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/30"
          >
            <div className="md:flex">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="md:w-2/5 bg-gradient-to-br from-emerald-600/90 to-emerald-800/90 p-8 flex items-center justify-center"
              >
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute inset-0 bg-white/30 rounded-full blur-3xl"
                  />
                  <motion.img
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 100 }}
                    src={member.image}
                    alt={member.name}
                    className="relative z-10 w-56 h-56 object-cover rounded-full border-6 border-white shadow-xl"
                  />
                </div>
              </motion.div>

              {/* Details Section */}
              <div className="md:w-3/5 p-8 lg:p-12">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mb-6"
                >
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    {member.name}
                  </h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-xl text-emerald-600 font-semibold mt-3"
                  >
                    {member.role}
                  </motion.p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="mb-10"
                >
                  <p className="text-base text-gray-700 leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>

                {member.achievements && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.h3
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      className="text-xl font-bold text-gray-900 mb-5"
                    >
                      Key Contributions & Achievements
                    </motion.h3>
                    <ul className="space-y-3">
                      {member.achievements.map((achievement, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
                          className="flex items-start gap-3"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.2 + index * 0.15, type: "spring" }}
                            className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 flex-shrink-0"
                          />
                          <p className="text-base text-gray-700 leading-relaxed">
                            {achievement}
                          </p>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LeadershipDetail;