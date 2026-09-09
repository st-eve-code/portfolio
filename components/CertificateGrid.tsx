"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Certificate } from "@/data/credentials";

type Props = {
  certificates: Certificate[];
  initialCount?: number;
};

export default function CertificateGrid({ certificates, initialCount = 6 }: Props) {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? certificates : certificates.slice(0, initialCount);
  const hasMore = certificates.length > initialCount;

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {visible.map((cert) => (
          <div
            key={cert.id}
            className="group relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900"
          >
            {/* Certificate image */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 260px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 via-black/30 to-transparent p-4">
              <p className="text-xs font-bold leading-snug text-white">
                {cert.title}
              </p>
              <p className="mt-0.5 text-[10px] text-white/60">
                {cert.issuer} · {cert.year}
              </p>
              {cert.href && (
                <Link
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-white/70 transition-colors hover:text-white"
                >
                  View
                  <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Show more / less button — only renders if there are more than initialCount */}
      {hasMore && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-5 flex items-center gap-2 text-sm font-semibold text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          <span>
            {expanded
              ? "Show less"
              : `Show ${certificates.length - initialCount} more`}
          </span>
          <svg
            className="h-4 w-4 transition-transform duration-300"
            style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
    </div>
  );
}
