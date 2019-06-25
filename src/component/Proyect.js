import React from 'react';
import { Material } from './material';

import '../styles/proyect.css';

import {Materiales} from '../Material/data.material.json';

const materiales = Materiales.map((material, key)=>{
    return(
    <div key={key} className="grid_mat">
         <Material name={material.name} description={material.description} link={material.link} image={material.url} />
    </div >);
});

export class Proyect extends React.Component{
    
    render(){
        return(
            <div className="materials">
                {materiales}
            </div>
        );
    }
}