import { url } from "./config";

export async function getRecords() {
  const response = await fetch(`${url}:7000/records`)
  return response.json();
}