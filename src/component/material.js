import React from 'react';

import '../styles/material.css';

import { Link } from 'react-router-dom';


export class Material extends React.Component{
   
    render(){
        return(
            <div className="mat row">
                <div className="matcol col s12 m7">
                    <div className="card">
                        <div className="card-image">
                        <img src={this.props.image} />
                        <span className="card-title">{this.props.name}</span>
                        </div>
                        <div className="card-content">
                        <p>{this.props.description}</p>
                        </div>
                        <div className="card-action">
                        <Link className="btn waves-effect waves-light col s12" to={this.props.link}>Calcular</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}