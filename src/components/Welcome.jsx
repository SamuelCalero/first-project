import React from 'react';
import Bye from './Bye';
export default class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"FSJ16",
            age: 15
        }
    }
    
    render(){
        return <div>
        <h1>Hola Chicos {this.props.name}</h1>
        <Bye name={this.state.name}/>
        </div>
    }
}
