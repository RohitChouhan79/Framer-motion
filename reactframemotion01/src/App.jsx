import React, { useState } from 'react'
import { motion } from "framer-motion"

const App = () => {
  const [Change, setChange] = useState(false)
  return (
    <>
    <motion.div data-valuedb={Change} className='Main bg-zinc-700 w-screen h-screen flex justify-center items-center '>
      <div onClick={()=>{setChange(!Change)}} data-valuedb={Change}  className="abcd box h-1/6 bg-lime-500 w-1/6 p-4 rounded-full flex items-center ">
        <motion.div layout className='circ h-4/5 bg-lime-200 w-1/3  rounded-full flex items-center'></motion.div>
      </div>
    </motion.div>
    </>
  )
}

export default App
