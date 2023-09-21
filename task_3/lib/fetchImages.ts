import type { ImagesResults } from "@/models/Images";
import { ImageSchemaWithPhotos } from "@/models/Images";
import env from "./env";

export default async function fetchImages(
  url: string
): Promise<ImagesResults | undefined> {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_API_KEY,
      },
    });

    if (!response.ok) throw new Error("Fetch Images Error!\n");

    const imagesResults: ImagesResults = await response.json();
    //     console.log(imagesResults);

    //   Parse data with zod
    const parsedData = ImageSchemaWithPhotos.parse(imagesResults);

    if (parsedData.total_results === 0) return undefined;

    return parsedData;
  } catch (error) {
    if (error instanceof Error) console.log(error.stack);
  }
}
