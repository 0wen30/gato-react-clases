import React, { Component } from 'react'

export default class Cuadro extends Component {
    
    constructor(props){
        super(props)
    }

    render() {
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
}
