import React from 'react';
import HeadingSection from '../../components/HeadingSection';
import { ArrowRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    image: "/images/blogs/blog1.png",
    category: "Technology",
    title: "How AI is shaping the future of web development",
    description: "Discover how artificial intelligence is transforming the way we build and design websites.",
    authorImage: "/images/authors/author1.png",
    authorName: "John Due",
    authorRole: "Tech Blogger",
  },
  {
    id: 2,
    image: "/images/blogs/blog2.png",
    category: "Design",
    title: "10 tips for Creating Stunning UI/UX Design",
    description: "Learn the secret to designing user interfaces that captivate and convert users.",
    authorImage: "/images/authors/author2.png",
    authorName: "Maria D Costa",
    authorRole: "UX Designer",
  },
  {
    id: 3,
    image: "/images/blogs/blog3.png",
    category: "Automation",
    title: "How to fit yourself in the automation world",
    description: "Discover how automation simplifies your day-to-day tasks. Level up your knowledge.",
    authorImage: "/images/authors/author3.png",
    authorName: "Mr Lorem",
    authorRole: "Automation Engineer",
  },
  {
    id: 4,
    image: "/images/blogs/blog4.png",
    category: "DevOps",
    title: "The most important things you must know to become a DevOps Engineer",
    description: "DevOps is vast. Master the foundational skills needed to succeed in this evolving field.",
    authorImage: "/images/authors/author4.png",
    authorName: "Mark Tonny",
    authorRole: "DevOps Engineer",
  },
];

const Blogs = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-emerald-50 py-24 lg:py-32">
      {/* Elegant wave background */}
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

      {/* Soft radial glow */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#10b981_0%,_transparent_70%)]" />
      </div>

      {/* Heading – centered with safe padding */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="text-center">
          <HeadingSection
            subheading="KNOWLEDGE HUB"
            heading="Latest News & Blogs"
            description=""
            subheadingColor="text-emerald-600 font-bold tracking-widest text-sm uppercase"
            headingColor="text-gray-900"
            descriptionColor="text-gray-700"
          />
        </div>
      </div>

      {/* FULL-WIDTH GRID – No side gaps on large screens */}
      <div className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
              >
                {/* Compact Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
                    loading="lazy"
                  />
                  <span className="absolute bottom-3 left-3 px-3.5 py-1.5 bg-emerald-600 text-white font-bold text-xs rounded-full shadow-lg">
                    {blog.category}
                  </span>
                </div>

                {/* Compact & Clean Content */}
                <div className="p-5 space-y-3 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-2 leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {blog.description}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <img
                      src={blog.authorImage}
                      alt={blog.authorName}
                      className="w-9 h-9 rounded-full object-cover ring-3 ring-white shadow-sm"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900 leading-none">{blog.authorName}</p>
                      <p className="text-xs text-gray-500">{blog.authorRole}</p>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button className="mt-4 w-full py-2.5 px-4 bg-emerald-600 text-white font-medium text-sm rounded-lg hover:bg-emerald-700 transition-colors duration-300 flex items-center justify-center gap-1.5 group">
                    Read More
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;