import menu, { Category, MenuItem } from "../components/food";
import ProductCard from "../components/product-card";

export default function MenuPage() {
  const mains: Category = menu.find(
    (category) => category.category === "mains"
  );
  const pizza: Category = menu.find(
    (category) => category.category === "pizza"
  );
  const dessert: Category = menu.find(
    (category) => category.category === "dessert"
  );
  const sides: Category = menu.find(
    (category) => category.category === "sides"
  );
  const deals: Category = menu.find(
    (category) => category.category === "specials"
  );
  return (
    <div>
      <div className="relative w-full h-30 flex items-center justify-center text-white text-2xl font-bold bg-blue-900">
        Mains
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
          {mains.items.map((item: MenuItem, index: number) => (
            <ProductCard
              key={index}
              name={item.name}
              description={item.description}
              cost={item.cost}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="relative w-full h-30 flex items-center justify-center text-white text-2xl font-bold bg-blue-900">
        Pizza
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
          {pizza.items.map((item: MenuItem, index: number) => (
            <ProductCard
              key={index}
              name={item.name}
              description={item.description}
              sizes={item.sizes}
              cost={item.cost}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="relative w-full h-30 flex items-center justify-center text-white text-2xl font-bold bg-blue-900">
        Desserts
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
          {dessert.items.map((item: MenuItem, index: number) => (
            <ProductCard
              key={index}
              name={item.name}
              description={item.description}
              cost={item.cost}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="relative w-full h-30 flex items-center justify-center text-white text-2xl font-bold bg-blue-900">
        Sides
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
          {sides.items.map((item: MenuItem, index: number) => (
            <ProductCard
              key={index}
              name={item.name}
              description={item.description}
              cost={item.cost}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="relative w-full h-30 flex items-center justify-center text-white text-2xl font-bold bg-blue-900">
        Deals
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
          {deals.items.map((item: MenuItem, index: number) => (
            <ProductCard
              key={index}
              name={item.name}
              description={item.description}
              cost={item.cost}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
