import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
// import Sell from './components/Sell/Sell'
import Messages from './components/Messages/Messages'
import User from './components/User/User'
import CatagoryView from './components/CatagoryView/CatagoryView'
import ProductView from './components/ProductView/ProductView';
import SearchResults from './components/SearchResults/SearchResults';
import Chatroom from './components/Chatroom/Chatroom'




export default function routes() { 
    return (
    <Switch>
        <Route component={ Home } exact path="/" /> 
        {/* <Route component={ Upload } path="/sell" />  */}
        <Route component={ User } path="/user" />
        <Route component={ CatagoryView } path='/catagory_view/:listing_type'/>
        <Route component={ ProductView } exact path="/productview/:listing_id" />
        <Route component={ Messages } exact path="/messages" />
        <Route component={ Chatroom } exact path="/messages/:room_name" />
        <Route component={ SearchResults } path='/search_results/' /> 
    </Switch>
    )
}

