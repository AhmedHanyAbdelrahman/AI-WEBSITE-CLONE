import { cn } from "@/lib/utils";

interface FeatureCardProps {
  badge?: string;
  title: string;
  body: string;
}

function FeatureCard({ badge, title, body }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "bg-[#1A1A1A] border-l-[3px] border-[#C4963A]",
        "px-7 py-6"
      )}
    >
      {badge && (
        <span
          className={cn(
            "inline-block mb-3 px-2 py-0.5 text-[11px] font-bold tracking-widest uppercase",
            "bg-[#C4963A]/10 text-[#C4963A] border border-[#C4963A]/30"
          )}
        >
          {badge}
        </span>
      )}
      <h3
        className="text-white text-[18px] font-normal mb-2"
        style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
      >
        {title}
      </h3>
      <p className="text-[#888] text-[14px] leading-[1.6]">{body}</p>
    </div>
  );
}

export function AboutSection() {
  return (
    <section className="bg-[#111111] py-[100px]">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-[80px]">
          {/* Left column — text */}
          <div className="flex-1">
            {/* Label */}
            <p
              className={cn(
                "text-[#C4963A] text-[11px] uppercase tracking-[0.2em] mb-4"
              )}
            >
              WHY CHOOSE US
            </p>

            {/* Gold bar */}
            <div className="w-12 h-[2px] bg-[#C4963A] mb-4" />

            {/* Heading */}
            <h2
              className="text-white text-[44px] font-normal leading-[1.15] mb-6"
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
            >
              The Stewart&apos;s Advantage
            </h2>

            {/* Body paragraphs */}
            <p className="text-[#888] text-[16px] leading-[1.8] mb-4">
              Stewart&apos;s Automotive of Sacramento was built on a simple
              belief — that owners of exceptional vehicles deserve exceptional
              service, without the dealership price tag. We offer dealership
              precision with a boutique experience.
            </p>
            <p className="text-[#888] text-[16px] leading-[1.8] mb-4">
              We were notably the first independent facility in the U.S. to own
              the T4 Land Rover diagnostic system — a capability that no other
              independent shop had at the time. That commitment to staying at
              the forefront of automotive technology defines everything we do.
            </p>
            <p className="text-[#888] text-[16px] leading-[1.8] mb-8">
              Conveniently located in Sacramento, we proudly serve the entire
              Northern California region, including San Francisco, Oakland, San
              Jose, and clients extending into Nevada.
            </p>

            {/* CTA link */}
            <a
              href="#"
              className={cn(
                "text-[#C4963A] text-[14px]",
                "hover:underline transition-all duration-200"
              )}
            >
              Learn More About Our Team →
            </a>
          </div>

          {/* Right column — feature cards */}
          <div className="flex-1 flex flex-col gap-4">
            <FeatureCard
              badge="T4"
              title="Factory-Trained Technicians"
              body="Each technician undergoes factory-level training specific to the brands we service, equipped with the latest OEM diagnostic tools."
            />
            <FeatureCard
              title="Extended Warranty Accepted"
              body="We work directly with most extended warranty providers, streamlining approvals so you get covered without the hassle."
            />
            <FeatureCard
              title="Northern California's Trusted Shop"
              body="Serving Sacramento, San Francisco, Oakland, San Jose, and clients as far as Nevada. 4.8★ rating across hundreds of verified reviews."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
