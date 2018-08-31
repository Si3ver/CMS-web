import React, { Component, Fragment } from 'react'

class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {
            str: 'IamChild'
        }
    }
    render() {
        console.log('Child: render')
        return (
            <Fragment>
                <p>Child Component</p>
                <p>{this.state.str}-{this.props.cnt}</p>
            </Fragment>
        )
    }
    componentWillMount() {
        console.log('Child: will mount')
    }
    componentDidMount() {
        console.log('Child: did mount')
    }
    componentWillReceiveProps(newProps){
        console.log('Child: will receive props');
        console.log(newProps)
    }
    shouldComponentUpdate() {
        console.log('Child: should update')
        return true
    }
    componentWillUpdate() {
        console.log('Child: will update')
    }
    componentDidUpdate() {
        console.log('Child: did update')
    }
    componentWillUnmount() {
        console.log('Child: will unmount')
    }
}

export default Child