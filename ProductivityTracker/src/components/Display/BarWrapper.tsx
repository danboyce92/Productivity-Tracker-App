import BarChart from './BarChart'
import { BarData } from './BarDataHandling';


interface WrapperProps {
barData: BarData[]
}

const BarWrapper: React.FC<WrapperProps> = ({ barData }) => {
    return ( <BarChart id="bar-disp" barData={barData} /> )
}
export default BarWrapper;