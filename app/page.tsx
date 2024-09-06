import Image from "next/image";
import FirstSection from "./FirstSection";
import SectionTwo from "./SectionTwo";
import ThirdSection from "./ThirdSection";
import FAQsSection from "./FAQsSection";
import LastSection from "./LastSection";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="">
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
