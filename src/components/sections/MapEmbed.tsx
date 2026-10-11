"use client";

import { useState } from "react";
import { Map as MapIcon, MapPin } from "lucide-react";
import { business, fullAddress } from "@/content/business";

/** Google Maps is only loaded after the visitor asks for it, since Google may set cookies. */
export function MapEmbed({ className = "" }: { className?: string }) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={business.maps.embedUrl}
        title={`Karta till ${business.name}, ${fullAddress}`}
        className={`size-full border-0 ${className}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    );
  }

  return (
    <div
      className={`relative flex size-full flex-col justify-between overflow-hidden bg-graphite p-6 text-white sm:p-8 ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.05)_1px,transparent_1px)] bg-[size:48px_48px]"
      />
      <p className="type-label relative text-steel">
        {business.geo.latitude.toFixed(4)}° N · {business.geo.longitude.toFixed(4)}° E
      </p>
      <div className="relative flex items-center gap-3">
        <span className="flex size-12 items-center justify-center bg-signal text-carbon">
          <MapPin aria-hidden className="size-5" />
        </span>
        <span>
          <span className="block font-semibold">{business.address.street}</span>
          <span className="block text-sm text-white/60">
            {business.address.postalCode} {business.address.locality}
          </span>
        </span>
      </div>
      <div className="relative">
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="type-label inline-flex min-h-12 items-center gap-3 border border-white/25 px-5 transition-colors hover:border-white"
        >
          <MapIcon aria-hidden className="size-4 text-signal" />
          Visa karta
        </button>
        <p className="mt-3 max-w-sm text-sm text-white/55">Kartan hämtas från Google Maps, som kan sätta cookies.</p>
      </div>
    </div>
  );
}
