"use client";
import { useState } from "react";
import { MenuItem } from "../components/food";
import Modal from "./menu-modal";

export default function ProductCard({
  name,
  description,
  cost,
  sizes,
  image,
}: MenuItem) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-md p-6">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h2 className="font-bold">{name}</h2>
      <p>{description}</p>
      {sizes ? (
        <div>
          {sizes.map((option, index) => (
            <p key={index}>
              {option.size} ${option.cost.toFixed(2)}
            </p>
          ))}
        </div>
      ) : (
        <div>
          <p>${cost.toFixed(2)}</p>
        </div>
      )}
      <div className="flex justify-end">
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Order
        </button>
      </div>
      {showModal && (
        <Modal
          close={() => {
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}
