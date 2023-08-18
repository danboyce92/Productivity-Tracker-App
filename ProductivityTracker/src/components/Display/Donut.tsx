import * as d3 from 'd3';
import { Arc, DefaultArcObject, PieArcDatum } from 'd3-shape';

import { Record } from '../Activities';

interface DurationByCategory {
  [category: string]: number;
}

const MARGIN = { TOP: 10, BOTTOM: 10, LEFT: 10, RIGHT: 10 };
const width = 400 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 300 - MARGIN.TOP - MARGIN.BOTTOM;


export default class D3 {
  constructor(element: Element | null, dataSet: Record[]) {
    const height = Math.min(width, 500);
    const radius = Math.min(width, height) / 2;

    const generateArcPath = (d: PieArcDatum<Record>) => arc({
      ...d,
      innerRadius: radius * 0.67,
      outerRadius: radius - 1
    }) as string;

    // Calculate the total duration from all activities
    const totalDurationAllActivities: number = dataSet.reduce(
      (total: number, activity: Record) => total + activity.duration,
      0
    );

    const sortedDataSet = [...dataSet].sort((a, b) => {
      if (a.category === b.category) {
        return a.name.localeCompare(b.name); // Sort activities within the same category by name
      }
      return a.category.localeCompare(b.category);
    });

    const arc: Arc<any, DefaultArcObject> = d3
      .arc()
      .innerRadius(radius * 0.67)
      .outerRadius(radius - 1);

    const pie = d3
      .pie<Record>()
      .padAngle(1 / radius)
      .sort(null)
      .value((d) => d.duration);

    const color = d3
      .scaleOrdinal<string>()
      .domain(sortedDataSet.map((d) => d.name))
      .range(
        d3
          .quantize(
            (t) => d3.interpolateSpectral(t / 2 + 0.4),
            dataSet.length
          )
          .reverse()
      );

    const svg: d3.Selection<SVGSVGElement, unknown, null, undefined> = d3
      .select(element)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [-width / 2, -height / 2, width, height]) 
      .attr('style', 'max-width: 100%; height: auto;');

      svg
      .append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .text('This week')
      .attr('id', 'center-text');

      svg
      .append('text')
      .attr('x', 0)
      .attr('y', 30)
      .attr('text-anchor', 'middle')
      .text(`Total Time: ${totalDurationAllActivities} Hours`)
      .attr('id', 'center-text');


    svg
      .append('g')
      .selectAll<SVGPathElement, PieArcDatum<Record>>('path')
      .data(pie(sortedDataSet))
      .join('path')
      //Used to determine sliver's color. Try by category too
      .attr('fill', (d) => color(d.data.category))
      .attr('d', (d: PieArcDatum<Record>) => generateArcPath(d))
      .append('title')
      .text((d) => `${d.data.name}: ${d.data.duration.toLocaleString()}`);

    svg
      .append('g')
      .attr('font-family', 'sans-serif')
      .attr('font-size', 12)
      .attr('text-anchor', 'middle')
      .selectAll()
      .data(pie(sortedDataSet))
      .join('text')
      .attr('transform', (d) => `translate(${arc.centroid(d as any)})`)
      .call((text) =>
        text
          .append('tspan')
          .attr('y', '-0.4em')
          .attr('font-weight', 'bold')
          .text((d) => d.data.name)
      )
      .call((text) =>
        text
          .filter((d) => d.endAngle - d.startAngle > 0.25)
          .append('tspan')
          .attr('x', 0)
          .attr('y', '0.7em')
          .attr('fill-opacity', 0.7)
          .text((d) => d.data.duration.toLocaleString('en-US') + ' Hours')
      );

    return this;
  }
}
