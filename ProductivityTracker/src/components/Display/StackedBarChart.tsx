import React, { useEffect, useRef } from 'react';
import {
  select,
  scaleBand,
  axisBottom,
  stack,
  max,
  scaleLinear,
  axisLeft,
  stackOrderAscending,
  Axis,
  NumberValue
} from 'd3';
import useResizeObserver from './useResizeObserver';
import { EmojiColors } from './StackedWrapper';
import { StackedData } from '../StackedDataHandling';

interface StackedProps {
  data: StackedData[];
  keys: string[];
  colors: EmojiColors;
}

/**
 * Component that renders a StackedBarChart
 */

const StackedBarChart: React.FC<StackedProps> = ({ data, keys, colors }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const dimensions = useResizeObserver(wrapperRef);


  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const { width, height } =
      dimensions || wrapperRef.current?.getBoundingClientRect() || { width: 0, height: 0 };

    // stacks / layers
    const stackGenerator = stack().keys(keys).order(stackOrderAscending);

    // Transform your data into the format expected by the stack generator
    const transformedData = data.map(item => ({
      ...keys.reduce((acc, key) => {
        acc[key] = item[key as keyof StackedData];
        return acc;
      }, {} as Record<string, number>)
    }));

    // Use the transformedData for stacking
    const stackGeneratorInstance = stack().keys(keys).order(stackOrderAscending);
    const layers = stackGeneratorInstance(transformedData);


    // Calculate the extent with non-undefined values
    const extent = [
      0,
      max(layers, (layer) => max(layer, (sequence) => sequence[1])) || 0, // Provide a default value if max is undefined
    ].filter((value) => typeof value === 'number');

    // scales
    const xScale = scaleBand()
    .domain(data.map((d) => d.daysAgo.toString())) // Convert year to string
    .range([0, width])
    .padding(0.25);

    

    const yScale = scaleLinear().domain(extent).range([height, 0]);

    // rendering
    svg
      .selectAll('.layer')
      .data(layers)
      .join('g')
      .attr('class', 'layer')
      .attr('fill', (layer) => colors[layer.key])
      .selectAll('rect')
      .data((layer) => layer)
      .join('rect')
      .attr('x', (sequence) => {
        const xValue = sequence.data.daysAgo.toString();
        console.log(sequence.data) // Convert to string
        const xPosition = xScale(xValue);
        return xPosition !== undefined ? xPosition : 0; // Provide a default value if undefined
      })
.attr('width', xScale.bandwidth() / 2)
      .attr('y', (sequence) => yScale(sequence[1]))
      .attr('height', (sequence) => yScale(sequence[0]) - yScale(sequence[1]));




    // axes
    const xAxis: Axis<string> = axisBottom(xScale);
    svg
      .select<SVGSVGElement>('.x-axis')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis);

    const yAxis: Axis<NumberValue> = axisLeft(yScale);
    svg.select<SVGSVGElement>('.y-axis').call(yAxis);
  }, [colors, data, dimensions, keys]);

  return (
    <React.Fragment>
      <div ref={wrapperRef} style={{ marginBottom: '2rem' }}>
        <svg width={`66vw`} height={`20vh`} ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
    </React.Fragment>
  );
}

export default StackedBarChart;
