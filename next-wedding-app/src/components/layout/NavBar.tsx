"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center gap-[4rem]">
      <Link
        className={`${pathname === "/about" ? "font-bold" : ""}`}
        href={"/about"}
      >
        ABOUT
      </Link>
      <Link
        className={`${pathname === "/films" ? "font-bold" : ""}`}
        href={"/films"}
      >
        FILMS
      </Link>
      <Link
        className={`${pathname === "/reservation" ? "font-bold" : ""}`}
        href={"/reservation"}
      >
        RESERVATION
      </Link>
      <Link
        className={`${pathname === "/qna" ? "font-bold" : ""}`}
        href={"/qna"}
      >
        QnA
      </Link>
      <div className="flex justify-center gap-[1rem]">
        <Image
          src="/images/instagram.png"
          width={24}
          height={24}
          alt="instagram_logo"
        />
        <Image
          src="/images/facebook.png"
          width={24}
          height={24}
          alt="facebook_logo"
        />
      </div>
    </nav>
  );
};

export default NavBar;
