// react library
import React from 'react';

// third-party library
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Landing from './Landing';
import Search from './Search';

const FourOhFour = () => <h1>404</h1>

const App = () => (
  <BrowserRouter>
    <div className='app'>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;
