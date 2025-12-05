import Customcurser from "../components/Customcurser"
import Introanimation from "../components/Introanimation"
import Navbar from "../components/Navbar"
import Particlesbackground from "../components/Particlesbackground"
import About from "../sections/About"
import Contact from "../sections/Contact"
import Experiences from "../sections/Experiences"
import Footer from "../sections/Footer"
import Home from "../sections/Home"
import Projects from "../sections/Projects"
import Skills from "../sections/Skills"
import Testimonials from "../sections/Testimonials"
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
