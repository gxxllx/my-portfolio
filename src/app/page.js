import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] mx-auto px-12 py-4">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 sm:px-0 py-4">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
