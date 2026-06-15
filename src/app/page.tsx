import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Research from "@/components/Research";
import Publications from "@/components/Publications";
import Updates from "@/components/Updates";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ThemeProvider from "@/components/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Research />
        <Publications />
        <Updates />
        <Gallery />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
