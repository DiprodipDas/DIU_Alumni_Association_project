import React from "react";
import HeadingSection from "../../components/HeadingSection";

const membershipPlans = [
  {
    name: "General Membership",
    price: 500,
    description: "Perfect for alumni who want to stay connected and participate in regular events.",
    features: [
      "Access to alumni directory",
      "Invitations to annual events",
      "Newsletter subscription",
      "Community discussion access",
    ],
    color: "from-red-500 to-red-600",
  },
  {
    name: "Lifetime Membership",
    price: 2000,
    description: "Best for dedicated alumni who want lifetime access and premium privileges.",
    features: [
      "All General Membership benefits",
      "Lifetime access to all events",
      "VIP seating at alumni gatherings",
      "Name listed on the honor board",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    name: "Honorary Membership",
    price: 0,
    description: "Special membership awarded to distinguished contributors and honorary members.",
    features: [
      "All Lifetime Membership benefits",
      "Official recognition on alumni website",
      "Exclusive invitation to private events",
      "Certificate of honor",
    ],
    color: "from-yellow-500 to-yellow-600",
  },
];

const Pricing = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-screen-2xl container mx-auto px-5">
        <HeadingSection
          heading="Membership Plans"
          subheading="Join Our Alumni Network"
          description="Choose your membership type and become part of our growing alumni family."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {membershipPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-r ${plan.color} text-white text-center py-6 rounded-t-xl`}
              >
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                <p className="text-4xl font-bold mt-2">
                  {plan.price === 0 ? "Free" : `৳${plan.price}`}
                </p>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-gray-600 text-center mb-6">{plan.description}</p>
                <ul className="text-gray-700 space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12l5 5L20 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-full transition duration-300">
                    {plan.price === 0 ? "Recognized" : `Join as ${plan.name.split(" ")[0]}`}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
