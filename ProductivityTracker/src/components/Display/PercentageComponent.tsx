import React, { useState, useEffect } from 'react'
import { Record } from '../Activities';


interface PercentageProps {
  thisWeekR: Record[]
  lastWeekR: Record[]
}

const PercentageComponent: React.FC<PercentageProps> = ({ thisWeekR, lastWeekR }) => {
  const [percentage, setPercentage] = useState<number>(0)
  const [posOrNeg, setPosOrNeg] = useState('black');

  const totalTimeAccumulator = (thisWeek: Record[], lastWeek: Record[]) => {
    let thisWeekTotal = 0;
    let lastWeekTotal = 0;
    
    for (let record of thisWeek) {
      thisWeekTotal += record.duration;
    }
    for (let record of lastWeek) {
      lastWeekTotal += record.duration;
    }

    const difference = thisWeekTotal - lastWeekTotal;
    if (lastWeekTotal === 0) {
      if (difference > 0) {
        return Infinity; // First number is infinitely higher
      } else if (difference < 0) {
        return -Infinity; // Second number is infinitely higher
      } else {
        return 0; // Both numbers are equal
      }
    }
    if (difference > 0) {
      setPosOrNeg('green');
    }
    if (difference < 0) {
      setPosOrNeg('red');
    }

    const percentage = (difference / lastWeekTotal) * 100;
    return percentage;

  }

  useEffect(() => {
    
    setPercentage(totalTimeAccumulator(thisWeekR, lastWeekR));
    console.log(percentage)
  },[thisWeekR])


  return (
    <div id="perc-component">
      <div id="text">Week-to-Week Progress</div>
      <div className={`text-${posOrNeg}`} id="percentage">{percentage.toFixed(2)}% <br/> 
      
      </div>
      {posOrNeg === 'green' && 
        'Increase '
      }
      {posOrNeg === 'red' &&
        'Decrease '
      }
      <br/>
      since last week
      
    </div>
  )
}

export default PercentageComponent;