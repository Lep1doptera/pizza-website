import { MenuItem } from "./food";

type MenuModalProps = MenuItem & {
  close: () => void;
};

export default function Modal({
  close,
  name,
  description,
  cost,
  sizes,
  image,
}: MenuModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-300 w-full text-center">
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
        <button
          onClick={() => {
            close();
          }}
          className="mt-4 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}
