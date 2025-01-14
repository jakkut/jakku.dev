import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

import { sanityClient } from "$lib/config/sanity";
import { getBioPageQuery } from "$lib/utils/queries";

export const load: PageServerLoad = async () => {
	const query = getBioPageQuery();
	const data = await sanityClient.fetch(query);

	if (data === undefined) {
		return {
			status: 500,
			body: new Error("Internal Server Error")
		};
	}

	return { page: data[0] }; // There should ALWAYS be exactly 1 element
};
