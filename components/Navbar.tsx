"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100/80 bg-white/95 backdrop-blur-md transition-colors duration-200 dark:border-zinc-800/80 dark:bg-zinc-950/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:h-20 sm:px-10 lg:px-14">
        {/* Brand Logo & Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-zinc-950 transition-opacity hover:opacity-85 dark:text-zinc-50"
        >
          {/* MONDE Dual Geometric Chevron / Lightning Symbol */}
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8.76 2h1.77L7.59 9.33l3.23 1.67L7 22H5.24L2 12l3.53-6Z M15.24 22h-1.77l2.94-7.33-3.23-1.67L17 2h1.76L22 12l-3.53 6Z" />
          </svg>
          <span className="text-xl font-black uppercase tracking-tight sm:text-2xl">
            {siteConfig.name}
          </span>
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden items-center gap-9 md:flex lg:gap-11">
          {siteConfig.navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-[13px] tracking-wide transition-colors duration-200",
                  active
                    ? "font-semibold text-zinc-950 dark:text-zinc-50"
                    : "font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Search, Bag, Account, Theme, Mobile Toggle */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Search Box / Toggle */}
          <div className="relative flex items-center">
            {isSearchOpen ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Search collections..."
                  autoFocus
                  className="w-36 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900 sm:w-48 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  aria-label="Close search"
                  className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
                className="p-1 text-zinc-700 transition-colors duration-200 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-1 text-zinc-700 transition-colors duration-200 hover:text-zinc-950 md:hidden dark:text-zinc-300 dark:hover:text-zinc-50"
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="border-t border-zinc-100 bg-white px-6 py-6 md:hidden dark:border-zinc-800 dark:bg-zinc-950">
          <nav className="flex flex-col space-y-4">
            {siteConfig.navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-base font-medium transition-colors duration-200",
                    active
                      ? "font-semibold text-zinc-950 dark:text-zinc-50"
                      : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}