
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
import Booking from './Component/Booking/Booking';
import PrivetRout from './Component/PrivetRout/PrivetRout'
import Foram from './Component/Foram/Foram';
import Loction from './Component/Loction/Loction';

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
          <PrivetRout path="/loction/:name">
            <Loction/>
          </PrivetRout>
          <Route exact path="/LogIn">
            <LogIn />
          </Route>
         <Route path ="/Foram">
           <Foram></Foram>
         </Route>

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
