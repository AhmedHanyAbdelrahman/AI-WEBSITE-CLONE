import { cn } from "@/lib/utils";

interface Testimonial {
  stars: 4 | 5;
  quote: string;
  name: string;
  car: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    stars: 5,
    name: "Michael T.",
    car: "2016 Land Rover LR4 HSE Luxury",
    quote:
      "No BS or upsell and car was ready the same day. The team at Stewart's Automotive treats my Range Rover like their own. Exceptional service every single time.",
  },
  {
    stars: 5,
    name: "Jennifer R.",
    car: "2010 Ferrari California",
    quote:
      "A fantastic repair shop not only on the quality of their work but more importantly because they are honest. They maintain my Ferrari to perfection — professional, knowledgeable, and detail-focused.",
  },
  {
    stars: 5,
    name: "David K.",
    car: "2014 Ferrari F12 Berlinetta",
    quote:
      "Excellent honest shop. Factory-level knowledge of my F12 and the work was completed on time and on budget. I won't take my car anywhere else in Sacramento.",
  },
  {
    stars: 5,
    name: "Sarah M.",
    car: "Lamborghini Huracán",
    quote:
      "I drove from San Francisco specifically to use Stewart's for my Huracán's service. Worth every mile. Dealership quality without the dealership attitude or price.",
  },
  {
    stars: 5,
    name: "Robert A.",
    car: "2019 Bentley Continental GT",
    quote:
      "They handled my extended warranty claim flawlessly. No back and forth, no delays — they worked directly with the provider and I had my car back in two days.",
  },
  {
    stars: 4,
    name: "Lisa P.",
    car: "2018 Jaguar F-Type R",
    quote:
      "Outstanding diagnostic work on my F-Type. They found an issue two other shops missed. Stewart's is the real deal when it comes to exotic European vehicles in NorCal.",
  },
];

function Stars({ count }: { count: 4 | 5 }) {
  return (
    <div className="text-[14px] text-[#C4963A]" aria-label={`${count} stars`}>
      {"★".repeat(count)}
      {count < 5 && <span className="text-[#444]">{"★".repeat(5 - count)}</span>}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initial = testimonial.name.charAt(0).toUpperCase();

  return (
    <div
      className={cn(
        "bg-[#141414] border border-white/[0.06] p-9",
        "transition-colors duration-300",
        "hover:border-[#C4963A]/20",
        "flex flex-col"
      )}
    >
      {/* Stars */}
      <Stars count={testimonial.stars} />

      {/* Quote */}
      <p
        className={cn(
          "text-[#CCC] text-[15px] leading-[1.75] italic",
          "mt-4 mb-6 flex-1"
        )}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Divider */}
      <div className="h-px bg-white/[0.06] mb-5" />

      {/* Author row */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div
          className={cn(
            "w-10 h-10 rounded-full bg-[#1C1C1C]",
            "flex items-center justify-center shrink-0",
            "text-[#C4963A] font-bold text-[15px]"
          )}
          aria-hidden="true"
        >
          {initial}
        </div>

        {/* Name / car */}
        <div>
          <p className="text-white text-[15px] font-semibold leading-snug">
            {testimonial.name}
          </p>
          <p className="text-[#666] text-[13px] leading-snug mt-0.5">
            {testimonial.car}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#0A0A0A] py-[100px]">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#C4963A] text-[11px] uppercase tracking-[0.2em] mb-4">
            TESTIMONIALS
          </p>
          <h2
            className="text-white text-[48px] font-normal mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[#C4963A] text-[18px]" aria-hidden="true">
              ★★★★★
            </span>
            <span className="text-[#888] text-[14px]">
              4.8 out of 5 — Based on 100+ verified reviews
            </span>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
