"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary sticky top-0 left-0 z-[80] ">
      <section className=" flex justify-between py-4 mx-auto container items-center px-4">
        <ul
          className={
            "lg:flex hidden gap-x-5 flex-1 font-[600] text:sm lg:text-sm 2xl:text-lg"
          }
        >
          <li>
            <Link href="#">Home</Link>
          </li>
          <li className={"text-secondary"}>
            <Link href="#">Partners</Link>
          </li>
          <li>
            <Link href="#">How to play</Link>
          </li>
          <li>
            <Link href="#">FAQs</Link>
          </li>
        </ul>
        <div className="relative w-40 h-8">
          <Image src={"/assets/svg/logo.svg"} alt={"logo"} fill />
        </div>
        <ul
          className={"hidden lg:flex gap-x-7 flex-1 justify-end items-center"}
        >
          <li>
            <Link href="#">
              <Image
                src={"/assets/svg/socials/x.svg"}
                alt={"x"}
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link href="/#">
              <Image
                src={"/assets/svg/socials/tiktok.svg"}
                alt={"tiktok"}
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link href="/#">
              <Image
                src={"/assets/svg/socials/youtube.svg"}
                alt={"youtube"}
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link href="/#">
              <Image
                src={"/assets/svg/socials/instagram.svg"}
                alt={"instagram"}
                width={20}
                height={20}
              />
            </Link>
          </li>
        </ul>
        <div className="text-white lg:hidden font-bold text-2xl">
          <Menu size={32} color="white" onClick={() => setIsOpen(!isOpen)} />
        </div>
      </section>

      {/* Mobile Nav  Menu */}
      <div
        className={`z-[80] top-0 left-0 w-full bg-secondary  text-black text-sm font-[700] transition-all duration-300 ease-in-out overflow-hidden origin-top transform ${
          isOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none hidden"
        } `}
      >
        <ul className={`py-4 px-4 shadow-lg rounded-lg flex flex-col gap-y-4 `}>
          <li>Home</li>
          <li>Partners</li>
          <li>How to play</li>
          <li>FAQs</li>
        </ul>
      </div>
    </nav>
  );
};
