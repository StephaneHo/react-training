import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="font-bond text-3xl">
          Home
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/favoris">Favoris</Link>
          <Link href="/books/new">Ajouter un livre</Link>
          <Link href="/forlater">A lire plus tard</Link>
        </div>
      </nav>
    </div>
  );
}
