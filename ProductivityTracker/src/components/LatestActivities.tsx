import { Record } from "./Activities"
import { colorAssign } from './colorAssigner';

interface LAProps {
  records: Record[]
  deleteRecord: (recordId: string) => void;
}

const LatestActivities: React.FC<LAProps> = ({ records, deleteRecord }) => {



  const recordsMap = records.map(record => {
    return (
      <div id="card" className={`border-8 ${colorAssign(record)}`} key={record._id}>
        <div className="card-title">{record.name}</div>
        <div onClick={() => {deleteRecord(record._id)}} className="card-del">X</div>
        <div className="card-info card-category">{record.category}</div>
        <div className="card-info">{record.duration} hour(s)</div>
        <div className="card-info">{record.date.toString().slice(0, 10)}</div>   
      </div>
    )
  })


  return (
    <>
        <div id="activities-display">
        <div id="current-activities">
          Latest Activities
        </div> 
        <div id="record-flex">{recordsMap}</div>
      </div>
    </>
  )
}

export default LatestActivities;