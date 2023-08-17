import DonutWrapper from './DonutWrapper';
import { Record } from '../Activities';


interface DProps {
  records: Record[]
}

const Display: React.FC<DProps> = ({ records }) => {
  return (
    <div id="display-container">
      <div id="percent-disp">Percentage display</div>
      <div id="donut-disp"><DonutWrapper records={records} /></div>
      <div id="bar-disp">Bar Chart</div>
    </div>
  )
}

export default Display