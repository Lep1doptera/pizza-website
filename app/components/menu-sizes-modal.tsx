import { MenuItem } from "./food";
import { useState } from "react";
import { FormEvent } from "react";

type OrderItem = { name: string; count: number; cost: number; size: string };

type MenuModalProps = MenuItem & {
  close: () => void;
  onSubmit: (eachSizeItem: OrderItem[]) => void;
};
export default function Modal({
  close,
  name,
  description,
  sizes = [],
  image,
  onSubmit,
}: MenuModalProps) {
  const myNewCounts = sizes.reduce((accumulator, value) => {
    accumulator[value.size] = 0;
    return accumulator;
  }, {} as Record<string, number>);

  const [count, setCount] = useState(myNewCounts);

  function getSizeAddCount(option: { size: string }) {
    let newCount = { ...count };
    newCount[option.size] += 1;
    setCount(newCount);
  }

  function getSizeMinusCount(option: { size: string }) {
    let newCount = { ...count };
    newCount[option.size] = Math.max(newCount[option.size] - 1, 0);
    setCount(newCount);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const eachSizeItem = [];

    for (const orderInfo in count) {
      const foundSize = sizes.find((value) => value.size === orderInfo);
      const itemCost = foundSize.cost;
      const order: OrderItem = {
        count: count[orderInfo],
        name,
        cost: itemCost,
        size: orderInfo,
      };

      eachSizeItem.push(order);
    }

    onSubmit(eachSizeItem);

    close();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="bg-white p-10 rounded-lg shadow-lg w-200 w-full text-center">
          <h2 className="font-bold">{name}</h2>
          <p>{description}</p>
          <div className="my-2"></div>

          <div>
            {sizes.map((option, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2"
              >
                {option.size} ${option.cost.toFixed(2)}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label={"decrease" + option.size}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => getSizeMinusCount(option)}
                    disabled={count[option.size] === 0}
                  >
                    -
                  </button>

                  <span>{count[option.size]}</span>
                  <button
                    type="button"
                    aria-label={"increase " + option.size}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => getSizeAddCount(option)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="my-4"></div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>

          <div className="my-2"></div>

          <button
            onClick={() => {
              close();
            }}
            className="mt-4 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
