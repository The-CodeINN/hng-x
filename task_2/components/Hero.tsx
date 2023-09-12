'use client'

import requests from '@/app/requests';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from './Button';
import { PlayCircle } from 'lucide-react';
import { getPopularMovies } from '@/app/requests';

interface Movie {
  backdrop_path: string;
  title: string;
  name: string;
  overview: string;
  vote_average: number;
}

export const Hero = async () => {
  const movies = await getPopularMovies();

  const movie = movies[Math.floor(Math.random() * movies.length)] as Movie;
  console.log(movie, movies);

  // console.log(movie, "Heello");
  return (
    <div className='w-full h-[450px] md:h-full'>
      <div className='w-full h-full border'>
        <div className='absolute w-full h-[450px] md:h-full bg-gradient-to-l from-gray-900/40 to-[#010511]'></div>
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          width={1920}
          height={500}
          className='w-full h-full object-cover'
        />
        <div className='absolute top-36 md:top-[35%] md:px-16 px-4 space-y-3 md:space-y-6 text-white'>
          <h1 className='text-white text-md md:text-4xl font-bold'>
            {movie?.title}
          </h1>
          <div className='flex items-center gap-x-3 text-sm md:text-md'>
            <div className='flex items-center gap-x-2'>
              <Image
                src='https://img.icons8.com/color/48/imdb.png'
                width={48}
                height={48}
                alt='IMDb'
                className='w-10 h-10'
              />
              {movie?.vote_average} / 100
            </div>
            <div className='flex items-center gap-x-2'>
              <Image
                src='https://img.icons8.com/emoji/48/tomato-emoji.png'
                width={48}
                height={48}
                alt='Tomato'
                className='w-10 h-10'
              />
              {movie?.vote_average * 10}%
            </div>
          </div>
          <p className=' line-clamp-5 md:line-clamp-none text-sm md:text-xl w-full lg:max-w-[55%] xl:max-w-[60%]'>
            {movie?.overview}
          </p>
          <Button className='w-auto rounded-md bg-[#BE123C]'>
            <div className='flex items-center space-x-2 text-white text-md md:text-lg font-bold cursor-pointer hover:text-gray-300 transition-all duration-300 ease-in-out'>
              <PlayCircle />
              <span>Watch Now</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
