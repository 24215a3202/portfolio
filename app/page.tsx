import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Experience } from "@/components/portfolio/experience";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { LoadingPreview } from "@/components/portfolio/loading-preview";
import { Now } from "@/components/portfolio/now";
import { ArrivalAnnouncement } from "@/components/portfolio/arrival-announcement";

export default function Page() {
  return (
    <main>
      <ArrivalAnnouncement />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Now />
      <Contact />
      <Footer />

    </main>
  );
}
