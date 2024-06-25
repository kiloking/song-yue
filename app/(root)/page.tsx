'use client';
import Footer from "@/components/shared/release/Footer";
import Header from "@/components/shared/release/Header";
import Section01 from "@/components/shared/release/Section01";
import Section02 from "@/components/shared/release/Section02";
import Section03 from "@/components/shared/release/Section03";
import Section04 from "@/components/shared/release/Section04";
export default function Home() {

  return (
    <main className="">
      <Header />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Footer />
    </main>
  );
}
