// //services/page.tsx
// import { Metadata } from "next";
// import HeroSection from "@/components/servicesPageSections/ServicesHero";
// import JsonLd from "@/components/JsonLd";
// import Link from "next/link";
// import getIcon from "@/components/ui/IconOnServicesPage";
// import { servicePages } from "@/data/servicePage";

// export const metadata: Metadata = {
//   title: "Dcommando Security - Services",
//   description: "We are the leading company for security services.",
//   keywords: [
//     "crowd control services",
//     "event bouncers",
//     "bodyguards",
//     "ushering services",
//     "security guard services",
//     "car rental and airport pick-up",
//     "security vendor sourcing",
//     "escort and convoy services",
//     "cyber security",
//     "surveillance services",
//   ],
// };
// export default function ServicesSection() {
//   const servicesJsonLd = servicePages.map((service) => ({
//     "@context": "https://schema.org",
//     "@type": "Service",
//     name: service.title,
//     description: service.description,
//     provider: {
//       "@type": "Organization",
//       name: "Dcommando Security",
//       url: "https://dcommandosecurity.com",
//       logo: {
//         "@type": "ImageObject",
//         url: "https://dcommandosecurity.com/logo.png",
//       },
//     },
//     areaServed: {
//       "@type": "Country",
//       name: "Nigeria",
//     },
//     serviceType: service.slug,
//     url: `https://dcommandosecurity.com/services/${service.slug}`,
//   }));

//   return (
//     <>
//       <JsonLd data={servicesJsonLd} />
//       <div className=" py-10 space-y-20 dark:text-[#ffffffcf] bg-white dark:bg-gray-800">
//         <HeroSection />
//         {/* <Services /> */}

//         <div className=" p-4 z-20 items-center justify-center">
//           <h2
//             className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white text-center"
//             data-aos="fade-right"
//             data-aos-delay="400"
//           >
//             We Provide
//           </h2>

//           {/* <div className="max-w-7xl mx-auto px-4 py-12">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {servicePages.map((service) => (
//                 <a
//                   key={service.slug}
//                   href={`/services/${service.slug}`}
//                   className="block p-1 rounded-2xl bg-gradient-to-br from-gray-100 to-white dark:from-gray-700 dark:to-gray-800 hover:from-blue-100 hover:to-blue-50 transition-all shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
//                 >
//                   <div className="p-6">
//                     <div className="w-12 h-12 bg-blue-900 rounded-lg mb-4 flex items-center justify-center text-white font-bold">

//                       {service.h1.charAt(0)}
//                     </div>
//                     <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 italic">
//                       {service.h1}
//                     </h2>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">
//                       {service.description.substring(0, 80)}...
//                     </p>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div> */}

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto mt-16 ">
//             {servicePages.map((service) => (
//               <Link
//                 key={service.slug}
//                 href={`/services/${service.slug}`}
//                 className="group relative bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 flex flex-col justify-between"
//               >
//                 <div>
//                   {/* <div className="flex items-center gap-4">
//                     <div className="w-12 h-12 flex flex-shrink-0 items-center justify-center rounded-full bg-blue-900 text-white dark:bg-transparent">
//                       {getIcon(service.slug)}
//                     </div>

//                     <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 group-hover:text-blue-600 transition-colors">
//                       {service.h1}
//                     </h3>
//                   </div> */}
//                   <div className="flex items-start gap-4">
//                     {" "}
//                     {/* Changed to items-start */}
//                     <div className="w-12 h-12 flex flex-shrink-0 items-center justify-center rounded-full bg-blue-900 text-white dark:bg-gray-800 border border-blue-800/20 shadow-inner">
//                       {/* Added flex-shrink-0 and a subtle border for depth */}
//                       {getIcon(service.slug)}
//                     </div>
//                     <h3 className="text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-300 group-hover:text-blue-600 transition-colors leading-tight">
//                       {service.h1}
//                     </h3>
//                   </div>

//                   <p className="mt-4 text-gray-600 dark:text-gray-300 line-clamp-3 text-sm">
//                     {service.description}
//                   </p>
//                 </div>

//                 <div className="mt-6 flex items-center text-blue-900 dark:text-blue-400 font-bold text-sm">
//                   Explore Service
//                   <span className="ml-2 group-hover:translate-x-2 transition-transform">
//                     →
//                   </span>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Users,
  UserCheck,
  Camera,
  Shield,
  Plane,
  Car,
  Sparkles,
  Tag,
  X,
  CheckCircle,
  Send,
} from "lucide-react";

interface BookingFormState {
  name: string;
  personnel_count: string;
  service_date: string;
  venue: string;
  preferred_contact: string;
  notes: string;
}

export default function EndOfYearServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [formData, setFormData] = useState<BookingFormState>({
    name: "",
    personnel_count: "1",
    service_date: "",
    venue: "",
    preferred_contact: "WhatsApp Message",
    notes: "",
  });

  const promoServices = [
    {
      id: "event-bouncers-ushers",
      title: "Event Bouncers & Ushers",
      tagline: "Festive Crowd Control & VIP Hospitality",
      desc: "Professional crowd management, VIP access control, guest ushering, and conflict prevention.",
      icon: Users,
      badge: "Popular for Events",
      discount: "15% Off",
    },
    {
      id: "body-guards",
      title: "Body Guards",
      tagline: "VIP Close Protection Services",
      desc: "Dedicated tactical and discreet close-protection officers for executives and VIPs.",
      icon: UserCheck,
      badge: "High Security",
      discount: "20% Off",
    },
    {
      id: "cctv-installation",
      title: "CCTV Camera Installation",
      tagline: "Smart Surveillance & Perimeter Protection",
      desc: "High-definition night-vision CCTV installation and remote mobile monitoring setup.",
      icon: Camera,
      badge: "Tech & Hardware",
      discount: "Special Bundle",
    },
    {
      id: "security-guards",
      title: "Security Guards",
      tagline: "Residential & Corporate Patrols",
      desc: "Unmatched 24/7 static and mobile uniformed guards for estate and corporate protection.",
      icon: Shield,
      badge: "Core Service",
      discount: "Holiday Rate",
    },
    {
      id: "airport-pickup",
      title: "Airport Pickup",
      tagline: "Armed Guard Escort & Arrival Reception",
      desc: "Safe, punctual, and secure airport reception and armed escort service for visiting VIPs.",
      icon: Plane,
      badge: "Executive",
      discount: "Fast Track",
    },
    {
      id: "car-rentals",
      title: "Car Rentals",
      tagline: "Bulletproof SUVs & Luxury Escort Fleets",
      desc: "Chauffeur-driven luxury SUVs, armored vehicles, and escort convoy rentals.",
      icon: Car,
      badge: "Fleet Options",
      discount: "Exclusive Rate",
    },
  ];

  const handleOpenBooking = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
    setSubmissionStatus("idle");
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus("submitting");

    const form = e.currentTarget;
    const payload = new FormData(form);

    if (selectedService) {
      payload.set("selected_service", selectedService);
    }

    try {
      const endpoint = form.action || "https://formspree.io/f/xnnzknqp";

      const response = await fetch(endpoint, {
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setFormData({
          name: "",
          personnel_count: "1",
          service_date: "",
          venue: "",
          preferred_contact: "WhatsApp Message",
          notes: "",
        });
      } else {
        setSubmissionStatus("error");
      }
    } catch {
      setSubmissionStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 py-12 mt-8 sm:mt-8 md:mt-12 lg:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-900 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200 dark:border-blue-800">
            <Tag className="w-3.5 h-3.5 text-amber-500" /> dcommandosecurity.com
            End-of-Year Specials
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-blue-900 dark:text-white tracking-tight leading-tight">
            End-of-Year Security & VIP Mobility Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Ensure complete safety, seamless event hosting, and luxury
            transportation for the holiday season. Select a service below to
            request an instant promo quote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promoServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700/80 p-7 shadow-sm hover:shadow-xl hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      {service.badge}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-500" />{" "}
                      {service.discount}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3.5 rounded-2xl bg-blue-900 text-white dark:bg-blue-600 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 dark:text-white leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <button
                  onClick={() => handleOpenBooking(service.title)}
                  className="w-full py-3.5 px-4 rounded-xl bg-blue-900 dark:bg-blue-600 text-white font-bold text-sm hover:bg-blue-950 dark:hover:bg-blue-700 shadow-md transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                >
                  <span>Book This Service</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn mt-40 sm:mt-40 md:mt-30 lg:mt-40">
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 max-w-xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between sticky top-0 bg-white dark:bg-slate-800 z-10 ">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Holiday Promo Booking
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-blue-900 dark:text-white">
                  {selectedService}
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {submissionStatus === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-emerald-950 dark:text-emerald-300">
                    Booking Request Sent!
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
                    Management has received your booking request for{" "}
                    <strong>{selectedService}</strong> and will reach out via
                    your preferred contact channel shortly.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-6 px-6 py-3 bg-blue-900 text-white font-bold rounded-xl text-sm"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form
                  action="https://formspree.io/f/xnnzknqp"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Your Full Name / Organization *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Chief Adebayo / Zenith Events"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white text-sm outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="personnel_count"
                        className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2"
                      >
                        Number of Personnel Required *
                      </label>
                      <input
                        type="number"
                        id="personnel_count"
                        name="personnel_count"
                        min="1"
                        required
                        value={formData.personnel_count}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white text-sm outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service_date"
                        className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2"
                      >
                        Date Needed *
                      </label>
                      <input
                        type="date"
                        id="service_date"
                        name="service_date"
                        required
                        value={formData.service_date}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white text-sm outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="venue"
                      className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Venue / Location *
                    </label>
                    <input
                      type="text"
                      id="venue"
                      name="venue"
                      required
                      value={formData.venue}
                      onChange={handleInputChange}
                      placeholder="Eko Hotel, Victoria Island, Lagos"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="preferred_contact"
                      className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Preferred Contact Method *
                    </label>
                    <select
                      id="preferred_contact"
                      name="preferred_contact"
                      value={formData.preferred_contact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white text-sm outline-none"
                    >
                      <option value="Phone Call">Phone Call</option>
                      <option value="WhatsApp Message">WhatsApp Message</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="notes"
                      className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Additional Notes / Contact Number or Email
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Include your phone number/email address and any specific security requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white text-sm outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submissionStatus === "submitting"}
                    className="w-full py-4 bg-blue-900 dark:bg-blue-600 hover:bg-blue-950 text-white font-bold rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                  >
                    {submissionStatus === "submitting" ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>Submit Booking Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
