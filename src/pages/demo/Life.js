import React, { Component } from 'react'
import Child from './Child'
import './index.less'
import { Button } from 'antd'

class Life extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    render() {
        console.log('Parent: render')
        return (
            <div className="content">
                <p>React生命周期、引入less</p>
                <Button onClick={this.handleAdd}>Click</Button>
                <p>{this.state.count}</p>
                <Child cnt={this.state.count} />
            </div>
        )
    }
    handleAdd = ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    componentWillMount() {
        console.log('Parent: will mount')
    }
    componentDidMount() {
        console.log('Parent: did mount')
    }
    componentWillReceiveProps(newProps){
        console.log('Parent: will receive props' + newProps);
    }
    shouldComponentUpdate() {
        console.log('Parent: should update')
        return true
    }
    componentWillUpdate() {
        console.log('Parent: will update')
    }
    componentDidUpdate() {
        console.log('Parent: did update')
    }
    componentWillUnmount() {
        console.log('Parent: will unmount')
    }
}

export default Life