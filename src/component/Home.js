import React from 'react';

import Nav from './Nav';
import Login from './Login';
import {Proyect} from './Proyect';
import { Link } from 'react-router-dom';

import '../styles/home.css';



export class Home extends React.Component{
    succses(){
        return(
            <div>
                <Nav/>
                <Proyect />
            </div>
            
        );
        
    };
    render(){
        return(
            <div>   
                <div className="row">
                    <div className="img_constr">  
                       <img id="img_constr" src="http://revistaimoveis.zap.com.br/wp-content/uploads/2015/04/calculo-materiais1.jpg" alt="Proyecto" />     
                       <div className="input-field col s12">
                        <Link to="proyect" className="btn waves-effect waves-light col s12">Iniciar o continuar Proyecto</Link>
                        </div>           
                     </div>
                    
                </div>
            </div>    
        );
    }
}