export async function GET(request, { params }) {
    // display the params
    console.log(params.blog);
    return Response.json({ message: "Heelo, from API", params: params.blog});
}