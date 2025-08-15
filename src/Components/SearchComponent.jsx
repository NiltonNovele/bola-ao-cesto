import React, { useState } from 'react'
import { PiXLight } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
const SearchComponent = ({ setShowSearch, showSearch }) => {
  const [searched, setSearched] = useState('')

  const navigate = useNavigate()

  const handleSearch = e => {
    e.preventDefault()
    setShowSearch(false)
    navigate(`/search/${searched}`)
  }

  const searchVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.5,
        duration: 0.5,
        delay: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.5,
        delay: 0.3
      }
    }
  }
  return (
    <AnimatePresence>
      {showSearch && (
        <motion.div
          variants={searchVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
          className={
            'fixed top-0 h-screen bg-white w-full z-50 flex items-top justify-center pt-[150px] pl-[20px] md:pl-[50px]'
          }
        >
          <div className='absolute top-[30px] right-[30px]'>
            <PiXLight
              size={50}
              className='cursor-pointer'
              onClick={() => {
                setShowSearch(!showSearch)
              }}
            />
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <form action='' onSubmit={e => handleSearch(e)}>
              <input
                type='text'
                placeholder='Press "Return" to search'
                className='p-5  text-[30px] md:text-[40px] rounded outline-none border-b-2 w-full md:w-3/4'
                onChange={e => {
                  setSearched(e.target.value)
                }}
              />
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SearchComponent
