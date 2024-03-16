import IphoneMockup from "@/public/images/iphone-mockup.png";
import Image from "next/image";

import { guide } from "../components/data";

function Process() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display mb-4" data-aos="fade-down">
              {guide.title}
            </h2>
            <p
              className="text-xl text-gray-600 dark:text-gray-400"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              {guide.description}
            </p>
          </div>

          {/* Glow illustration */}
          <svg
            className="absolute left-1/2 transform -translate-x-1/2 mt-20 lg:mt-40 pointer-events-none -z-1 dark:opacity-20 hidden md:block"
            aria-hidden="true"
            width="854"
            height="509"
            viewBox="0 0 854 509"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient
                cx="50%"
                cy="50%"
                fx="50%"
                fy="50%"
                r="39.386%"
                id="iphonesill__a"
              >
                <stop stopColor="#667EEA" offset="0%" />
                <stop stopColor="#667EEA" stopOpacity="0" offset="100%" />
              </radialGradient>
              <radialGradient
                cx="50%"
                cy="50%"
                fx="50%"
                fy="50%"
                r="39.386%"
                id="iphonesill__b"
              >
                <stop stopColor="#9F7AEA" offset="0%" />
                <stop stopColor="#9F7AEA" stopOpacity="0" offset="100%" />
              </radialGradient>
            </defs>
            <g transform="translate(-64 -64)" fill="none" fillRule="evenodd">
              <circle
                fillOpacity=".64"
                fill="url(#iphonesill__a)"
                cx="300"
                cy="300"
                r="300"
              />
              <circle
                fillOpacity=".72"
                fill="url(#iphonesill__b)"
                cx="729"
                cy="384"
                r="240"
              />
            </g>
          </svg>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-12 md:gap-x-6 lg:gap-x-12 md:grid-cols-3 items-start md:max-w-none">
            {guide.steps.map((step, i) => (
              <div
                className="relative flex flex-col items-center"
                data-aos="fade-down"
                data-aos-delay={300 + i * 300}
              >
                {/* Line connecting (1) and (2) */}
                {i < 2 && (
                  <div
                    aria-hidden="true"
                    className="absolute h-px opacity-50 bg-gradient-to-r from-white via-teal-400 to-white dark:from-gray-900 dark:via-teal-400 dark:to-gray-900 hidden md:block"
                    style={{
                      width: "calc(100% - 48px)",
                      left: "calc(50% + 48px)",
                      top: "24px",
                    }}
                  >
                    <div className="absolute inset-0 border-t border-dashed border-white dark:border-gray-900"></div>
                  </div>
                )}
                {/* Number */}
                <div className="w-12 h-12 rounded-full bg-teal-500 dark:bg-teal-600 dark:bg-opacity-25 flex justify-center items-center text-white dark:text-teal-400 font-medium mb-8 lg:mb-12">
                  {i + 1}
                </div>
                <h2 className="h4 text-center font-red-hat-display h-24">
                  {step.name}
                </h2>

                {/* Mobile mockup */}
                <div className="inline-flex relative justify-center items-center">
                  {/* Image inside mockup size: 290x624px (or 580x1248px for Retina devices) */}
                  <img
                    className="absolute"
                    src={step.imageUrl}
                    width="290"
                    height="624"
                    style={{ maxWidth: "84.33%" }}
                    alt="App screen 02"
                  />
                  {/* iPhone mockup */}
                  <Image
                    className="relative max-w-full mx-auto h-auto pointer-events-none"
                    src={IphoneMockup}
                    width="344"
                    height="674"
                    alt="iPhone mockup"
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
