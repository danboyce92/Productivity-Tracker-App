import { useState, useEffect } from 'react';
import { getRecords } from '../api/getRecords';
import { deleteRecord } from '../api/deleteRecord';

import LatestActivities from './LatestActivities';
import Display from './Display/Display';
import { BarData, organiseBarData } from './Display/BarDataHandling';
// import { getRecordsP1, getRecordsP2, getRecordsP3, getRecordsP4, getRecordsP5, getRecordsP6, getRecordsP7 } from '../api/getRecordsP1';
// import { StackedData, getLast7DaysDates, searchIndivDay } from './StackedDataHandling';

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
  const [barData, setBarData] = useState<BarData[]>([])
  

  const retrieveRecords = async () => {
    const array = await getRecords();
    setRecords(array.reverse());

  }

  const deleteCurrentRecord = (recordId: string) => {
    deleteRecord(recordId);
    setRecords(records.filter((record) => record._id !== recordId))
  }




  useEffect(() => {
    retrieveRecords();
  }, []);

  useEffect(() => {
    setBarData(organiseBarData(records))
  }, [records]);


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
      <Display records={records} barData={barData} />     
      </>

      }
      


    </div>
  )
}

export default Activities;
