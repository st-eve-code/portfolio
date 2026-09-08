import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service",
  description: "Explore services and bespoke fashion styling by MONDE.",
};

export default function ServicePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
        Our Services
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        From custom tailoring to personal styling and bespoke capsule collections, MONDE crafts unforgettable fashion experiences.
      </p>
    </div>
  );
}
