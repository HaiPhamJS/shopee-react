import React from 'react';
import Header from './Components/Header/Header';
import RouterControl from './Controller/RouterControl';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import './Css/public.css';

function App() {
    const showRouter = (router) => {
        var result = '';
        if (router.length > 0) {
            result = router.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />)
            })
        }
        return (
            <Switch>{result}</Switch>
        )
    }
    return (
        <Router>
            <Header />
            <div style={{
                height: '120px',
                width: '100%'
            }}></div>
            {showRouter(RouterControl)}
            <div style={{ height: '200px' }}>

            </div>
        </Router>
    );
}

export default App;
