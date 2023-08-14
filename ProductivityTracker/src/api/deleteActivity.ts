export async function deleteActivity(activityId: string) {
  await fetch(`http://localhost:7000/activities/${activityId}`, {
      method: "DELETE",
  });
}