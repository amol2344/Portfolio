import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useMemo } from 'react'


import { motion } from 'framer-motion';
export default function Introanimation({onFinish}){




const greeting = useMemo(()=>[
  "Hello","Namaste","Hola","Bonjour","Ciao","Ola","Hallo","Hej","Merhaba"
],[] )

const [index,setIndex]= React.useState(0);
const[visible,setVisible]=React.useState(true);

useEffect(()=>{

if(index<greeting.length-1){

  const ID = setInterval(()=>setIndex((i)=> i+1),180);

  return ()=> clearInterval(ID); //runs before  re-render or unmounting
}
else {
  const t = setTimeout(()=> setVisible(false),300);
  return ()=> clearInterval(t);
}


},[index,greeting.length]) //dependencies


return (

<AnimatePresence onExitComplete={onFinish}>
{visible && (
  <motion.div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white overflow-hidden"
  initial={{y:0}}
  exit={{y:"-100%",
transition:{
  duration:1.05,
  ease:[0.22,1,0.36,1],

},


  }}

  >    
<motion.h1
  key={index}
  className="text-5xl md:text-7xl lg:text_8xl font-bold"
  initial={{opacity:0 , y:20}}
  animate={{opacity:1,y:0}}
  exit={{opacity:0,y:-20}}
  transition={{duration:0.5}}
>
  {greeting[index]}
</motion.h1>


  </motion.div>
)}





</AnimatePresence>

)

}