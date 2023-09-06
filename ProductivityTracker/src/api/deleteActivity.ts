import { url } from "./config";

export async function deleteActivity(activityId: string) {
  await fetch(`${url}/activities/${activityId}`, {
      method: "DELETE",
  });
}