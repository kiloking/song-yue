'use client'
import React, { useEffect } from "react";
import Header from "@/components/shared/Header";

import AOS from 'aos'
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    setTimeout(function() {
        AOS.init({
          
        });
    }, 100);
    // AOS.refresh()
  }, []);
  return (
    <main className="">
      <Header />
    </main>
  );
}
