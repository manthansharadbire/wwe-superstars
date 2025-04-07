import React, { useState, useEffect } from "react";
import axios from "axios";
import WweSuperstar from "../components/WweSuperstar.jsx";
import Modal from "../components/Modal.jsx";
import {Plus as PlusIcon } from 'lucide-react';
import {toast, Toaster} from 'react-hot-toast'

function Homepage() {
  const [wweSuperstars, setWweSuperstars] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const loadWweSuperstars = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URI}/wwe-superstars`);

    setWweSuperstars(response.data.data);
  };

  useEffect(() => {
    loadWweSuperstars();
  }, []);

  return (
    <div>
      <button onClick={()=>{
        setIsModalOpen(true)
      }} className="fixed bottom-3 right-3 text-white bg-blue-400 rounded-lg shadow-lg hover:text-yellow-300"><PlusIcon className="h-[50px] w-[50px] "/></button>
   
    <div className="flex flex-wrap justify-center">

      {wweSuperstars.map((wrestler, i) => {
        const { _id, wwename, height, finisher, aka, thumbnail } = wrestler;
        return (
          <WweSuperstar
            key={i}
            _id={_id}
            wwename={wwename}
            height={height}
            finisher={finisher}
            aka={aka}
            thumbnail={thumbnail}
          />
        );
      })}
      <Modal
      isOpen={isModalOpen}
      onClose={()=>{
        setIsModalOpen(false)
        toast.success("Closed Successfully")
      }}>
        <div>
          <div className="flex-wrap">
          <input  placeholder="Enter WWE Superstar's name here" className=" py-4 w-[400px] m-2 rounded-lg pl-5 shadow-lg outline-none"/>
          <input type="text" placeholder="Enter WWE Superstar's nickname here" className=" py-4 w-[400px] m-2 rounded-lg pl-5 shadow-lg outline-none"/>
          <input type="text" placeholder="Enter WWE Superstar's finisher here" className=" py-4 w-[400px] m-2 rounded-lg pl-5 shadow-lg outline-none"/></div>
          <div className="flex justify-center">
          <button className="border bg-red-500 py-2 px-5 border-none m-2 rounded-lg shadow-lg text-white">Cancel</button>
          <button className="border bg-green-500 py-2 px-5 border-none m-2 rounded-lg shadow-lg text-white">Submit</button>
          </div>
        </div>
      </Modal>
    </div> 
    <Toaster/></div>
  );
}

export default Homepage;
