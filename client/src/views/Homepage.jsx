import React, { useState, useEffect } from "react";
import axios from "axios";
import WweSuperstar from "../components/WweSuperstar.jsx";
import Modal from "../components/Modal.jsx";
import { Plus as PlusIcon } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";
import Input from "../components/Input.jsx";

function Homepage() {
  const [wweSuperstars, setWweSuperstars] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //For new Superstar

  const [newSuperstar, setNewSuperstar] = useState({
    wwename: "",
    aka: "",
    finisher: "",
    thumbnail: "",
  });

  const addWweSuperstar = async()=>{
    try{
  const response = await axios.post( `${import.meta.env.VITE_API_URI}/wwe-superstars`,{
    wwename: newSuperstar.wwename,
    aka: newSuperstar.aka,
    finisher: newSuperstar.finisher,
    thumbnail: newSuperstar.thumbnail,
  })
  toast.success(response.data.message);
  loadWweSuperstars();
  setIsModalOpen(false);
  setNewSuperstar("")
  
  }catch(e){
    toast.error(e.response.data.message);
  }}

  const loadWweSuperstars = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URI}/wwe-superstars`
    );

    setWweSuperstars(response.data.data);
  };

  useEffect(() => {
    loadWweSuperstars();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
        className="fixed bottom-3 right-3 text-white bg-blue-400 rounded-lg shadow-lg hover:text-yellow-300"
      >
        <PlusIcon className="h-[50px] w-[50px] " />
      </button>

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
          onClose={() => {
            setIsModalOpen(false);
            toast.success("Closed Successfully");
          }}
        >
          <div>
            <div className="flex-wrap">
              <Input
                type="text"
                value={newSuperstar.wwename}
                onChange={(val) => {
                  setNewSuperstar({ ...newSuperstar, wwename: val });
                }}
                placeholder="What's your Superstar's name?"
                vari="md"
                className="text-black"
              />

              <Input
                type="text"
                value={newSuperstar.aka}
                onChange={(val) => {
                  setNewSuperstar({ ...newSuperstar, aka: val });
                }}
                placeholder="What's your Superstar known as?"
                vari="md"
                className="text-black"
              />

              <Input
                type="text"
                value={newSuperstar.finisher}
                onChange={(val) => {
                  setNewSuperstar({ ...newSuperstar, finisher: val });
                }}
                placeholder="What's your Superstar's finishing move?"
                vari="md"
                className="text-black"
              />

              <Input
                type="text"
                value={newSuperstar.thumbnail}
                onChange={(val) => {
                  setNewSuperstar({ ...newSuperstar, thumbnail: val });
                }}
                placeholder="Paste your Superstar's image URL here"
                vari="md"
                className="text-black"
              />

              {newSuperstar.thumbnail ?  (
                <img src={newSuperstar.thumbnail}
                alt = "WWE Superstar"
                className="w-full rounded-md h-[220px] mb-2"/> 
              ): null}

              <button className="border bg-red-500 py-2 px-5 border-none m-2 rounded-lg shadow-lg text-white">
                Cancel
              </button>

              <button className="border bg-green-500 py-2 px-5 border-none m-2 rounded-lg shadow-lg text-white"
               onClick={addWweSuperstar}>
                Submit
              </button>

            </div>
          </div>
        </Modal>
      </div>
      <Toaster />
    </div>
  );
}

export default Homepage;
