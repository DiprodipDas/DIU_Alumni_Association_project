import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import HeadingSection from "../../components/HeadingSection";
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamMembers = [
  {
    id: 1,
    image: "https://diu.ac/assets/images/foun.jpg",
    name: "Late Alhaj Professor Dr. A.B.M. Mafizul Islam Patwari",
    role: "Founder Chairman",
    bio: "Visionary founder of Daffodil International University, dedicated his life to advancing education and innovation in Bangladesh.", // Add bio/details as needed
  },
  {
    id: 2,
    image: "https://api.diu.ac/images/profile_photo_file_245.jpg",
    name: "Shameem Haider Patwary",
    role: "Chairman, BOT",
    bio: "Leading the Board of Trustees with strategic vision and commitment to excellence in higher education.",
  },
  {
    id: 3,
    image: "https://api.diu.ac/images/profile_photo_file_46.jpeg",
    name: "Dr. S. Quadir Patwari",
    role: "Vice-Chairman, BOT",
    bio: "A distinguished leader providing guidance and oversight to ensure the university's continued growth and success.",
  },
  {
    id: 4,
    image: "https://api.diu.ac/images/profile_photo_file_1049.jpg",
    name: "Dr. Zahidul Islam",
    role: "Vice-Chancellor",
    bio: "Academic leader driving innovation, research, and quality education across all programs at DIU.",
  },
  {
    id: 5,
    image: "https://api.diu.ac/images/profile_image_upload_222.jpg",
    name: "Md. Masud Parvej Patoari",
    role: "Joint Director, IT & Admission",
    bio: "Overseeing IT infrastructure and admission processes to ensure smooth operations and digital transformation.",
  },
];

const TeamCard = ({ member }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleViewProfile = () => {
    navigate(`/leadership/${member.id}`); // Redirect to dynamic route
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
      <div className="aspect-square overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <div className="p-5 text-center">
        <h3 className="font-bold text-gray-900 text-base leading-tight">
          {member.name}
        </h3>
        <p className="mt-2 text-xs text-gray-600 leading-snug">
          {member.role}
        </p>

        <div className="flex justify-center gap-3 mt-4">
          {[FaLinkedin, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare].map((Icon, i) => (
            <a key={i} href="#" className="text-gray-500 hover:text-emerald-600 transition">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <button
          onClick={handleViewProfile}
          className="mt-4 w-full py-2 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const navigate = useNavigate(); // Also available here if needed

  return (
    <section className="py-20 lg:py-28 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/MDgjN20p/s11.jpg')`,
        }}
      />

      {/* Dark + White Overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-white/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <HeadingSection
            subheading="LEADERSHIP"
            heading="Our Advisory Panel"
            description="Distinguished leaders guiding excellence in education and innovation."
            subheadingColor="text-emerald-600 font-bold tracking-widest text-xs uppercase"
            headingColor="text-gray-900"
            descriptionColor="text-gray-700"
          />
        </div>

        {/* Mobile: Simple Slider */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            grabCursor={true}
            className="pb-12"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="px-8">
                  <TeamCard member={member} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop & Larger: Original Grid */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;