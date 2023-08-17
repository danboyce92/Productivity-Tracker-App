import { useEffect, useRef } from 'react';
import { Record } from '../Activities';
import Donut from './Donut';

interface DProps {
  records: Record[]
}

const ChartWrapper: React.FC<DProps> = ({ records }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    new Donut(chartRef.current, records);
  }, []);

  return <div ref={chartRef}></div>;
};

export default ChartWrapper;
