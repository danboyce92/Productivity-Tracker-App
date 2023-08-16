import { useState, useEffect } from 'react';
import { getRecords } from '../api/getRecords';
import { deleteRecord } from '../api/deleteRecord';

interface Record {
  _id: string,
  name: string,
  category: string,
  duration: number,
  date: Date,
  __v: number,
}

const Activities = () => {
  const [records, setRecords] = useState<Record[]>([]);


  // export async function getActivities() {
  //   const response = await fetch("http://localhost:7000/activities")
  //   return response.json();
  // }

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

  const recordsMap = records.reverse().map(record => {
    return (
      <div className="card" key={record._id}>
        <div className="card-title">{record.name}</div>
        <div onClick={() => {deleteCurrentRecord(record._id)}} className="card-del">X</div>
        <div className="card-info card-category">{record.category}</div>
        <div className="card-info">{record.duration}</div>
        <div className="card-info">{record.date.toString().slice(0, 10)}</div>   
      </div>
    )
  })

  return (
    <div id="activities">
      <div id="activities-title">Activities</div>
      <div id="activities-display">
        <div id="current-activities">
          Latest Activities
        </div> 
        <div>{recordsMap}</div>
      </div>
    </div>
  )
}

export default Activities;
