import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/nav.css';
// import Dropmenu from './Dropmenu';


class Nav extends React.Component{
    render(){
        return(
            <div className="navbar-fixed">
               <nav>
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">ContruCal </Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/proyect">Proyecto</Link></li>
                            <li><Link to="/logearse">Logearse</Link></li>
                            <li><Link to="/logearse">Cerrar sesion</Link></li>
                        </ul>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Nav;
