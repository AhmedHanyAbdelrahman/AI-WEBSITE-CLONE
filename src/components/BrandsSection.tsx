"use client";

import { cn } from "@/lib/utils";

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

function BrandItem({ name }: { name: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 mx-12",
        "select-none cursor-default"
      )}
    >
      {/* Decorative gold diamond separator */}
      <span
        className="inline-block shrink-0"
        style={{
          width: "8px",
          height: "8px",
          background: "#C4963A",
          transform: "rotate(45deg)",
        }}
        aria-hidden="true"
      />
      {/* Brand name */}
      <span
        className={cn(
          "text-[18px] font-medium tracking-[0.05em] uppercase",
          "transition-colors duration-300"
        )}
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          color: "#666",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLSpanElement).style.color = "#FFFFFF";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLSpanElement).style.color = "#666";
        }}
      >
        {name}
      </span>
    </span>
  );
}

export function BrandsSection() {
  return (
    <section
      id="brands"
      style={{
        background: "#0D0D0D",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "40px 0",
      }}
    >
      {/* Section label */}
      <p
        className="text-center mb-6"
        style={{
          color: "#C4963A",
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.3em",
          fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
        }}
      >
        BRANDS WE SERVICE
      </p>

      {/* Marquee wrapper — overflow hidden + fade overlays */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: "80px",
            background: "linear-gradient(to right, #0D0D0D, transparent)",
          }}
          aria-hidden="true"
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            width: "80px",
            background: "linear-gradient(to left, #0D0D0D, transparent)",
          }}
          aria-hidden="true"
        />

        {/* Scrolling track */}
        <div
          className="brands-marquee-track flex whitespace-nowrap"
          style={{ willChange: "transform" }}
        >
          {/* First set */}
          <span className="inline-flex items-center">
            {BRANDS.map((brand) => (
              <BrandItem key={`a-${brand}`} name={brand} />
            ))}
          </span>
          {/* Duplicate set for seamless loop */}
          <span className="inline-flex items-center" aria-hidden="true">
            {BRANDS.map((brand) => (
              <BrandItem key={`b-${brand}`} name={brand} />
            ))}
          </span>
        </div>
      </div>

      {/* CSS animation injected via style tag */}
      <style>{`
        @keyframes brands-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .brands-marquee-track {
          animation: brands-scroll 30s linear infinite;
        }

        .brands-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
