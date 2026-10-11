import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/service/ServicePage";
import { getService, services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/tjanster/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({ ...service.seo, path: `/tjanster/${service.slug}` });
}

export default async function Page({ params }: PageProps<"/tjanster/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
