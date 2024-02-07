import React from 'react'
import { motion } from "framer-motion"

// variant use

function App() {
  const parentVariant={
    initial:{ opacity:0},
    animate:{ opacity:1},
    exit:{ opacity:0},
  }
  const circlevariants ={
    initial:{ opacity:0,scale:0},
    animate:{ opacity:1,scale:1},
    exit:{ opacity:0,scale:0},
    
  }
  return (
    
    
    <div className=' bg-black h-screen w-full p-10 '>
      <motion.div variants={parentVariant} initial="initial" animate="animate" exit="exit" transition={{duration:1,delayChildren:2,staggerChildren:0.5}} className=' h-32 w-32 bg-white/50 rounded-3xl flex flex-wrap p-5 gap-2'>
        <motion.div variants={circlevariants}  className=' w-10 h-10 bg-white rounded-full'></motion.div>
        <motion.div variants={circlevariants} className=' w-10 h-10 bg-white rounded-full'></motion.div>
        <motion.div variants={circlevariants} className=' w-10 h-10 bg-white rounded-full'></motion.div>
        <motion.div variants={circlevariants} className=' w-10 h-10 bg-white rounded-full'></motion.div>
      </motion.div>
    </div>
    
  )
}

export default App