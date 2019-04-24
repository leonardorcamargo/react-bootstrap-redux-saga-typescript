import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import NotFound from './components/NotFound';
import store from './store';

const Home = lazy(() => import('./components/Home'));

const App = () => (
  <Provider store={store}>
    <Header />
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={NotFound}/>
          <Route component={NotFound}/>
        </Switch>
      </Suspense>
    </Router>
  </Provider>)

export default App;
