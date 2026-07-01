import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#050505]">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ProcessTimeline />
      <Pricing />
      <Guarantee />
      <Footer />
    </main>
  );
}
