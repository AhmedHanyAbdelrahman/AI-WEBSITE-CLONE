"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Brands", href: "#brands" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-[400ms] ease-[ease]",
        scrolled
          ? [
              "bg-[rgba(10,10,10,0.97)]",
              "shadow-[0_1px_20px_rgba(0,0,0,0.6)]",
              "backdrop-blur-[12px]",
              "border-b border-white/[0.06]",
            ]
          : ["bg-transparent", "shadow-none", "border-b border-transparent"]
      )}
    >
      {/* Main bar */}
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-8">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start gap-0 select-none">
          <span className="font-bold uppercase tracking-widest text-white font-[family-name:var(--font-heading)] text-[22px]">
            STEWART&apos;S
          </span>
          <span className="block h-px w-full my-[2px] bg-[#C4963A]" />
          <span className="uppercase tracking-[0.3em] text-[10px] font-medium text-[#C4963A]">
            AUTOMOTIVE
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="uppercase text-[14px] tracking-[0.05em] transition-colors duration-200 text-[#888888] hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA + mobile hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className={cn(
              "hidden md:inline-block rounded-none px-[22px] py-[10px]",
              "text-[13px] uppercase tracking-widest font-medium",
              "border border-[#C4963A] text-[#C4963A]",
              "transition-all duration-300",
              "hover:bg-[#C4963A] hover:text-black"
            )}
          >
            Schedule Service
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px]"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span
              className={cn(
                "block h-px w-6 bg-white transition-transform duration-300 origin-center",
                mobileOpen && "translate-y-[8px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-white transition-opacity duration-300",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-white transition-transform duration-300 origin-center",
                mobileOpen && "-translate-y-[8px] -rotate-45"
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-[rgba(10,10,10,0.98)]",
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col px-8 pb-6 pt-2 gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={cn(
                  "block py-3 uppercase text-[14px] tracking-[0.05em]",
                  "border-b border-white/[0.06]",
                  "text-[#888888] hover:text-white transition-colors duration-200"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#contact"
              className={cn(
                "inline-block rounded-none px-[22px] py-[10px]",
                "text-[13px] uppercase tracking-widest font-medium",
                "border border-[#C4963A] text-[#C4963A]",
                "hover:bg-[#C4963A] hover:text-black transition-all duration-300"
              )}
              onClick={() => setMobileOpen(false)}
            >
              Schedule Service
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
