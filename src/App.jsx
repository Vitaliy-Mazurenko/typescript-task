import React from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Table from './components/Table/Table';
import Home from './components/Home/Home';
import './App.css';

function App() {

  return (
    <>
    <div className="container">
      </div>
       <Router basename={process.env.PUBLIC_URL || '/'}>
         <Switch>
           <Route path="/table" render={() => <Table/>} />
           <Route exact path="/"><Home /></Route>
         </Switch>
       </Router>
</>
);
}
export default App;