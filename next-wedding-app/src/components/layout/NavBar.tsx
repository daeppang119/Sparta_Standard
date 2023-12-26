import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-center gap-[4rem]">
      <Link href={"/about"}>ABOUT</Link>
      <Link href={"/films"}>FILMS</Link>
      <Link href={"/reservation"}>RESERVATION</Link>
      <Link href={"/qna"}>QnA</Link>
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
