import React from "react"
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./Header";
function App() {
  return (
  //Adding support for multpile url pages
  <Router>
    <div className="App">
    <Switch>
        <Route path="/checkout">
        <h1>Checkout</h1>
        </Route>
        <Route path ="/login">
        <h1>Login</h1>
        </Route>
        <Route path = "/">
        <Header/>
        <h1>Homepage</h1>
        </Route>
        </Switch>
    </div>
  </Router>
  );
}

export default App;