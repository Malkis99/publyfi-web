import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PublyFi — Play. Stream. Earn. Evolve.",
  description: "Web3 social-gaming platform built for scale."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg-primary text-text-main antialiased">
        {children}
      </body>
    </html>
  );
}
