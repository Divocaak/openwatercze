export const load = async ({ params, fetch }) => {

    const result = await fetch("/api/articlesAll");
    const data = await result.json();

    return { articles: data }
}