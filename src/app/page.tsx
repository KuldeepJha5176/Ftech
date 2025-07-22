import Image from "next/image";
import Container from "@/components/container";
import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
export default function Home() {
  return (
    <div className="layout">
      <div className="layout-lines-container">
        <div className="left-line" />
        <div className="right-line" />
      </div>
      <Container>
        <Navbar />
        <Hero />
      </Container>
      <div className="hero-image-container">
        <img src="/hero-ui-v5.webp" className="hero-img" />
      </div>
    </div>
  );
}
