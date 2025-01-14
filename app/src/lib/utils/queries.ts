export const getBioPageQuery = () => {
	return `*[_type == "bio"]`;
};

export const getSingleProjectQuery = (slug: string) => {
	return `*[_type == "project" && slug.current == "${slug}"]{
        title,
        content,
        screenshots
    }`;
};

export const getAllProjectsQuery = () => {
	return `*[_type == "project"] | order(orderingNumber) {
        title,
        "slug": slug.current,
        thumbnail,
    }`;
};
