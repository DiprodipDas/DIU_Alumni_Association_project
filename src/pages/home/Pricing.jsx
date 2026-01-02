import React from "react";
import HeadingSection from "../../components/HeadingSection";
import { Check } from "lucide-react";

const membershipPlans = [
  {
    name: "General Membership",
    price: 500,
    description: "Stay connected with events, newsletter, and community access.",
    features: [
      "Alumni directory access",
      "Event invitations",
      "Monthly newsletter",
      "Community forum",
    ],
    recommended: false,
  },
  {
    name: "Lifetime Membership",
    price: 2000,
    description: "One-time payment for lifelong benefits and permanent recognition.",
    features: [
      "All General benefits",
      "Lifetime access (no renewal)",
      "VIP seating & priority entry",
      "Name on Honor Wall",
      "Exclusive gala invitation",
      "Milestone gifts",
    ],
    recommended: true,
  },
  {
    name: "Honorary Membership",
    price: 0,
    description: "By invitation — for distinguished alumni and contributors.",
    features: [
      "All Lifetime benefits",
      "Official website recognition",
      "Leadership retreat invites",
      "Personalized certificate & medal",
      "Legacy recognition",
    ],
    recommended: false,
  },
];

const Pricing = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-emerald-50 py-24 lg:py-32">
      {/* Elegant Wave Background – Same as Blogs */}
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

      {/* Soft Emerald Radial Glow – Same as Blogs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#10b981_0%,_transparent_70%)]" />
      </div>

      {/* Heading */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="text-center">
          <HeadingSection
            subheading="ALUMNI MEMBERSHIP"
            heading="Choose Your Membership"
            description=""
            subheadingColor="text-emerald-600 font-bold tracking-widest text-sm uppercase"
            headingColor="text-gray-900"
            descriptionColor="text-gray-700"
          />
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="relative z-10 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-9">
            {membershipPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-500 hover:-translate-y-2 ${
                  plan.recommended ? "lg:scale-[1.04]" : ""
                }`}
              >
                {/* Most Popular Badge */}
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="bg-emerald-600 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg border border-emerald-400">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`h-full bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500
                    ${plan.recommended 
                      ? "shadow-xl ring-4 ring-emerald-500/10 border-emerald-200" 
                      : "hover:shadow-xl"
                    }`}
                >
                  {/* Top Accent Bar */}
                  <div className={`h-1.5 ${plan.recommended ? "bg-emerald-600" : index === 0 ? "bg-blue-600" : "bg-amber-600"}`} />

                  <div className="p-7 lg:p-8">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 text-center mb-4">
                      {plan.name}
                    </h3>

                    <div className="text-center mb-6">
                      {plan.price === 0 ? (
                        <p className="text-4xl lg:text-5xl font-bold text-amber-600">Free</p>
                      ) : (
                        <div>
                          <span className="text-4xl lg:text-5xl font-bold text-emerald-600">
                            ৳{plan.price.toLocaleString()}
                          </span>
                          <p className="text-sm text-gray-500 mt-2 font-medium">one-time contribution</p>
                        </div>
                      )}
                    </div>

                    <p className="text-gray-600 text-sm text-center mb-6 leading-relaxed">
                      {plan.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="ml-3 text-gray-700 leading-snug">{feature}</span>
                        </li>
                    ))}
                    </ul>

                    <button
                      className={`w-full py-3.5 rounded-xl font-semibold text-base transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02]
                        ${plan.recommended
                          ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                          : plan.price === 0
                          ? "bg-amber-600 hover:bg-amber-700 text-white"
                          : "bg-gray-800 hover:bg-gray-900 text-white"
                        }`}
                    >
                      {plan.price === 0 
                        ? "By Invitation Only" 
                        : plan.recommended 
                        ? "Join Lifetime Now" 
                        : "Get Started"
                      }
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;