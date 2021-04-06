import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './features/Home/Home';
import House from './features/House/House';
import HouseAdd from './features/HouseAdd/HouseAdd';
import HouseList from './features/HouseLIst/HouseList';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/house">
                    <HouseList />
                </Route>
                <Route path="/house/add">
                    <HouseAdd />
                </Route>
                <Route path="/house/:id">
                    <House />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
