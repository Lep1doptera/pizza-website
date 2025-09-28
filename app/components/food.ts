



const menu = [
  {
    category: "mains",
    items: [
      {
        name: "Lasagna",
        description:
          "Layers of pasta with rich beef ragu, creamy béchamel, and melted cheese.",
        cost: 16.5,
        image: "/images/pasta.jpg",
        additions: [
          { name: "Parmesan", cost: 4 },
          { name: "Ragu", cost: 5 },
        ],
      },
      {
        name: "Spaghetti Bolognese",
        description:
          "Classic spaghetti with slow-cooked beef and tomato sauce.",
        cost: 15,
        image: "/images/pasta.jpg",
        additions: [
          { name: "Parmesan", cost: 4 },
          { name: "Penne", cost: 2 },
          { name: "Gnocci", cost: 2 },
          { name: "sauce", cost: 5 },
          { name: "sauce", cost: 2 },
        ],
      },
      {
        name: "Chicken Parmigiana",
        description:
          "Crispy crumbed chicken breast topped with Napoli sauce, ham, and melted mozzarella.",
        cost: 18,
        image: "/images/pasta.jpg",
        additions: [
          { name: "Mozzarella", cost: 2 },
          { name: "Ham", cost: 3 },
          { name: "Napoli", cost: 2 },
        ],
        remove: [
          { name: "Mozzarella", cost: 1 },
          { name: "Ham", cost: 1 },
          { name: "Napoli", cost: 1 },
        ],
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
        image: "/images/pizza.jpg",
        additions: [
          { name: "Tomato Sauce", cost: 2 },
          { name: "Mozarella", cost: 3 },
          { name: "Basil", cost: 2 },
          { name: "Ham", cost: 5 },
          { name: "Pepperoni", cost: 4 },
          { name: "Pineapple", cost: 4 },
        ],
        remove: [
          { name: "Mozzarella", cost: 1 },
          { name: "Tomato Sauce", cost: 1 },
          { name: "Basil", cost: 1 },
        ],
      },
      {
        name: "Pepperoni",
        description:
          "Tomato sauce, mozzarella, and plenty of spicy pepperoni slices.",
        sizes: [
          { size: "Small", cost: 12 },
          { size: "Large", cost: 20 },
        ],
        image: "/images/pizza.jpg",
        additions: [
          { name: "Tomato Sauce", cost: 2 },
          { name: "Mozarella", cost: 3 },
          { name: "Basil", cost: 2 },
          { name: "Ham", cost: 5 },
          { name: "Pepperoni", cost: 4 },
          { name: "Pineapple", cost: 4 },
        ],
        remove: [
          { name: "Mozzarella", cost: 1 },
          { name: "Tomato Sauce", cost: 1 },
          { name: "Pepperoni", cost: 1 },
        ],
      },
      {
        name: "Vegetarian",
        description:
          "Tomato sauce, mozzarella, mushrooms, capsicum, olives, and onions.",
        sizes: [
          { size: "Small", cost: 11 },
          { size: "Large", cost: 19 },
        ],
        image: "/images/pizza.jpg",
        additions: [
          { name: "Tomato Sauce", cost: 2 },
          { name: "Mozarella", cost: 3 },
          { name: "Basil", cost: 2 },
          { name: "Ham", cost: 5 },
          { name: "Pepperoni", cost: 4 },
          { name: "Pineapple", cost: 4 },
          { name: "Mushroom", cost: 4 },
          { name: "Capsicum", cost: 2 },
          { name: "Olives", cost: 4 },
          { name: "Onion", cost: 2 },
        ],
        remove: [
          { name: "Mozzarella", cost: 1 },
          { name: "Tomato Sauce", cost: 1 },
          { name: "Mushrooms", cost: 1 },
          { name: "Capsicum", cost: 1 },
          { name: "Olives", cost: 1 },
          { name: "Onion", cost: 1 },
        ],
      },
      {
        name: "BBQ Chicken",
        description:
          "BBQ sauce base, mozzarella, grilled chicken, red onions, and capsicum.",
        sizes: [
          { size: "Small", cost: 13 },
          { size: "Large", cost: 21 },
        ],
        image: "/images/pizza.jpg",
        additions: [
          { name: "Tomato Sauce", cost: 2 },
          { name: "Mozarella", cost: 3 },
          { name: "Basil", cost: 2 },
          { name: "Ham", cost: 5 },
          { name: "Pepperoni", cost: 4 },
          { name: "Pineapple", cost: 4 },
          { name: "Mushroom", cost: 4 },
          { name: "Capsicum", cost: 2 },
          { name: "Olives", cost: 4 },
          { name: "Onion", cost: 2 },
          { name: "Grilled Chicken", cost: 6 },
          { name: "Red Onion", cost: 2 },
          { name: "BBQ Sauce", cost: 2 },
        ],
        remove: [
          { name: "Mozzarella", cost: 1 },
          { name: "BBQ Sauce", cost: 1 },
          { name: "Grilled Chicken", cost: 2 },
          { name: "Red Onions", cost: 1 },
          { name: "Capsicum", cost: 1 },
        ],
      },
      {
        name: "Meat Lovers",
        description:
          "Tomato sauce, mozzarella, pepperoni, ham, bacon, and beef.",
        sizes: [
          { size: "Small", cost: 14 },
          { size: "Large", cost: 22 },
        ],
        image: "/images/pizza.jpg",
        additions: [
          { name: "Tomato Sauce", cost: 2 },
          { name: "Mozarella", cost: 3 },
          { name: "Basil", cost: 2 },
          { name: "Ham", cost: 5 },
          { name: "Pepperoni", cost: 4 },
          { name: "Pineapple", cost: 4 },
          { name: "Mushroom", cost: 4 },
          { name: "Capsicum", cost: 2 },
          { name: "Olives", cost: 4 },
          { name: "Onion", cost: 2 },
          { name: "Grilled Chicken", cost: 6 },
          { name: "Red Onion", cost: 2 },
          { name: "BBQ Sauce", cost: 2 },
          { name: "Bacon", cost: 2 },
          { name: "Beef", cost: 3 },
        ],
        remove: [
          { name: "Mozzarella", cost: 1 },
          { name: "Tomato Sauce", cost: 1 },
          { name: "Pepperoni", cost: 2 },
          { name: "Ham", cost: 2 },
          { name: "Bacon", cost: 2 },
          { name: "Beef", cost: 2 },
        ],
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
        image: "/images/dessert.jpg",
      },
      {
        name: "Chocolate Lava Cake",
        description:
          "Warm chocolate cake with a gooey molten center, served with cream.",
        cost: 9,
        image: "/images/dessert.jpg",
      },
      {
        name: "Gelato (2 scoops)",
        description:
          "Choice of flavors: vanilla, chocolate, strawberry, or pistachio.",
        cost: 7,
        image: "/images/dessert.jpg",
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
        image: "/images/sides.jpg",
      },
      {
        name: "Cheesy Garlic Bread",
        description:
          "Golden garlic bread topped with melted mozzarella cheese.",
        cost: 7,
        image: "/images/sides.jpg",
      },
      {
        name: "Garden Salad",
        description: "Mixed greens, cucumber, tomato, and Italian dressing.",
        cost: 5.5,
        image: "/images/sides.jpg",
      },
    ],
  },
  {
    category: "drinks",
    items: [
      {
        name: "Coca Cola 1.25L",
        cost: 5,
        image: "",
      },
      {
        name: "Sprite 1.25L",
        cost: 5,
        image: "",
      },
      {
        name: "Fanta 1.25L",
        cost: 5,
        image: "",
      },
      {
        name: "Water 600ml",
        cost: 3.5,
        image: "",
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
        image: "/images/special.jpg",
        includes: {
          pizza: { count: 2, size: "Large" },
          sides: 2,
          drinks: 1,
        },
      },
      {
        name: "Couples Deal",
        description: "1 large Pizza, 1 Side, and a Dessert — great for two.",
        cost: 30,
        image: "/images/special.jpg",
        includes: {
          pizza: { count: 1, size: "Large" },
          sides: 1,
          dessert: 1,
        },
      },
    ],
  },
];

export default menu;
