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
import { SideMenuProvider } from '@/components/layout/side-menu/SideMenuProvider';
import MenuButton from '@/components/layout/side-menu/MenuButton';
import SideMenu from '@/components/layout/side-menu/SideMenu';
import PageTransitionWrapper from '@/components/layout/PageTransitionWrapper';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import ConditionalButtons from '@/components/layout/ConditionalButtons';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen bg-bg-primary text-text-main antialiased`}>
        <SideMenuProvider>
          <StarfieldLoader />
          <MenuButton />
          <SideMenu />
          <main className="relative z-10">
            <PageTransitionWrapper>{children}</PageTransitionWrapper>
          </main>
          <ConditionalButtons />
          <ScrollToTopButton />
        </SideMenuProvider>
      </body>
    </html>
  );
}
