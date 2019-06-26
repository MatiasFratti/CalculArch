import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/dropmenu.css';

class Dropmenu extends React.Component{
    render(){
        return(
            <div id="header">
                <ul className="nav">
                    <li><Link to="/hormigon">Hormigon</Link>
                    <ul>
                            <li><Link to="/hormigon-vigas">Vigas</Link></li>
                            <li><Link to="/hormigon-columnas">Columnas</Link></li>
                            <li><Link to="/hormigon-zapatas">Zapatas</Link></li>
                            <li><Link to="/hormigon-plateas">Plateas</Link></li>
                            <li><Link to="/hormigon-losas">Losas</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/armaduras">Armaduras</Link>
                        <ul>
                            <li><Link to="/armaduras-vigas">Vigas</Link></li>
                            <li><Link to="/armaduras-columnas">Columnas</Link></li>
                            <li><Link to="/armaduras-dinteles">Dinteles</Link></li>
                            <li><Link to="/armaduras-zapata">Zapata</Link></li>
                            <li><Link to="/armaduras-plateas">Platea</Link></li>
                            <li><Link to="/armaduras-losas">Losas</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/mamposteria">Mamposteria</Link>
                        <ul>
                            <li><Link to="/mamposteria-ladrillos">Ladrillos</Link></li>
                            <li><Link to="/mamposteria-ticholos">Ticholo</Link></li>
                            <li><Link to="/mamposteria-bloques">Bloques</Link></li>
                        </ul>
                    </li>
                    <li><a href="">Contacto</a></li>
                    <li><Link to="/revestimientos">Revestimientos</Link></li>
                    <li><Link to="/encofrados">Encofrados</Link></li>
                    <li><Link to="/techos">Techos</Link></li>
                </ul>
           </div>
        );
    }
}
export default Dropmenu;