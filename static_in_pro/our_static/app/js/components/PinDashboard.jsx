import React, {PropTypes} from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Grid, Row, Col } from 'react-bootstrap'
import BarChartCategory from './dashboard/BarChartCategory'
import TitleNumberBlock from './dashboard/TitleNumberBlock'
import PieChartDistribution from './dashboard/PieChartDistribution'
import BarChartTarget from './dashboard/BarChartTarget'



const entity_list = ['calories_unit', 'carbs_unit', 'fat_unit', 'protein_unit']
const get_sum_from_array_object = (key, array) => {
	let sum = 0
	array.forEach(ele => sum = sum+ele.get('pinned_amount')*Number(ele.get(key)))
	return Math.round(sum*10)/10
}

const get_category_count_data = (array) => {
	// make category map(an object)
	let category_map = array.reduce((pV, cV, cI) => {
		if(pV[cV.get('category')] === undefined){
			pV[cV.get('category')] = 1
		}else{
			pV[cV.get('category')] = pV[cV.get('category')]+1
		}
		return pV
	}, {})

	let values = []
	for(let i in category_map){
		values.push({name: i, kinds: category_map[i]})
	}

	if(values.length !== 0){
		return values
	}
}

const get_result_target_data = (sum_map, target) => {
	const translate = {
		'calories': '熱量',
		'protein': '蛋白質',
		'fat': '脂肪',
		'carbs': '碳水化合物'
	}

	const re = /^(.+)_unit$/

	const result = entity_list.map((ele) => {
		const name = re.exec(ele)[1]
		let tmp = {
			name: translate[name],
			'目標': target[name],
			'釘選': sum_map[ele]
		}

		return tmp
	})

	return result
}


const PinDashboard = ({results, target}) => {
	const sum_map = entity_list.reduce((pV, cV, cI) => {
		pV[cV] = get_sum_from_array_object(cV, results)
		return pV
	}, {})

    return(
    	<div className="pin-dashborad">
			<Row>
			<Col md={5} className="block">
				<PieChartDistribution
					title="蛋白質分布"
					array={results}
					entity="protein_unit"
				 />
			</Col>
				<Col md={7}  className="block chart">
	    			{get_category_count_data(results) ? <BarChartCategory
	    				title="吃了幾種"
	    				data={get_category_count_data(results)}
	    			/> : null}
	    		</Col>
			</Row>
			<Row>
				<Col md={2} className="block-container">
					<Col md={12} className="block">
						<TitleNumberBlock title={'熱量總和'} sum_number={sum_map['calories_unit']} unit='kcal' />
					</Col>
					<Col md={12} className="block">
						<TitleNumberBlock title={'蛋白質總和'} sum_number={sum_map['protein_unit']} unit='g' />
					</Col>
					<Col md={12} className="block">
						<TitleNumberBlock title={'脂肪總和'} sum_number={sum_map['fat_unit']} unit='g' />
					</Col>
					<Col md={12} className="block">
						<TitleNumberBlock title={'碳水化合物總和'} sum_number={sum_map['carbs_unit']} unit='g' />
					</Col>
				</Col>
				<Col md={5} className="block">
					<BarChartTarget title="單位-g" data={get_result_target_data(sum_map, target).filter((ele => (
																				ele.name !== '熱量'
																							)))} />
				</Col>
				<Col md={5} className="block">
					<BarChartTarget title="單位-kcal" data={get_result_target_data(sum_map, target).filter((ele => (
																				ele.name === '熱量'
																							)))} />
				</Col>
			</Row>
    	</div>
	)
}

PinDashboard.propTypes = {
    results: ImmutablePropTypes.list.isRequired
}

export default PinDashboard
