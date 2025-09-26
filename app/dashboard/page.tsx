import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col cosmic-bg">
      <Navbar />
      <main className="max-w-6xl w-full mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="opacity-80">This is the dashboard page placeholder. Build out features here.</p>
      </main>
      <Footer />
    </div>
  );
}
