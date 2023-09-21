"use client";
import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";

const SeachInput = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/results/${search}`);
    setSearch("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='md:w-[50%] md:h-14 h-10'>
        <Input
          placeholder='Search for a picture'
          className='h-full border placeholder:text-base'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </>
  );
};

export default SeachInput;
