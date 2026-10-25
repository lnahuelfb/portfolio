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
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-20 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <ProofStrip />
        <CaseStudy />
        <HowIWork />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
