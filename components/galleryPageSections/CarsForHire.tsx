"use client";

import Image from "next/image";
import { Phone, CalendarClock, X } from "lucide-react";
import { useState } from "react";
import { carsForHireData } from "@/data/carsForHireData";
import Link from "next/link";

const galleryVids = [
  {
    video: "luxuryMaybach.mp4",
    desc: "Ultra luxurious Maybach Bus, going for 1,000,000 per day.",
  },
  {
    video: "toyotaLandcruiserPrado.mp4",
    desc: "Toyota Land Cruiser Prado 2023, going for 300,000 per day.",
  },
];
const CarsForHire = () => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="text-blue-900 dark:text-white my-12 " id="carsForHire">
      <h1 className="text-4xl font-bold mb-8 text-center">Cars For Hire</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {carsForHireData.map((galleryCars, index) => (
          <div
            key={index}
            className="transition-transform duration-300 hover:scale-105"
          >
            {/* IMAGE CONTAINER */}
            <div className="relative group aspect-[4/3] w-full bg-white rounded-xl overflow-hidden shadow border border-blue-100 cursor-pointer">
              {/* IMAGE */}

              <Image
                src={galleryCars.image}
                alt="Gallery Cars"
                fill
                onClick={() => setLightboxImg(galleryCars.image)}
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />

              {/* HOVER ACTIONS */}
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-8">
                  <Link
                    href="/services"
                    className="flex flex-col items-center group/icon"
                  >
                    <CalendarClock
                      size={30}
                      className="text-white group-hover/icon:animate-bounce"
                    />
                    <span className="text-xs text-white mt-1">Book Now</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex flex-col items-center group/icon"
                  >
                    <Phone
                      size={30}
                      className="text-white group-hover/icon:animate-bounce"
                    />
                    <span className="text-xs text-white mt-1">Contact us</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            {galleryCars.desc && (
              <p className="text-gray-700 italic text-sm my-4 dark:text-[#ffffffcf]">
                {galleryCars.desc}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxImg && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="relative w-full max-w-4xl aspect-video">
            <Image
              src={lightboxImg}
              alt="Enlarged"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-red-100"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryVids.map((vid, index) => (
          <div
            key={vid.video}
            onClick={() => setActiveVideo(`/videos/${vid.video}`)}
            className="cursor-pointer group"
          >
            <video
              muted
              playsInline
              preload="metadata"
              className="w-full h-auto rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
              poster={`/videos/thumb${index + 6}.jpg`}
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            >
              <source src={`/videos/${vid.video}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-gray-700 italic text-sm my-4 dark:text-[#ffffffcf]">
              {galleryVids[index].desc}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-11/12 md:w-3/4 lg:w-1/2"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold z-10 hover:scale-110 transition"
              onClick={() => setActiveVideo(null)}
            >
              &times;
            </button>
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CarsForHire;
