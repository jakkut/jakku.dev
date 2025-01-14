import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

import { sanityClient } from "$lib/config/sanity";
import { getSingleProjectQuery } from "$lib/utils/queries";

export const load: PageServerLoad = async ({ params }) => {
    const query = getSingleProjectQuery(params.slug);
	const data = await sanityClient.fetch(query);

	if (data === undefined) {
        return {
            status: 404,
            body: new Error("Whoops!")
        };
	}

    return { 
        project: data[0]
    };
};
