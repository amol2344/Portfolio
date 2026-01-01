import Customcurser from "../src/components/Customcurser";
import Introanimation from "../src/components/Introanimation"
import Navbar from "../src/components/Navbar"
import Particlesbackground from "../src/components/Particlesbackground"
import About from "../src/sections/About"
import Contact from "../src/sections/Contact"
import Experiences from "../src/sections/Experiences"
import Footer from "../src/sections/Footer"
import Home from "../src/sections/Home"
import Projects from "../src/sections/Projects"
import Skills from "../src/sections/Skills"
import Testimonials from "../src/sections/Testimonials"
import React from "react"
function App() {
 const[introdone,setintrodone]=React.useState(false);

  return (
<>
{!introdone &&  <Introanimation onFinish={()=> setintrodone(true)} />}
  {introdone &&  (
    <div className="relative gradient text-white">
      
      
     <Home/>
     <About/>
     <Skills/>
    
     <Projects/>
     <Contact/>
     
     <Footer/>
 </div>)}</>
  )
}

export default App
