import { getPlaiceholder } from "plaiceholder";
import type { Photo, ImagesResults } from "@/models/Images";

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
