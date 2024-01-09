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
        className={`${pathname.startsWith("/about") ? "font-bold" : ""}`}
        href={"/about"}
      >
        ABOUT
      </Link>
      <Link
        className={`${pathname.startsWith("/films") ? "font-bold" : ""}`}
        href={"/films"}
      >
        FILMS
      </Link>
      <Link
        className={`${pathname.startsWith("/reservation") ? "font-bold" : ""}`}
        href={"/reservation"}
      >
        RESERVATION
      </Link>
      <Link
        className={`${pathname.startsWith("/qna") ? "font-bold" : ""}`}
        href={"/qna"}
      >
        QnA
      </Link>
      <Link
        className={`${pathname.startsWith("/testFilms") ? "font-bold" : ""}`}
        href={"/testFilms"}
      >
        TestFils
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
