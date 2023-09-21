import { getPlaiceholder } from 'plaiceholder';
import type { Photo, ImagesResults } from '@/models/Images';

async function getBase64(imageUrl: string) {
  try {
    const response = await fetch(imageUrl);

    if (!response.ok)
      throw new Error(
        `Failed to fetch image: ${response.status} ${response.statusText}`
      );

    const buffer = await response.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (error) {
    if (error instanceof Error) console.log(error.stack);
  }
}

export default async function addBlurredDataUrls(
  images: ImagesResults
): Promise<Photo[]> {
  // Make all requests at once, avoid waiting for each one to finish

  const base64Promises = images.photos.map((photo) =>
    getBase64(photo.src.large)
  );

  // Resolve all promises in order
  const base64Results = await Promise.all(base64Promises);

  const photosWithBlurredDataUrls: Photo[] = images.photos.map(
    (photo, index) => {
      photo.blurredDataUrl = base64Results[index];
      return photo
    }
  );
  return photosWithBlurredDataUrls;
}
