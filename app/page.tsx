// "use client";
import Image from "next/image";
import FirstSection from "../components/sections/FirstSection";
import SectionTwo from "../components/sections/SectionTwo";
import ThirdSection from "../components/sections/ThirdSection";
import FAQsSection from "../components/sections/FAQsSection";
import LastSection from "../components/sections/LastSection";
import Footer from "../components/sections/Footer";
import Nav from "../components/sections/Nav";


export default function Home() {
  return (
    <div className="">
      <Nav />
      <section className="hero-container">
        <section className="hero">
          <FirstSection />
        </section>
      </section>
      <div className="body">
        <SectionTwo />
        <ThirdSection />
        <FAQsSection />
        <LastSection />
        <Footer />
      </div>
    </div>
  );
}
