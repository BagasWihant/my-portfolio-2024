import { About } from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import { FloatingNav } from "@/components/ui/FloatNav";
import { FaLocationArrow } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="bg-black-100 relative flex justify-center items-center mx-auto flex-col overflow-hidden sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            {name: 'Home',link: '#home',icon: <FaLocationArrow />}
          ]} />
        <Hero />
        <About />
        <Project />
        <Contact />
      </div>
    </main>
  );
}
