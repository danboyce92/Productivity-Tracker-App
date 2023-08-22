import { useState, useEffect } from 'react';
import { getRecords } from '../api/getRecords';
import { deleteRecord } from '../api/deleteRecord';

import LatestActivities from './LatestActivities';
import Display from './Display/Display';
import { getRecordsP1, getRecordsP2, getRecordsP3, getRecordsP4, getRecordsP5, getRecordsP6, getRecordsP7 } from '../api/getRecordsP1';
import { StackedData, getLast7DaysDates, searchIndivDay } from './StackedDataHandling';

export interface Record {
  _id: string,
  name: string,
  category: string,
  duration: number,
  date: Date,
  timestamp: number,
  __v: number,
}

const Activities = () => {
  const [records, setRecords] = useState<Record[]>([]);
  const [displayActive, setDisplayActive] = useState(true);
  const [datesArr, setDatesArr] = useState<string[]>([]);
  const [stackedData, setStackedData] = useState<StackedData[]>([]);

  const retrieveRecords = async () => {
    const array = await getRecords();
    setRecords(array.reverse());

    const currentDatesArr = getLast7DaysDates();

    const [
      p1Arr, p2Arr, p3Arr, p4Arr, p5Arr, p6Arr, p7Arr
    ] = await Promise.all([
      getRecordsP1(), getRecordsP2(), getRecordsP3(),
      getRecordsP4(), getRecordsP5(), getRecordsP6(), getRecordsP7()
    ]);

    const updatedStackedData = [
      ...stackedData,
      searchIndivDay(p1Arr, 7),
      searchIndivDay(p2Arr, 6),
      searchIndivDay(p3Arr, 5),
      searchIndivDay(p4Arr, 4),
      searchIndivDay(p5Arr, 3),
      searchIndivDay(p6Arr, 2),
      searchIndivDay(p7Arr, 1),
    ];

    setStackedData(updatedStackedData);
  }


  const deleteCurrentRecord = (recordId: string) => {
    deleteRecord(recordId);
    setRecords(records.filter((record) => record._id !== recordId))
  }

  useEffect(() => {
    setDatesArr(getLast7DaysDates());
  }, []);

  useEffect(() => {
    retrieveRecords();
  }, [datesArr]);

  useEffect(() => {
    console.log(stackedData);
  }, [stackedData.length]);


  return (
    <div id="activities">
      <div id="activities-title">Activities</div>
      { displayActive &&
      <>
      <button className='activities-button' id="disp-button" onClick={() => {setDisplayActive(!displayActive)}}>Display</button>
      <LatestActivities records={records} deleteRecord={deleteCurrentRecord} />
      </>
      }

      { !displayActive &&
      <>
      <button className='activities-button' id="rec-button" onClick={() => {setDisplayActive(!displayActive)}}>Records</button>
      <Display records={records} stackedD={stackedData} />     
      </>

      }
      


    </div>
  )
}

export default Activities;
