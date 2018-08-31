import React, { Component } from 'react'
import Child from './Child'

class Life extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    render() {
        let style = {
            padding: 50
        }
        console.log('Parent: render')
        return (
            <div style={style}>
                <p>React生命周期介绍</p>
                <button onClick={this.handleAdd}>Click</button>
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