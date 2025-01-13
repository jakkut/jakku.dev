import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
	projectId: "sg4s22il",
	dataset: "production",
	apiVersion: "2021-10-21",
	useCdn: false
});


const builder = imageUrlBuilder(sanityClient);

export function urlForImage(source: any) {
	return builder.image(source);
}
