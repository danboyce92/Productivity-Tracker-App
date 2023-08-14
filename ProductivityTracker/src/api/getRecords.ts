

export async function getRecords() {
  const response = await fetch("http://localhost:7000/records")
  return response.json();
}