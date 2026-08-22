import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vikas Handage | Software Developer | AI/ML Enthusiast",
  description:
    "Vikas Handage — Information Technology graduate, software developer, AI/ML enthusiast and data analytics learner.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
