import React, { Component } from 'react';
import Pad from './Pad';
import audioBanks from '../imports/audioBanks';
import Display from './Display';



export default class Machine extends Component {
    constructor(props){
        super(props);

        this.state = {
            power: true,
            volume: 0.5,
            currentBank: 'bankOne',
            banks : audioBanks,
            currentSound: ' '
        }

        this.changeBank = this.changeBank.bind(this);
        this.onOff = this.onOff.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.changeCurrentSound = this.changeCurrentSound.bind(this);
        

    }

    onOff(){
        this.setState(({power: !this.state.power}));
        console.log(this.state.power);
    }

    changeBank(){
        if(this.state.currentBank === 'bankOne'){
            this.setState( ( { currentBank: 'bankTwo'} ) );
        }else {
            this.setState( ( { currentBank: 'bankOne'} ) ); 
        }

    }

    changeVolume(ev){

        console.log(ev.target.value);
    }

    changeCurrentSound(soundName){
        this.setState( ( {currentSound  : soundName } ) );
    }

    render() {
        return(
            <div className="bg-primary text-light rounded p-3" id="drum-machine">
                <div className="row">
                    <div className="col-7">
                        <Pad onChangeSound={this.changeCurrentSound} binding={this.state.banks[this.state.currentBank]} />
                    </div>
                    <div className="col-5 p-2">
                        <button className={'btn d-block mx-auto ' + (this.state.power ? 'btn-danger' : 'btn-success')}
                                onClick={this.onOff}
                                style={{width:'50px', outline:'none'}}>
                            {(this.state.power) ? 'OFF' : 'ON'}
                        </button>
                        <Display currentSound={this.state.currentSound} />
                        <div className="mt-2 mb-2">
                            <label htmlFor="formControlRange">Volume</label>
                            <input onChange={ this.changeVolume } type="range" className="form-control-range" id="formControlRange" />
                        </div>
                        <button onClick={ this.changeBank }> change Sound </button>
                    </div>
                </div>
            </div>
        );
    }
}