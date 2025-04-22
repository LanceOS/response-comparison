import type { RequestEvent } from "./$types.js";

/**
 * 
 * @param param0 model and prompt need to be passed to create message
 * @returns Message from the AI
 */
export async function POST({ request }: RequestEvent) {

    const { model, prompt } = await request.json()

    try {
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              model: model,
              prompt: prompt,
              stream: false 
            })
        });

        const data = await response.json()

        if(!data) {
            return new Response(`Failed to get LLM response ${JSON.stringify(data)}`, { status: 500 })
        }

        return new Response(JSON.stringify(data), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        })
    }
    catch(e: any) {
        console.log(e)
        return new Response(`Failed to create message: ${e.message}`, { status: 404 })
    }
}
