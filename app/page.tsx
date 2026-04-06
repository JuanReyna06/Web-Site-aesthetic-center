"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import Services from "@/components/Services";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <AboutMe/>
      <Contact />
      <Footer />
    </>
  );
}
