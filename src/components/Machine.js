import React, { Component } from 'react';
import Pad from './Pad';
import audioBanks from '../imports/audioBanks';

export default class Machine extends Component {
    constructor(props){
        super(props);

        this.state = {
            power: true,
            volume: 0.5,
            currentSound: 'bankOne',
            banks : audioBanks
        }

        this.changeBank = this.changeBank.bind(this);

    }

    changeBank(){
        if(this.state.currentSound === 'bankOne'){
            this.setState( ( { currentSound: 'bankTwo'} ) );
        }else {
            this.setState( ( { currentSound: 'bankOne'} ) ); 
        }

    }

    render() {
        return(
            <div className="bg-primary text-light rounded p-3" id="machine">
                <div className="row">
                    <div className="col-7">
                        <Pad  binding={this.state.banks[this.state.currentSound]} />
                    </div>
                    <div className="col-5 p-2">
                        <button onClick={ this.changeBank }> teste </button>
                    </div>
                </div>
            </div>
        );
    }
}