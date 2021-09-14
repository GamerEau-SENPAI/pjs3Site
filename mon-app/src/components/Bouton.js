import React, { useState } from "react";
import { Button} from 'react-bootstrap';
import './Bouton.css';


export default class Bouton extends React.Component{
    render(){

        return <div className="Bouton">
                <Button name="btn" variant="primary" style={this.props.style} size="lg" href={this.props.href}>{this.props.text}</Button>
        </div>
        
    };
}