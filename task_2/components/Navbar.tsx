'use client';

import Image from 'next/image';
import { Input } from './Input';
import { MenuIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<Boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'flex items-center justify-between maxWidthSection z-[100] absolute w-full text-white py-6',
        isScrolled && 'bg-[#141414]/70'
      )}
    >
      <div className='flex items-center gap-x-2 cursor-pointer'>
        <Image src='/assets/logo.png' alt='Logo' width={50} height={50} />
        <h1 className='font-bold md:text-xl'>MovieBox</h1>
      </div>
      <div className='w-1/3 hidden md:flex'>
        <Input
          type='search'
          className='border-white border-2 rounded-full'
          placeholder='What do you want to watch?'
        />
      </div>
      <nav className='flex items-center gap-x-4'>
        <h1 className='font-bold md:text-xl cursor-pointer'>Sign In</h1>
        <div className='p-2 bg-[#BE123C] rounded-full cursor-pointer'>
          <MenuIcon className='text-white' />
        </div>
      </nav>
    </header>
  );
};
