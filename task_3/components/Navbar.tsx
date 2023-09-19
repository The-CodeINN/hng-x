"use client"

import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import SeachInput from "./Seachinput";

const Navbar = () => {
  return (
    <nav className='flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 text-white bg-black-100'>
      <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
        <Link href='/'>
          <Image
            src='/tv.png'
            alt='Next.js logo'
            width={50}
            height={50}
            className='cursor-pointer'
          />
        </Link>

        
          <SeachInput />
        

        <MobileNav />

        <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
          <li className='body-text text-gradient_blue-purple !font-bold'>
            <Link href='/' target='_blank'>
              Home
            </Link>
          </li>
          <li className='body-text text-gradient_blue-purple !font-bold'>
            <Link href='/' target='_blank'>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
