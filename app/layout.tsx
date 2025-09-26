import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "PublyFi — Play. Stream. Earn. Evolve.",
  description: "Web3 social-gaming platform built for scale."
};

import StarfieldLoader from '@/components/StarfieldLoader';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen bg-bg-primary text-text-main antialiased`}>
        <StarfieldLoader />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
