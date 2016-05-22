import React, {PropTypes} from 'react'
import { BarChart, Bar, XAxis, YAxis } from 'recharts'

const BarChartCategory = ({ title, data }) => (
    <div>
        <h4>{title}</h4>
        <BarChart
                width={400}
                height={220}
                data={data}
                margin={{top: 5, right: 20, left: 20, bottom: 5}}
                >
            <XAxis dataKey="name"/>
            <YAxis
                tickFormatter={(n) => {
                    if(n === parseInt(n)){
                        return n
                    }
                    return ''
                }}
            />
            <Bar dataKey="kinds" fill="#3d53c8" />
          </BarChart>
      </div>
)

BarChartCategory.propTypes = {
	data: PropTypes.array
}

export default BarChartCategory
