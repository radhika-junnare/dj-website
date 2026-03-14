import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dnyanesh Junnare | Global Business Development Leader",
  description:
    "Personal portfolio of Dnyanesh Dattatraya Junnare — Global Business Development & Technology Enablement Leader with 25+ years of experience across APAC, EMEA & the Americas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
