import React from "react";
import Link from "next/link";
const Navbar = () => {
  console.log("in clienet");
  return (
    <div className="flex w-full bg-slate-200 p-4">
      <Link href={"/"}>Online Store</Link>
      <div className="ml-auto">Search</div>
    </div>
  );
};

export default Navbar;
