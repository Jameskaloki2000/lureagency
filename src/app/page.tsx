import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const PortfolioGrid = dynamic(() => import("@/components/PortfolioGrid"), { ssr: true });
const ImpactSection = dynamic(() => import("@/components/ImpactSection"), { ssr: true });
const SolutionSection = dynamic(() => import("@/components/SolutionSection"), { ssr: true });
const ProcessTimeline = dynamic(() => import("@/components/ProcessTimeline"), { ssr: true });
const Pricing = dynamic(() => import("@/components/Pricing"), { ssr: true });
const Guarantee = dynamic(() => import("@/components/Guarantee"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#050505]">
      <Hero />
      <PortfolioGrid />
      <ImpactSection />
      <SolutionSection />
      <ProcessTimeline />
      <Pricing />
      <Guarantee />
      <Footer />
    </main>
  );
}
