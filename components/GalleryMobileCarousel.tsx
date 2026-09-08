"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import type { GalleryItem } from "@/data/gallery";

type Props = {
  items: GalleryItem[];
  /** ms between auto-advances. Default 3000 */
  interval?: number;
};

export default function GalleryMobileCarousel({ items, interval = 3000 }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(id);
  }, [items.length, interval]);

  if (items.length === 0) return null;

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Card */}
      <div className="relative h-110 w-full max-w-xs overflow-hidden rounded-3xl shadow-2xl">
        {items.map((item, i) => (
          <div
            key={item.id}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 10 : 0 }}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="320px"
              className="object-cover object-top"
              priority={i === 0}
            />
            {/* Bottom overlay */}
            <div className="absolute inset-x-0 bottom-0 z-10 bg-linear-to-t from-black/70 to-transparent px-4 pb-5 pt-16">
              <p className="text-base font-bold leading-tight text-white">
                {item.name}
              </p>
              <p className="mt-0.5 text-[11px] text-white/60">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex items-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-1.5 rounded-full bg-zinc-600 transition-all duration-300"
            style={{ width: i === active ? "1.5rem" : "0.375rem", opacity: i === active ? 1 : 0.5 }}
          />
        ))}
      </div>
    </div>
  );
}
