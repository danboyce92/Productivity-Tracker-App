import { url } from "./config";

export async function createActivity(name: string, category: string) {
  const response = await fetch(`${url}/newactivity`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        category: category,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    return response.json();
}