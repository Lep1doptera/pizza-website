// Import Cart array
import MenuPage from "app/menu/page"



export default function CartComponent() {

 {/* Find Cart items */}
  const cartObject = cart



  console.log(cartObject)





  return (
   <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-8 space-y-8">
        
        <h1 className="font-bold text-4xl text-center">Order Details</h1>
{/* Loop through cart array */}
        <div className="border p-5 rounded-lg flex flex-col gap-3 bg-gray-50">
          <div className="flex justify-between">
            <div className="flex gap-3">
              <span className="font-semibold">xNumber</span>
              <span>Item Name</span>
            </div>
            <span className="font-semibold">$Cost</span>
          </div>

          <p className="text-gray-600">Size?</p>
          <p className="text-gray-600">Customs?</p>

          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
              Edit
            </button>
            <button className="bg-red-700 text-white px-4 py-1 rounded hover:bg-red-600">
              Remove
            </button>
          </div>
        </div>

{/* sum of cart array costs */}
        <div className="text-right text-xl font-bold">
          Order Total: $NUMBER
        </div>


        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg text-lg shadow">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
