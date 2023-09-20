"use client";

import React from "react";
import { useDraggable } from "@dnd-kit/core";
import type { Photo } from "@/models/Images";
import Image from "next/image";

type Props = {
  photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `photo-${photo.id}`,
  });

  return (
    <div
      ref={setNodeRef}
      className='w-[250px] justify-self-center'
      style={{
        gridRow: `span ${photoSpans}`,
        transform: `translate(${transform?.x}px, ${transform?.y}px)`, // Apply transform directly
      }}
      {...listeners}
      {...attributes}
    >
      <div className='grid place-content-center'>
        <div className='rounded-xl overflow-hidden group'>
          <Image
            src={photo.src.large}
            alt={photo.alt}
            width={250}
            height={galleryHeight}
            sizes='250px'
            placeholder='blur'
            blurDataURL={photo.blurredDataUrl}
            className='group-hover:opacity-75 transition-opacity duration-200 ease-in-out'
          />
        </div>
      </div>
    </div>
  );
}
