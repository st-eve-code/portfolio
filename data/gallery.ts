export type GalleryItem = {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  /** Tailwind background color class for the card */
  bg: string;
  href?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "look-1",
    name: "Street Edge",
    subtitle: "Urban Collection",
    image: "/images/gallery/car1.jpg",
    bg: "bg-violet-900",
    href: "/portfolio",
  },
  {
    id: "look-2",
    name: "Soft Tones",
    subtitle: "Minimal Series",
    image: "/images/gallery/car2.jpg",
    bg: "bg-rose-800",
    href: "/portfolio",
  },
  {
    id: "look-3",
    name: "Bold Move",
    subtitle: "Statement Pieces",
    image: "/images/gallery/car3.jpg",
    bg: "bg-teal-800",
    href: "/portfolio",
  },
  {
    id: "look-4",
    name: "Dark Elite",
    subtitle: "Premium Line",
    image: "/images/gallery/car4.jpg",
    bg: "bg-amber-800",
    href: "/portfolio",
  },
  {
    id: "look-5",
    name: "Night Shift",
    subtitle: "Evening Wear",
    image: "/images/gallery/car5.jpg",
    bg: "bg-blue-900",
    href: "/portfolio",
  },
  {
    id: "look-6",
    name: "Raw Energy",
    subtitle: "Sport Series",
    image: "/images/gallery/car6.jpg",
    bg: "bg-green-900",
    href: "/portfolio",
  },
  {
    id: "look-7",
    name: "Pure Form",
    subtitle: "Essentials",
    image: "/images/gallery/car7.jpg",
    bg: "bg-zinc-800",
    href: "/portfolio",
  },
];
