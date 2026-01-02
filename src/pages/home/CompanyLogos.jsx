import React from 'react';
import HeadingSection from '../../components/HeadingSection';

const CompanyLogos = () => {
  const logos = [
    "https://i.ibb.co.com/qFk5h8jW/1628077920-P2g-Jew96t-E.png",
    "https://i.ibb.co.com/gLJJx7z4/1628138923-Kr-Un-G7ckn-G.png",
    "https://i.ibb.co.com/FbBcvNSf/1628139004-d1-Q8vo84-Ru.png",
    "https://i.ibb.co.com/pBPxWNXT/1628138888-LGO0-TXwurl.png",
    "https://i.ibb.co.com/fdYMDqdp/1628138908-s6-SF4r-YKv-T.png",
    "https://i.ibb.co.com/Q3C4jSMy/1628138940-Wrvjqjv-YT3.png",
    "https://i.ibb.co.com/bgs1mnr5/1628138793-q-O1z-Ei2-VPa.png",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-emerald-50 py-24 lg:py-32">
      {/* Same wave & glow as UpEvents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 1024" preserveAspectRatio="xMidYMid slice">
          <path fill="none" stroke="url(#waveGradient)" strokeWidth="4"
            d="M0,180 Q360,80 720,160 T1440,180 L1440,1024 L0,1024 Z
               M0,380 Q360,280 720,360 T1440,380
               M0,580 Q360,480 720,560 T1440,580"/>
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#10b981_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <HeadingSection
            subheading="TRUSTED BY INDUSTRY LEADERS"
            heading="Our Esteemed Partners"
            description="We proudly collaborate with world-class institutions and organizations committed to excellence."
            subheadingColor="text-emerald-600 font-bold tracking-widest text-sm"
            headingColor="text-gray-900"
            descriptionColor="text-gray-700"
          />
        </div>

        {/* Perfect smooth marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex animate-marquee-smooth">
              {/* 6× duplication = seamless & smooth */}
              {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((src, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-12 my-10 lg:mx-20 flex items-center justify-center"
                >
                  <div className="group relative bg-white rounded-2xl p-8 w-56 h-56 shadow-lg border border-gray-100 
                                  transition-all duration-500 ease-out
                                  hover:shadow-2xl hover:shadow-emerald-200/60 
                                  hover:-translate-y-3 hover:scale-110">
                    {/* Clean, elegant emerald glow on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 
                                    opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
                    
                    <img
                      src={src}
                      alt="Partner logo"
                      className="w-full h-full object-contain transition-transform duration-500 
                                 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="text-center mt-20">
          <p className="text-gray-700 text-xl font-medium">
            Building the future together with{" "}
            <span className="text-emerald-600 font-bold">trusted global partners</span>
          </p>
        </div> */}
      </div>

      {/* Super smooth & elegant scroll */}
      <style jsx>{`
        @keyframes marquee-smooth {
          from { transform: translateX(0%); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee-smooth {
          display: flex;
          width: max-content;
          animation: marquee-smooth 60s linear infinite;
        }
        .animate-marquee-smooth:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default CompanyLogos;