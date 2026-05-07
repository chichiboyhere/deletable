//services/page.tsx
import { Metadata } from "next";
import HeroSection from "@/components/servicesPageSections/ServicesHero";
import JsonLd from "@/components/JsonLd";
import { services } from "@/data/servicesData";
import Link from "next/link";
import { servicePages } from "@/data/servicePage";

// const servicesData =[
//   {
//     id: "bodyguard-services-lagos",
//     title: "Bodyguard Services Lagos",
//     href: "/services/bodyguard-services-lagos",
//   },
//   {
//     id: "vip-security-lagos",
//     title: "VIP security in Lagos",
//     href: "/services/vip-security-lagos",
//   },
//   {
//     id: "executive-protection-nigeria",
//     title: "Executive Protection Services in Nigeria",
//     href: "/services/executive-protection-nigeria",
//   },
//   {
//     id: "executive-protection-nigeria",
//     title: "Executive Protection Services in Nigeria",
//     href: "/services/executive-protection-nigeria",
//   },

// ]
export const metadata: Metadata = {
  title: "Dcommando Security - Services",
  description: "We are the leading company for security services.",
  keywords: [
    "crowd control services",
    "event bouncers",
    "bodyguards",
    "ushering services",
    "security guard services",
    "car rental and airport pick-up",
    "security vendor sourcing",
    "escort and convoy services",
    "cyber security",
    "surveillance services",
  ],
};
export default function ServicesSection() {
  const servicesJsonLd = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.desc,
    provider: {
      "@type": "Organization",
      name: "Dcommando Security",
      url: "https://dcommandosecurity.com",
      logo: {
        "@type": "ImageObject",
        url: "https://dcommandosecurity.com/logo.png",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    serviceType: service.icon,
    url: `https://dcommandosecurity.com/services#${service.id}`,
  }));

  return (
    <>
      <JsonLd data={servicesJsonLd} />
      <div className=" py-10 space-y-20 dark:text-[#ffffffcf] bg-white dark:bg-gray-800">
        <HeroSection />
        {/* <Services /> */}

        <div className=" p-4 z-20 items-center justify-center">
          <h2
            className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white text-center"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            We Provide
          </h2>

          <div
            className="rounded-3xl bg-white/60 mt-20"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            {servicePages.map((service, index) => (
              <a
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`block text-blue-900 text-xl font-semibold text-center p-2 md:p-2.5 transition duration-300 hover:text-blue-600 ${
                  index === services.length - 1
                    ? ""
                    : "border-b border-blue-300"
                }`}
              >
                {service.h1}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
