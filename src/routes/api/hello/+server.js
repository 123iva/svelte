export function GET(request) {
	console.log(request);
	const name = request.url.searchParams.get('name') || 'World';
	return new Response(`Helloo ${name}!`);
}
