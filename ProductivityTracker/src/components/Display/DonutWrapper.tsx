import { useEffect, useRef } from 'react';

import Donut from './Donut';
import { Record } from '../Activities';

interface DProps {
  records: Record[];
}

const ChartWrapper: React.FC<DProps> = ({ records }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Clear any existing chart content
    const chartContainer = chartRef.current;
    while (chartContainer && chartContainer.firstChild) {
      chartContainer.removeChild(chartContainer.firstChild);
    }

    // Render the new Donut chart
    if (records.length > 0) {
      new Donut(chartRef.current, records);
    }
  }, [records]);

  return <div ref={chartRef}></div>;
};

export default ChartWrapper;
