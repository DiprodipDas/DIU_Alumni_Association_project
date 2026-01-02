import React from "react";
import HeadingSection from "../../components/HeadingSection";
import { ArrowRight, Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-emerald-50 py-28 lg:py-36">
      {/* Elegant Wave Background – Same as your Pricing/Blogs */}
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
              <stop offset="100%" stopColor="# 10b981" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Soft Emerald Glow */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#10b981_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Premium Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <HeadingSection
            subheading="STAY CONNECTED"
            heading="Never Miss an Update"
            description="Join thousands of distinguished DIU alumni receiving exclusive insights, event invitations, career opportunities, and stories of impact — delivered straight to your inbox."
            subheadingColor="text-emerald-600 font-bold tracking-widest text-xs uppercase"
            headingColor="text-gray-900 text-4xl lg:text-5xl font-bold leading-tight"
            descriptionColor="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto"
          />
        </div>

        {/* Elegant Input + Button */}
        <div className="max-w-2xl mx-auto">
          <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Email Input – Glassmorphism Style */}
            <div className="relative w-full sm:w-auto flex-1 group">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-600 pointer-events-none" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full pl-14 pr-6 py-5 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl 
                  text-gray-900 placeholder-gray-500 text-base lg:text-lg
                  focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 
                  shadow-lg hover:shadow-xl transition-all duration-300"
              />
            </div>

            {/* Premium Subscribe Button */}
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center px-10 py-5 
                bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-lg rounded-2xl 
                shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 
                transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Subscribe Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-40 transition-opacity" />
            </button>
          </form>

          {/* Trust Line */}
          <p className="text-center mt-8 text-sm text-gray-600 font-medium">
            <span className="text-emerald-700">Your privacy is protected.</span> We respect your inbox. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;