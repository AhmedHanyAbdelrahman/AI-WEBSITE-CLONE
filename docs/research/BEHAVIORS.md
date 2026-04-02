# Behavior Bible — stewartsauto.com

## Scroll Behaviors
- **Navbar:** Transparent on hero, gains background + shadow on scroll past ~80px
  - State A (top): background: transparent, boxShadow: none
  - State B (scrolled): background: rgba(10,10,10,0.95), boxShadow: 0 1px 20px rgba(0,0,0,0.5)
  - Transition: transition: all 0.3s ease

## Hover States
- **Nav links:** color: #888 → #FFF, transition: 0.2s ease
- **CTA buttons:** background lightens or subtle border animation, scale: 1 → 1.02
- **Service cards:** border-color changes from transparent → gold, slight translateY(-2px) lift
- **Testimonial cards:** subtle box-shadow enhancement
- **FAQ items:** smooth accordion expand, rotate chevron icon 0 → 180deg

## Click Behaviors
- **"Schedule Appointment" button:** scrolls to appointment section or opens scheduling modal
- **FAQ accordion items:** expand/collapse with smooth height animation
- **Mobile menu (hamburger):** slides in from right or top

## Scroll Sweep Findings
- Hero section: full-viewport height with overlay gradient
- Brand logos: horizontal scroll strip, possibly auto-scrolling marquee
- About section: 2-column split (text + image/graphic)
- Service cards: 3-column grid on desktop, 1-column on mobile
- Testimonials: horizontal card layout
- FAQ: stacked accordion

## Responsive Behavior
- Desktop (1440px): Full multi-column layouts
- Tablet (768px): 2-column grids, navbar may collapse
- Mobile (390px): Single-column stacked, hamburger menu

## Animation Notes
- Section entrance: subtle fade-in on scroll (opacity 0→1 + translateY 20px→0)
- Stagger delays on card groups
- No heavy JS animation libraries detected
