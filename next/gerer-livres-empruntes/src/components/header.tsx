import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="font-bond text-3xl">
          Home
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/favoris">Favoris</Link>
          <Link href="/newbook">Ajouter un nouveau livre</Link>
          <Link href="/forlater">
            Les livres que je voudrais lire plus tard
          </Link>
        </div>
      </nav>
    </div>
  );
}
