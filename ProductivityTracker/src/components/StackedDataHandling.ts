import { Record } from "./Activities";

// export interface StackedData {
//   daysAgo: number,
//   programming: number;
//   music: number;
//   language: number;
//   exercise: number;
// }



// export function getLast7DaysDates(): string[] {

//   const datesArray: string[] = [];

//   for (let i = 1; i <= 7; i++) {
//     const currentDate = new Date();
//     currentDate.setDate(currentDate.getDate() - i);

//     const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' };
//     const formattedDate = currentDate.toLocaleDateString('en-US', options);

//     datesArray.unshift(formattedDate);
//   }

//   return datesArray;
// }

//  getLast7DaysDates();

  // export const searchIndivDay = (day: Record[], date: number) => {
  //   //This function should return an object that has calculated the total duration of each category
    
  //   let dayObject: StackedData = {
  //     // day: date,
  //     daysAgo: date || 0,
  //     programming: 0,
  //     music: 0,
  //     language: 0,
  //     exercise: 0
  //   }

  //   for (let record of day) {
  //     if (record.category == 'Programming') {
  //       dayObject.programming += record.duration;
  //     }
  //     if (record.category == 'Music') {
  //       dayObject.music += record.duration;
  //     }
  //     if (record.category == 'Language') {
  //       dayObject.language += record.duration;
  //     }
  //     if (record.category == 'Exercise') {
  //       dayObject.exercise += record.duration;
  //     }
  //   }

  //   return dayObject;

  // }



// const stackedData = [
//   {
//     day: datesArray[0],
//     programming: 2,
//     music: 1,
//     language: 1,
//     exercise: 3
//   },
//   {
//     day: datesArray[1],
//     programming: 3,
//     music: 2,
//     language: .75,
//     exercise: 2.5
//   },
//   {
//     day: datesArray[2],
//     programming: 2.5,
//     music: 2,
//     language: 1,
//     exercise: 2.5,
//   },
//   {
//     day: datesArray[3],
//     programming: 3,
//     music: 2,
//     language: 1,
//     exercise: 3
//   },
//   {
//     day: datesArray[4],
//     programming: 3.5,
//     music: 2,
//     language: 1.5,
//     exercise: 2.5
//   },
//   {
//     day: datesArray[5],
//     programming: 3,
//     music: 3,
//     language: 1,
//     exercise: 2
//   },
//   {
//     day: datesArray[6],
//     programming: 4,
//     music: 1,
//     language: 2,
//     exercise: 2.5
//   },

// ]