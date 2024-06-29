import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const faqs = [
  { question: "What is ONSOURCD?", answer: "ONSOURCD is a platform designed to facilitate the trading and utilization of agro waste." },
  { question: "How does ONSOURCD work?", answer: "ONSOURCD connects sellers and buyers of agro waste, enabling efficient and sustainable waste management." },
  { question: "Who can benefit from using ONSOURCD?", answer: "Farmers, traders, aggregators, and industries involved in agro waste management can benefit from ONSOURCD." },
  { question: "What types of agro waste can be traded on ONSOURCD?", answer: "Various types of agro waste including crop residues, husks, and other by-products can be traded." },
  { question: "How do I register on ONSOURCD?", answer: "You can register on ONSOURCD by visiting our website and clicking on the 'Register' button." },
  { question: "Is there a fee to use ONSOURCD?", answer: "Please visit our website for detailed information on any applicable fees." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-12 bg-gradient-to-br from-yellow-50 to-yellow-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#372800]">FAQ</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => handleAccordionClick(index)}
                    className={`flex justify-between items-center w-full py-4 px-6 text-left text-lg font-semibold focus:outline-none ${openIndex === index ? 'bg-[#F6B60D] text-white' : 'bg-white text-[#372800]'}`}
                  >
                    <span>{faq.question}</span>
                    {openIndex === index ? (
                      <FiChevronUp className="w-6 h-6" />
                    ) : (
                      <FiChevronDown className="w-6 h-6" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Panel with Answers */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              {faqs.map((faq, index) => (
                <div key={index} className={`mb-4 ${openIndex === index ? 'block' : 'hidden'}`}>
                  <h3 className="text-xl font-semibold mb-2 text-[#372800]">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
