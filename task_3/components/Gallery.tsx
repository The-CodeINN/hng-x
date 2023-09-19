import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/Images";
import ImgContainer from "./ImgContainer";

export default async function Gallery() {
  const url = "https://api.pexels.com/v1/curated";

  const images: ImagesResults | undefined = await fetchImages(url);

  // console.log(images);

  if (!images)
    return <h2 className='m-4 text-2xl font-bold'>No image found</h2>;

  return (
    <section className='my-3 grid gap-2 grid-cols-gallery'>
      {images.photos.map((photo) => (
        <ImgContainer photo={photo} key={photo.id} />
      ))}
    </section>
  );
}