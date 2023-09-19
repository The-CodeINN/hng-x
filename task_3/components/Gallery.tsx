import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/Images";
import ImgContainer from "./ImgContainer";
import addBlurredDataUrls from "@/lib/getBase64";

type Props = {
  topic?: string | undefined;
  page?: string | undefined;
};

export default async function Gallery({ topic = "curated", page }: Props) {
  let url;
  // browsing beyond home
  if (topic === "curated" && page) {
    url = `https://api.pexels.com/v1/curated?page=${page}`;
  } else if (topic === "curated") {
    url = "https://api.pexels.com/v1/curated";
  } else if (!page) {
    url = `https://api.pexels.com/v1/search?query=${topic}`;
  } else {
    url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`;
  }

  const images: ImagesResults | undefined = await fetchImages(url);

  // console.log(images);

  if (!images || images.per_page === 0)
    return <h2 className='m-4 text-2xl font-bold'>No image found</h2>;

  const photoWithBlurredDataUrls = await addBlurredDataUrls(images);

  // calculate

  return (
    <section className='px-1 my-3 grid grid-cols-gallery auto-rows-[10px]'>
      {photoWithBlurredDataUrls.map((photo) => (
        <ImgContainer photo={photo} key={photo.id} />
      ))}
    </section>
    // add footer
  );
}
