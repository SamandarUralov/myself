import React from 'react'

import { motion } from "framer-motion"

const Writing = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 0.1, duration: 1}}
    >
      <div className='about'>
        <div className={`center_items`}>
            <h1> Here lies my blog. </h1>
          <motion.div className={`bottom_title`}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.2, duration: 1}}
          >
            <p> ...is what this page might say some day. </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Writing
