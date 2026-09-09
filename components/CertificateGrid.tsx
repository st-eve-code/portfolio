"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Certificate } from "@/data/credentials";

// ── Replace this with your actual Google Drive / Cloud folder URL ──────────
const CERTIFICATES_CLOUD_URL = "https://drive.google.com/drive/folders/your-folder-id";

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
      {/* Certificate image cards — no overlay text */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {visible.map((cert) => (
          <div
            key={cert.id}
            className="group relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 260px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Show more / less */}
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

      {/* View all — links to Google Cloud/Drive */}
      <Link
        href={CERTIFICATES_CLOUD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-zinc-800 hover:scale-105 active:scale-95 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
        View All Certificates
      </Link>
    </div>
  );
}
