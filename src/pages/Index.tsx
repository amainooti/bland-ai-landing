import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";
import { Features } from "../components/Features";
import { JoinUs } from "../components/JoinUs";
import { Community } from "../components/Community";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Community />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
