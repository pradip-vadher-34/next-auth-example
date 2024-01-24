import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <Link href="/">Home</Link>
        </div>
        <div className="space-x-4">
          <Link href="/signin" className="text-white">
            SignIn
          </Link>
          <Link href="/signout" className="text-white">
            SignOut
          </Link>
          <Link href="/server" className="text-white">
            Server
          </Link>
          <Link href="/client" className="text-white">
            Client
          </Link>
          <Link href="/extra" className="text-white">
            Extra
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
