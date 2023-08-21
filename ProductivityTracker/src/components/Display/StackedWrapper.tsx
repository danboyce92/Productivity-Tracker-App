import React, { useState } from 'react';


import StackedBarChart from './StackedBarChart';

import { StackedData } from '../StackedDataHandling';

export interface EmojiColors {
  [fruit: string]: string;
}

export interface EmojiItem {
  [index: number]: string,
}

export interface Statistic {
  year: number,
  avocado: number,
  banana: number,
  aubergine: number,
}

export interface DailyCategory {
  day: string,
  programming: number,
  music: number,
  language: number,
  exercise: number,
}

interface SProps {
  stackedD: StackedData[];
}

// const data: Statistic[] = [
//   {
//     year: 1960,
//     avocado: 10,
//     banana: 20,
//     aubergine: 30,
//   },
//   {
//     year: 1970,
//     avocado: 30,
//     banana: 45,
//     aubergine: 80,
//   },
//   {
//     year: 1980,
//     avocado: 10,
//     banana: 20,
//     aubergine: 30,
//   },
//   {
//     year: 1990,
//     avocado: 20,
//     banana: 40,
//     aubergine: 60,
//   },
//   {
//     year: 2000,
//     avocado: 30,
//     banana: 45,
//     aubergine: 80,
//   },
//   {
//     year: 2010,
//     avocado: 40,
//     banana: 60,
//     aubergine: 100,
//   },
//   {
//     year: 2020,
//     avocado: 50,
//     banana: 80,
//     aubergine: 120,
//   },
// ];

const allKeys = ['avocado', 'banana', 'aubergine'];

const colors: EmojiColors = {
  avocado: 'green',
  banana: 'orange',
  aubergine: 'purple',
};

const StackedWrapper: React.FC<SProps> = ({ stackedD }) => {
  const [keys, setKeys] = useState(allKeys);
  return (
    <React.Fragment>
      <h2>Last 7 days</h2>
      <StackedBarChart data={stackedD} keys={keys} colors={colors} />

      <div className="fields">
        {allKeys.map((key) => (
          <div key={key} className="field">
            <input
              id={key}
              type="checkbox"
              checked={keys.includes(key)}
              onChange={(e) => {
                if (e.target.checked) {
                  setKeys(Array.from(new Set([...keys, key])));
                } else {
                  setKeys(keys.filter((_key) => _key !== key));
                }
              }}
            />
            <label htmlFor={key} style={{ color: colors[key] }}>
              {key}
            </label>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default StackedWrapper;
