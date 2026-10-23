import { CaseStudy } from "@/components/CaseStudy";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowIWork } from "@/components/HowIWork";
import { Projects } from "@/components/Projects";
import { ProofStrip } from "@/components/ProofStrip";

export default function Page() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <CaseStudy />
        <Projects />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
