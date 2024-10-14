"use client"

import { useRouter } from 'next/navigation';
const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="bg-gray-800 p-4 flex space-x-4 justify-around fixed top-0 left-0 w-full z-50">
        
         <button className="text-white hover:text-gray-300 " onClick={()=>router.push("./")}>Home</button>
      
         <button className="text-white hover:text-gray-300 " onClick={()=>router.push("./about")}>About</button>

         <button className="text-white hover:text-gray-300 " onClick={()=>router.push("./contact")}>Contact</button>

    </nav>
  );
};

export default Navbar;