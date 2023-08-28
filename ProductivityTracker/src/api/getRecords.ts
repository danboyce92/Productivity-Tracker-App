import { url } from "./config";
//@ts-ignore
import proxy from '../../vercel/functions/proxy.js';

export async function getRecords() {
  const response = await fetch(`${proxy}`)
  return response.json();
}