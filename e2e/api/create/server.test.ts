import { test, expect } from "@playwright/test"


test('Get local llm model response', async ({ request }) => {

    const mockData = {
        model: "llama3.2:latest",
        prompt: "Hello"
    }

    const response =  await request.post("http://localhost:5173/api/create", {
        headers: {
            "Content-Type": "application/json"
        },
        data: mockData
    });
    expect(response.status()).toBe(200);
    

    const json = await response.json();

    expect(json).toHaveProperty("model")
    expect(json).toHaveProperty("created_at")
    expect(json).toHaveProperty("response")
    expect(json).toBeTruthy()
})
