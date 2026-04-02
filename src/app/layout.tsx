import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stewart's Auto | Luxury & Exotic Vehicle Repair | Sacramento",
  description:
    "Stewart's Automotive of Sacramento specializes in the service and maintenance of Land Rover, Jaguar, Lamborghini, Ferrari, Maserati, Bentley, Aston Martin, and other late-model exotics. Dealership precision with a boutique experience.",
  keywords:
    "luxury car repair Sacramento, exotic vehicle repair, Land Rover repair, Ferrari repair, Lamborghini service, Jaguar repair, Maserati service, Bentley repair, Aston Martin repair, Sacramento auto repair",
  openGraph: {
    title: "Stewart's Auto | Luxury & Exotic Vehicle Repair | Sacramento",
    description:
      "Dealership precision with a boutique experience. Factory-trained technicians specializing in Land Rover, Ferrari, Lamborghini, Maserati, Bentley, Jaguar, and Aston Martin.",
    url: "https://www.stewartsauto.com",
    siteName: "Stewart's Automotive",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-white">
        {children}
      </body>
    </html>
  );
}
