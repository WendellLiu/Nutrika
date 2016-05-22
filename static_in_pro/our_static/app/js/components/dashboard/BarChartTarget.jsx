import React, {PropTypes} from 'react'
import { BarChart, Bar, XAxis, YAxis, Legend, Tooltip } from 'recharts'

const BarChartTarget = ({ title, data }) => (
    <div>
        <h4>{title}</h4>
        <BarChart
                width={400}
                height={250}
                data={data}
                margin={{top: 20, right: 20, left: 20, bottom: 5}}
                >
            <XAxis dataKey="name"/>
            <YAxis />
            <Bar dataKey="目標" fill="#82ca9d" />
            <Bar dataKey="釘選" fill="#b64c30" />
            <Tooltip />
            <Legend />
        </BarChart>
    </div>
)

BarChartTarget.propTypes = {
	data: PropTypes.array
}

export default BarChartTarget
