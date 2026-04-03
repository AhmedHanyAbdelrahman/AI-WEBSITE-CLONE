"use client";

import { cn } from "@/lib/utils";

const checklistItems = [
  "Factory-trained technicians",
  "All major extended warranties accepted",
  "Same-day estimates available",
] as const;

export function AppointmentCTA() {
  return (
    <section
      id="contact"
      className="py-24 w-full"
      style={{
        background: "linear-gradient(135deg, #0D0D0D 0%, #141414 100%)",
        borderTop: "1px solid rgba(196,150,58,0.2)",
        borderBottom: "1px solid rgba(196,150,58,0.2)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div className="flex-1">
            {/* Label with gold line */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="shrink-0"
                style={{
                  width: 48,
                  height: 1,
                  background: "#C4963A",
                }}
              />
              <span
                className="uppercase tracking-[0.2em]"
                style={{ color: "#C4963A", fontSize: 11 }}
              >
                Book Your Visit
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-normal text-white mb-5"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 42,
                lineHeight: 1.2,
              }}
            >
              Schedule Your Service Appointment
            </h2>

            {/* Body text */}
            <p
              className="mb-8"
              style={{
                color: "#888",
                fontSize: 16,
                lineHeight: 1.7,
              }}
            >
              Save time during your visit by scheduling online. Our team will
              confirm your appointment within one business day.
            </p>

            {/* Checklist */}
            <ul className="flex flex-col gap-3">
              {checklistItems.map((item) => (
                <li key={item} className="flex flex-row items-start gap-3">
                  <span
                    className="shrink-0 font-medium"
                    style={{ color: "#C4963A", fontSize: 15 }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span style={{ color: "#AAA", fontSize: 15 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — card */}
          <div
            className="w-full lg:w-[400px] shrink-0 p-10"
            style={{
              background: "#141414",
              border: "1px solid rgba(196,150,58,0.15)",
              borderRadius: 2,
            }}
          >
            {/* Card heading */}
            <h3
              className="font-normal text-white"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
              }}
            >
              Contact Us Directly
            </h3>

            {/* Divider */}
            <div
              className="my-5"
              style={{
                height: 1,
                background: "rgba(255,255,255,0.06)",
              }}
            />

            {/* Phone */}
            <div className="mb-6">
              <a
                href="tel:9167317023"
                className={cn(
                  "block font-bold transition-opacity duration-300 hover:opacity-80"
                )}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 28,
                  color: "#C4963A",
                  fontWeight: 700,
                }}
              >
                (916) 731-7023
              </a>
              <span
                className="uppercase tracking-wider mt-1 block"
                style={{ color: "#555", fontSize: 12 }}
              >
                Call to Book
              </span>
            </div>

            {/* Address */}
            <div className="mb-4">
              <p style={{ color: "#AAA", fontSize: 15, lineHeight: 1.6 }}>
                1876 Stockton Blvd
                <br />
                Sacramento, CA 95816
              </p>
            </div>

            {/* Hours */}
            <div>
              <p style={{ color: "#888", fontSize: 14 }}>
                Mon–Fri: 8:00 AM – 5:00 PM
                <br />
                Sat–Sun: Closed
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="#schedule"
              className={cn(
                "mt-7 w-full block text-center text-[13px] uppercase tracking-widest py-3.5",
                "transition-colors duration-300 font-medium"
              )}
              style={{
                border: "1px solid #C4963A",
                color: "#C4963A",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#C4963A";
                e.currentTarget.style.color = "#000";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#C4963A";
              }}
            >
              Schedule Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
