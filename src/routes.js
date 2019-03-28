import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
// import Sell from './components/Sell/Sell'
import Messages from './components/Messages/Messages'
import User from './components/User/User'


export default function routes() { 

    return (

    <Switch>

        <Route component={ Home } exact path="/" /> 
        {/* <Route component={ Upload } path="/sell" />  */}
        <Route component={ Messages } path="/messages" /> 
        <Route component={ User } path="/user" /> 

    </Switch>
    
    )
}