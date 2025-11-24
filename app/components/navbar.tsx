import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-gray-600 text-white">
      <ul className="flex gap-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/booking">Bookings</Link>
        </li>
        <li>
          <Link href="/menu">Menu</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <Link href="/cart">Checkout</Link>
        </li>
      </ul>
    </nav>
  );
}
