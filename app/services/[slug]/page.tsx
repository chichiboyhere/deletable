//app/services/[slug]/page.tsx

import { servicePages } from "@/data/servicePage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import ServicePageClient from "@/components/servicesPageSections/ServicePageClient";
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const page = servicePages.find((item) => item.slug === slug);

  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      title: page.title,
      description: page.description,
      images: [page.image],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const page = servicePages.find((item) => item.slug === slug);

  if (!page) return notFound();

  return <ServicePageClient page={page} />;
}
