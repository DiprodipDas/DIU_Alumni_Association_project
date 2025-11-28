import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeadingSection from "../../components/HeadingSection";

const testimonials = [
  {
    name: "Faruk Hasan",
    title: "Software Developer, DIU",
    text: "Excellent support! I really love this tool. Hope it becomes even more efficient soon.",
    image: "/images/logos/logo1.png",
    initial: "F",
  },
  {
    name: "Bilash Ahmed",
    title: "Network Engineer, Brac IT",
    text: "I've used this tool since 2019. It provides great support. Wishing all the best to the team.",
    image: "/images/logos/logo2.png",
    initial: "B",
  },
  {
    name: "MD. Khalekuzamman",
    title: "IT Officer, DIU",
    text: "This platform is amazing! It helped me connect and grow professionally.",
    image: "/images/logos/logo1.png",
    initial: "K",
  },
  {
    name: "Rezowana Sammy",
    title: "Software Developer, Qtech Solution Ltd.",
    text: "A wonderful initiative! The design and usability are top-notch.",
    image: "/images/logos/logo2.png",
    initial: "R",
  },
  {
    name: "Diprodip Das",
    title: "DevOps Engineer, Samsung R&D",
    text: "Webcode is doing great. Their vision is clear. I'm truly satisfied with their support.",
    image: "/images/logos/logo1.png",
    initial: "D",
  },
  {
    name: "Dipen Kumar Dey",
    title: "Core Network Engineer, Carnival Internet",
    text: "What a great tool! I’m used to it now and use it regularly.",
    image: "/images/logos/logo2.png",
    initial: "D",
  },
  {
    name: "Bijon Talukder",
    title: "Senior Software Developer, Smart Frameworks",
    text: "Excellent support and strong vision. Keep up the good work!",
    image: "/images/logos/logo1.png",
    initial: "B",
  },
  {
    name: "MD. Masud Parvez",
    title: "Head of IT, Bkash Ltd",
    text: "A truly innovative team! The platform works flawlessly for our needs.",
    image: "/images/logos/logo2.png",
    initial: "M",
  },
  {
    name: "Afroza Sultana",
    title: "Frontend Engineer, Pathao",
    text: "The alumni network platform has connected me to so many opportunities.",
    image: "/images/logos/logo1.png",
    initial: "A",
  },
  {
    name: "Rakibul Hasan",
    title: "Data Analyst, Daraz",
    text: "Amazing experience! The platform keeps improving every month.",
    image: "/images/logos/logo2.png",
    initial: "R",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-screen-2xl mx-auto px-5">
        <HeadingSection
          heading="What Our Alumni Say"
          subheading="Testimonials"
        />

        {/* Slider Container */}
        <div className="overflow-hidden mt-10">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${currentIndex * 320}px` }} // adjust width for card width
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] md:min-w-[350px] bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-contain mb-4"
                />
                <p className="text-gray-600 italic mb-4">{item.text}</p>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-green-600 font-bold mb-2">
                    {item.initial}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
