import React from 'react';
import Login from './component/Login';
import Nav from './component/Nav';
import {Route, Switch} from 'react-router-dom';
import { Home } from './component/Home';
import { Proyect } from './component/Proyect';

function App() {
  return (
    <div className="App">
       <Nav />
       
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/logearse" exact component={Login} />
        <Route path="/proyect" exact component={Proyect} />

      </Switch>
      
    </div>
  );
}

export default App;
