import { url } from "./config";

export async function getRecords() {
  const response = await fetch(`${url}/records`)
  return response.json();
}