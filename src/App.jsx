import React, { useEffect, useRef } from 'react'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import LocomotiveScroll from "locomotive-scroll";

const App = () => {

  const scrollRef = useRef(null); // पूरे Page को reference देना जरूरी है

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current, // पूरा Website Scroll करेगा
      smooth: true,
    });

    return () => {
      scroll.destroy(); // Cleanup जरूरी है
    };
  }, []);
  return (
    <div ref={scrollRef}>
      <Page1 />
      <Page2 />
    </div>
  )
}

export default App
