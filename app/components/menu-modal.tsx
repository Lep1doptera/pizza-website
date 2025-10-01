//import menu, { Category, MenuItem } from "../components/food";

export default function Modal({ close }: { close: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-4 rounded shadow">
        <p>TEST BODY</p>
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
