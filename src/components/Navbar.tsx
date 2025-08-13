import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center border-b border-gray-200 pb-4">
      {/* LEFT */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md font-medium tracking-wider">
          NOVTIQSHOP.
        </p>
      </Link>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <SearchBar />
        <Link href="/">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Bell className="w-4 h-4 text-gray-500" />
        <ShoppingCart className="w-4 h-4 text-gray-500" />
        <Link href="/login">Inicar Sesión</Link>
      </div>
    </div>
  );
};

export default Navbar;
