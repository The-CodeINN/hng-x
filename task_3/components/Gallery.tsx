import fetchImages from '@/lib/fetchImages';
import type { ImagesResults } from '@/models/Images';
import ImgContainer from './ImgContainer';
import addBlurredDataUrls from '@/lib/getBase64';

export default async function Gallery() {
  const url = 'https://api.pexels.com/v1/curated';

  const images: ImagesResults | undefined = await fetchImages(url);

  // console.log(images);

  if (!images)
    return <h2 className='m-4 text-2xl font-bold'>No image found</h2>;

  const photoWithBlurredDataUrls = await addBlurredDataUrls(images);

  return (
    <section className='my-3 grid gap-2 grid-cols-gallery'>
      {photoWithBlurredDataUrls.map((photo) => (
        <ImgContainer photo={photo} key={photo.id} />
      ))}
    </section>
  );
}
