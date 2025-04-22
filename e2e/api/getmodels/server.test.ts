import { test, expect } from "@playwright/test"

test('Get local llm model', async ({ request }) => {

    const response =  await request.get("http://localhost:5173/api/getmodels");
    expect(response.status()).toBe(200);
    

    const json = await response.json();


    json.data.forEach(item => {
        expect(item).toHaveProperty("name")
        expect(item).toHaveProperty("model")
        expect(item).toHaveProperty("modified_at")
        expect(item).toHaveProperty("size")
        expect(item).toHaveProperty("digest")
        expect(item).toHaveProperty("details")
        expect(item).toBeTruthy()
    })
})
