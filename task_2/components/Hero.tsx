"use import requests from "@/app/requests";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Movie {
  backdrop_path: string;
  title: string;
  // Add other properties as needed
}

export const Hero = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)] as Movie;

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      {
        setMovies(res.data.results);
      }
    });
  }, []);

  //   console.log(movie, "Heello");
  return (
    <div className='w-full h-[350px] md:h-[600px]'>
      <div className='w-full h-full border'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          width={1920}
          height={500}
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
};
