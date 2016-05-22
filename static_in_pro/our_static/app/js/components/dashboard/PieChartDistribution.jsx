import React, {PropTypes} from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { PieChart, Pie, Tooltip } from 'recharts'

const PieChartDistribution = ({title, array, entity}) => {
    const data = array.map((ele) => (
        {
            name: ele.get('name'),
            value: ele.get(entity)*ele.get('pinned_amount')
        }
    )).toJS()

    return(
        <PieChart
            width={300}
            height={300}
         >
         <Tooltip />
            <Pie
                data={data}
                outerRadius={80}
                innerRadius={30}
                fill="rgb(25, 189, 159)"
                label
                labelLine={false}
                />
         </PieChart>
    )
}

PieChartDistribution.propTypes = {
	title: PropTypes.string.isRequired,
	array: ImmutablePropTypes.list.isRequired,
	entity: PropTypes.string.isRequired
}

export default PieChartDistribution
