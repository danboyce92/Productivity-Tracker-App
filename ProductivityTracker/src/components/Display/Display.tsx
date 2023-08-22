import { useState, useEffect } from 'react';
import DonutWrapper from './DonutWrapper';
import { Record } from '../Activities';
import StackedWrapper from './StackedWrapper';
import { StackedData } from '../StackedDataHandling';


export interface DProps {
  records: Record[];
  stackedD: StackedData[];
}

const Display: React.FC<DProps> = ({ records, stackedD }) => {
  const [thisWeekRecords, setThisWeekRecords] = useState<Record[]>([]);

  const calculateLastWeek = () => {
    const now = Date.now();
    const lastWeek = now - 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
  
    return records.filter(record => record.timestamp > lastWeek);
  }





  useEffect(() => {
    const filteredRecords = calculateLastWeek();

    setThisWeekRecords(filteredRecords);
  }, [records])

  return (
    <div id="display-container">
      <div id="percent-disp">Percentage display</div>
      <div id="donut-disp"><DonutWrapper records={thisWeekRecords} /></div>
      <div id="bar-disp"><StackedWrapper stackedD={stackedD} /></div>
    </div>
  )
}

export default Display