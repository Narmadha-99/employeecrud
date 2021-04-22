import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import CreateEmployeeComponent from './Components/CreateEmployeeComponent';
import ViewEmployeeComponent from '../../ima-cg/src/Components/ViewEmployeeComponent';


function App() {
  return (
    <div>
        <Router>
          <div className = "container">
              <HeaderComponent />
                <div className="container">
                  <Switch> 
                    <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                    <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                    <Route path = "/addemployee" component = {CreateEmployeeComponent}></Route>
                    <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                    
                    </Switch>
                </div>
              <FooterComponent />
              </div>
        </Router>
    </div>
  );
}

export default App;
