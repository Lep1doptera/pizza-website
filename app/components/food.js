const menu = [
  {
    category: "mains",
    items: [
      {
        name: "Lasagna",
        description:
          "Layers of pasta with rich beef ragu, creamy béchamel, and melted cheese.",
        cost: 16.5,
        image: "/images/pasta.jpg"
      },
      {
        name: "Spaghetti Bolognese",
        description:
          "Classic spaghetti with slow-cooked beef and tomato sauce.",
        cost: 15,
        image: "/images/pasta.jpg"
      },
      {
        name: "Chicken Parmigiana",
        description:
          "Crispy crumbed chicken breast topped with Napoli sauce, ham, and melted mozzarella.",
        cost: 18,
        image: "/images/pasta.jpg"
      },
    ],
  },
  {
    category: "pizza",
    items: [
      {
        name: "Margherita",
        description:
          "Tomato sauce, fresh mozzarella, and basil on a thin crust.",
        sizes: [
          { size: "Small", cost: 10 },
          { size: "Large", cost: 18 },
        ],
        image: "/images/pizza.jpg"
      },
      {
        name: "Pepperoni",
        description:
          "Tomato sauce, mozzarella, and plenty of spicy pepperoni slices.",
        sizes: [
          { size: "Small", cost: 12 },
          { size: "Large", cost: 20 },
        ],
        image: "/images/pizza.jpg"
      },
      {
        name: "Vegetarian",
        description:
          "Tomato sauce, mozzarella, mushrooms, capsicum, olives, and onions.",
        sizes: [
          { size: "Small", cost: 11 },
          { size: "Large", cost: 19 },
        ],
        image: "/images/pizza.jpg"
      },
      {
        name: "BBQ Chicken",
        description:
          "BBQ sauce base, mozzarella, grilled chicken, red onions, and capsicum.",
        sizes: [
          { size: "Small", cost: 13 },
          { size: "Large", cost: 21 },
        ],
        image: "/images/pizza.jpg"
      },
      {
        name: "Meat Lovers",
        description:
          "Tomato sauce, mozzarella, pepperoni, ham, bacon, and beef.",
        sizes: [
          { size: "Small", cost: 14 },
          { size: "Large", cost: 22 },
        ],
        image: "/images/pizza.jpg"
      },
    ],
  },
  {
    category: "dessert",
    items: [
      {
        name: "Tiramisu",
        description:
          "Coffee-soaked sponge layered with mascarpone cream and cocoa.",
        cost: 8,
        image: "/images/dessert.jpg"
      },
      {
        name: "Chocolate Lava Cake",
        description:
          "Warm chocolate cake with a gooey molten center, served with cream.",
        cost: 9,
        image: "/images/dessert.jpg"
      },
      {
        name: "Gelato (2 scoops)",
        description:
          "Choice of flavors: vanilla, chocolate, strawberry, or pistachio.",
        cost: 7,
        image: "/images/dessert.jpg"
      },
    ],
  },
  {
    category: "sides",
    items: [
      {
        name: "Garlic Bread",
        description: "Toasted baguette slices with garlic butter and parsley.",
        cost: 6,
        image: "/images/sides.jpg"
      },
      {
        name: "Cheesy Garlic Bread",
        description:
          "Golden garlic bread topped with melted mozzarella cheese.",
        cost: 7,
        image: "/images/sides.jpg"
      },
      {
        name: "Garden Salad",
        description: "Mixed greens, cucumber, tomato, and Italian dressing.",
        cost: 5.5,
        image: "/images/sides.jpg"
      },
    ],
  },
  {
    category: "specials",
    items: [
      {
        name: "Family Feast",
        description:
          "2 Large Pizzas, 2 Sides, and a 1.25L Drink — perfect for sharing.",
        cost: 45,
        image: "/images/special.jpg"
      },
      {
        name: "Couples Deal",
        description: "1 Medium Pizza, 1 Side, and a Dessert — great for two.",
        cost: 30,
        image: "/images/special.jpg"
      },
    ],
  },
];

export default menu;
