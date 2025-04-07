import React from "react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex fixed top-0 left-0 bg-black bg-opacity-60 min-h-screen w-full justify-center items-center z-50">
      <div className="w-[500px] bg-slate-700 p-8 rounded-lg text-white text-center">
        <p className="text-white text-xl mb-2 ">
          Create your own WWE Superstar Card
        </p>
        {children}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
