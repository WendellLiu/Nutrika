import React, {PropTypes} from 'react'
import { Row, Button } from 'react-bootstrap'
import Name from './Name'
import DetailCard from './DetailCard'
import TogglePin from './TogglePin'

class SingleResult extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            expanded: false
        }
        this.expand = this.expand.bind(this)
    }

    expand(){
        this.setState(
            {
                expanded: !this.state.expanded
            }
        )
    }



    render(){
        const item = (
            <div className="single-results">
                <TogglePin pinned={this.props.result.get('pinned')} onClick={this.props.toggle_pin} />
                <Name text={this.props.result.get('name')} onClick={this.expand} />
            </div>
        )

        if(this.state.expanded){
            return(
                <div>
                    {item}
                    <DetailCard result={this.props.result} />
                </div>
            )
        }
        return(
            <div>
                {item}
            </div>
        )

    }
}

SingleResult.propTypes = {
    result: PropTypes.object.isRequired,
    toggle_pin: PropTypes.func.isRequired
}

export default SingleResult
