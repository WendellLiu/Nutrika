import React, {PropTypes} from 'react'
import editTarget from '../actions'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import ImmutablePropTypes from 'react-immutable-proptypes'


class TargetInput extends React.Component {
    constructor(props){
        super(props)
        this.handle_changed = this.handle_changed.bind(this)

        this.state = {
            status: null
        }
    }

    handle_changed(e){
        e.preventDefault()
        let status = this.valid(e.target.value)
        if(status){
            const entity = this.props.entity
            let target = {}
            target[entity] = Number(e.target.value)

            this.props.edit_target(target)
        }

        this.setState({
            status
        })
    }

    translate_entity(entity){
        const dict = {
            calories: '熱量(kcal)',
            protein: '蛋白質(g)',
            carbs: '碳水化合物(g)',
            fat: '脂肪(g)'
        }

        return dict[entity]
    }

    valid(value){
        if(isNaN(value)){
            return false
        }else{
            return true
        }
    }

    render(){
        let status
        if(this.state.status){
            status = "success"
        }else{
            status =  "error"
        }

        if(this.state.status === null){
            return(
                <FormGroup>
                    <ControlLabel>{this.translate_entity(this.props.entity)}</ControlLabel>
                    <FormControl type="text" onChange={this.handle_changed} defaultValue={this.props.target.get(this.props.entity)} />
                </FormGroup>
            )
        }
        return(
            <FormGroup validationState={status}>
                <ControlLabel>{this.translate_entity(this.props.entity)}</ControlLabel>
                <FormControl type="text" onChange={this.handle_changed}  />
            </FormGroup>
        )


    }
}

TargetInput.propTypes = {
    entity: PropTypes.string.isRequired,
    target: ImmutablePropTypes.map,
    edit_target: PropTypes.func.isRequired
}

export default TargetInput
