import React, { Component } from 'react';

export default class Display extends Component{
    render(){
        return(
            <div className="w-100 bg-secondary rounded text-dark p-2 mt-3 mb-3 text-center" id="display">
                <p className="text-uppercase font-weight-light d-inline my-0 align-bottom" style={{fontSize:'20px'}}>
                    {this.props.currentSound}
                </p>
            </div>
        );
    }
}