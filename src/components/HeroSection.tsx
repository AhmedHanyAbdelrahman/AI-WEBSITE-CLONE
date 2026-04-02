"use client";

import { cn } from "@/lib/utils";

const goldGradientTextStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, #C4963A 0%, #D4AF37 50%, #E8C96B 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const heroBackgroundStyle: React.CSSProperties = {
  background:
    "radial-gradient(ellipse at 20% 50%, rgba(196,150,58,0.08) 0%, transparent 60%), linear-gradient(180deg, #0A0A0A 0%, #111111 100%)",
};

const gridOverlayStyle: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
};

const trustStats = [
  { value: "20+", label: "Years Experience" },
  { value: "4.8★", label: "Average Rating" },
  { value: "8", label: "Exotic Brands" },
  { value: "500+", label: "Happy Clients" },
] as const;

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={heroBackgroundStyle}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={gridOverlayStyle}
      />

      {/* Decorative circles — hidden on mobile, visible md+ */}
      <div
        className="hidden md:block absolute pointer-events-none rounded-full"
        style={{
          width: 600,
          height: 600,
          top: -100,
          right: -150,
          border: "1px solid rgba(196,150,58,0.1)",
        }}
      />
      <div
        className="hidden md:block absolute pointer-events-none rounded-full"
        style={{
          width: 300,
          height: 300,
          top: -100,
          right: -150,
          border: "1px solid rgba(196,150,58,0.05)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 flex flex-col items-center md:items-center text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center mb-8 rounded-full px-4 py-1.5"
          style={{
            border: "1px solid rgba(196,150,58,0.4)",
            background: "rgba(196,150,58,0.08)",
            color: "#C4963A",
            fontSize: 12,
            letterSpacing: "0.15em",
          }}
        >
          <span className="uppercase font-medium tracking-[0.15em] text-[12px]">
            Sacramento&apos;s Premier Luxury Auto Specialists
          </span>
        </div>

        {/* Headline */}
        <h1
          className="mb-7"
          style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}
        >
          <span
            className="block font-normal text-white"
            style={{ fontSize: "clamp(42px, 6vw, 80px)" }}
          >
            Precision Care for
          </span>
          <span
            className="block font-normal"
            style={{
              fontSize: "clamp(42px, 6vw, 80px)",
              ...goldGradientTextStyle,
            }}
          >
            Extraordinary Cars
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="max-w-[680px] mx-auto mb-10"
          style={{
            color: "#888",
            fontSize: 18,
            lineHeight: 1.7,
          }}
        >
          Dealership precision with a boutique experience — personalized
          attention, expedited service, and uncompromising expertise for Land
          Rover, Ferrari, Lamborghini, Maserati, Jaguar, Bentley, and Aston
          Martin.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center flex-wrap w-full md:w-auto">
          <a
            href="#schedule"
            className={cn(
              "px-9 py-4 text-[13px] font-semibold uppercase tracking-widest rounded-none transition-colors duration-300",
              "w-full md:w-auto text-center"
            )}
            style={{ background: "#C4963A", color: "#000" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "#D4AF37")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "#C4963A")
            }
          >
            Schedule Service
          </a>
          <a
            href="#services"
            className={cn(
              "px-9 py-4 text-[13px] font-semibold uppercase tracking-widest rounded-none transition-colors duration-300",
              "w-full md:w-auto text-center text-white"
            )}
            style={{ border: "1px solid rgba(255,255,255,0.2)" }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "#C4963A";
              e.currentTarget.style.color = "#C4963A";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.color = "#FFF";
            }}
          >
            Our Services
          </a>
        </div>

        {/* Trust bar */}
        <div className="mt-16 grid grid-cols-2 md:flex md:flex-row gap-8 md:gap-0 justify-center flex-wrap w-full">
          {trustStats.map((stat, index) => (
            <div key={stat.label} className="flex md:contents">
              {/* Divider — only between items on desktop */}
              {index > 0 && (
                <div
                  className="hidden md:block self-stretch my-1"
                  style={{
                    width: 1,
                    background: "rgba(255,255,255,0.06)",
                    margin: "0 48px",
                  }}
                />
              )}
              <div className="flex flex-col items-center gap-1 md:px-0">
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 28,
                    color: "#C4963A",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="uppercase tracking-wider"
                  style={{ fontSize: 12, color: "#555" }}
                >
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="animate-scroll-bounce">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#444"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        <span
          className="uppercase tracking-wider"
          style={{ fontSize: 11, color: "#444" }}
        >
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
