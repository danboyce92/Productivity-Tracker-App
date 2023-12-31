import { url } from "./config";

export interface Activity {
  _id: string,
  name: string,
  category: string,
  __v: number
}

export async function getActivities() {
  const response = await fetch(`${url}/activities`)
  return response.json();
}