import { connect } from 'react-redux'
import { editCatogory } from '../actions'
import React from 'react'
import CheckboxGroup from 'react-checkbox-group';
import { Row, Col } from 'react-bootstrap'

class CategoryFilter extends React.Component {
    constructor(props){
        super(props)
        this.handle_changed = this.handle_changed.bind(this)
        this.handle_expanded = this.handle_expanded.bind(this)
        this.state = {
            expanded: false
        }
    }

    handle_expanded(){
        this.setState({
            expanded: !this.state.expanded
        })
    }

    handle_changed(array){
        this.props.dispatch(editCatogory(array))
    }

    render(){
        const checkbox = (
            <CheckboxGroup name="category" onChange={this.handle_changed}>
                {
                Checkbox => (
                    <Row>
                        <Col sm={3}>
                        <label><div><Checkbox value="穀物類"/><span>穀物類</span></div></label><br/>
                        <label><div><Checkbox value="肉類"/><span>肉類</span></div></label><br/>
                        <label><div><Checkbox value="澱粉類"/><span>澱粉類</span></div></label>
                        </Col>
                        <Col sm={3}>
                        <label><div><Checkbox value="水果類"/><span>水果類</span></div></label><br/>
                        <label><div><Checkbox value="蔬菜類"/><span>蔬菜類</span></div></label><br/>
                        <label><div><Checkbox value="堅果與種子類"/><span>堅果與種子類</span></div></label>
                        </Col>
                        <Col sm={3}>
                        <label><div><Checkbox value="菇類"/><span>菇類</span></div></label><br/>
                        <label><div><Checkbox value="豆類"/><span>豆類</span></div></label><br/>
                        <label><div><Checkbox value="魚貝類"/><span>魚貝類</span></div></label>
                        </Col>
                        <Col sm={3}>
                        <label><div><Checkbox value="蛋類"/><span>蛋類</span></div></label><br/>
                        <label><div><Checkbox value="乳品類"/><span>乳品類</span></div></label><br/>
                        <label><div><Checkbox value="油脂類"/><span>油脂類</span></div></label>
                        </Col>
                        <Col sm={3}>
                        <label><div><Checkbox value="糖類"/><span>糖類</span></div></label><br/>
                        <label><div><Checkbox value="嗜好性飲料類"/><span>嗜好性飲料類</span></div></label><br/>
                        <label><div><Checkbox value="調味料及香辛料類"/><span>調味料及香辛料類</span></div></label>
                        </Col>
                        <Col sm={3}>
                        <label><div><Checkbox value="糕餅點心類"/><span>糕餅點心類</span></div></label><br/>
                        <label><div><Checkbox value="加工調理食品類"/><span>加工調理食品類</span></div></label>
                        </Col>
                    </Row>
                )
            }
            </CheckboxGroup>
        )

        if(this.state.expanded){
            return(
                <div id="category-filter">
                    <label onClick={this.handle_expanded} className="expanded">我...我...只想要看某些種類啦</label>
                    {checkbox}
                </div>
            )
        }
        return(
            <div id="category-filter">
                <label onClick={this.handle_expanded}>我...我...只想要看某些種類啦</label>
            </div>
        )
    }
}

CategoryFilter = connect()(CategoryFilter)

export default CategoryFilter
