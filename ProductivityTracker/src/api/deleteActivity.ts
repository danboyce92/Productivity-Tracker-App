import { url } from "./config";

export async function deleteActivity(activityId: string) {
  await fetch(`${url}:7000/activities/${activityId}`, {
      method: "DELETE",
  });
}