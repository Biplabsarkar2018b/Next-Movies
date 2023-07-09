import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="absolute justify-between items-center flex z-10 pl-3 pr-[5%] bg-blue-200 bg-opacity-5 w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 text-red-800"
        >
          <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
        </svg>
      </div>
      <div className="flex gap-5 uppercase font-bold">
        <Link href={'/screens/explore'}>TV shows</Link>
        <Link href={'/screens/explore'}>Movies</Link>
      </div>
    </div>
  );
};

export default Header;
