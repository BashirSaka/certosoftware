// src/pages/Help.jsx
import { useState } from "react";
import { Sparkle, Mail, Phone, Clock } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "What is Certo?",
    answer:
      "Certo is a mobile security app that scans your iPhone or Android device for spyware, keyloggers, and other threats — then helps you remove them or shows you exactly how to.",
  },
  {
    id: 2,
    question: "How do I scan my phone?",
    answer:
      "Open the Certo app, tap the Scan button on your dashboard, and let it run. A full scan usually takes under a minute and checks for spyware, tracking apps, and system tampering.",
  },
  {
    id: 3,
    question: "Is my data private?",
    answer:
      "Yes. Certo never uploads the contents of your phone anywhere. Scans run locally on your device, and we only ever process what's strictly necessary to detect a threat.",
  },
  {
    id: 4,
    question: "What devices are supported?",
    answer:
      "Certo supports iOS 14 and above, and Android 9 and above. Some features, like jailbreak detection, are iPhone-specific due to platform differences.",
  },
  {
    id: 5,
    question: "How much does Certo cost?",
    answer:
      "Certo offers a free basic scan. Full protection, including continuous monitoring and breach check, is available through a monthly or annual subscription inside the app.",
  },
  {
    id: 6,
    question: "How do I contact support?",
    answer:
      "You can reach our support team by email, phone, or live chat — details are just below this FAQ section. We typically respond within a few hours on weekdays.",
  },
];

export default function Help() {
  const [activeId, setActiveId] = useState(faqData[0].id);
  const activeFaq = faqData.find((faq) => faq.id === activeId);

  return (
    <section className="bg-[#F3F8FF] px-6 py-16 min-[769px]:px-20 flex flex-col items-center">
      <h1 className="text-[#02033B] font-bold text-3xl min-[769px]:text-4xl text-center mb-3">
        How can we help you?
      </h1>
      <p className="text-[#02033B] text-center max-w-md mb-12">
        Search our most common questions below, or reach out directly if you
        can't find what you're looking for.
      </p>

      {/* Dynamic FAQ */}
      <div className="w-full max-w-4xl border border-gray-300 rounded-2xl grid grid-cols-1 min-[769px]:grid-cols-2 overflow-hidden mb-16">
        {/* Left column - Questions */}
        <div className="p-6 min-[769px]:p-8 bg-white">
          <div className="flex flex-col gap-3">
            {faqData.map((faq) => {
              const isActive = faq.id === activeId;
              return (
                <button
                  key={faq.id}
                  onClick={() => setActiveId(faq.id)}
                  className={`cursor-pointer flex items-center justify-between text-left px-4 py-3 rounded-md font-semibold transition-colors ${
                    isActive
                      ? "bg-[#4335DE] text-white"
                      : "bg-[#F3F8FF] text-[#02033B] hover:bg-gray-100"
                  }`}
                >
                  <span>{faq.question}</span>
                  {isActive && (
                    <Sparkle size={18} className="text-[#FFC247] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right column - Answer */}
        <div className="bg-[#FFC247] p-6 min-[769px]:p-8 flex flex-col">
          <div className="flex gap-2">
            <Sparkle size={20} className="text-[#02033B] shrink-0 mt-1" />
            <p className="text-[#02033B] leading-relaxed">{activeFaq.answer}</p>
          </div>
        </div>
      </div>

      {/* Contact info */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-8 min-[769px]:p-12">
        <h2 className="text-[#02033B] font-bold text-2xl mb-8 text-center">
          Still need a hand? Reach out directly.
        </h2>
        <div className="grid grid-cols-1 min-[769px]:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="bg-[#F3F8FF] p-3 rounded-full">
              <Mail size={22} className="text-[#4335DE]" />
            </div>
            <h3 className="font-bold text-[#02033B]">Email us</h3>
            <p className="text-sm text-gray-600">support@certosoftware.com</p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="bg-[#F3F8FF] p-3 rounded-full">
              <Phone size={22} className="text-[#4335DE]" />
            </div>
            <h3 className="font-bold text-[#02033B]">Call us</h3>
            <p className="text-sm text-gray-600">
              +234 (145) 019-2828
            </p>
            <p className="text-sm text-gray-600">
               +1 (756) 834-9856
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="bg-[#F3F8FF] p-3 rounded-full">
              <Clock size={22} className="text-[#4335DE]" />
            </div>
            <h3 className="font-bold text-[#02033B]">Support hours</h3>
            <p className="text-sm text-gray-600">Mon–Sat, 9am–6pm (WAT)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
