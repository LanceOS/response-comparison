import type { RequestEvent } from "./$types.js";


export async function POST({ request }: RequestEvent) {
    try {
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              model: "llama2",
              prompt: prompt,
              stream: false 
            })
          });
          

        return new Response(JSON.stringify({ data: response }), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        })
    }
    catch(e) {
        console.log(e)
        return new Response(`Failed to create message: ${e}`, { status: 404 })
    }
}
