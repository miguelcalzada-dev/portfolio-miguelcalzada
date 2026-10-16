import Loader from "@/components/Loader";
import Rail from "@/components/Rail";
import Motion from "@/components/Motion";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Portfolio() {
  return (
    <>
      <Loader />
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <Rail />
      <Motion />
      <main className="page" id="contenido">
        <Hero />
        <Work />
        <Stack />
        <Experience />
        <Contact />
        <Footer />
      </main>
      <Chatbot />
    </>
  );
}
