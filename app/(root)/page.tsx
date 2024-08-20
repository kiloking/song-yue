"use client";
import Footer from "@/components/shared/release/Footer";
import Header from "@/components/shared/release/Header";
import NewS01 from "@/components/shared/release/NewS01";
import NewS02 from "@/components/shared/release/NewS02";
import Section03 from "@/components/shared/release/Section03";
import NewS04 from "@/components/shared/release/NewS04";
export default function Home() {
  return (
    <main className="">
      <Header />
      <NewS01 />
      <NewS02 />
      <Section03 />
      <NewS04 />
      <Footer />
    </main>
  );
}
