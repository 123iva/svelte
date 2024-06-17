export function GET(request) {
    const name = request.params.name;
    return new Response(`Helloo ${name}!`);
}
