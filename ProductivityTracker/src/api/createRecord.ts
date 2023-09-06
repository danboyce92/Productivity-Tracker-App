import { url } from "./config"

export async function createRecord(name: string, category: string | undefined, duration: number, date: Date, timestamp: number) {
  await fetch(`${url}/newrecord`, {
    method: "POST",
    body: JSON.stringify({
      name,
      category,
      duration,
      date,
      timestamp,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
}