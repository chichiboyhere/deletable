//components/servicesPageSections/ServicePageClient.tsx
"use client";

import Image from "next/image";
import { useState, useRef } from "react";

import { Modal } from "@/components/ui/ModalWithRef";
import CarRentalFields from "@/components/CarRentalFields";

type ServicePageProps = {
  page: {
    slug: string;
    title: string;
    h1: string;
    image: string;
    content: string;
  };
};

export default function ServicePageClient({ page }: ServicePageProps) {
  const [selectedService, setSelectedService] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);

  const openForm = (id: string, serviceName: string) => {
    setSelectedService(serviceName);
    setSelectedServiceId(id);
    setIsModalOpen(true);

    document.body.style.overflow = "hidden";

    setTimeout(() => {
      modalRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const closeForm = () => {
    setSelectedService("");
    setSelectedServiceId("");
    setIsModalOpen(false);

    document.body.style.overflow = "auto";
  };

  return (
    <main className="bg-white dark:bg-gray-900  dark:text-[#ffffffcf] py-20">
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold text-blue-900 mb-6">{page.h1}</h1>

          <p className="text-lg leading-8 text-gray-700 whitespace-pre-line">
            {page.content}
          </p>

          <button
            onClick={() => openForm(page.slug, page.title)}
            className="items-center justify-center mt-6 text-sm text-white bg-blue-900 px-5 py-3 rounded hover:bg-blue-800 transition dark:bg-blue-400"
          >
            Book Now
          </button>
        </div>

        <div className="relative h-[450px] rounded-xl overflow-hidden">
          <Image src={page.image} alt={page.h1} fill className="object-cover" />
        </div>
      </section>

      {isModalOpen && (
        <Modal onClose={closeForm} ref={modalRef}>
          <div className="max-w-lg max-h-[90vh] p-6 rounded-xl shadow-lg overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-blue-900">
              Book {selectedService}
            </h2>

            <form
              action="https://formspree.io/f/xyzjvjgy"
              method="POST"
              className="space-y-4 mb-2"
            >
              <input type="hidden" name="service" value={selectedService} />

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>

                <input
                  name="name"
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>

                <input
                  name="phone"
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              {selectedServiceId === "car-rental-with-security-lagos" ? (
                <CarRentalFields />
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Number of Personnel
                    </label>

                    <input
                      name="quantity"
                      type="number"
                      min="1"
                      required
                      className="w-full border px-3 py-2 rounded"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date Needed
                    </label>

                    <input
                      name="date"
                      type="date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full border px-3 py-2 rounded"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Additional Info
                </label>

                <textarea
                  name="message"
                  rows={3}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
              >
                Submit Booking
              </button>
            </form>
          </div>
        </Modal>
      )}
    </main>
  );
}
