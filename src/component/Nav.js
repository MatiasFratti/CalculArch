import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/nav.css';


class Nav extends React.Component{
    render(){
        return(
            <div className="navbar-fixed">
                <nav className="nav-extended">
                    <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">ContruCal </Link>
                    <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/proyect">Proyecto</Link></li>
                        <li><Link to="/logearse">Logearse</Link></li>
                        <li><Link to="/logearse">Cerrar sesion</Link></li>
                    </ul>
                    </div>
                    <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><Link to="hormigon">Hormigon</Link></li>
                        <li className="tab"><Link to="morteros">Morteros</Link></li>
                        <li className="tab"><Link to="armaduras">Armaduras</Link></li>
                        <li className="tab"><Link to="mamposteria">Mampostería</Link></li>
                        <li className="tab"><Link to="revestimientos">Revestimientos</Link></li>
                        <li className="tab"><Link to="encofrados">Encofrados</Link></li>
                        <li className="tab"><Link to="techos">Techos</Link></li>
                    </ul>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Nav;
