import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";
import TestimonialImage04 from "@/public/images/testimonial-04.jpg";
import Image from "next/image";

export default function TestimonialsBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">
          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:gap-12 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">
            {/* 1st testimonial */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image
                  className="rounded-full"
                  src={TestimonialImage01}
                  width={56}
                  height={56}
                  alt="Testimonial 01"
                />
                <svg
                  className="absolute top-0 right-0 mt-1 -mr-8"
                  width="27"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-current text-purple-500"
                    d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z"
                  />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                “ With Blendify AI, I've traveled the world without leaving my
                home! It's like having a personal teleportation device. Seeing
                myself in places I've always dreamed of has been both inspiring
                and fun. I can't recommend this app enough for anyone who loves
                to explore! “
              </blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">Adil Dahani</cite>,{" "}
                <a
                  className="text-teal-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Lih.ai
                </a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image
                  className="rounded-full"
                  src={TestimonialImage02}
                  width={56}
                  height={56}
                  alt="Testimonial 02"
                />
                <svg
                  className="absolute top-0 right-0 mt-1 -mr-8"
                  width="27"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-current text-purple-500"
                    d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z"
                  />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                “ Blendify AI is a game-changer for social media enthusiasts
                like me. I've been able to post unique images that stand out,
                all thanks to the app's incredible technology. It's
                user-friendly and so powerful - I've been to Paris, Bali, and
                even the Great Wall of China! “
              </blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">Sara Nouaity</cite>,{" "}
                <a
                  className="text-teal-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Kohortpay.com
                </a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image
                  className="rounded-full"
                  src={TestimonialImage03}
                  width={56}
                  height={56}
                  alt="Testimonial 03"
                />
                <svg
                  className="absolute top-0 right-0 mt-1 -mr-8"
                  width="27"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-current text-purple-500"
                    d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z"
                  />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                “ As a content creator, finding new ways to engage my audience
                is a constant challenge. Blendify AI has made that so much
                easier. The app's ability to put me in any location has opened
                up a world of creativity for my brand's storytelling. It's a
                must-have for creators! “
              </blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">Noual Taouil</cite>,{" "}
                <a
                  className="text-teal-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Content Creator
                </a>
              </div>
            </div>

            {/* 4th testimonial */}
            <div className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image
                  className="rounded-full"
                  src={TestimonialImage04}
                  width={56}
                  height={56}
                  alt="Testimonial 04"
                />
                <svg
                  className="absolute top-0 right-0 mt-1 -mr-8"
                  width="27"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-current text-purple-500"
                    d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z"
                  />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">
                “ I never thought I'd see myself hiking in the Andes or walking
                the streets of Tokyo, but Blendify AI made it happen with such
                lifelike images. It's not just an app; it's a window to where
                you want to be, and the possibilities are endless. “
              </blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">—Fadwa El mrabet</cite>,{" "}
                <a
                  className="text-teal-500 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Appicu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
