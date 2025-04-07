import React from 'react';

function Input({ type, placeholder, value, onChange, vari="md", label=""}) {

    const VARIANT_CLASSES ={
        sm:"rounded-sm py-2 shadow-sm outline-none pl-5",
        md:"rounded-md py-3 shadow-md outline-none pl-5",
        lg:"rounded-lg py-4 shadow-lg outline-none pl-5",
    }
  return (
   <>
   {label ? <label>{label}</label> : null}
   <input type={type}
   placeholder={placeholder}
   value={value}
   onChange={(e)=>{
    onChange(e.target.value);
   }}
   className={` w-[400px] m-2 rounded-lg text-black ${VARIANT_CLASSES[vari]}` }/>
   </>
  )
}

export default Input;
