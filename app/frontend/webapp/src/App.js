import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import MastHead from "./MastHead";
import Home from "./Home";
import Sports from "./Sports";
import Fitness from "./Fitness";
import Events from "./Events";
import Recognise from "./recognise";
import Res from "./res";
import Register from "./Register";
import Login from "./Login";
import Coupons from "./Coupons";
import JoinedEvents from "./MJE";
import CreatedEvents from "./MCE";
import Rewards from "./Rewards";
import SportProducts from "./SportProducts";
import UpcomingEvents from "./UpcomingEvents";
import PastEvents from "./PastEvents";
import "./App.css";
import CreatedUpcomingEvents from "./CreatedUpcomingEvents";
import CreatedPastEvents from "./CreatedPastEvents";

const App = () => {
    return (
        <Router>
            <MastHead/>
            <Switch>
                <Route path="/sports">
                    <Sports/>
                </Route>
                <Route path="/events">
                    <Events/>
                </Route>
                <Route path="/sports">
                    <Sports/>
                </Route>
                <Route path="/price">
                    <Fitness/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/rewards">
                    <Rewards/>
                </Route>
                <Route path="/recognise">
                    <Recognise/>
                </Route>
                <Route path="/created_events">
                    <CreatedEvents/>
                </Route>
                <Route path="/joined_events">
                    <JoinedEvents/>
                </Route>
                <Route path="/sports_products">
                    <SportProducts/>
                </Route>
                <Route path="/coupons">
                    <Coupons/>
                </Route>
                <Route path="/res">
                    <Res/>
                </Route>
                <Route path="/past_events">
                    <PastEvents/>
                </Route>
                <Route path="/created_past_events">
                    <CreatedPastEvents/>
                </Route>
                <Route path="/created_upcoming_events">
                    <CreatedUpcomingEvents/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>)
};

export default App;
