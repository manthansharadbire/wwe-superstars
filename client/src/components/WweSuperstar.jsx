import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Trash2 } from "lucide-react";
import Modal from "./Modal";

function WweSuperstar({
  _id,
  wwename,
  finisher,
  aka,
  thumbnail,
  loadWweSuperstars
}) {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const deleteSuperstar = async (id, loadWweSuperstars) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URI}/wwe-superstars/${id}`
      );
      toast.success(response.data.message);
      loadWweSuperstars();
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };

  return (
    <div className="border border-gray-400 m-3 rounded-lg shadow-lg p-4 cursor-pointer text-center from bg-black text-white relative">
      <img
        src={thumbnail}
        alt="Superstarimg"
        className="h-[270px] w-[390px] object-cover rounded-lg shadow-lg border-2 border-white "
      />
      <h2 className="text-2xl font-semibold text-yellow-300">{wwename}</h2>
      <p className="text-xl  text-yellow-400 ">{aka} </p>
      <h3 className="text-md font-medium ">{finisher}</h3>
      <button
        className="bg-red-600 py-0.5 px-1 rounded-lg text-ellipsis mt-2 absolute bottom-2 right-2"
        onClick={() => {
          setIsConfirmationOpen(true);
        }}
      >
        Delete
        <Trash2 className="inline-block mb-1 h-5" />
      </button>

      <Toaster />

      <Modal isOpen={isConfirmationOpen}>
        <h1 className="text-xl">Are you sure ?</h1>
        <p className="text-[12px]">
          Once you click on the delete button, this action cannot be reversed.
        </p>
        <button
          className="m-4 bg-green-500 py-2 px-4 rounded-lg shadow-lg"
          onClick={() => setIsConfirmationOpen(false)}
        >
          Cancel
        </button>
        <button
          className="m-4 bg-red-500 py-2 px-4 rounded-lg shadow-lg"
          onClick={() => {
            deleteSuperstar(_id, loadWweSuperstars);
            setIsConfirmationOpen(false);
          }}
        >
          Delete
        </button>
      </Modal>
    </div>
  );
}

export default WweSuperstar;
