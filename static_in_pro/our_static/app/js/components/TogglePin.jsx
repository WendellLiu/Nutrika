import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'

const TogglePin = ({ onClick, pinned }) => (
    pinned ? <FontAwesome name="check-square" size="lg" onClick={(e) => {
                    e.preventDefault()
                    onClick()
            }} />
            : <FontAwesome name="square-o" size="lg" onClick={(e) => {
                    e.preventDefault()
                    onClick()
            }} />

)

TogglePin.propTypes = {
    onClick: PropTypes.func.isRequired,
    pinned: PropTypes.bool.isRequired
}

export default TogglePin
