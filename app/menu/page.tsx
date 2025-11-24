"use client";
import menu, { Category, MenuItem } from "../components/food";
import ProductCard from "../components/product-card";
import { useState } from "react";

type CartItem = { name: string; cost: number; count: number; size?: string };
type Cart = CartItem[];

export default function MenuPage() {
  const [cart, setCart] = useState<Cart>([]);

  function onAdd(newItems: CartItem[]) {
    const newCart = [...cart, ...newItems];
    setCart(newCart);
  }

  console.log(cart);

  const mains = menu.find((category) => category.category === "mains");
  const pizza = menu.find((category) => category.category === "pizza");
  const dessert = menu.find((category) => category.category === "dessert");
  const sides = menu.find((category) => category.category === "sides");
  const deals = menu.find((category) => category.category === "specials");
  return (
    <div>
      <div className="relative w-full h-30 flex items-center justify-center text-white text-2xl font-bold bg-blue-900">
        Mains
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
          {mains.items.map((item, index) => (
            <ProductCard
              key={index}
              name={item.name}
              description={item.description}
              cost={item.cost}
              image={item.image}
              onSubmit={onAdd}
            />
          ))}
        </div>
      </div>

      <div className="relative w-full h-30 flex items-center justify-center text-white text-2xl font-bold bg-blue-900">
        Pizza
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
          {pizza.items.map((item, index) => (
            <ProductCard
              key={index}
              name={item.name}
              description={item.description}
              sizes={item.sizes}
              cost={item.cost}
              image={item.image}
              onSubmit={onAdd}
            />
          ))}
        </div>
      </div>

      <div className="relative w-full h-30 flex items-center justify-center text-white text-2xl font-bold bg-blue-900">
        Desserts
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
          {dessert.items.map((item, index) => (
            <ProductCard
              key={index}
              name={item.name}
              description={item.description}
              cost={item.cost}
              image={item.image}
              onSubmit={onAdd}
            />
          ))}
        </div>
      </div>

      <div className="relative w-full h-30 flex items-center justify-center text-white text-2xl font-bold bg-blue-900">
        Sides
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
          {sides.items.map((item, index) => (
            <ProductCard
              key={index}
              name={item.name}
              description={item.description}
              cost={item.cost}
              image={item.image}
              onSubmit={onAdd}
            />
          ))}
        </div>
      </div>

      <div className="relative w-full h-30 flex items-center justify-center text-white text-2xl font-bold bg-blue-900">
        Deals
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
          {deals.items.map((item, index) => (
            <ProductCard
              key={index}
              name={item.name}
              description={item.description}
              cost={item.cost}
              image={item.image}
              onSubmit={onAdd}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
