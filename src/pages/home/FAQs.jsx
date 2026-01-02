import React, { useState } from "react";
import HeadingSection from "../../components/HeadingSection";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        id: 1,
        question: "What is DIU Alumni Association?",
        answer: "The official global community connecting all graduates of Dhaka International University. We foster lifelong relationships, professional growth, and institutional pride through networking, events, and shared legacy."
    },
    {
        id: 2,
        question: "How can I become a Lifetime Member?",
        answer: "Simply register online and complete a one-time contribution of BDT 2,000. Upon approval, you receive permanent membership status with full privileges — no renewals ever required."
    },
    {
        id: 3,
        question: "What exclusive benefits do members receive?",
        answer: "Members enjoy access to our global alumni directory, priority event invitations, career portal with verified job listings, mentorship programs, partner discounts, and permanent recognition on the Honor Wall."
    },
    {
        id: 4,
        question: "How do I update my profile information?",
        answer: "Log in to your secure alumni portal account. Navigate to 'My Profile' where you can update your contact details, employment history, achievements, and preferences at any time."
    },
    {
        id: 5,
        question: "How can I contribute back to DIU?",
        answer: "Your impact matters. You can mentor current students, speak at events, share career opportunities, sponsor scholarships, or contribute to the DIU Alumni Development Fund — every action strengthens our legacy."
    }
];

const FAQs = () => {
    const [expandedFAQ, setExpandedFAQ] = useState(null);

    const toggleFAQ = (id) => {
        setExpandedFAQ(expandedFAQ === id ? null : id);
    };

    return (
        <section className="relative min-h-screen py-24 lg:py-32 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://i.ibb.co.com/sddY6nBV/12.jpg')`,
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

            {/* Deep White Glow at Top */}
            <div className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-transparent" />
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full blur-3xl opacity-90"
                    style={{ background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 25%, rgba(255,255,255,0.4) 50%, transparent 75%)" }}
                />
                <div
                    className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-2xl opacity-80"
                    style={{ background: "radial-gradient(circle, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.6) 40%, transparent 70%)" }}
                />
            </div>

            <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] pointer-events-none" />

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-24 pt-16">
                    <HeadingSection
                        subheading="SUPPORT CENTER"
                        heading="Frequently Asked Questions"
                        description=""
                        subheadingColor="text-emerald-300 font-bold tracking-widest text-sm uppercase drop-shadow-2xl"
                        headingColor="text-white drop-shadow-2xl text-5xl lg:text-6xl font-bold leading-tight"
                        descriptionColor="text-gray-100 drop-shadow-xl text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed font-light"
                    />
                </div>

                {/* Cards with GREENISH BORDER + Wave Inside */}
                {/* Cards (Optimized Width + Smaller Text) */}
                <div className="max-w-2xl mx-auto space-y-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="relative overflow-hidden rounded-xl shadow-xl backdrop-blur-xl transition-all duration-500 
      hover:shadow-2xl hover:-translate-y-0.5
      border border-emerald-400/40 hover:border-emerald-400/70 
      ring-2 ring-emerald-500/10"
                        >
                            {/* Subtle Greenish Wave Background */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none">
                                <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                                    <path
                                        fill="url(#waveFill)"
                                        d="M0,160 Q360,80 720,140 T1440,160 L1440,320 L0,320 Z"
                                    />
                                </svg>
                            </div>

                            {/* Glass Card */}
                            <div className="relative bg-white/95 backdrop-blur-lg">
                                <button
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="w-full px-5 py-5 text-left flex items-center justify-between 
          hover:bg-emerald-50/70 transition-all duration-300 group"
                                >
                                    <h3 className="text-base lg:text-lg font-semibold text-gray-900 pr-8 leading-snug">
                                        {faq.question}
                                    </h3>

                                    <ChevronDown
                                        className={`w-5 h-5 text-emerald-600 transition-all duration-500 group-hover:scale-110 ${expandedFAQ === faq.id ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFAQ === faq.id ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="px-5 pb-5 pt-2 bg-white/90 border-t border-emerald-200">
                                        <p className="text-gray-700 leading-relaxed text-sm lg:text-base font-light">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Final CTA */}
                {/* <div className="text-center mt-24">
                    <p className="text-white text-xl font-medium drop-shadow-2xl">
                        Still have questions?{" "}
                        <a
                            href="/contact"
                            className="font-bold text-emerald-300 hover:text-white underline underline-offset-8 transition duration-300 text-2xl"
                        >
                            Contact our Alumni Office
                        </a>
                    </p>
                </div> */}
            </div>
        </section>
    );
};

export default FAQs;