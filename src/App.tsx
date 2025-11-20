import { Hero } from '@/sections/Hero';
import { Features } from '@/sections/Features';
import { Testimonials } from '@/sections/Testimonials';
import { Pricing } from '@/sections/Pricing';
import { CallToAction } from '@/sections/CallToAction';
import { AiCopySection } from '@/sections/AiCopySection';
import { Footer } from '@/sections/Footer';
import { Navbar } from '@/components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative flex flex-col gap-4">
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <AiCopySection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;
