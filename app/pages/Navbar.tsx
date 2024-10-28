"use client"
import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter()
  return (
    <div>
      
      {/* Navbar Section */}
      <nav className="flex justify-between items-center py-4 px-8 bg-[#F7F3F0] shadow-md">
        <div className="text-3xl font-bold text-gray-800">MELLIFERA</div>
        <ul className="flex space-x-8 text-lg font-medium text-gray-700">
          <li className="hover:text-yellow-600 cursor-pointer">Home</li>
          <li className="hover:text-yellow-600 cursor-pointer">Products</li>
          <li className="hover:text-yellow-600 cursor-pointer">Cart</li>
          <li className="hover:text-yellow-600 cursor-pointer">Portfolio</li>
          <li className="hover:text-yellow-600 cursor-pointer"><button onClick={()=> router.push("/ContactSection")}>Contact</button></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
