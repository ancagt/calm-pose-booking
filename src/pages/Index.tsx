// Update this page (the content is just a fallback if you fail to update the page)

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { VideoSection } from "@/components/VideoSection";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <VideoSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
