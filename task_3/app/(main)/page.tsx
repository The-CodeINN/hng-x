"use client"

import Gallery from "@/components/Gallery";
import { DndContext } from "@dnd-kit/core";
export default function Home() {
  return (
    <section className='w-full'>
      <DndContext>
        <Gallery />
      </DndContext>
    </section>
  );
}
