import React from "react";

function Modal({ isOpen, children}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex fixed top-0 left-0 bg-black bg-opacity-60 min-h-screen w-full justify-center items-center z-50">
      <div className="w-[500px] bg-slate-700 p-8 rounded-lg text-white text-center relative">
        {children}
      </div>
    </div>
  );
}

export default Modal;
