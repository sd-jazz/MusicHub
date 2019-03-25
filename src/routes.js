import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Gear from './components/Gear/Gear'
import GigBoard from './components/GigBoard/GigBoard'
import Services from './components/Services/Services'


export default (

    <Switch>

        <Route component={ Home } exact path="/" /> 
        <Route component={ Gear } path="/gear" /> 
        <Route component={ GigBoard } path="/gig_board" /> 
        <Route component={ Services } path="/services" /> 

    </Switch>
    
)