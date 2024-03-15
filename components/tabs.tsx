"use client";
import { useState } from "react";

import { FaCheck } from "react-icons/fa";
import { IoIosCopy } from "react-icons/io";
import { useCases } from "../components/data/index";
function createWhatsAppLink(description: any) {
  return `https://blendify-ai.streamlit.app/`;
}

const colors = {
  background: {
    main: "#F7F7F7", // light grey for main background
    categoryButton: "#5B5B5B", // muted color for category button background
    promptBackground: "#FFFFFF", // white for prompt card background
  },
  text: {
    primary: "#333333", // dark grey for primary text for readability
    secondary: "#4A90E2", // blue for secondary text to stand out without being too loud
  },
  cta: {
    buttonBackground: "#22C55E", // vibrant green for CTA buttons
    buttonText: "#FFFFFF", // white text for contrast on CTA buttons
  },
  icon: "#4A90E2", // blue for icons to stand out
};

function Tabs() {
  const [currentCategory, setCurrentCategory] = useState("1");
  const [copiedPrompt, setCopiedPrompt] = useState(null);
  const copyToClipboard = (text: any, index: any) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopiedPrompt(index); // Set the index of the copied prompt
        setTimeout(() => {
          setCopiedPrompt(null); // Reset the copied prompt after 2 seconds
        }, 2000);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };
  return (
    <section className="relative border-t border-transparent dark:border-gray-800">
      {/* Background gradient */}
      <div
        className="absolute inset-0 h-128 dark:opacity-25 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      {/* End background gradient */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-red-hat-display mb-4" data-aos="fade-down">
              {useCases.title}
            </h2>
            <p
              className="text-xl text-gray-600 dark:text-gray-400"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              {useCases.description}
            </p>
          </div>

          {/* Section content */}
          <div>
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-6">
              {/* Category buttons */}
              <div
                className="lg:col-span-1 lg:pr-16 flex flex-wrap justify-center lg:flex-col lg:justify-start -m-1 lg:mx-0"
                data-aos="fade-down"
                data-aos-delay={300}
              >
                {useCases.categories.map(({ title, icon: Icon }, i) => (
                  <button
                    className={`lg:w-full font-medium px-3 py-2 shadow transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0 ${
                      currentCategory === i + 1 + ""
                        ? "bg-teal-400 hover:bg-teal-500 dark:bg-teal-400 dark:hover:bg-teal-400 dark:bg-opacity-25 dark:hover:bg-opacity-25"
                        : "bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => setCurrentCategory(i + 1 + "")}
                  >
                    <Icon
                      className={`w-5 h-5 shrink-0 mr-2 ${
                        currentCategory === i + 1 + ""
                          ? "text-white dark:text-teal-400-light"
                          : "text-teal-400 dark:text-gray-400"
                      }`}
                    />
                    <span
                      className={
                        currentCategory === i + 1 + ""
                          ? "text-white dark:text-teal-400-light"
                          : "text-teal-400 dark:text-gray-400"
                      }
                    >
                      {title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Prompts Section */}
              <div className="lg:col-span-2 max-w-sm mx-auto md:max-w-3xl lg:max-w-none">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Prompts */}
                  {useCases.categories[
                    parseInt(currentCategory) - 1
                  ].prompts.map((prompt, i) => (
                    <div
                      key={i}
                      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mt-4 flex flex-col h-full"
                      data-aos="fade-up"
                      data-aos-delay={50 + i * 50}
                    >
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-teal-400 mb-2">
                          {prompt.headline}
                        </h3>
                        <h4 className="text-lg font-semibold mb-2">
                          {prompt.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-5">
                          {prompt.description}
                        </p>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <button
                          className="text-white bg-teal-400 hover:bg-teal-400-dark focus:ring-4 focus:ring-teal-400-light font-medium rounded-lg text-sm px-4 py-2.5 text-center"
                          type="button"
                          onClick={() =>
                            window.open(
                              createWhatsAppLink(prompt.description),
                              "_blank"
                            )
                          }
                        >
                          Ask Blendify
                        </button>
                        <button
                          className="text-teal-400 dark:text-teal-400-light flex items-center"
                          onClick={() => copyToClipboard(prompt.description, i)}
                        >
                          {copiedPrompt === i ? (
                            <FaCheck className="text-lg" />
                          ) : (
                            <IoIosCopy className="text-lg" />
                          )}
                          <span className="ml-2">
                            {copiedPrompt === i
                              ? "Copied!"
                              : "Copy to clipboard"}
                          </span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tabs;
