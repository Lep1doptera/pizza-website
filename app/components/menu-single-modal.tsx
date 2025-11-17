import { MenuItem } from "./food";
import { useState } from "react";
import { FormEvent } from "react";

type MenuModalProps = MenuItem & {
  close: () => void;
  onSubmit: (name: string, count: number, cost: number) => void;
};
export default function Modal_single({
  close,
  name,
  description,
  cost,
  image,
  onSubmit,
}: MenuModalProps) {
  const [count, setCount] = useState(0);

  function getAddCount() {
    setCount(count + 1);
  }

  function getMinusCount() {
    let counter = Math.max(count - 1, 0);
    setCount(counter);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(name, count, cost);
    close();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="bg-white p-10 rounded-lg shadow-lg w-200 w-full text-center">
          <h2 className="font-bold">{name}</h2>
          <p>{description}</p>
          <div className="my-2"></div>
          <div className="flex items-center justify-center w-full">
            <div className="flex items-center gap-2">
              <p>${cost.toFixed(2)}</p>
              <button
                type="button"
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => getMinusCount()}
                disabled={count === 0}
              >
                -
              </button>

              <span>{count}</span>

              <button
                type="button"
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => getAddCount()}
              >
                +
              </button>
            </div>
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
