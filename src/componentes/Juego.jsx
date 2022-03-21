import React, { Component } from 'react'
import Tablero from './Tablero';

export default class Juego extends Component {
    render() {
        return (
            <div className="game">
                    <Tablero />
            </div>
        );
    }
}