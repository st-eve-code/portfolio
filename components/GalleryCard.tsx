import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

type Props = {
  item: GalleryItem;
  /** Visual position in the fan: "far-left" | "left" | "center" | "right" | "far-right" */
  position: "far-left" | "left" | "center" | "right" | "far-right";
};

const positionStyles: Record<Props["position"], {
  wrapper: string;
  card: string;
  rotate: string;
  height: string;
}> = {
  "far-left": {
    wrapper: "z-10 -mr-10 hidden lg:block",
    card: "opacity-70",
    rotate: "-rotate-6",
    height: "h-[320px] lg:h-[360px]",
  },
  left: {
    wrapper: "z-20 -mr-6 hidden sm:block",
    card: "opacity-85",
    rotate: "-rotate-3",
    height: "h-[380px] lg:h-[420px]",
  },
  center: {
    wrapper: "z-30",
    card: "",
    rotate: "rotate-0",
    height: "h-[440px] sm:h-[480px] lg:h-[520px]",
  },
  right: {
    wrapper: "z-20 -ml-6 hidden sm:block",
    card: "opacity-85",
    rotate: "rotate-3",
    height: "h-[380px] lg:h-[420px]",
  },
  "far-right": {
    wrapper: "z-10 -ml-10 hidden lg:block",
    card: "opacity-70",
    rotate: "rotate-6",
    height: "h-[320px] lg:h-[360px]",
  },
};

export default function GalleryCard({ item, position }: Props) {
  const { wrapper, card, rotate, height } = positionStyles[position];

  return (
    <div className={cn("relative shrink-0", wrapper)}>
      <div
        className={cn(
          // Increased width: w-64 sm:w-72 lg:w-80
          "relative w-64 sm:w-72 lg:w-80 overflow-hidden rounded-3xl shadow-2xl",
          // Commented out: bg color from item.bg — uncomment to restore colored card backgrounds
          // item.bg,
          rotate,
          height,
          card,
          "transition-transform duration-300 hover:scale-[1.03] hover:rotate-0"
        )}
      >
        {/* Arrow button (top-right) — removed as requested */}
        {/* <Link
          href={item.href ?? "/portfolio"}
          className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
          aria-label={`View ${item.name}`}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </Link> */}

        {/* "View More" pill (top-left, center card only) — removed as requested */}
        {/* {isCenter && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full bg-white px-3 py-1">
            <span className="text-[11px] font-semibold text-zinc-900">View More</span>
            <svg className="h-3 w-3 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        )} */}

        {/* Model image — fills the full card */}
        <div className="absolute inset-0">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
            className="object-cover object-top"
          />
        </div>

        {/* Bottom overlay: name + subtitle */}
        <div className="absolute bottom-0 inset-x-0 z-10 px-4 pb-5 pt-16 bg-linear-to-t from-black/70 to-transparent">
          <p className="text-base font-bold text-white leading-tight">
            {item.name}
          </p>
          <p className="text-[11px] text-white/60 mt-0.5">{item.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
