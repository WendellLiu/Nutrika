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
            <div className="single-pin-results">
                <div>
                    <TogglePin pinned={this.props.result.get('pinned')} onClick={this.props.toggle_pin} />
                    <Name text={this.props.result.get('name')} onClick={this.expand} />
                </div>
                <div className="amount-button">
                    <Button onClick={this.props.increase_pinned_amount}>+</Button>
                    {this.props.result.get('pinned_amount')}
                    {(this.props.result.get('pinned_amount')>1) ?
                    <Button onClick={this.props.decrease_pinned_amount}>-</Button>
                    : <Button onClick={this.props.decrease_pinned_amount } disabled>-</Button> }
                </div>

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
    toggle_pin: PropTypes.func.isRequired,
    increase_pinned_amount: PropTypes.func.isRequired,
    decrease_pinned_amount: PropTypes.func.isRequired
}

export default SingleResult
