import React from "react";
import {X as XIcon}  from 'lucide-react'

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex fixed top-0 left-0 bg-black bg-opacity-60 min-h-screen w-full justify-center items-center z-50">
      <div className="w-[500px] bg-slate-700 p-8 rounded-lg text-white text-center relative">
        <p className="text-white text-xl mb-2 font-semibold">
          Create your own WWE Superstar Card
        </p>
        {children}
        <p
          onClick={onClose}
          className="absolute top-2 right-2 hover:text-red-500 cursor-pointer  "
        >
        <XIcon/>
        </p>
      </div>
    </div>
  );
}

export default Modal;
