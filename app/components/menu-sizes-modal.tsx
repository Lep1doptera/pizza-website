import { MenuItem } from "./food";
import { useState } from "react";

type MenuModalProps = MenuItem & {
  close: () => void;
  onSubmit: (name: string, count: number, cost: number, size: string) => void;
};
export default function Modal({
  close,
  name,
  description,
  cost,
  sizes = [],
  image,
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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <form>
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
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => getSizeMinusCount(option)}
                    disabled={count[option.size] === 0}
                  >
                    -
                  </button>

                  <span>{count[option.size]}</span>
                  <button
                    type="button"
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
