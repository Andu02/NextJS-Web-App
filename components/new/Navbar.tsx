"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Image src="/logo2.png" alt="Innerly logo" width={50} height={50} />
      </div>

      {/* Linkuri desktop */}
      <div className="navbar-links">
        <a className="hover-animation" href="#home">Acasă</a>
        <a className="hover-animation" href="#despre">Despre</a>
        <a className="hover-animation" href="#servicii">Servicii</a>
        <a className="hover-animation" href="#contact">Contact</a>
      </div>

      {/* Meniu mobil cu Sheet */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="navbar-mobile-toggle lg:hidden">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </SheetTrigger>

        <SheetContent
          side="top"
          className="bg-white flex flex-col items-center gap-4 py-4 pt-[70px] shadow-lg"
        >
          {/* Titlu invizibil pentru accesibilitate */}
          <SheetHeader className="sr-only">
            <SheetTitle>Meniu de navigație</SheetTitle>
          </SheetHeader>

          <SheetClose asChild>
            <a className="hover-animation" href="#home">Acasă</a>
          </SheetClose>
          <SheetClose asChild>
            <a className="hover-animation" href="#despre">Despre</a>
          </SheetClose>
          <SheetClose asChild>
            <a className="hover-animation" href="#servicii">Servicii</a>
          </SheetClose>
          <SheetClose asChild>
            <a className="hover-animation" href="#contact">Contact</a>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
