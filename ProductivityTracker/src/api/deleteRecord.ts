export async function deleteRecord(recordId: string) {
  await fetch(`http://localhost:7000/records/${recordId}`, {
      method: "DELETE",
  });
}