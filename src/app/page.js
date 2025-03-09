import About from "@/components/about/about";
import Hero from "@/components/hero/hero";
import { Ripple } from "@/components/magicui/ripple";

export default function Home() {
  return (
  
     <main className="relative min-h-screen flex flex-col items-center justify-center">
      <Hero/>
      <About/>
      {/* Grid background */}
    
    </main>
  
  );
}
