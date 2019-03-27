import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';

import Sell from './components/Sell/Sell'
import Messages from './components/Messages/Messages'
import User from './components/User/User'
import CatagoryView from './components/CatagoryView/CatagoryView'
import ProductView from './components/ProductView/ProductView';



export default function routes() { 

    return (

    <Switch>
        <Route component={ Home } exact path="/" /> 
        <Route component={ Sell } path="/sell" /> 
        <Route component={ Messages } path="/messages" /> 
        <Route component={ User } path="/user" />
        <Route component={ CatagoryView } path='/catagory_view/:listing_type'/>
        <Route component={ ProductView } path="/productview/:listing_id" />
    </Switch>
    )
}
