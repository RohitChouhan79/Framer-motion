import React, { useState } from 'react'
import { motion } from "framer-motion"


const App = () => {
  const [a, b] = useState(false)
  return (
    
    <>
    <div className=' relative overflow-hidden w-full h-screen bg-zinc-900 text-white font-["gillroy"]'>
      <nav className=' w-full py-5 px-20 flex items-center justify-between'>
        <motion.h3 initial={{opacity:0}} animate={{opacity:1}} transition={{ease:[0.76,0,0.24,1], duration:2}} className=' font-semibold'>Some Brands</motion.h3>
        <div className=' links flex gap-10 text-sm'>
          {["Home","About","Contact","Pricing"].map((item,index)=>(
            <motion.a initial={{opacity:0}} animate={{opacity:1}} transition={{ease:[0.76,0,0.24,1], duration:2}} Key={index} href="#">{item}</motion.a>
          ))}
        <motion.button onClick={()=>b(!a)} initial={{opacity:0}} animate={{opacity:1}} transition={{ease:[0.76,0,0.24,1], duration:2}} className=' px-5 rounded-lg capitalize text-xs py-2 bg-zinc-700 items-center'>Open Nav</motion.button>
        </div>
      </nav>
      <motion.aside initial={{x:"100%"}} animate={a?{x:0}:{x:"100%"}} className='  w-96 h-screen bg-zinc-800 absolute right-0 top-0 px-10 py-32'>
        <button>Close</button>
        {["Home","About","Contact","Pricing"].map((item,index)=>(
            <a  Key={index} className=' text-5xl capitalize block mt-5' href="#">{item}</a>
          ))}
      </motion.aside>
    </div>
    </>
  )
}

export default App