'use client';

import React from 'react';
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import CoffeeCollection from "@/components/CoffeeCollection";
import CoffeeProcess from "@/components/CoffeeProcess";
import Gallery from "@/components/Gallery"; // Important: Import updated Gallery
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <BrandStory />
      <CoffeeCollection />
      <CoffeeProcess />
      
      {/* Gallery Section is now re-designed and appears above Contact */}
      <Gallery />
      
      {/* Contact Section is at the bottom */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}