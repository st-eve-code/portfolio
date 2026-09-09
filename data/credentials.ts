export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
  /** Optional credential URL */
  href?: string;
};

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Fashion Design Fundamentals",
    issuer: "Central Saint Martins",
    year: "2023",
    image: "/images/about/certs/cert-1.jpg",
    href: "#",
  },
  {
    id: "cert-2",
    title: "Brand Identity & Strategy",
    issuer: "Coursera",
    year: "2023",
    image: "/images/about/certs/cert-2.jpg",
    href: "#",
  },
  {
    id: "cert-3",
    title: "Visual Merchandising",
    issuer: "Fashion Institute",
    year: "2022",
    image: "/images/about/certs/cert-3.jpg",
    href: "#",
  },
  {
    id: "cert-4",
    title: "Creative Direction",
    issuer: "Parsons School of Design",
    year: "2022",
    image: "/images/about/certs/cert-4.jpg",
    href: "#",
  },
  {
    id: "cert-5",
    title: "Digital Marketing for Fashion",
    issuer: "Google",
    year: "2021",
    image: "/images/about/certs/cert-5.jpg",
    href: "#",
  },
  {
    id: "cert-6",
    title: "Sustainable Fashion",
    issuer: "Copenhagen Business School",
    year: "2021",
    image: "/images/about/certs/cert-6.jpg",
    href: "#",
  },
];
