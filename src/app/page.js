import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import NavBar from "@/components/NavBar";
import ProjectsSection from "@/components/ProjectsSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] mx-auto px-12 py-4">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 sm:px-0 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
