import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.css';
import Routes from './routes'
import Footer from './components/Footer/Footer'
class App extends Component {
 render() {
   return (
     <div className="App">
         <Header />
         <Routes />
         <Footer />
     </div>
   );
 }
}
export default App;


