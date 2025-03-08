"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function FAQSection() {
  const t = useTranslations("FAQ");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Construct FAQ items array manually
  const faqs = [
    { question: t("q1"), answer: t("resp1") },
    { question: t("q2"), answer: t("resp2") },
    { question: t("q3"), answer: t("resp3") },
    { question: t("q4"), answer: t("resp4") }
  ];

  return (
    <section>
      <div className="my-24 text-center bg-stone-900 text-white p-10">
        <h2 className="font-condensed-semiBold text-2xl md:text-3xl">
          {t("text")}
          <span className="bg-white text-black px-4 sm:px-7 py-2 sm:py-4 rounded-lg inline-block">
            {t("spanText")}
          </span>
          <p className="font-regular pt-10 tracking-wide text-xl text-white">
            {t("desc")}
          </p>
        </h2>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-300 p-4 rounded-xl transition duration-500 ${
                openIndex === index ? "bg-indigo-50 border-indigo-600" : ""
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-lg font-normal text-gray-900 transition duration-500 hover:text-indigo-600"
              >
                <h5 className="font-regular text-base md:text-xl">{faq.question}</h5>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              {openIndex === index && (
                <div className="mt-4 light text-base md:text-lg text-gray-900 leading-6">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
