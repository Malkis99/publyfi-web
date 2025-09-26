import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col cosmic-bg">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
