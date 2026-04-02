import Link from "next/link";
import { cn } from "@/lib/utils";

const SERVICES = [
  "Diagnostics & Repair",
  "Scheduled Maintenance",
  "Engine & Transmission",
  "Brake Services",
  "Extended Warranty Work",
  "Pre-Purchase Inspection",
];

const BRANDS = [
  "Land Rover",
  "Jaguar",
  "Ferrari",
  "Lamborghini",
  "Maserati",
  "Bentley",
  "Aston Martin",
  "Porsche",
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-5 text-[11px] uppercase tracking-widest font-semibold text-[#C4963A]">
      {children}
    </h3>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="text-[14px] leading-relaxed text-[#888888] hover:text-[#C4963A] transition-colors duration-200"
      >
        {children}
      </a>
    </li>
  );
}

function SocialIcon({ letter, href }: { letter: string; href: string }) {
  return (
    <a
      href={href}
      aria-label={letter}
      className={cn(
        "flex items-center justify-center w-8 h-8 rounded-full",
        "border border-white/[0.15] text-[#888888]",
        "hover:border-[#C4963A] hover:text-[#C4963A] transition-colors duration-200"
      )}
    >
      <span className="text-[13px] font-semibold">{letter}</span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-[#0D0D0D] border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1280px] px-8 pt-16 pb-8">
        {/* Top 4-column grid */}
        <div
          className={cn(
            "grid grid-cols-1 gap-12",
            "sm:grid-cols-2",
            "lg:grid-cols-4"
          )}
        >
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-start select-none w-fit">
              <span className="font-bold uppercase tracking-widest text-white font-[family-name:var(--font-heading)] text-[22px]">
                STEWART&apos;S
              </span>
              <span className="block h-px w-full my-[2px] bg-[#C4963A]" />
              <span className="uppercase tracking-[0.3em] text-[10px] font-medium text-[#C4963A]">
                AUTOMOTIVE
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-[14px] leading-relaxed text-[#888888]">
              Dealership precision. Boutique experience.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              <SocialIcon letter="f" href="https://facebook.com" />
              <SocialIcon letter="in" href="https://instagram.com" />
              <SocialIcon letter="G" href="https://google.com" />
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <FooterHeading>Services</FooterHeading>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((service) => (
                <FooterLink key={service} href="#services">
                  {service}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Column 3: Brands */}
          <div>
            <FooterHeading>Brands We Service</FooterHeading>
            <ul className="flex flex-col gap-3">
              {BRANDS.map((brand) => (
                <FooterLink key={brand} href="#brands">
                  {brand}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <FooterHeading>Contact Us</FooterHeading>
            <div className="flex flex-col gap-4 text-[14px] text-[#888888]">
              <address className="not-italic leading-relaxed">
                1876 Stockton Blvd
                <br />
                Sacramento, CA 95816
              </address>
              <a
                href="tel:9167317023"
                className="text-[#888888] hover:text-[#C4963A] transition-colors duration-200"
              >
                (916) 731-7023
              </a>
              <p className="leading-relaxed">
                Mon–Fri: 8:00 AM – 5:00 PM
                <br />
                Sat–Sun: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6 border-t border-white/[0.06]">
          <p className="text-[13px] text-[#555555]">
            © 2024 Stewart&apos;s Automotive. All rights reserved.
          </p>
          <p className="text-[13px] text-[#555555]">
            <a
              href="/privacy"
              className="transition-colors duration-200 hover:text-white"
            >
              Privacy Policy
            </a>
            {" · "}
            <a
              href="/terms"
              className="transition-colors duration-200 hover:text-white"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
