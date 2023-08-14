export interface Activity {
  _id: string,
  name: string,
  category: string,
  __v: number
}

export async function getActivities() {
  const response = await fetch("http://localhost:7000/activities")
  return response.json();
}