import AnimatedPageWrapper from '@/components/AnimatedPageWrapper'
import Home from '@/components/Home'
import Head from 'next/head'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function LandingPage() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
      <AnimatedPageWrapper animated="fadeIn">
        <Home/>
      </AnimatedPageWrapper>
    </>
  )
}
