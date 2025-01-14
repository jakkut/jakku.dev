import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

import { sanityClient } from "$lib/config/sanity";
import { getAllProjectsQuery } from "$lib/utils/queries";

export const load: PageServerLoad = async () => {
    const query = getAllProjectsQuery()
	const data = await sanityClient.fetch(query);

    if (data === undefined) {
        return {
            status: 500,
            body: new Error("Internal Server Error")
        };
	}

    return { projects: data };
};
