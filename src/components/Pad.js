import React, { Component } from 'react';

export default class Pad extends Component{
    constructor(props){
        super(props);
        this.playSound = this.playSound.bind(this);
        this.keyBiding = this.keyBiding.bind(this);
    }
    componentDidMount(){
        this.keyBiding();
    }

    playSound(ev){
        let audio = {};

        if(ev.type === 'click'){
            audio = document.querySelector(`#${ev.target.dataset.target}`);
        }else if(ev.type === 'keydown'){
            audio = document.querySelector(`#${ev.key.toUpperCase()}`);
        }else {
            return
        }

        if(audio){
            const soundName = this.props.binding[audio.dataset.index].id;
            this.props.onChangeSound(soundName);
            audio.play();
        }else{
            return
        }
        
        
    }

    keyBiding(){
        document.addEventListener('keydown', this.playSound);
    }

    render(){

        const buttons = this.props.binding.map( (element, index) => 
            <div className="col-4" key={element.keyCode + 'col'}>
                <button className="btn btn-secondary w-100 m-2 drum-pad" 
                        style={ {height:'60px'} } 
                        data-target={element.keyTrigger}
                        id={`button${element.keyTrigger}`} 
                        key={element.keyCode}
                        onClick={this.playSound}>
                    { element.keyTrigger }
                    <audio id={element.keyTrigger} data-index={index} src={element.url} className="clip"></audio>
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