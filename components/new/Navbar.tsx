"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo ">
        <Image src="/logo2.png" alt={""} width={50} height={50} />
      </div>
      <div className="navbar-links">
        <a href="#">Acasă</a>
        <a href="#">Despre</a>
        <a href="#">Servicii</a>
        <a href="#">Contact</a>
      </div>
      <button onClick={() => setOpen(!open)} className="navbar-mobile-toggle">
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>
      {open && (
        <div className="navbar-mobile-menu">
          <a href="#">Acasă</a>
          <a href="#">Despre</a>
          <a href="#">Servicii</a>
          <a href="#">Contact</a>
        </div>
      )}
    </nav>
  );
}
