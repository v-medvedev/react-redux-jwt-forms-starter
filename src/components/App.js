import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Welcome from './Welcome';
import Feature from './Feature';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import Signout from './auth/Signout';

const App = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path='/' exact component={ Welcome } />
                <Route path='/signin' component={ Signin } />
                <Route path='/signup' component={ Signup } />
                <Route path='/signout' component={ Signout } />
                <Route path='/feature' component={ Feature } />
            </Switch>
        </div>
    );
}

export default App;
