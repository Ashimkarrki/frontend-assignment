"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Navbar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const submitHandeler = (e) => {
    e.preventDefault();
    router.push("/search/" + searchTerm);
  };
  return (
    <nav className="flex w-full items-center bg-slate-200 p-4">
      <Link href={"/"}>Online Store</Link>
      <form className="ml-auto" onSubmit={submitHandeler}>
        <input
          type="text"
          placeholder="Search"
          className="px-2 py-1 rounded"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          required
        />
      </form>
    </nav>
  );
};

export default Navbar;
