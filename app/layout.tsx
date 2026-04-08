import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "RevenueOS AI",
  description: "AI-powered growth operating system for founders, agencies, and eCommerce teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
