import React, { Component } from 'react';
import logo from '../logo.svg';

export default class Navbar extends Component {

    render() {
        return(
            <nav class="navbar navbar-dark bg-primary fixed-top">
                <a class="navbar-brand" href="/">
                    <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" />
                        Drum Machine
                </a>
            </nav>
        );
    }
}