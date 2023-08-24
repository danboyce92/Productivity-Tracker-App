import React, { Component } from 'react'
import * as d3 from 'd3'
import { BarData } from './BarDataHandling';


interface BarChartProps {
  id: string; // Define the 'id' prop and its type
  barData: BarData[]
}

class BarChart extends Component<BarChartProps> {
    componentDidMount() {
        this.drawChart();
    }
    drawChart() {

        const data = [12, 5, 6, 6, 9, 10];

        const colors = d3.scaleOrdinal(d3.schemeAccent);

        

        const svg = d3.select("#bar-disp")
                    .append("svg")
                    .attr("width", 700)
                    .attr("height", 300);

        const margin = { top: 20, right: 20, bottom: 50, left: 50 };
        const width = +svg.attr("width") - margin.left - margin.right;
        const height = +svg.attr("height") - margin.top - margin.bottom;

        const x = d3.scaleBand()
        .domain(this.props.barData.map(d => d.name))
        .range([0, width])
        .padding(0.1);

        const y = d3.scaleLinear()
        .domain([0, d3.max(this.props.barData, d => d.totalDuration)!])
        .range([height, 0]);

        const xAxis = d3.axisBottom(x);
        const yAxis = d3.axisLeft(y);

        const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);


        g.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${height})`)
        .call(xAxis);
    
      g.append("g")
        .attr("class", "y-axis")
        .call(yAxis);
    
      g.selectAll(".bar")
        .data(this.props.barData)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.name)!)
        .attr("y", d => y(d.totalDuration))
        .attr("width", x.bandwidth())
        .attr("height", d => height - y(d.totalDuration))
        .attr("fill", d => colors(d.name));
    
      g.selectAll(".bar-label")
        .data(this.props.barData)
        .enter()
        .append("text")
        .attr("class", "bar-label")
        .text(d => d.totalDuration)
        .attr("x", d => x(d.name)! + x.bandwidth() / 2)
        .attr("y", d => y(d.totalDuration) - 5)


            svg.append("text")
            .attr("transform", `translate(${width / 2},${height + margin.top + 30})`)
            .style("text-anchor", "middle")
            .text("Categories");
        
          svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", margin.left - 40)
            .attr("x", 0 - height / 2)
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Values");


    }
    render() {
        return <div id={"#" + this.props.id}></div>
    }
}
export default BarChart;