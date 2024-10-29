'use client'
import '../styles/global.css'
import React,{useState,useEffect} from 'react';
import Header from '../components/Header'
import GroupIntro from "@/pages/groupintro";
import Aboutus from "@/pages/about us";
import Solution from "@/pages/solution";
import TestiMonials from "@/pages/testimonials";
import Footer from "@/components/Footer";


export default function Home() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header scrollY={scrollY} />
      <GroupIntro/>
      <Aboutus />
      <Solution />
      <TestiMonials  />
      <Footer  />
    </>
  );
}
