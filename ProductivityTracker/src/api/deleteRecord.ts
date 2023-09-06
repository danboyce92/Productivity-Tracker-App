import { url } from "./config";

export async function deleteRecord(recordId: string) {
  await fetch(`${url}/records/${recordId}`, {
      method: "DELETE",
  });
}