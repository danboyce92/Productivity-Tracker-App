export async function createActivity(name: string, category: string) {
  const response = await fetch("http://localhost:7000/newactivity", {
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