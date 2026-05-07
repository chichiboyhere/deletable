//compoenents/servicesPageSections/ServicesHero.tsx
"use client";

import Image from "next/image";
import servicesHero from "@/public/images/services/servicesHero.jpg";
import { services } from "@/data/servicesData";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden h-[100vh] flex items-center justify-center dark:text-[#ffffffcf] bg-white dark:bg-gray-800">
      <div className="w-full h-full z-10 relative flex items-center justify-center">
        <Image
          src={servicesHero}
          alt="about us"
          fill
          className="object-cover md:object-top brightness-50"
        />

        <div className=" p-4 z-20 items-center justify-center">
          <h2
            className="text-5xl md:text-6xl font-bold text-white text-center"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Our Services
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
