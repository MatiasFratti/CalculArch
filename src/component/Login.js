import React ,{ Fragment }from 'react';
import ReactDOM, {render} from 'react-dom';

import { Route,Switch} from 'react-router-dom';

import {Redirect} from 'react-dom';
import '../styles/login.css';
import App from '../App';
import { Home } from './Home';

class Login extends React.Component{
    constructor(prop){
        super(prop);

        this.state = {
            name: '',
            pass: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);


    }
    renderRedirect(){
            
        this.props.history.push('/proyect');
    }
    Redirect(){
        return (<Fragment>
            {this.renderRedirect()}
        </Fragment>)
    }   
    async handleClick(e){
        e.preventDefault();
        var r="";
        var user= {
            name: this.state.name,
            pass:this.state.pass
        }
        // alert(this.state.name+": "+user.pass);
        
        var _user = await fetch('http://localhost:3001/api/login',{
            method:'POST',
            body: JSON.stringify({name:this.state.name,pass:this.state.pass}),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }).then(res=>res.json());
        if(_user.msg != "Ok"){
            window.M.toast({html:"Error de credenciales"});
        }
        else{
            this.Redirect();
                
            console.log(_user.msg);
        }
         
        
        
    }
    handleChange(e){
        const { name,value } = e.target;

        this.setState({
            [name]:value
        });
        console.log(this.state);
    }
    render(){
        return(  
            <div className="login container">
                <div id="user-login" className="row">
                    <div className="col s12 z-depth-12 card-panel">
                        <h2>Iniciar sesión</h2>
                        <form className="login-form">
                            <div className="row margin">
                                <div className="input-field col s12">                                   
                                    <input name="name" onChange={e=>this.handleChange(e)} className="validate" id="user_name" type="text"/>                                    
                                    <label htmlFor="email" data-error="wrong" data-success="right" className="center-align"><i className="material-icons">person</i>Nombre</label>
                                </div>
                            </div>
                            <div className="row margin">
                                <div className="input-field col s12">                                   
                                    <input name="pass" onChange={e=>this.handleChange(e)} id="user_pass" type="password"/>
                                    <label htmlFor="password"><i className="material-icons">lock</i>Contraseña</label>
                                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <a href="login.html" onClick={this.handleClick} className="btn waves-effect waves-light col s12">Login</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>                 
        );
    }
}

export default Login;
