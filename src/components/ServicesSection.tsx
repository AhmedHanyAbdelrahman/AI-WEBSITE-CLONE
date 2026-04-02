"use client";

import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Inline SVG icons — stroke-based, 24×24 viewBox
// ---------------------------------------------------------------------------

function IconWrench() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C4963A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C4963A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconGear() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C4963A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C4963A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function IconDocument() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C4963A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <polyline points="9 15 11 17 15 13" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C4963A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Service data
// ---------------------------------------------------------------------------

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  body: string;
}

const SERVICES: ServiceCard[] = [
  {
    icon: <IconWrench />,
    title: "Diagnostics & Repair",
    body: "Advanced factory-level diagnostic tools to pinpoint and resolve even the most complex issues in modern luxury vehicles.",
  },
  {
    icon: <IconClock />,
    title: "Scheduled Maintenance",
    body: "Manufacturer-specified maintenance performed to exact standards, keeping your vehicle running at peak performance and protecting your warranty.",
  },
  {
    icon: <IconGear />,
    title: "Engine & Transmission",
    body: "Expert engine and transmission service, from oil changes to full rebuilds, performed by technicians trained on your specific vehicle brand.",
  },
  {
    icon: <IconShield />,
    title: "Brake Services",
    body: "Complete brake inspections, pad and rotor replacement, fluid flushes, and caliper service using OEM or superior-quality components.",
  },
  {
    icon: <IconDocument />,
    title: "Extended Warranty Work",
    body: "We work directly with most extended warranty providers, streamlining the approval process so you're covered with minimum hassle.",
  },
  {
    icon: <IconSearch />,
    title: "Pre-Purchase Inspection",
    body: "Comprehensive 100-point inspection before you buy. Know exactly what you're getting with a detailed report from our specialists.",
  },
];

// ---------------------------------------------------------------------------
// ServiceCard component
// ---------------------------------------------------------------------------

function ServiceCardItem({ icon, title, body }: ServiceCard) {
  return (
    <div
      className={cn("flex flex-col transition-all duration-300 ease-[ease]")}
      style={{
        background: "#0D0D0D",
        padding: "40px 32px",
        borderTop: "2px solid transparent",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = "#141414";
        el.style.borderTop = "2px solid #C4963A";
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.background = "#0D0D0D";
        el.style.borderTop = "2px solid transparent";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Icon container */}
      <div
        className="flex items-center justify-center mb-5 shrink-0"
        style={{
          width: "48px",
          height: "48px",
          background: "rgba(196,150,58,0.1)",
          borderRadius: "4px",
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="mb-3"
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: "22px",
          fontWeight: 400,
          color: "#FFFFFF",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>

      {/* Body */}
      <p
        style={{
          color: "#888",
          fontSize: "15px",
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {body}
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// ServicesSection
// ---------------------------------------------------------------------------

export function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        background: "#0A0A0A",
        padding: "100px 0",
      }}
    >
      <div
        className="mx-auto px-8"
        style={{ maxWidth: "1280px" }}
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="mb-3"
            style={{
              color: "#C4963A",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
            }}
          >
            WHAT WE DO
          </p>
          <h2
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: "48px",
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Expert Services for
            <br />
            Extraordinary Vehicles
          </h2>
          <p
            className="mx-auto mt-4"
            style={{
              color: "#888",
              fontSize: "16px",
              lineHeight: 1.7,
              maxWidth: "600px",
            }}
          >
            From routine maintenance to complex diagnostics, our factory-trained
            technicians deliver dealership-level precision for your luxury or
            exotic vehicle.
          </p>
        </div>

        {/* Cards grid — gap trick: grid bg = separator color, cards bg = section bg */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
          }}
        >
          {SERVICES.map((service) => (
            <ServiceCardItem key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
