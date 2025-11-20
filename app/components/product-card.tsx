"use client";
import { useState } from "react";
import { MenuItem } from "../components/food";
import Modal from "./menu-sizes-modal";
import Modal_single from "./menu-single-modal";

type ProductCardProps = MenuItem & {
  onSubmit: (
    newItem: {
      name: string;
      count: number;
      cost: number;
      size?: string;
    }[]
  ) => void;
};

export default function ProductCard({
  name,
  description,
  cost,
  sizes,
  image,
  onSubmit,
}: ProductCardProps) {
  const [showModal, setShowModal] = useState(false);

  const onSingleAdd = (name: string, count: number, cost: number) => {
    const newItem = { name, count, cost };
    onSubmit([newItem]);
  };

  const onSizeAdd = (
    newItems: { name: string; count: number; cost: number; size: string }[]
  ) => {
    onSubmit(newItems);
  };

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
      {showModal &&
        (sizes ? (
          <Modal
            name={name}
            description={description}
            cost={cost}
            sizes={sizes}
            image={image}
            onSubmit={onSizeAdd}
            close={() => {
              setShowModal(false);
            }}
          />
        ) : (
          <Modal_single
            name={name}
            description={description}
            cost={cost}
            image={image}
            onSubmit={onSingleAdd}
            close={() => {
              setShowModal(false);
            }}
          />
        ))}
    </div>
  );
}
