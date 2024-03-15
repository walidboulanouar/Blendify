"use client";

import IphoneMockup from "@/public/images/iphone-mockup.png";
import PlayBtn from "@/public/images/play-button.svg";
import { Dialog, Transition } from "@headlessui/react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { Fragment, useRef, useState } from "react";

interface ModalVideoIphoneProps {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
}

export default function ModalVideoIphone({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoIphoneProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div>
      {/* Video thumbnail */}
      <div className="inline-flex relative justify-center items-center">
        {/* Glow illustration */}
        <svg
          className="absolute mr-12 mt-32 pointer-events-none -z-1 dark:opacity-40"
          aria-hidden="true"
          width="678"
          height="634"
          viewBox="0 0 678 634"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="240"
            cy="394"
            r="240"
            fill="url(#piphoneill_paint0_radial)"
            fillOpacity=".4"
          />
          <circle
            cx="438"
            cy="240"
            r="240"
            fill="url(#piphoneill_paint1_radial)"
            fillOpacity=".6"
          />
          <defs>
            <radialGradient
              id="piphoneill_paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(90 -77 317) scale(189.054)"
            >
              <stop stopColor="#667EEA" />
              <stop offset="1" stopColor="#667EEA" stopOpacity=".01" />
            </radialGradient>
            <radialGradient
              id="piphoneill_paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(90 99 339) scale(189.054)"
            >
              <stop stopColor="#9F7AEA" />
              <stop offset="1" stopColor="#9F7AEA" stopOpacity=".01" />
            </radialGradient>
          </defs>
        </svg>
        {/* Image inside mockup size: 290x624px (or 580x1248px for Retina devices) */}
        <Image
          className="absolute"
          src={thumb}
          width={thumbWidth}
          height={thumbHeight}
          alt={thumbAlt}
          style={{ maxWidth: "89.33%" }}
          priority
        />
        {/* iPhone mockup */}
        <Image
          className="relative max-w-full mx-auto md:mr-0 md:max-w-none h-auto pointer-events-none"
          src={IphoneMockup}
          width={344}
          height={674}
          priority
          alt="iPhone mockup"
          aria-hidden="true"
        />
        {/* Play button */}
        <a
          className="absolute group"
          href="#0"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          <Image src={PlayBtn} width="96" height="96" alt="Play" />
        </a>
      </div>
      {/* End: Video thumbnail */}

      {/* End: Video thumbnail */}

      <Transition
        show={modalOpen}
        as={Fragment}
        afterEnter={() => videoRef.current?.play()}
      >
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
          {/* Modal dialog */}
          <Transition.Child
            className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ttransition ease-out duration-200"
            leaveFrom="oopacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="flex items-center justify-center">
              <Dialog.Panel className="relative w-full max-w-xs sm:max-w-sm">
                {/* iPhone mockup */}
                <Image
                  src={IphoneMockup}
                  width={300}
                  height={674}
                  priority
                  alt="iPhone mockup"
                  aria-hidden="false"
                />
                {/* Video player */}
                <video
                  ref={videoRef}
                  width={500}
                  height={2000}
                  className="absolute  pb-10 pr-6  right-[1%] bottom-[4%] max-w-full mx-auto md:mr-0 md:max-w-none"
                  controls
                  style={{ maxWidth: "95%" }}
                  aria-hidden="true"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Dialog.Panel>
            </div>
          </Transition.Child>
          {/* End: Modal dialog */}
        </Dialog>
      </Transition>
    </div>
  );
}
