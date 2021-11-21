import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/register.component";
import DashBoard from "./Pages-working/DashBoard";
import Customer from "./Pages-working/Customer";
import Profile from "./Pages-working/Profile";
import AddContact from "./Pages-working/AddContact";

function App() {
  return (<Router>
    <div className="App">
      

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/dashboard" component={DashBoard} />
            <Route path="/customer" component={Customer} />
            <Route path="/profile" component={Profile} />
            <Route path="/addContact" component={AddContact} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
