import React, { Component } from 'react';

export default class Pad extends Component{
    constructor(props){
        super(props);
        this.eventTest = this.eventTest.bind(this);
    }
    eventTest(ev){
        console.log(ev.target.dataset.target);
    }
    render(){

        const buttons = this.props.binding.map( element => 
            <div className="col-4" key={element.keyCode + 'col'}>
                <button className="btn btn-secondary w-100 m-2" 
                        style={ {height:'60px'} } 
                        data-target={element.keyCode} 
                        key={element.keyCode}
                        onClick={this.eventTest}>
                    { element.keyTrigger }
                </button>
            </div>
            );

        return(
            <div className="pad h-100 w-100">
                <div className="row">
                    {buttons}
                </div>
            </div>

        );
    }
}