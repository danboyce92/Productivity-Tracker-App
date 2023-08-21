//This ungodly mess requests all activities, specifically from each day individually.

export async function getRecordsP1() {
  const response = await fetch("http://localhost:7000/records/prev7")
  return response.json();
}

export async function getRecordsP2() {
  const response = await fetch("http://localhost:7000/records/prev6")
  return response.json();
}

export async function getRecordsP3() {
  const response = await fetch("http://localhost:7000/records/prev5")
  return response.json();
}

export async function getRecordsP4() {
  const response = await fetch("http://localhost:7000/records/prev4")
  return response.json();
}

export async function getRecordsP5() {
  const response = await fetch("http://localhost:7000/records/prev3")
  return response.json();
}

export async function getRecordsP6() {
  const response = await fetch("http://localhost:7000/records/prev2")
  return response.json();
}

export async function getRecordsP7() {
  const response = await fetch("http://localhost:7000/records/prev1")
  return response.json();
}