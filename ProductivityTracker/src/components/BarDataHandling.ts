import { Record } from "./Activities";

export interface BarData {
  name: string;
  totalDuration: number;
}

const now = Date.now();
const lastWeek = now - 604800000;

export const organiseBarData = (records: Record[]) => {
  let data: BarData[] = [];

  for (let record of records) {
    if (record.timestamp > lastWeek) {
      // Find an existing entry for the category
      const existingEntry = data.find(entry => entry.name === record.category);

      if (existingEntry) {
        // Update the totalDuration for the existing entry
        existingEntry.totalDuration += record.duration;
      } else {
        // Create a new entry for the category
        data.push({
          name: record.category,
          totalDuration: record.duration,
        });
      }
    }
  }

  return data;
};