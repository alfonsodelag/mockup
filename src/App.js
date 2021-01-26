import React, { Fragment } from 'react';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import VolunteerPanel from './components/VolunteerPanel';
import Residents from './components/Residents/Residents';
import RentBike from './components/Rentings/RentBike';
import Rentings from './components/Rentings/Rentings';
import FindBike from './components/FindBike';
import AddTime from './components/AddTime';
import RentingHistory from './components/RentingHistory';
import CoordinatorPanel from './components/CoordinatorPanel';
import CoordinatorBikes from './CoordinatorBikes';
import CoordinatorResidents from './CoordinatorResidents';
import CoordinatorRecord from './CoordinatorRecord';
import CoordinatorCheckout from './CoordinatorCheckout';


function App() {
  return (
    <Router>
      <Switch>
        {/* Volunteers */}
        <Route exact path="/volunteerpanel" component={VolunteerPanel} />
        <Route exact path="/rentbike" component={RentBike} />
        <Route exact path="/findbike" component={FindBike} />
        <Route exact path="/addtime" component={AddTime} />
        <Route exact path="/rentings" component={Rentings} />
        <Route exact path="/residents" component={Residents} />
        <Route exact path="/rentinghistory" component={RentingHistory} />


        {/* Coordinators */}
        <Route exact path="/coordinatorpanel" component={CoordinatorPanel} />
        <Route exact path="/coordinatorbikes" component={CoordinatorBikes} />
        <Route exact path="/coordinatorresidents" component={CoordinatorResidents} />
        <Route exact path="/coordinatorrecord" component={CoordinatorRecord} />
        <Route exact path="/coordinatorcheckout" component={CoordinatorCheckout} />
        <Login />
      </Switch>
    </Router>
  );
}

export default App;
