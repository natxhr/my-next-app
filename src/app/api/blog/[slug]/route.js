export async function GET({ params }) {
    console.log(params.slug);
    return Response.json({ message: "Heelo, from API", params: params.slugs});
}