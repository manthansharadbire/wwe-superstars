import React from 'react'

function Modal({isOpen, onClose, children}) {
    if(!isOpen){
        return null
    }

  return (
    <div className=' flex fixed top-0 left-0 bg-gray-400 min-h-screen w-full opacity-60 justify-center items-center'>
      <p className='bg-white z-100 p-10 rounded-lg shadow-lg'>Enter WWE Superstar details to create your own card</p>
      
    </div>
  )
}

export default Modal
