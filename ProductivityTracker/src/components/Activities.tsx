import { useState, useEffect } from 'react';
import { getRecords } from '../api/getRecords';
import { deleteRecord } from '../api/deleteRecord';

import LatestActivities from './LatestActivities';
import Display from './Display';

export interface Record {
  _id: string,
  name: string,
  category: string,
  duration: number,
  date: Date,
  __v: number,
}

const Activities = () => {
  const [records, setRecords] = useState<Record[]>([]);
  const [displayActive, setDisplayActive] = useState(true);

  const retrieveRecords = async () => {
    const array = await getRecords();

    setRecords(array);
    console.log(array);
  }

  const deleteCurrentRecord = (recordId: string) => {
    deleteRecord(recordId);
    setRecords(records.filter((record) => record._id !== recordId))
  }

  useEffect(() => {
    retrieveRecords();
  },[])



  return (
    <div id="activities">
      <div id="activities-title">Activities</div>
      { !displayActive &&
      <>
      <button className='activities-button' id="disp-button" onClick={() => {setDisplayActive(!displayActive)}}>Display</button>
      <LatestActivities records={records} deleteRecord={deleteCurrentRecord} />
      </>
      }

      { displayActive &&
      <>
      <button className='activities-button' id="rec-button" onClick={() => {setDisplayActive(!displayActive)}}>Records</button>
      <Display />     
      </>

      }
      


    </div>
  )
}

export default Activities;
