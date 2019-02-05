import React, { Component } from 'react';

export default class Padding extends Component{
    constructor(props){
        super(props);
        this.showProp = this.showProp.bind(this);
    }
    showProp(){
        console.log(this.props.binding);
    }
    render(){

        const buttons = this.props.binding.map( element => 
            <div className="col-4">
                <button className="btn btn-secondary w-100 m-2" 
                        style={ {height:'60px'} } 
                        data-target={element.keyCode} 
                        key={element.keyCode}>{ element.keyTrigger }
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