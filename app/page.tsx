import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import Practice from "@/components/Practice";
import Record from "@/components/Record";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <Hero />
      <WorkSection />
      <Practice />
      <Record />
      <ContactSection />
    </main>
  );
}
