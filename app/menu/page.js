// Menu page
import ProductCard from '../components/product-card'

export default function MenuPage() {
  return (
    <div>
      <div className="relative w-full h-40 flex items-center justify-center text-white text-2xl font-bold bg-blue-900">
        Mains
      </div>

      <div>
        <ProductCard />
      </div>
    </div>
  );
}