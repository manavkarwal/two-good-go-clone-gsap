import React, { useEffect, useRef } from 'react'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
// import LocomotiveScroll from "locomotive-scroll";
import Page3 from './pages/Page3';
import Navbar from './components/navbar';



const App = () => {

  return (

    <div>
      <Navbar/>
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  )
}

export default App
