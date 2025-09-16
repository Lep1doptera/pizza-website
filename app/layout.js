// Navbar and Footer to wrap
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Pizzalicious",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="flex items-center justify-between p-6 bg-gray-600 text-white">
          <ul className="flex gap-10">
            <li>
              <Link href="/">Home icon</Link>
            </li>
            <li>
              <Link href="/booking">Bookings</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>

        <main>{children}</main>

        <footer className="fixed bottom-0 left-0 w-full bg-gray-600 text-gray-300 text-xs text-center p-2">
          Made by Amanda 2025
        </footer>
      </body>
    </html>
  );
}
