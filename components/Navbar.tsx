import Link from "next/link";
import React from "react";
import Image from "next/image";
import { auth } from "@/auth";
import { signOutAction, signInAction } from "@/app/actions/authActions";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session.user ? (
            <>
              <Link href="/post/create">
                <span>Create</span>
              </Link>

              <form action={signOutAction}>
                <button type="submit">Logout</button>
              </form>

              <Link href={`/user/${session.user.id}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <form action={signInAction}>
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
