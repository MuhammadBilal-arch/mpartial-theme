import React, { useEffect, useState } from 'react';
import './App.css';
import { VideoSection } from './components/VideoSection/VideoSection'
import { Nav } from './components/Nav/Nav'
import { HowItWork } from './components/HowItWork/HowItWork'
function App() {

  const [navColor, setnavColor] = useState({bgcolor : 'transparent', textcolor: 'white'})
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) 
      {
        setnavColor({bgcolor: 'white' , textcolor : 'black'})
      }
      else
      {
        setnavColor({bgcolor: 'transparent' , textcolor : 'white'})
      }
    });
  }, [])
  return (
    <div className="App">
      <Nav NcolorBG={navColor.bgcolor} NtextColor={navColor.textcolor} />
      <VideoSection />
      <HowItWork />
    </div>
  );
}

export default App;
