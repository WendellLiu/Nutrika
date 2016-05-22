import React, {PropTypes} from 'react'
import { List } from 'immutable'
import SinglePinResult from './SinglePinResult'
import ImmutablePropTypes from 'react-immutable-proptypes'

const ResultList = ({results, toggle_pin, increase_pinned_amount, decrease_pinned_amount}) => {

    return (
        <div id="pin-results-list">
            {results.map(result =>
                    <SinglePinResult
                        key={result.get('id')}
                        result={result}
                        toggle_pin={() => toggle_pin(result.get('id'))}
                        increase_pinned_amount={() => increase_pinned_amount(result.get('id'))}
                        decrease_pinned_amount={() => decrease_pinned_amount(result.get('id'))}
                    />
                )
            }
        </div>
    )
}


ResultList.propTypes = {
    results: ImmutablePropTypes.list.isRequired,
    toggle_pin: PropTypes.func.isRequired,
    increase_pinned_amount: PropTypes.func.isRequired,
    decrease_pinned_amount: PropTypes.func.isRequired
}

export default ResultList
