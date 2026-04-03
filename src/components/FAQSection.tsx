"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What vehicles do you service?",
    answer:
      "We specialize in luxury and exotic automobiles including Land Rover, Jaguar, Ferrari, Lamborghini, Maserati, Bentley, and Aston Martin. We also accept select other high-performance European and late-model exotic vehicles. Contact us to confirm your specific vehicle.",
  },
  {
    question: "Are your technicians factory trained?",
    answer:
      "Yes. Each technician at Stewart's Automotive undergoes factory-level training specific to the brands they service. This means they are equipped with the same knowledge, diagnostic tools, and repair procedures used by the manufacturer's own dealership network.",
  },
  {
    question: "Do you accept extended warranties?",
    answer:
      "Absolutely. We work directly with most extended warranty providers to streamline the approval process. Simply provide your warranty information when you schedule your appointment and we'll handle the rest, ensuring your coverage is used effectively.",
  },
  {
    question: "How do I schedule a service appointment?",
    answer:
      "You can schedule an appointment by calling us at (916) 731-7023 or by using our online scheduling system. We recommend booking in advance, especially for complex repairs or specialty services.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Our shop is conveniently located in the heart of Sacramento at 1876 Stockton Blvd. We proudly serve clients throughout Northern California, including San Francisco, Oakland, San Jose, and loyal clients who travel from as far as Nevada.",
  },
  {
    question: "How long will my repair take?",
    answer:
      "Repair duration varies by service type. Routine maintenance such as oil changes and inspections are often completed same-day. More complex diagnostics and repairs typically take 1–3 business days. We will provide a realistic timeline and keep you updated throughout the process.",
  },
  {
    question: "What are your hours of operation?",
    answer:
      "We are open Monday through Friday from 8:00 AM to 5:00 PM. We are closed on Saturday and Sunday. We recommend scheduling in advance to ensure availability for your vehicle.",
  },
  {
    question: "Why choose an independent specialist over a dealership?",
    answer:
      "Independent specialists like Stewart's Automotive offer the same factory-level expertise and diagnostic capabilities as a dealership, often at a lower cost with more personalized attention. You'll work directly with the technician servicing your vehicle and receive honest, transparent communication throughout.",
  },
];

interface ChevronProps {
  open: boolean;
}

function Chevron({ open }: ChevronProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "text-[#888] shrink-0 transition-transform duration-300",
        open && "rotate-180"
      )}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

interface FAQAccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQAccordionItem({ item, isOpen, onToggle }: FAQAccordionItemProps) {
  return (
    <div className="border-b border-white/[0.06]">
      {/* Question row */}
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "w-full flex items-center justify-between gap-4",
          "py-6 cursor-pointer text-left",
          "group"
        )}
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            "text-[16px] font-medium transition-colors duration-200",
            isOpen ? "text-[#C4963A]" : "text-white group-hover:text-[#C4963A]"
          )}
        >
          {item.question}
        </span>
        <Chevron open={isOpen} />
      </button>

      {/* Answer — CSS grid trick for smooth height transition */}
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-400 ease-[ease]",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
        style={{ transitionDuration: "400ms" }}
      >
        <div className="overflow-hidden">
          <p className="text-[#888] text-[15px] leading-[1.75] pb-6">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section id="faq" className="bg-[#111111] py-[100px]">
      <div className="max-w-[900px] mx-auto px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#C4963A] text-[11px] uppercase tracking-[0.2em] mb-4">
            FAQ
          </p>
          <h2
            className="text-white text-[44px] font-normal mb-4"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-[#888] text-[16px]">
            Everything you need to know about our services and what to expect.
          </p>
        </div>

        {/* Accordion */}
        <div>
          {FAQ_ITEMS.map((item, index) => (
            <FAQAccordionItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
