//services/page.tsx
import { Metadata } from "next";
import HeroSection from "@/components/servicesPageSections/ServicesHero";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import getIcon from "@/components/ui/IconOnServicesPage";
import { servicePages } from "@/data/servicePage";

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
  const servicesJsonLd = servicePages.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
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
    serviceType: service.slug,
    url: `https://dcommandosecurity.com/services/${service.slug}`,
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

          {/* <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicePages.map((service) => (
                <a
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="block p-1 rounded-2xl bg-gradient-to-br from-gray-100 to-white dark:from-gray-700 dark:to-gray-800 hover:from-blue-100 hover:to-blue-50 transition-all shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 bg-blue-900 rounded-lg mb-4 flex items-center justify-center text-white font-bold">
                     
                      {service.h1.charAt(0)}
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 italic">
                      {service.h1}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {service.description.substring(0, 80)}...
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto mt-16 ">
            {servicePages.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 flex flex-col justify-between"
              >
                <div>
                  {/* <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex flex-shrink-0 items-center justify-center rounded-full bg-blue-900 text-white dark:bg-transparent">
                      {getIcon(service.slug)}
                    </div>

                    <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 group-hover:text-blue-600 transition-colors">
                      {service.h1}
                    </h3>
                  </div> */}
                  <div className="flex items-start gap-4">
                    {" "}
                    {/* Changed to items-start */}
                    <div className="w-12 h-12 flex flex-shrink-0 items-center justify-center rounded-full bg-blue-900 text-white dark:bg-gray-800 border border-blue-800/20 shadow-inner">
                      {/* Added flex-shrink-0 and a subtle border for depth */}
                      {getIcon(service.slug)}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-300 group-hover:text-blue-600 transition-colors leading-tight">
                      {service.h1}
                    </h3>
                  </div>

                  <p className="mt-4 text-gray-600 dark:text-gray-300 line-clamp-3 text-sm">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center text-blue-900 dark:text-blue-400 font-bold text-sm">
                  Explore Service
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
