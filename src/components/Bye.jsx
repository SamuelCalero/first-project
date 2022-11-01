import React, { Component } from 'react'

export default class Bye extends Component {
    constructor(props){
        super(props);
    }
    render() {
    return (
      <div><h1>Hasta aca llega la clase de React, adios chicos {this.props.name}</h1></div>
    )
  }
}
