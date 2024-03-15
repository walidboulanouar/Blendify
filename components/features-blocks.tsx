import {
  IoIosCreate,
  IoIosImages,
  IoIosRocket,
  IoIosShareAlt,
} from "react-icons/io";
export default function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-red-hat-display">
              Put imagination at the center of your experience
            </h2>
          </div>

          {/* Items */}
          <div
            className="max-w-xs mx-auto sm:max-w-none md:max-w-xl lg:max-w-none grid sm:grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-4"
            data-aos-id-featbl
          >
            {/* 1st item */}
            <a
              className="flex flex-col p-5 group text-white bg-gradient-to-tr from-teal-500 to-teal-400 dark:to-teal-500 shadow-2xl"
              href="https://blendify-ai.streamlit.app/"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-featbl]"
            >
              <IoIosRocket className="w-8 h-8 mb-3" />
              <div className="font-red-hat-display text-xl font-black tracking-tighter mb-1">
                Instant Visualization
              </div>
              <div className="grow opacity-80 mb-4">
                See your future self achieving goals or relaxing in your dream
                destination. A picture is worth a thousand words, and now you
                can create yours instantly.
              </div>
              <svg
                className="w-6 h-6 self-end transform -translate-x-2 group-hover:translate-x-0 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current"
                  d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z"
                />
              </svg>
            </a>

            {/* 2nd item */}
            <a
              className="flex flex-col p-5 group text-white bg-gradient-to-tr from-purple-500 to-purple-400 dark:to-purple-500 shadow-2xl"
              href="https://blendify-ai.streamlit.app/"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-featbl]"
              data-aos-delay="100"
            >
              <IoIosShareAlt className="w-8 h-8 mb-3" />
              <div className="font-red-hat-display text-xl font-black tracking-tighter mb-1">
                Effortless Sharing
              </div>
              <div className="grow opacity-80 mb-4">
                Share your AI-generated images directly to social media with our
                easy one-click options. Let your friends and followers see the
                'virtual you' exploring new worlds.
              </div>
              <svg
                className="w-6 h-6 self-end transform -translate-x-2 group-hover:translate-x-0 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current"
                  d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z"
                />
              </svg>
            </a>

            {/* 3rd item */}
            <a
              className="flex flex-col p-5 group text-white bg-gradient-to-tr from-indigo-500 to-indigo-400 dark:to-indigo-500 shadow-2xl"
              href="https://blendify-ai.streamlit.app/"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-featbl]"
              data-aos-delay="200"
            >
              <IoIosCreate className="w-8 h-8 mb-3" />
              <div className="font-red-hat-display text-xl font-black tracking-tighter mb-1">
                Creative Freedom
              </div>
              <div className="grow opacity-80 mb-4">
                Unleash your creativity with endless possibilities. Combine
                elements, styles, and locations to create images that truly
                represent you."
              </div>
              <svg
                className="w-6 h-6 self-end transform -translate-x-2 group-hover:translate-x-0 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current"
                  d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z"
                />
              </svg>
            </a>

            {/* 4th item */}
            <a
              className="flex flex-col p-5 group text-white bg-gradient-to-tr from-pink-500 to-pink-400 dark:to-pink-500 shadow-2xl"
              href="https://blendify-ai.streamlit.app/"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-featbl]"
              data-aos-delay="300"
            >
              <IoIosImages className="w-8 h-8 mb-3" />
              <div className="font-red-hat-display text-xl font-black tracking-tighter mb-1">
                Personalized Mementos
              </div>
              <div className="grow opacity-80 mb-4">
                Create stunning visuals for personalized gifts, profile
                pictures, or just for fun. Keep a collection of your AI-assisted
                journeys as unique as you are.
              </div>
              <svg
                className="w-6 h-6 self-end transform -translate-x-2 group-hover:translate-x-0 transition duration-150 ease-in-out"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current"
                  d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
