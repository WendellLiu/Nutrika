import React, {PropTypes} from 'react'

const Name = ({text, onClick}) => (
    <span className="name" onClick={onClick}>{text}</span>
)

Name.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Name
