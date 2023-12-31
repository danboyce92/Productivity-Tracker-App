import { useState, useEffect } from 'react';
import DonutWrapper from './DonutWrapper';
import { Record } from '../Activities';
import BarWrapper from './BarWrapper';
import { BarData } from './BarDataHandling';
import PercentageComponent from './PercentageComponent';


export interface DProps {
  records: Record[];
  barData: BarData[];
}

const Display: React.FC<DProps> = ({ records, barData }) => {
  const [thisWeekRecords, setThisWeekRecords] = useState<Record[]>([]);
  const [lastWeekRecords, setLastWeekRecords] = useState<Record[]>([]);

  const calculateLastWeek = () => {
    const now = Date.now();
    const lastWeek = now - 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    return records.filter(record => record.timestamp > lastWeek);
  }

  const calculateTwoWeeksAgo = () => {
    const now = Date.now();
    const lastWeek = now - 604800000;
    const twoWeeksAgo = now - (604800000 * 2);
    return records.filter(record => record.timestamp > twoWeeksAgo && record.timestamp < lastWeek);
  }





  useEffect(() => {
    const filteredRecords = calculateLastWeek();
    setThisWeekRecords(filteredRecords);
    const lastFilteredRecords = calculateTwoWeeksAgo();
    setLastWeekRecords(lastFilteredRecords);
  }, [records])

  return (
    <div id="display-container">
      <div id="percent-disp"><PercentageComponent thisWeekR={thisWeekRecords} lastWeekR={lastWeekRecords} /></div>
      <div id="donut-disp"><DonutWrapper records={thisWeekRecords} /></div>
      <div id="bar-disp"><BarWrapper barData={barData} /></div>
    </div>
  )
}

export default Display