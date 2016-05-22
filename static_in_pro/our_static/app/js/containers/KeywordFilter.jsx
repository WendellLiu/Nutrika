import { connect } from 'react-redux'
import { setSearchKeyword } from '../actions'
import React from 'react'
import { FormControl } from 'react-bootstrap'

let KeywordFilter = ( {dispatch} ) => (
    <div id="keyword-filter">
        <label>試著輸入一些食物/食材的名稱</label><br/>
        <FormControl type="text" onChange={
            (e) => {
                e.preventDefault()
                dispatch(setSearchKeyword(e.target.value))
            }
        }
        />
    </div>
)

KeywordFilter = connect()(KeywordFilter)

export default KeywordFilter
