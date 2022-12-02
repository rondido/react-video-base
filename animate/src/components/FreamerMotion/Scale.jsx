import React from 'react'
import { motion } from "framer-motion"

export default function Scale() {
 

  return (
    <motion.div
    style = {{backgroundColor:"pink", height:100,width:100}}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5 }}
  />
  )
}
