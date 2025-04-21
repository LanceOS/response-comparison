import type { RequestEvent } from "./$types.js";

export async function GET({ request }: RequestEvent) {
    try {
        const response = await fetch('http://localhost:11434/api/tags', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response) return new Response(`No response data: ${response}`, { status: 500 });

        const data = await response.json()
        return new Response(JSON.stringify({ data: data.models }), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        return new Response(`Failed to get models ${error}`, { status: 404 });
    }
}
