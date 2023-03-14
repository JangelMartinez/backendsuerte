/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */



export default {
	async fetch(request, env) {
		const { pathname } = new URL(request.url);

		function rawHtmlResponse(html) {
			return new Response(html, {
				headers: {
					'content-type': 'text/html;charset=UTF-8',
				},
			});
		}

		async function readRequestBody(request) {
			const contentType = request.headers.get('content-type');
			
			if (contentType.includes('application/json')) {
				return await request.json();
			} else if (contentType.includes('application/text')) {
				return request.text();
			} else if (contentType.includes('text/html')) {
				return request.text();
			} else if (contentType.includes('form')) {
				const formData = await request.formData();
				const body = {};
				for (const entry of formData.entries()) {
					body[entry[0]] = entry[1];
				}
				return JSON.stringify(body);
			} else {
				// Perhaps some other type of data was submitted in the form
				// like an image, or some other binary data.
				return 'a file';
			}
		}

		console.log('env DB', env.DB)
		if (pathname === "/api/getAllOrders") {
			const { results } = await env.DB.prepare('SELECT * FROM orders').all();

			return Response.json(results);
		}

		if (pathname === "/api/newOrder") {
			const reqBody = await readRequestBody(request);

			console.log('reqBody', JSON.stringify(reqBody))

			const results = await env.DB.prepare('INSERT INTO orders (order_date) VALUES (?1)')
										.bind(reqBody.date)
										.run()
									.catch((err)=>{
										console.log('error:', err);
									})
			console.log('results', results)
			return Response.json(results)
		}

		return new Response(
			"Call /api/comandas to see everyone commandas"
		);
	},
};
