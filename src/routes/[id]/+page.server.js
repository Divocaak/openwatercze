export const load = async ({ params, fetch }) => {

    const result = await fetch("/api/article?id=" + params.id);
    const data = await result.json();

    return { article: data }
}