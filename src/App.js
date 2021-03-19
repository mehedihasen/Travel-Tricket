
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Component/NotFoun/NotFound';
import Home from './Component/Home/Home'
import LogIn from './Component/LogInPages/LogIn';
import Distenc from './Component/Distenc/Distenc';
import Booking from './Component/Booking/Booking';
import PrivetRout from './Component/PrivetRout/PrivetRout'

export const contextSher = createContext();
function App() {
  const [logInfo, setLogInfo] = useState({})
  return (
    <contextSher.Provider value={[logInfo, setLogInfo]}>
      <Router>
        <Switch>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route exact path="/LogIn">
            <LogIn />
          </Route>
          <PrivetRout path="/Booking">
           <Booking></Booking>
          </PrivetRout>


          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>
    </contextSher.Provider>
  );
}

export default App;
