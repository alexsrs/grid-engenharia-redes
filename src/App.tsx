import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APITester } from "./APITester";
import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Partners from "./components/Partners";
import Projects from "./components/Projects";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <Navbar />
      <main className="pt-20 container mx-auto p-8">
        <Hero />
        <section className="my-4">
          <Services />
        </section>
        <section className="my-4">
          <Partners />
        </section>
        <section className="my-4">
          <Projects />
        </section>
        <section className="my-4">
          <AboutSection />
        </section>
        <section className="my-4">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
