import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Services2 from "@/components/Services2";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Services2 />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Index;
