import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';

export class MacrosChart extends PureComponent {

  render() {
    return (
        <BarChart
          width={500}
          height={300}
          data={this.props.data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="fat" stackId="a" fill="#0088FE" />
          <Bar dataKey="carbs" stackId="a" fill="#FFBB28" />
          <Bar dataKey="protein" stackId="a" fill="#FF8042" />
        </BarChart>
    );
  }
}

export class MicrosChart extends PureComponent {

  render() {
    return (
        <BarChart
          width={500}
          height={300}
          data={this.props.data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="fiber" stackId="a" fill="#00C49F" />
          <Bar dataKey="saturated fat" stackId="a" fill="#ffcbc4" />
          <Bar dataKey="sodium" stackId="a" fill="#ff0a38" />
          <Bar dataKey="sugar" stackId="a" fill="#ffde0a" />
        </BarChart>
    );
  }
}

export class CaloriesChart extends PureComponent {

  render() {
    return (
        <BarChart
          width={500}
          height={300}
          data={this.props.data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={this.props.goal} stroke="red" />
          <Bar dataKey="calories" stackId="a" fill="#00C49F" />
          <Bar dataKey="calories goal" stackId="a" fill="#ff0a38" />
        </BarChart>
    );
  }
}