import { url } from "./config";

export async function deleteRecord(recordId: string) {
  await fetch(`${url}:7000/records/${recordId}`, {
      method: "DELETE",
  });
}