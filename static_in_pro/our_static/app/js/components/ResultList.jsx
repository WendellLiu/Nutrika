import React, {PropTypes} from 'react'
import { List } from 'immutable'
import SingleResult from './SingleResult'
import ImmutablePropTypes from 'react-immutable-proptypes'

const ResultList = ({results, toggle_pin}) => {

    return (
        <div id="results-list">
            {results.map(result =>
                    <SingleResult
                        key={result.get('id')}
                        result={result}
                        toggle_pin={() => toggle_pin(result.get('id'))}
                    />
                )
            }
        </div>
    )
}


ResultList.propTypes = {
    results: ImmutablePropTypes.list.isRequired,
    toggle_pin: PropTypes.func.isRequired,
}

export default ResultList
