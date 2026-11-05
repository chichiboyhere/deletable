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

import React, { useState } from "react";
import {
  ShieldCheck,
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
  ArrowRight,
  MapPin,
  Send,
} from "lucide-react";

// ==========================================
// 2. END OF YEAR PROMO SERVICES PAGE & FORM
// ==========================================
export default function EndOfYearServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'

  // Form State
  const [formData, setFormData] = useState({
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
      desc: "Professional crowd management, VIP access control, guest ushering, and conflict prevention for holiday galas, concerts, and weddings.",
      icon: Users,
      badge: "Popular for Events",
      discount: "15% Off",
    },
    {
      id: "body-guards",
      title: "Body Guards",
      tagline: "VIP Close Protection Services",
      desc: "Dedicated tactical and discreet close-protection officers for executives, high-profile guests, and private individuals during holiday trips.",
      icon: UserCheck,
      badge: "High Security",
      discount: "20% Off",
    },
    {
      id: "cctv-installation",
      title: "CCTV Camera Installation",
      tagline: "Smart Surveillance & Perimeter Protection",
      desc: "High-definition night-vision CCTV installation, remote mobile monitoring setup, and security audit for homes, warehouses, and venues.",
      icon: Camera,
      badge: "Tech & Hardware",
      discount: "Special Bundle",
    },
    {
      id: "security-guards",
      title: "Security Guards",
      tagline: "Residential & Corporate Patrols",
      desc: "Unmatched 24/7 static and mobile uniformed guards for estate protection, corporate buildings, industrial grounds, and private residence.",
      icon: Shield,
      badge: "Core Service",
      discount: "Holiday Rate",
    },
    {
      id: "airport-pickup",
      title: "Airport Pickup",
      tagline: "Armed Guard Escort & Arrival Reception",
      desc: "Safe, punctual, and secure airport reception and armed escort service for visiting VIPs, family members, and executive travelers.",
      icon: Plane,
      badge: "Executive",
      discount: "Fast Track",
    },
    {
      id: "car-rentals",
      title: "Car Rentals",
      tagline: "Bulletproof SUVs & Luxury Escort Fleets",
      desc: "Chauffeur-driven luxury SUVs, armored vehicles, and escort convoy rentals tailored for holiday transportation and secure mobility.",
      icon: Car,
      badge: "Fleet Options",
      discount: "Exclusive Rate",
    },
  ];

  const handleOpenBooking = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
    setSubmissionStatus("idle");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus("submitting");

    const form = e.target;
    const payload = new FormData(form);

    // Explicitly add selected promo service to Formspree data
    if (selectedService) {
      payload.set("selected_service", selectedService);
    }

    try {
      // NOTE: Replace 'YOUR_FORMSPREE_ID' with your actual Formspree endpoint ID
      const endpoint = form.action || "https://formspree.io/f/xyzjvjgy";

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
    } catch (err) {
      setSubmissionStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 mt-12 sm:mt-12 md:mt-12 lg:mt-10">
      {/* Include the Marquee Banner at top */}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Page Header */}
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promoServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700/80 p-7 shadow-sm hover:shadow-xl hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Discount */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                      {service.badge}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-500" />{" "}
                      {service.discount}
                    </span>
                  </div>

                  {/* Service Icon & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3.5 rounded-2xl bg-blue-900 text-white dark:bg-blue-600 dark:text-white shadow-md shadow-blue-900/10 group-hover:scale-105 transition-transform duration-200">
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

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Booking Trigger Button */}
                <button
                  onClick={() => handleOpenBooking(service.title)}
                  className="w-full py-3.5 px-4 bg-slate-900 hover:bg-blue-900 dark:bg-blue-900 dark:hover:bg-blue-800 text-white font-bold rounded-xl shadow-md transition-colors duration-200 flex items-center justify-center gap-2 group/btn"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Informational Banner */}
        <div className="mt-16 bg-blue-900 dark:bg-slate-800 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-widest flex items-center justify-center md:justify-start gap-1.5 mb-2">
                <ShieldCheck className="w-4 h-4" /> Trusted Nationwide
                Protection
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Need a Customized Holiday Security Detail?
              </h2>
              <p className="mt-2 text-sm text-blue-100 dark:text-slate-300">
                Planning a large festival, escort travel across state lines, or
                residential lockdown over Christmas & New Year? Contact
                DCommando Security directly.
              </p>
            </div>
            <button
              onClick={() => handleOpenBooking("Custom Security Package")}
              className="px-6 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold rounded-xl shadow-lg transition-transform transform hover:scale-105 flex-shrink-0 text-sm"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>

      {/* ==========================================
          BOOKING MODAL & FORMSPREE INTEGRATION
         ========================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 ">
          <div
            className="relative bg-white dark:bg-slate-800 w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transform transition-all mt-100 sm:mt-100 md:mt-100 lg:mt-80"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-blue-900 dark:bg-slate-900 text-white px-6 py-5 flex items-center justify-between border-b border-blue-800 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-400 text-slate-950 rounded-lg font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    Service Booking Request
                  </h3>
                  <p className="text-xs text-blue-200 dark:text-slate-400">
                    Target Service:{" "}
                    <span className="font-semibold text-amber-300">
                      {selectedService}
                    </span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-blue-200 dark:text-slate-400 hover:text-white p-2 rounded-lg hover:bg-blue-800 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Body */}
            <div className="p-6 sm:p-8">
              {submissionStatus === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Booking Request Sent!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-md mx-auto">
                    Thank you! Our operations officer will reach out to you
                    shortly via your preferred contact method to confirm pricing
                    and availability.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-6 px-6 py-3 bg-blue-900 dark:bg-blue-600 text-white rounded-xl text-sm font-bold hover:opacity-90 transition"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form
                  action="https://formspree.io/f/xyzjvjgy"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Hidden field for selected service */}
                  <input
                    type="hidden"
                    name="service_name"
                    value={selectedService || ""}
                  />

                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Chief Adeleke Johnson"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm focus:ring-2 focus:ring-blue-900 dark:focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>

                  {/* Grid for Personnel Count and Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="personnel_count"
                        className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2"
                      >
                        Number of Personnel / Units *
                      </label>
                      <input
                        type="number"
                        id="personnel_count"
                        name="personnel_count"
                        min="1"
                        max="100"
                        required
                        value={formData.personnel_count}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm focus:ring-2 focus:ring-blue-900 dark:focus:ring-blue-500 focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service_date"
                        className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2"
                      >
                        Service / Event Date *
                      </label>
                      <input
                        type="date"
                        id="service_date"
                        name="service_date"
                        required
                        value={formData.service_date}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm focus:ring-2 focus:ring-blue-900 dark:focus:ring-blue-500 focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Venue / Location */}
                  <div>
                    <label
                      htmlFor="venue"
                      className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Venue / Pickup Location *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="venue"
                        name="venue"
                        required
                        value={formData.venue}
                        onChange={handleInputChange}
                        placeholder="e.g. Eko Hotel Convention Centre, Victoria Island, Lagos"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm focus:ring-2 focus:ring-blue-900 dark:focus:ring-blue-500 focus:border-transparent outline-none transition"
                      />
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label
                      htmlFor="preferred_contact"
                      className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2"
                    >
                      How would you like to be contacted? *
                    </label>
                    <select
                      id="preferred_contact"
                      name="preferred_contact"
                      required
                      value={formData.preferred_contact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm focus:ring-2 focus:ring-blue-900 dark:focus:ring-blue-500 focus:border-transparent outline-none transition"
                    >
                      <option value="Phone Call">Phone Call</option>
                      <option value="WhatsApp Message">WhatsApp Message</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label
                      htmlFor="notes"
                      className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2"
                    >
                      Special Instructions / Contact Phone or Email
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Provide your phone number, email address, or specific security details..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 text-sm focus:ring-2 focus:ring-blue-900 dark:focus:ring-blue-500 focus:border-transparent outline-none transition resize-y"
                    ></textarea>
                  </div>

                  {/* Error Notification */}
                  {submissionStatus === "error" && (
                    <p className="text-xs font-semibold text-rose-600 dark:text-rose-400 text-center">
                      Failed to send form. Please check your connection and try
                      again.
                    </p>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submissionStatus === "submitting"}
                      className="w-full py-4 bg-blue-900 hover:bg-blue-950 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {submissionStatus === "submitting" ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Booking Request</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Marquee Keyframe Animations (Add to Tailwind or globals.css if needed) */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes marquee2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
