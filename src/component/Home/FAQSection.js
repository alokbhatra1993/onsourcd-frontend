import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const faqs = [
  { question: "What is OnSourcd?", answer: "OnSourcd is a platform designed to facilitate the trading and utilization of waste." },
  { question: "How does OnSourcd work?", answer: "OnSourcd connects sellers and buyers of waste, enabling efficient and sustainable waste management." },
  { question: "Who can benefit from using OnSourcd?", answer: "Farmers, traders, aggregators, and industries involved in waste management can benefit from OnSourcd." },
  { question: "What types of waste can be listed on OnSourcd?", answer: "Various types of waste including crop residues, industrial waste, and other by-products can be listed." },
  { question: "How do I register on OnSourcd?", answer: "You can register on OnSourcd by clicking on the 'Register Now' button." },
  { question: "Is there a fee to use OnSourcd?", answer: "OnSourcd provides its services without any subscription or product listing charges. Reach out to us for more information." },
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
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => handleAccordionClick(index)}
                    className={`flex justify-between items-center w-full py-4 px-6 text-left text-lg font-semibold focus:outline-none transition-all duration-300 ${openIndex === index ? 'bg-[#F6B60D] text-white' : 'bg-white text-[#372800] hover:bg-white'}`}
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
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              {openIndex === null ? (
                <div className="text-center text-gray-700">
                  <h3 className="text-2xl font-semibold mb-4">Welcome to the FAQ Section</h3>
                  <p className="text-lg">
                    Select a question from the left to see the answer here. We are here to help you understand how ONSOURCD works and how it can benefit you.
                  </p>
                </div>
              ) : (
                <div className="transition-opacity duration-300 ease-in-out opacity-100 block">
                  <h3 className="text-xl font-semibold mb-2 text-[#372800]">{faqs[openIndex].question}</h3>
                  <p className="text-gray-600">{faqs[openIndex].answer}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
