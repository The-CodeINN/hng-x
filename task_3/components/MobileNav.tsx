"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Menu, User, X } from "lucide-react";
import Image from "next/image";
// import { Button } from ".";

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navLinks = [
    {
      title: "Home",
      href: "/",
      icon: Home,
    },
    {
      title: "Login",
      href: "/",
      icon: User,
    },
  ];

  const onToggleMenu = () => {
    setShowMenu((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };
  return (
    <>
      <Menu onClick={onToggleMenu} className='md:hidden' />
      <div
        className={`md:hidden fixed left-0 top-0 z-10 h-full w-full transform duration-300 ease-linear bg-black-100 ${
          showMenu ? "translate-x-0 rounded-none" : "translate-x-full"
        }`}
      >
        <div className='flex items-center justify-between padding_section mt-10'>
          <Link href='/'>
            <Image
              src='/tv.png'
              alt='Next.js logo'
              width={50}
              height={50}
              className='cursor-pointer'
            />
          </Link>
          <button
            aria-label='Toggle Menu'
            onClick={onToggleMenu}
            className={`md:hidden border border-primary-pink_100 p-2 rounded-full duration-500 ${
              !showMenu && "-rotate-[360deg]"
            }
            `}
          >
            <X className='text-xl' />
          </button>
        </div>

        <nav className='flex flex-col mt-10 padding_section'>
          {navLinks.map((link, id) => (
            <Link
              href={link.href}
              key={id}
              className='flex items-center gap-x-2 font-semibold text-lg pt-6 group'
              onClick={onToggleMenu}
            >
              <link.icon
                className='text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300'
                aria-hidden='true'
              />
              {link.title}
            </Link>
          ))}
          {/* <div className='mt-10'>
            <Button className='py-4 px-14 rounded-md'>Register</Button>
          </div> */}
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
