import React, {PropTypes} from 'react'
import { Table} from 'react-bootstrap'
import ImmutablePropTypes from 'react-immutable-proptypes'

const CardTable = ({result}) => (
    <Table hover responsive condensed>
        <tbody>
            <tr>
                <td>重量(g)</td>
                <td>{result.get('weight')}</td>
            </tr>
            <tr>
                <td>熱量(kcal)</td>
                <td>{result.get('calories')}</td>
            </tr>
            <tr>
                <td>水分(g)</td>
                <td>{result.get('water')}</td>
            </tr>
            <tr>
                <td>粗蛋白(g)</td>
                <td>{result.get('protein')}</td>
            </tr>
            <tr>
                <td>粗脂肪(g)</td>
                <td>{result.get('fat')}</td>
            </tr>
            <tr>
                <td>總碳水化合物(g)</td>
                <td>{result.get('carbs')}</td>
            </tr>
        </tbody>
    </Table>
)

CardTable.propTypes = {
    result: ImmutablePropTypes.mapContains({
        weight: PropTypes.node.isRequired,
        calories: PropTypes.node.isRequired,
        water: PropTypes.node.isRequired,
        protein: PropTypes.node.isRequired,
        fat: PropTypes.node.isRequired,
        carbs: PropTypes.node.isRequired
    }).isRequired
}

export default CardTable
