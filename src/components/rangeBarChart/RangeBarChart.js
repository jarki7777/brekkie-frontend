import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class RangeBarChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

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
          <Bar dataKey="Fat" stackId="a" fill="#0088FE" />
          <Bar dataKey="Sat. Fat" stackId="a" fill="#00C49F" />
          <Bar dataKey="Sodium" stackId="a" fill="#FFBB28" />
          <Bar dataKey="Carbs" stackId="a" fill="#FF8042" />
          <Bar dataKey="Fiber" stackId="a" fill="#ffcbc4" />
          <Bar dataKey="Sugar" stackId="a" fill="#ff0a38" />
          <Bar dataKey="Protein" stackId="a" fill="#ffde0a" />
        </BarChart>
    );
  }
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#ffcbc4', '#ff0a38', '#ffde0a'];
